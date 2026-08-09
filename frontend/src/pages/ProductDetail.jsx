import React, { useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/mock';
import { Star, ShoppingCart, ChevronRight, ShieldCheck, RotateCcw, Truck, Wallet, Minus, Plus, ChevronLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Reviews from '../components/Reviews';
import { truncate } from '../lib/text';

const ProductDetail = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const product = products.find(p => p.id === Number(id));
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);

  // build gallery: product image + 3 images from nearby products for variety
  const gallery = useMemo(() => {
    if (!product) return [];
    const others = products
      .filter(p => p.id !== product.id)
      .slice(0, products.length)
      .sort(() => 0.5 - (product.id % 7) / 7)
      .slice(0, 3)
      .map(p => p.image);
    return [product.image, ...others];
  }, [product]);

  const related = useMemo(() => {
    if (!product) return [];
    return products.filter(p => p.id !== product.id).slice(0, 8);
  }, [product]);

  if (!product) return <div className="p-6">Product not found</div>;

  const handleAdd = () => addToCart(product, qty);
  const handleBuy = () => { addToCart(product, qty); nav('/checkout'); };

  const prevImg = () => setActiveImg(i => (i - 1 + gallery.length) % gallery.length);
  const nextImg = () => setActiveImg(i => (i + 1) % gallery.length);

  return (
    <div className="pb-28 md:pb-10 md:px-6 md:py-6">
      <div className="md:grid md:grid-cols-2 md:gap-10 md:max-w-6xl md:mx-auto">
        {/* Photo Carousel */}
        <div>
          <div className="relative w-full bg-white md:rounded-lg md:overflow-hidden md:border md:border-gray-100">
            <img src={gallery[activeImg]} alt={product.name} className="w-full aspect-square object-cover" />
            {gallery.length > 1 && (
              <>
                <button onClick={prevImg} aria-label="prev" className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 shadow">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={nextImg} aria-label="next" className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 shadow">
                  <ChevronRight size={20} />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {gallery.map((_, i) => (
                    <span key={i} className={`h-1.5 rounded-full transition-all ${i === activeImg ? 'w-6 bg-[#f43397]' : 'w-1.5 bg-white/80'}`} />
                  ))}
                </div>
              </>
            )}
          </div>
          {/* Thumbnails */}
          <div className="flex gap-2 px-3 md:px-0 mt-3 overflow-x-auto">
            {gallery.map((src, i) => (
              <button key={i} onClick={() => setActiveImg(i)} className={`flex-shrink-0 border-2 rounded overflow-hidden ${i === activeImg ? 'border-[#f43397]' : 'border-gray-200'}`}>
                <img src={src} alt="" className="w-16 h-16 object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="px-4 py-4 md:p-0 space-y-3">
          <h1 className="text-lg md:text-2xl font-semibold text-gray-900 leading-snug">{product.name}</h1>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-[#0f9d58] text-white px-2 py-0.5 rounded text-xs font-semibold">
              <span>{product.rating.toFixed(1)}</span>
              <Star size={12} fill="white" strokeWidth={0} />
            </div>
            <span className="text-xs text-gray-500">{product.reviews.toLocaleString()} Ratings</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl md:text-3xl font-bold text-gray-900">₹{product.price}</span>
            <span className="text-sm text-gray-400 line-through">₹{product.mrp}</span>
            <span className="text-sm text-[#0f9d58] font-semibold">{product.discount}% off</span>
          </div>
          <div className="inline-block text-xs font-semibold text-[#f43397] bg-[#fde5ef] px-2 py-1 rounded">Free Delivery</div>

          {/* Quantity Picker */}
          <div className="pt-2 flex items-center gap-4">
            <span className="text-sm font-semibold text-gray-800">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded overflow-hidden">
              <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-3 py-1.5 hover:bg-gray-50 disabled:opacity-40" disabled={qty <= 1}>
                <Minus size={14} />
              </button>
              <span className="px-4 py-1.5 font-semibold min-w-[3rem] text-center">{qty}</span>
              <button onClick={() => setQty(q => q + 1)} className="px-3 py-1.5 hover:bg-gray-50">
                <Plus size={14} />
              </button>
            </div>
            <span className="text-sm text-gray-600">Subtotal: <span className="font-bold text-gray-900">₹{(product.price * qty).toFixed(2)}</span></span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            {[
              { icon: Truck, t: 'Free Delivery' },
              { icon: RotateCcw, t: '7 Days Return' },
              { icon: Wallet, t: 'Cash on Delivery' },
              { icon: ShieldCheck, t: 'Trusted Seller' },
            ].map(({ icon: I, t }) => (
              <div key={t} className="flex items-center gap-2 border border-gray-100 rounded-md p-2">
                <I size={18} className="text-[#f43397]" />
                <span className="text-xs font-medium text-gray-700">{t}</span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <h3 className="font-semibold text-gray-900 mb-1">Product Details</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Get amazing value on this hand-picked combo. Curated for Indian households, delivered fresh with reliable service. Includes premium branded items and long-lasting essentials for everyday needs.</p>
          </div>

          <div className="pt-2 border-t border-gray-100">
            <button className="w-full flex items-center justify-between py-3 text-sm font-medium text-gray-800">
              <span>Delivery Details</span>
              <ChevronRight size={18} className="text-gray-400" />
            </button>
            <button className="w-full flex items-center justify-between py-3 text-sm font-medium text-gray-800 border-t border-gray-100">
              <span>Return Policy</span>
              <ChevronRight size={18} className="text-gray-400" />
            </button>
          </div>

          <div className="hidden md:flex gap-3 pt-2">
            <button onClick={handleAdd} className="flex-1 py-3 rounded border-2 border-[#f43397] text-[#f43397] font-semibold flex items-center justify-center gap-2 hover:bg-[#fde5ef]">
              <ShoppingCart size={18} /> Add to Cart
            </button>
            <button onClick={handleBuy} className="flex-1 py-3 rounded text-white font-semibold flex items-center justify-center gap-2" style={{background:'#f43397'}}>
              ▶▶ Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Related Combos */}
      <div className="mt-8 px-3 md:px-0 md:max-w-6xl md:mx-auto">
        <h3 className="font-bold text-gray-900 text-base md:text-xl mb-3">You Might Also Like</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {related.slice(0, 10).map(rp => (
            <div key={rp.id} className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <button onClick={() => { nav(`/product/${rp.id}`); setActiveImg(0); setQty(1); window.scrollTo(0, 0); }} className="block">
                <img src={rp.image} alt={rp.name} loading="lazy" className="w-full aspect-square object-cover" />
              </button>
              <div className="p-2 flex-1 flex flex-col gap-1">
                <p className="text-xs font-medium text-gray-800 line-clamp-2 leading-snug">{truncate(rp.name, 60)}</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-bold text-gray-900 text-sm">₹{rp.price}</span>
                  <span className="text-[10px] text-gray-400 line-through">₹{rp.mrp}</span>
                </div>
                <div className="flex items-center gap-1 mt-auto">
                  <div className="flex items-center gap-0.5 bg-[#0f9d58] text-white px-1 py-0.5 rounded text-[10px] font-semibold">
                    {rp.rating.toFixed(1)}<Star size={8} fill="white" strokeWidth={0} />
                  </div>
                  <span className="text-[10px] text-gray-500">({rp.reviews.toLocaleString()})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <Reviews productId={product.id} />

      {/* Mobile sticky bar */}
      <div className="md:hidden fixed bottom-14 left-0 right-0 z-30 bg-white border-t">
        <div className="max-w-[500px] mx-auto grid grid-cols-2">
          <button onClick={handleAdd} className="py-4 text-[#f43397] font-semibold flex items-center justify-center gap-2 border-r">
            <ShoppingCart size={18} /> Add to Cart
          </button>
          <button onClick={handleBuy} className="py-4 text-white font-semibold flex items-center justify-center gap-2" style={{background:'#f43397'}}>
            ▶▶ Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
