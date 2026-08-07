#!/usr/bin/env python3
"""
Backend API Test Suite for Grocery Mart
Tests all API endpoints with proper data flow validation
"""

import requests
import uuid
import json
from datetime import datetime

# Base URL from frontend/.env REACT_APP_BACKEND_URL
BASE_URL = "https://grocery-clone-3.preview.emergentagent.com/api"

# Test session ID
TEST_SESSION_ID = str(uuid.uuid4())

# Color codes for output
GREEN = '\033[92m'
RED = '\033[91m'
YELLOW = '\033[93m'
BLUE = '\033[94m'
RESET = '\033[0m'

def print_test(name, passed, details=""):
    """Print test result with color coding"""
    status = f"{GREEN}✓ PASS{RESET}" if passed else f"{RED}✗ FAIL{RESET}"
    print(f"{status} - {name}")
    if details:
        print(f"  {details}")
    print()

def test_root_endpoint():
    """Test GET /api/ - should return welcome message"""
    print(f"{BLUE}Testing Root Endpoint{RESET}")
    try:
        response = requests.get(f"{BASE_URL}/")
        passed = (
            response.status_code == 200 and
            response.json().get("message") == "Grocery Mart API"
        )
        print_test(
            "GET /api/",
            passed,
            f"Status: {response.status_code}, Response: {response.json()}"
        )
        return passed
    except Exception as e:
        print_test("GET /api/", False, f"Error: {str(e)}")
        return False

def test_cart_flow():
    """Test complete cart flow: get empty, upsert, get with data, delete"""
    print(f"{BLUE}Testing Cart Flow{RESET}")
    results = []
    
    # 1. GET empty cart
    try:
        response = requests.get(f"{BASE_URL}/cart/{TEST_SESSION_ID}")
        passed = (
            response.status_code == 200 and
            response.json().get("session_id") == TEST_SESSION_ID and
            response.json().get("items") == []
        )
        print_test(
            "GET /api/cart/{session_id} - Empty cart",
            passed,
            f"Status: {response.status_code}, Response: {response.json()}"
        )
        results.append(passed)
    except Exception as e:
        print_test("GET /api/cart/{session_id} - Empty cart", False, f"Error: {str(e)}")
        results.append(False)
    
    # 2. PUT cart with items
    try:
        cart_data = {
            "session_id": TEST_SESSION_ID,
            "items": [
                {
                    "id": 1,
                    "name": "Test Product",
                    "price": 279,
                    "mrp": 5999,
                    "image": "http://example.com/image.jpg",
                    "qty": 2
                }
            ]
        }
        response = requests.put(f"{BASE_URL}/cart", json=cart_data)
        passed = (
            response.status_code == 200 and
            response.json().get("ok") == True and
            response.json().get("session_id") == TEST_SESSION_ID and
            response.json().get("count") == 1
        )
        print_test(
            "PUT /api/cart - Upsert cart",
            passed,
            f"Status: {response.status_code}, Response: {response.json()}"
        )
        results.append(passed)
    except Exception as e:
        print_test("PUT /api/cart - Upsert cart", False, f"Error: {str(e)}")
        results.append(False)
    
    # 3. GET cart with items
    try:
        response = requests.get(f"{BASE_URL}/cart/{TEST_SESSION_ID}")
        data = response.json()
        passed = (
            response.status_code == 200 and
            data.get("session_id") == TEST_SESSION_ID and
            len(data.get("items", [])) == 1 and
            data["items"][0]["name"] == "Test Product" and
            data["items"][0]["qty"] == 2
        )
        print_test(
            "GET /api/cart/{session_id} - Cart with items",
            passed,
            f"Status: {response.status_code}, Items count: {len(data.get('items', []))}"
        )
        results.append(passed)
    except Exception as e:
        print_test("GET /api/cart/{session_id} - Cart with items", False, f"Error: {str(e)}")
        results.append(False)
    
    # 4. DELETE cart
    try:
        response = requests.delete(f"{BASE_URL}/cart/{TEST_SESSION_ID}")
        passed = (
            response.status_code == 200 and
            response.json().get("ok") == True
        )
        print_test(
            "DELETE /api/cart/{session_id} - Clear cart",
            passed,
            f"Status: {response.status_code}, Response: {response.json()}"
        )
        results.append(passed)
    except Exception as e:
        print_test("DELETE /api/cart/{session_id} - Clear cart", False, f"Error: {str(e)}")
        results.append(False)
    
    # 5. Verify cart is empty after delete
    try:
        response = requests.get(f"{BASE_URL}/cart/{TEST_SESSION_ID}")
        passed = (
            response.status_code == 200 and
            response.json().get("items") == []
        )
        print_test(
            "GET /api/cart/{session_id} - Verify empty after delete",
            passed,
            f"Status: {response.status_code}, Items: {response.json().get('items')}"
        )
        results.append(passed)
    except Exception as e:
        print_test("GET /api/cart/{session_id} - Verify empty after delete", False, f"Error: {str(e)}")
        results.append(False)
    
    return all(results)

