from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class CartItem(BaseModel):
    id: int
    name: str
    price: float
    mrp: float
    image: str
    qty: int = 1


class CartUpsert(BaseModel):
    session_id: str
    items: List[CartItem] = []


class WishlistUpsert(BaseModel):
    session_id: str
    ids: List[int] = []


class Address(BaseModel):
    name: str
    phone: str
    line1: str
    city: str
    pincode: str


class OrderCreate(BaseModel):
    session_id: str
    items: List[CartItem]
    total: float
    address: Optional[Address] = None
    payment_method: str = "COD"


class Order(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    session_id: str
    items: List[CartItem]
    total: float
    address: Optional[Address] = None
    payment_method: str = "COD"
    status: str = "placed"
    created_at: datetime = Field(default_factory=datetime.utcnow)


class ReviewCreate(BaseModel):
    product_id: int
    session_id: str
    name: str
    rating: int
    comment: str = ""


class Subscribe(BaseModel):
    email: str


class Review(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    product_id: int
    session_id: str
    name: str
    rating: int
    comment: str = ""
    created_at: datetime = Field(default_factory=datetime.utcnow)


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Grocerry Shop API"}


# Cart
@api_router.get("/cart/{session_id}")
async def get_cart(session_id: str):
    doc = await db.carts.find_one({"session_id": session_id})
    if not doc:
        return {"session_id": session_id, "items": []}
    return {"session_id": session_id, "items": doc.get("items", [])}


@api_router.put("/cart")
async def upsert_cart(payload: CartUpsert):
    await db.carts.update_one(
        {"session_id": payload.session_id},
        {"$set": {"items": [i.dict() for i in payload.items], "updated_at": datetime.utcnow()}},
        upsert=True,
    )
    return {"ok": True, "session_id": payload.session_id, "count": len(payload.items)}


@api_router.delete("/cart/{session_id}")
async def clear_cart(session_id: str):
    await db.carts.update_one(
        {"session_id": session_id},
        {"$set": {"items": [], "updated_at": datetime.utcnow()}},
        upsert=True,
    )
    return {"ok": True}


# Wishlist
@api_router.get("/wishlist/{session_id}")
async def get_wishlist(session_id: str):
    doc = await db.wishlists.find_one({"session_id": session_id})
    if not doc:
        return {"session_id": session_id, "ids": []}
    return {"session_id": session_id, "ids": doc.get("ids", [])}


@api_router.put("/wishlist")
async def upsert_wishlist(payload: WishlistUpsert):
    await db.wishlists.update_one(
        {"session_id": payload.session_id},
        {"$set": {"ids": payload.ids, "updated_at": datetime.utcnow()}},
        upsert=True,
    )
    return {"ok": True, "count": len(payload.ids)}


# Orders
@api_router.post("/orders", response_model=Order)
async def create_order(payload: OrderCreate):
    if not payload.items:
        raise HTTPException(status_code=400, detail="Cart is empty")
    order = Order(**payload.dict())
    await db.orders.insert_one(order.dict())
    # clear cart on order placement
    await db.carts.update_one(
        {"session_id": payload.session_id},
        {"$set": {"items": [], "updated_at": datetime.utcnow()}},
        upsert=True,
    )
    return order


@api_router.get("/orders/{session_id}", response_model=List[Order])
async def list_orders(session_id: str):
    cursor = db.orders.find({"session_id": session_id}).sort("created_at", -1)
    docs = await cursor.to_list(200)
    return [Order(**d) for d in docs]


# Reviews
@api_router.post("/reviews", response_model=Review)
async def create_review(payload: ReviewCreate):
    if payload.rating < 1 or payload.rating > 5:
        raise HTTPException(status_code=400, detail="Rating must be between 1 and 5")
    if not payload.name.strip():
        raise HTTPException(status_code=400, detail="Name is required")
    review = Review(**payload.dict())
    await db.reviews.insert_one(review.dict())
    return review


@api_router.get("/reviews/{product_id}")
async def list_reviews(product_id: int):
    cursor = db.reviews.find({"product_id": product_id}).sort("created_at", -1)
    docs = await cursor.to_list(500)
    reviews = [Review(**d) for d in docs]
    total = len(reviews)
    avg = round(sum(r.rating for r in reviews) / total, 1) if total else 0
    dist = {i: 0 for i in range(1, 6)}
    for r in reviews:
        dist[r.rating] = dist.get(r.rating, 0) + 1
    return {"product_id": product_id, "total": total, "average": avg, "distribution": dist, "reviews": [r.dict() for r in reviews]}


# Newsletter
@api_router.post("/subscribe")
async def subscribe(payload: Subscribe):
    import re
    email = payload.email.strip().lower()
    if not re.match(r"^[^@\s]+@[^@\s]+\.[^@\s]+$", email):
        raise HTTPException(status_code=400, detail="Please enter a valid email address.")
    existing = await db.subscribers.find_one({"email": email})
    if existing:
        return {"ok": True, "already_subscribed": True, "email": email}
    await db.subscribers.insert_one({"email": email, "created_at": datetime.utcnow()})
    return {"ok": True, "already_subscribed": False, "email": email}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
