import React, { useEffect, useState, useMemo } from 'react';
import { banners, products } from '../data/mock';
import { Star, ShieldCheck, RotateCcw, Wallet, Tag, Zap, ChevronRight, SearchX } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';
import { truncate } from '../lib/text';
import BannerCarousel from '../components/BannerCarousel';
import HeroVideoBanner from '../components/HeroVideoBanner';

const SUGGESTIONS = ['Atta', 'Rice', 'Oil', 'Ghee', 'Dry Fruits', 'Almonds', 'Cashews', 'Sugar', 'Tea', 'Cleaning', 'Personal Care'];

const useCountdown = () => {
  const [t, setT] = useState({ h: 0, m: 15, s: 0 });
  useEffect(() => {
    const id = setInterval(() => {
      setT(prev => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else if (m > 0) { m--; s = 59; }
        else if (h > 0) { h--; m = 59; s = 59; }
        else { h = 0; m = 15; s = 0; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n) => n.toString().padStart(2, '0');
  return `${pad(t.h)}h : ${pad(t.m)}m : ${pad(t.s)}s`;
};

const BannerStrip = () => (
  <div className="px-3 md:px-6 pt-3 md:pt-5">
    <BannerCarousel banners={banners} interval={6000} />
  </div>
);

const Marquee = () => (
  <div className="mt-3 overflow-hidden" style={{ background: 'linear-gradient(90deg,#fef1f7,#ffe4ec)' }}>
    <div className="whitespace-nowrap py-2 text-[13px] font-semibold text-[#c81e6c] animate-[marquee_20s_linear_infinite]">
      {Array(6).fill('✨ Buy 2 Get 1 Free (Add 3 items to cart)  ').map((s,i)=>(<span key={i}>{s}</span>))}
    </div>
  </div>
);

const BadgesRow = () => (
  <div className="px-3 md:px-6 mt-3 md:mt-5 grid grid-cols-3 gap-2 md:gap-4 text-center">
    {[
      { icon: RotateCcw, label: '7 Days Easy Return' },
      { icon: Wallet, label: 'Cash on Delivery' },
      { icon: Tag, label: 'Lowest Prices' },
    ].map(({ icon: Icon, label }) => (
      <div key={label} className="bg-white border border-gray-100 rounded-lg p-2 md:p-4 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 shadow-sm">
        <Icon size={20} className="text-[#f43397] md:w-6 md:h-6" />
        <span className="text-[11px] md:text-sm font-medium text-gray-700 leading-tight">{label}</span>
      </div>
    ))}
  </div>
);

const DailyDealsBar = () => {
  const time = useCountdown();
  return (
    <div className="mx-3 md:mx-6 mt-4 md:mt-5 rounded-lg overflow-hidden" style={{ background: 'linear-gradient(90deg,#fff7cc,#fff2b3)' }}>
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-[#8a4b00]" style={{fontFamily:'Manrope, Poppins, sans-serif'}}>Meesho Daily Deals</span>
          <Zap size={18} className="text-yellow-500 fill-yellow-400" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg">💣</span>
          <span className="font-mono font-bold text-[#b91c1c] text-sm bg-white/60 px-2 py-1 rounded">{time}</span>
        </div>
      </div>
    </div>
  );
};

const RatingChip = ({ rating, reviews }) => (
  <div className="flex items-center gap-2">
    <div className="flex items-center gap-1 bg-[#0f9d58] text-white px-1.5 py-0.5 rounded text-[11px] font-semibold">
      <span>{rating.toFixed(1)}</span>
      <Star size={10} fill="white" strokeWidth={0} />
    </div>
    <span className="text-[11px] text-gray-500">({reviews.toLocaleString()})</span>
    <div className="ml-auto flex items-center gap-1 text-[10px] text-gray-500">
      <ShieldCheck size={12} className="text-[#f43397]" />
      <span className="font-semibold text-gray-600">Trusted</span>
    </div>
  </div>
);

const ProductCard = ({ p }) => {
  const nav = useNavigate();
  const { addToCart } = useCart();
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <button onClick={() => nav(`/product/${p.id}`)} className="block relative">
        <img src={p.image} alt={p.name} loading="lazy" className="w-full aspect-square object-cover" />
      </button>
      <div className="p-2.5 flex-1 flex flex-col gap-1.5">
        <button onClick={() => nav(`/product/${p.id}`)} className="text-left text-[13px] font-medium text-gray-800 line-clamp-2 leading-snug">
          {truncate(p.name, 60)}
        </button>
        <div className="flex items-baseline gap-1.5">
          <span className="font-bold text-gray-900 text-[15px]">₹{p.price}.00</span>
          <span className="text-[11px] text-gray-400 line-through">₹{p.mrp.toLocaleString()}.00</span>
          <span className="text-[11px] text-[#0f9d58] font-semibold">{p.discount}% off</span>
        </div>
        <span className="text-[11px] text-gray-500">Free Delivery</span>
        <RatingChip rating={p.rating} reviews={p.reviews} />
        <button onClick={(e) => { e.stopPropagation(); addToCart(p); }} className="mt-1 w-full py-1.5 text-[13px] font-semibold rounded border border-[#f43397] text-[#f43397] hover:bg-[#f43397] hover:text-white transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const SearchPills = () => {
  const { query, setQuery } = useSearch();
  return (
    <div className="px-3 md:px-6 pt-3 md:pt-4">
      <div className="flex gap-2 overflow-x-auto pb-1 no-scroll" style={{ scrollbarWidth: 'none' }}>
        {SUGGESTIONS.map(s => {
          const active = query.trim().toLowerCase() === s.toLowerCase();
          return (
            <button
              key={s}
              onClick={() => setQuery(active ? '' : s)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${active ? 'bg-[#f43397] text-white border-[#f43397]' : 'bg-white text-gray-700 border-gray-200 hover:border-[#f43397] hover:text-[#f43397]'}`}
            >
              {s}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const Shop = () => {
  const { query } = useSearch();
  const q = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    if (!q) return products;
    return products.filter(p => p.name.toLowerCase().includes(q));
  }, [q]);
  const isSearching = q.length > 0;

  return (
    <div className="pb-24 md:pb-10">
      {!isSearching && (
        <>
          <HeroVideoBanner />
          <BannerStrip />
          <SearchPills />
          <Marquee />
          <BadgesRow />
          <DailyDealsBar />
        </>
      )}
      {isSearching && <SearchPills />}
      <div className="px-3 md:px-6 mt-4 md:mt-6">
        <div className="flex items-center justify-between mb-2 md:mb-4">
          <h2 className="font-bold text-gray-900 text-[15px] md:text-xl">
            {isSearching ? `Results for "${query}" (${filtered.length})` : 'Products For You'}
          </h2>
          {!isSearching && (
            <button className="text-xs md:text-sm text-[#f43397] font-semibold flex items-center">View All <ChevronRight size={14}/></button>
          )}
        </div>
        {filtered.length === 0 ? (
          <div className="py-16 flex flex-col items-center gap-3 text-center">
            <SearchX size={56} className="text-gray-300" />
            <p className="font-semibold text-gray-800">No products match "{query}"</p>
            <p className="text-sm text-gray-500">Try a different keyword like "atta", "oil", or "dry fruits".</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5">
            {filtered.map(p => <ProductCard key={p.id} p={p} />)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