def test_wishlist_flow():
    """Test complete wishlist flow: get empty, upsert, get with data"""
    print(f"{BLUE}Testing Wishlist Flow{RESET}")
    results = []
    
    # 1. GET empty wishlist
    try:
        response = requests.get(f"{BASE_URL}/wishlist/{TEST_SESSION_ID}")
        passed = (
            response.status_code == 200 and
            response.json().get("session_id") == TEST_SESSION_ID and
            response.json().get("ids") == []
        )
        print_test(
            "GET /api/wishlist/{session_id} - Empty wishlist",
            passed,
            f"Status: {response.status_code}, Response: {response.json()}"
        )
        results.append(passed)
    except Exception as e:
        print_test("GET /api/wishlist/{session_id} - Empty wishlist", False, f"Error: {str(e)}")
        results.append(False)
    
    # 2. PUT wishlist with IDs
    try:
        wishlist_data = {
            "session_id": TEST_SESSION_ID,
            "ids": [1, 2, 3]
        }
        response = requests.put(f"{BASE_URL}/wishlist", json=wishlist_data)
        passed = (
            response.status_code == 200 and
            response.json().get("ok") == True and
            response.json().get("count") == 3
        )
        print_test(
            "PUT /api/wishlist - Upsert wishlist",
            passed,
            f"Status: {response.status_code}, Response: {response.json()}"
        )
        results.append(passed)
    except Exception as e:
        print_test("PUT /api/wishlist - Upsert wishlist", False, f"Error: {str(e)}")
        results.append(False)
    
    # 3. GET wishlist with IDs
    try:
        response = requests.get(f"{BASE_URL}/wishlist/{TEST_SESSION_ID}")
        data = response.json()
        passed = (
            response.status_code == 200 and
            data.get("session_id") == TEST_SESSION_ID and
            data.get("ids") == [1, 2, 3]
        )
        print_test(
            "GET /api/wishlist/{session_id} - Wishlist with IDs",
            passed,
            f"Status: {response.status_code}, IDs: {data.get('ids')}"
        )
        results.append(passed)
    except Exception as e:
        print_test("GET /api/wishlist/{session_id} - Wishlist with IDs", False, f"Error: {str(e)}")
        results.append(False)
    
    return all(results)

def test_orders_flow():
    """Test complete orders flow: create order, verify cart cleared, get orders, validate empty items"""
    print(f"{BLUE}Testing Orders Flow{RESET}")
    results = []
    
    # Setup: Add items to cart first
    cart_data = {
        "session_id": TEST_SESSION_ID,
        "items": [
            {
                "id": 1,
                "name": "Order Test Product",
                "price": 279,
                "mrp": 5999,
                "image": "http://example.com/order.jpg",
                "qty": 1
            }
        ]
    }
    requests.put(f"{BASE_URL}/cart", json=cart_data)
    
    # 1. POST order with valid data
    try:
        order_data = {
            "session_id": TEST_SESSION_ID,
            "items": [
                {
                    "id": 1,
                    "name": "Order Test Product",
                    "price": 279,
                    "mrp": 5999,
                    "image": "http://example.com/order.jpg",
                    "qty": 1
                }
            ],
            "total": 279,
            "address": {
                "name": "John Doe",
                "phone": "9876543210",
                "line1": "123 Main St",
                "city": "Mumbai",
                "pincode": "400001"
            },
            "payment_method": "COD"
        }
        response = requests.post(f"{BASE_URL}/orders", json=order_data)
        data = response.json()
        passed = (
            response.status_code == 200 and
            "id" in data and
            data.get("status") == "placed" and
            "created_at" in data and
            data.get("total") == 279
        )
        print_test(
            "POST /api/orders - Create order",
            passed,
            f"Status: {response.status_code}, Order ID: {data.get('id')}, Status: {data.get('status')}"
        )
        results.append(passed)
    except Exception as e:
        print_test("POST /api/orders - Create order", False, f"Error: {str(e)}")
        results.append(False)
    
    # 2. Verify cart is cleared after order placement
    try:
        response = requests.get(f"{BASE_URL}/cart/{TEST_SESSION_ID}")
        passed = (
            response.status_code == 200 and
            response.json().get("items") == []
        )
        print_test(
            "GET /api/cart/{session_id} - Cart cleared after order",
            passed,
            f"Status: {response.status_code}, Items: {response.json().get('items')}"
        )
        results.append(passed)
    except Exception as e:
        print_test("GET /api/cart/{session_id} - Cart cleared after order", False, f"Error: {str(e)}")
        results.append(False)
    
    # 3. GET orders list
    try:
        response = requests.get(f"{BASE_URL}/orders/{TEST_SESSION_ID}")
        data = response.json()
        passed = (
            response.status_code == 200 and
            isinstance(data, list) and
            len(data) > 0 and
            data[0].get("status") == "placed"
        )
        print_test(
            "GET /api/orders/{session_id} - List orders",
            passed,
            f"Status: {response.status_code}, Orders count: {len(data)}"
        )
        results.append(passed)
    except Exception as e:
        print_test("GET /api/orders/{session_id} - List orders", False, f"Error: {str(e)}")
        results.append(False)
    
    # 4. POST order with empty items (should return 400)
    try:
        empty_order_data = {
            "session_id": TEST_SESSION_ID,
            "items": [],
            "total": 0,
            "address": {
                "name": "John Doe",
                "phone": "9876543210",
                "line1": "123 Main St",
                "city": "Mumbai",
                "pincode": "400001"
            },
            "payment_method": "COD"
        }
        response = requests.post(f"{BASE_URL}/orders", json=empty_order_data)
        passed = response.status_code == 400
        print_test(
            "POST /api/orders - Empty items validation",
            passed,
            f"Status: {response.status_code} (expected 400)"
        )
        results.append(passed)
    except Exception as e:
        print_test("POST /api/orders - Empty items validation", False, f"Error: {str(e)}")
        results.append(False)
    
    return all(results)

def test_data_persistence():
    """Test that data persists in MongoDB"""
    print(f"{BLUE}Testing Data Persistence{RESET}")
    results = []
    
    # Create a new session for persistence test
    persistence_session = str(uuid.uuid4())
    
    # 1. Add cart items
    cart_data = {
        "session_id": persistence_session,
        "items": [
            {
                "id": 99,
                "name": "Persistence Test",
                "price": 100,
                "mrp": 200,
                "image": "http://example.com/persist.jpg",
                "qty": 1
            }
        ]
    }
    requests.put(f"{BASE_URL}/cart", json=cart_data)
    
    # 2. Retrieve and verify
    try:
        response = requests.get(f"{BASE_URL}/cart/{persistence_session}")
        data = response.json()
        passed = (
            response.status_code == 200 and
            len(data.get("items", [])) == 1 and
            data["items"][0]["name"] == "Persistence Test"
        )
        print_test(
            "Data Persistence - Cart data persists",
            passed,
            f"Status: {response.status_code}, Retrieved item: {data.get('items', [{}])[0].get('name') if data.get('items') else 'None'}"
        )
        results.append(passed)
    except Exception as e:
        print_test("Data Persistence - Cart data persists", False, f"Error: {str(e)}")
        results.append(False)
    
    return all(results)

def test_reviews_flow():
    """Test complete reviews flow: create reviews, get aggregated stats, validation"""
    print(f"{BLUE}Testing Reviews Flow{RESET}")
    results = []
    
    # Use a unique product_id for this test to avoid conflicts
    test_product_id = 1
    test_session = str(uuid.uuid4())
    
    # 1. POST first review (rating=5)
    try:
        review_data = {
            "product_id": test_product_id,
            "session_id": test_session,
            "name": "Priya S",
            "rating": 5,
            "comment": "Loved it!"
        }
        response = requests.post(f"{BASE_URL}/reviews", json=review_data)
        data = response.json()
        passed = (
            response.status_code == 200 and
            "id" in data and
            data.get("product_id") == test_product_id and
            data.get("name") == "Priya S" and
            data.get("rating") == 5 and
            data.get("comment") == "Loved it!" and
            "created_at" in data
        )
        print_test(
            "POST /api/reviews - Create review (rating=5)",
            passed,
            f"Status: {response.status_code}, Review ID: {data.get('id')}, Rating: {data.get('rating')}"
        )
        results.append(passed)
    except Exception as e:
        print_test("POST /api/reviews - Create review (rating=5)", False, f"Error: {str(e)}")
        results.append(False)
    
    # 2. POST second review (rating=3)
    try:
        review_data = {
            "product_id": test_product_id,
            "session_id": test_session,
            "name": "Rahul",
            "rating": 3,
            "comment": "Ok combo"
        }
        response = requests.post(f"{BASE_URL}/reviews", json=review_data)
        data = response.json()
        passed = (
            response.status_code == 200 and
            "id" in data and
            data.get("rating") == 3
        )
        print_test(
            "POST /api/reviews - Create review (rating=3)",
            passed,
            f"Status: {response.status_code}, Review ID: {data.get('id')}, Rating: {data.get('rating')}"
        )
        results.append(passed)
    except Exception as e:
        print_test("POST /api/reviews - Create review (rating=3)", False, f"Error: {str(e)}")
        results.append(False)
    
    # 3. POST third review (rating=4)
    try:
        review_data = {
            "product_id": test_product_id,
            "session_id": test_session,
            "name": "Aisha",
            "rating": 4,
            "comment": "Nice value"
        }
        response = requests.post(f"{BASE_URL}/reviews", json=review_data)
        data = response.json()
        passed = (
            response.status_code == 200 and
            "id" in data and
            data.get("rating") == 4
        )
        print_test(
            "POST /api/reviews - Create review (rating=4)",
            passed,
            f"Status: {response.status_code}, Review ID: {data.get('id')}, Rating: {data.get('rating')}"
        )
        results.append(passed)
    except Exception as e:
        print_test("POST /api/reviews - Create review (rating=4)", False, f"Error: {str(e)}")
        results.append(False)
    
    # 4. GET reviews for product_id=1 - verify aggregated stats
    try:
        response = requests.get(f"{BASE_URL}/reviews/{test_product_id}")
        data = response.json()
        
        # Check structure and data
        has_correct_structure = (
            "product_id" in data and
            "total" in data and
            "average" in data and
            "distribution" in data and
            "reviews" in data
        )
        
        # Verify the 3 reviews we just added are included (total should be >= 3)
        total_reviews = data.get("total", 0)
        reviews_list = data.get("reviews", [])
        
        # Check distribution has all rating keys (1-5)
        distribution = data.get("distribution", {})
        has_all_rating_keys = all(str(i) in distribution or i in distribution for i in range(1, 6))
        
        # Verify reviews are sorted by created_at descending (newest first)
        reviews_sorted = True
        if len(reviews_list) > 1:
            for i in range(len(reviews_list) - 1):
                if reviews_list[i].get("created_at", "") < reviews_list[i+1].get("created_at", ""):
                    reviews_sorted = False
                    break
        
        passed = (
            response.status_code == 200 and
            has_correct_structure and
            total_reviews >= 3 and
            len(reviews_list) >= 3 and
            has_all_rating_keys and
            reviews_sorted
        )
        
        print_test(
            "GET /api/reviews/{product_id} - Aggregated stats",
            passed,
            f"Status: {response.status_code}, Total: {total_reviews}, Average: {data.get('average')}, Distribution: {distribution}, Reviews sorted: {reviews_sorted}"
        )
        results.append(passed)
    except Exception as e:
        print_test("GET /api/reviews/{product_id} - Aggregated stats", False, f"Error: {str(e)}")
        results.append(False)
    
    # 5. GET reviews for non-existent product (product_id=999)
    try:
        response = requests.get(f"{BASE_URL}/reviews/999")
        data = response.json()
        passed = (
            response.status_code == 200 and
            data.get("product_id") == 999 and
            data.get("total") == 0 and
            data.get("average") == 0 and
            data.get("reviews") == []
        )
        print_test(
            "GET /api/reviews/999 - Non-existent product",
            passed,
            f"Status: {response.status_code}, Total: {data.get('total')}, Average: {data.get('average')}"
        )
        results.append(passed)
    except Exception as e:
        print_test("GET /api/reviews/999 - Non-existent product", False, f"Error: {str(e)}")
        results.append(False)
    
    # 6. POST review with invalid rating (rating=0) - should return 400
    try:
        review_data = {
            "product_id": test_product_id,
            "session_id": test_session,
            "name": "Invalid User",
            "rating": 0,
            "comment": "Invalid rating"
        }
        response = requests.post(f"{BASE_URL}/reviews", json=review_data)
        passed = response.status_code == 400
        print_test(
            "POST /api/reviews - Invalid rating (0) validation",
            passed,
            f"Status: {response.status_code} (expected 400)"
        )
        results.append(passed)
    except Exception as e:
        print_test("POST /api/reviews - Invalid rating (0) validation", False, f"Error: {str(e)}")
        results.append(False)
    
    # 7. POST review with invalid rating (rating=6) - should return 400
    try:
        review_data = {
            "product_id": test_product_id,
            "session_id": test_session,
            "name": "Invalid User",
            "rating": 6,
            "comment": "Invalid rating"
        }
        response = requests.post(f"{BASE_URL}/reviews", json=review_data)
        passed = response.status_code == 400
        print_test(
            "POST /api/reviews - Invalid rating (6) validation",
            passed,
            f"Status: {response.status_code} (expected 400)"
        )
        results.append(passed)
    except Exception as e:
        print_test("POST /api/reviews - Invalid rating (6) validation", False, f"Error: {str(e)}")
        results.append(False)
    
    # 8. POST review with empty name - should return 400
    try:
        review_data = {
            "product_id": test_product_id,
            "session_id": test_session,
            "name": "",
            "rating": 5,
            "comment": "Empty name test"
        }
        response = requests.post(f"{BASE_URL}/reviews", json=review_data)
        passed = response.status_code == 400
        print_test(
            "POST /api/reviews - Empty name validation",
            passed,
            f"Status: {response.status_code} (expected 400)"
        )
        results.append(passed)
    except Exception as e:
        print_test("POST /api/reviews - Empty name validation", False, f"Error: {str(e)}")
        results.append(False)
    
    # 9. POST review with whitespace-only name - should return 400
    try:
        review_data = {
            "product_id": test_product_id,
            "session_id": test_session,
            "name": "   ",
            "rating": 5,
            "comment": "Whitespace name test"
        }
        response = requests.post(f"{BASE_URL}/reviews", json=review_data)
        passed = response.status_code == 400
        print_test(
            "POST /api/reviews - Whitespace name validation",
            passed,
            f"Status: {response.status_code} (expected 400)"
        )
        results.append(passed)
    except Exception as e:
        print_test("POST /api/reviews - Whitespace name validation", False, f"Error: {str(e)}")
        results.append(False)
    
    return all(results)

def test_newsletter_subscription():
    """Test newsletter subscription endpoint with various scenarios"""
    print(f"{BLUE}Testing Newsletter Subscription{RESET}")
    results = []
    
    # Generate unique email for this test run
    test_email = f"newsletter.test.{uuid.uuid4().hex[:8]}@example.com"
    
    # 1. POST /api/subscribe with valid email (first time)
    try:
        subscribe_data = {"email": test_email}
        response = requests.post(f"{BASE_URL}/subscribe", json=subscribe_data)
        data = response.json()
        passed = (
            response.status_code == 200 and
            data.get("ok") == True and
            data.get("already_subscribed") == False and
            data.get("email") == test_email.lower()
        )
        print_test(
            "POST /api/subscribe - Valid email (first time)",
            passed,
            f"Status: {response.status_code}, Response: {data}"
        )
        results.append(passed)
    except Exception as e:
        print_test("POST /api/subscribe - Valid email (first time)", False, f"Error: {str(e)}")
        results.append(False)
    
    # 2. POST /api/subscribe with same email (duplicate)
    try:
        subscribe_data = {"email": test_email}
        response = requests.post(f"{BASE_URL}/subscribe", json=subscribe_data)
        data = response.json()
        passed = (
            response.status_code == 200 and
            data.get("ok") == True and
            data.get("already_subscribed") == True and
            data.get("email") == test_email.lower()
        )
        print_test(
            "POST /api/subscribe - Duplicate email",
            passed,
            f"Status: {response.status_code}, Response: {data}"
        )
        results.append(passed)
    except Exception as e:
        print_test("POST /api/subscribe - Duplicate email", False, f"Error: {str(e)}")
        results.append(False)
    
    # 3. POST /api/subscribe with uppercase email (should be treated as duplicate)
    try:
        subscribe_data = {"email": test_email.upper()}
        response = requests.post(f"{BASE_URL}/subscribe", json=subscribe_data)
        data = response.json()
        passed = (
            response.status_code == 200 and
            data.get("ok") == True and
            data.get("already_subscribed") == True and
            data.get("email") == test_email.lower()
        )
        print_test(
            "POST /api/subscribe - Uppercase email (duplicate)",
            passed,
            f"Status: {response.status_code}, Response: {data}"
        )
        results.append(passed)
    except Exception as e:
        print_test("POST /api/subscribe - Uppercase email (duplicate)", False, f"Error: {str(e)}")
        results.append(False)
    
    # 4. POST /api/subscribe with invalid email
    try:
        subscribe_data = {"email": "notanemail"}
        response = requests.post(f"{BASE_URL}/subscribe", json=subscribe_data)
        passed = response.status_code == 400
        detail = response.json().get("detail", "") if response.status_code == 400 else ""
        print_test(
            "POST /api/subscribe - Invalid email validation",
            passed,
            f"Status: {response.status_code} (expected 400), Detail: {detail}"
        )
        results.append(passed)
    except Exception as e:
        print_test("POST /api/subscribe - Invalid email validation", False, f"Error: {str(e)}")
        results.append(False)
    
    # 5. POST /api/subscribe with empty email
    try:
        subscribe_data = {"email": ""}
        response = requests.post(f"{BASE_URL}/subscribe", json=subscribe_data)
        passed = response.status_code == 400
        detail = response.json().get("detail", "") if response.status_code == 400 else ""
        print_test(
            "POST /api/subscribe - Empty email validation",
            passed,
            f"Status: {response.status_code} (expected 400), Detail: {detail}"
        )
        results.append(passed)
    except Exception as e:
        print_test("POST /api/subscribe - Empty email validation", False, f"Error: {str(e)}")
        results.append(False)
    
    # 6. POST /api/subscribe with whitespace email (should trim and accept)
    try:
        whitespace_email = f"  bob.test.{uuid.uuid4().hex[:8]}@test.com  "
        subscribe_data = {"email": whitespace_email}
        response = requests.post(f"{BASE_URL}/subscribe", json=subscribe_data)
        data = response.json()
        passed = (
            response.status_code == 200 and
            data.get("ok") == True and
            data.get("already_subscribed") == False and
            data.get("email") == whitespace_email.strip().lower()
        )
        print_test(
            "POST /api/subscribe - Whitespace email (trimmed)",
            passed,
            f"Status: {response.status_code}, Response: {data}"
        )
        results.append(passed)
    except Exception as e:
        print_test("POST /api/subscribe - Whitespace email (trimmed)", False, f"Error: {str(e)}")
        results.append(False)
    
    # 7. Verify MongoDB persistence (duplicate detection proves data persists)
    try:
        # Try subscribing with the first test email again
        subscribe_data = {"email": test_email}
        response = requests.post(f"{BASE_URL}/subscribe", json=subscribe_data)
        data = response.json()
        passed = (
            response.status_code == 200 and
            data.get("already_subscribed") == True
        )
        print_test(
            "Newsletter MongoDB persistence",
            passed,
            f"Status: {response.status_code}, Duplicate detection working: {data.get('already_subscribed')}"
        )
        results.append(passed)
    except Exception as e:
        print_test("Newsletter MongoDB persistence", False, f"Error: {str(e)}")
        results.append(False)
    
    return all(results)

def test_existing_endpoints():
    """Verify existing endpoints still work after newsletter feature addition"""
    print(f"{BLUE}Testing Existing Endpoints (Regression){RESET}")
    results = []
    
    # 1. GET /api/ - root endpoint
    try:
        response = requests.get(f"{BASE_URL}/")
        passed = (
            response.status_code == 200 and
            response.json().get("message") == "Grocery Mart API"
        )
        print_test(
            "GET /api/ - Root endpoint (regression)",
            passed,
            f"Status: {response.status_code}, Response: {response.json()}"
        )
        results.append(passed)
    except Exception as e:
        print_test("GET /api/ - Root endpoint (regression)", False, f"Error: {str(e)}")
        results.append(False)
    
    # 2. POST /api/reviews - create review
    try:
        test_session = str(uuid.uuid4())
        review_data = {
            "product_id": 1,
            "session_id": test_session,
            "name": "Regression Test User",
            "rating": 5,
            "comment": "Testing after newsletter feature"
        }
        response = requests.post(f"{BASE_URL}/reviews", json=review_data)
        data = response.json()
        passed = (
            response.status_code == 200 and
            "id" in data and
            data.get("rating") == 5
        )
        print_test(
            "POST /api/reviews - Create review (regression)",
            passed,
            f"Status: {response.status_code}, Review ID: {data.get('id')}"
        )
        results.append(passed)
    except Exception as e:
        print_test("POST /api/reviews - Create review (regression)", False, f"Error: {str(e)}")
        results.append(False)
    
    # 3. GET /api/orders/{session_id} - list orders
    try:
        test_session = str(uuid.uuid4())
        response = requests.get(f"{BASE_URL}/orders/{test_session}")
        data = response.json()
        passed = (
            response.status_code == 200 and
            isinstance(data, list)
        )
        print_test(
            "GET /api/orders/{session_id} - List orders (regression)",
            passed,
            f"Status: {response.status_code}, Orders count: {len(data)}"
        )
        results.append(passed)
    except Exception as e:
        print_test("GET /api/orders/{session_id} - List orders (regression)", False, f"Error: {str(e)}")
        results.append(False)
    
    return all(results)

def main():
    """Run all tests"""
    print(f"\n{YELLOW}{'='*60}{RESET}")
    print(f"{YELLOW}Grocery Mart Backend API Test Suite{RESET}")
    print(f"{YELLOW}Base URL: {BASE_URL}{RESET}")
    print(f"{YELLOW}Test Session ID: {TEST_SESSION_ID}{RESET}")
    print(f"{YELLOW}{'='*60}{RESET}\n")
    
    results = {
        "Root Endpoint": test_root_endpoint(),
        "Cart Flow": test_cart_flow(),
        "Wishlist Flow": test_wishlist_flow(),
        "Orders Flow": test_orders_flow(),
        "Data Persistence": test_data_persistence(),
        "Reviews Flow": test_reviews_flow(),
        "Newsletter Subscription": test_newsletter_subscription(),
        "Existing Endpoints (Regression)": test_existing_endpoints()
    }
    
    # Summary
    print(f"\n{YELLOW}{'='*60}{RESET}")
    print(f"{YELLOW}Test Summary{RESET}")
    print(f"{YELLOW}{'='*60}{RESET}")
    
    passed_count = sum(1 for v in results.values() if v)
    total_count = len(results)
    
    for test_name, passed in results.items():
        status = f"{GREEN}✓ PASS{RESET}" if passed else f"{RED}✗ FAIL{RESET}"
        print(f"{status} - {test_name}")
    
    print(f"\n{YELLOW}Total: {passed_count}/{total_count} test suites passed{RESET}")
    
    if passed_count == total_count:
        print(f"{GREEN}All tests passed!{RESET}\n")
        return 0
    else:
        print(f"{RED}Some tests failed!{RESET}\n")
        return 1

if __name__ == "__main__":
    exit(main())
