import React, { useEffect, useState } from 'react';
import { ShoppingBag, HelpCircle, User, Heart, Loader2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/mock';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/api';

export const Orders = () => {
  const { sessionId } = useCart();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get(`/orders/${sessionId}`);
        setOrders(res.data || []);
      } catch (e) { console.error(e); }
      finally { setLoading(false); }
    })();
  }, [sessionId]);

  if (loading) return (
    <div className="p-10 flex justify-center"><Loader2 className="animate-spin text-[#f43397]" /></div>
  );

  if (orders.length === 0) return (
    <div className="px-4 py-10 pb-24 text-center flex flex-col items-center gap-3">
      <ShoppingBag size={64} className="text-gray-300" />
      <h2 className="font-semibold text-gray-800">No Orders Yet</h2>
      <p className="text-sm text-gray-500">Your orders will appear here once you place them.</p>
      <button onClick={() => nav('/')} className="mt-2 px-4 py-2 rounded font-semibold text-white" style={{background:'#f43397'}}>Start Shopping</button>
    </div>
  );

  return (
    <div className="px-4 py-4 pb-24 space-y-3">
      <h2 className="text-lg font-semibold text-gray-900">My Orders</h2>
      {orders.map(o => (
        <div key={o.id} className="border border-gray-100 rounded-lg p-3 bg-white shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-500">Order #{o.id.slice(0, 8)}</span>
            <span className="text-xs font-semibold text-[#0f9d58] capitalize">{o.status}</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {o.items.map(it => (
              <img key={it.id} src={it.image} alt={it.name} className="w-14 h-14 object-cover rounded flex-shrink-0" />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span className="text-gray-600">{o.items.length} item(s) • {o.payment_method}</span>
            <span className="font-bold text-gray-900">₹{o.total.toFixed(2)}</span>
          </div>
          <div className="mt-1 text-[11px] text-gray-500">Placed on {new Date(o.created_at).toLocaleString()}</div>
        </div>
      ))}
    </div>
  );
};

export const Help = () => (
  <div className="px-4 py-6 pb-24">
    <h2 className="text-lg font-semibold text-gray-900 mb-3">How can we help you?</h2>
    <ul className="divide-y">
      {['Track my order','Return / Refund','Payment issues','Account & Wallet','Contact Support'].map(x => (
        <li key={x} className="py-3 flex items-center gap-3"><HelpCircle size={18} className="text-[#f43397]" /> <span className="text-sm text-gray-800">{x}</span></li>
      ))}
    </ul>
  </div>
);

export const Account = () => (
  <div className="px-4 py-6 pb-24">
    <div className="flex items-center gap-3 p-4 rounded-lg" style={{background:'#fde5ef'}}>
      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
        <User className="text-[#f43397]" />
      </div>
      <div>
        <p className="font-semibold text-gray-900">Guest User</p>
        <p className="text-xs text-gray-600">Sign in to see orders & offers</p>
      </div>
    </div>
    <ul className="mt-4 divide-y">
      {['My Profile','My Addresses','Payment Methods','Coupons','About Meesho','Log Out'].map(x => (
        <li key={x} className="py-3 text-sm text-gray-800">{x}</li>
      ))}
    </ul>
  </div>
);

export const Wishlist = () => {
  const { wishlist, toggleWishlist, addToCart } = useCart();
  const nav = useNavigate();
  const list = products.filter(p => wishlist.includes(p.id));
  if (list.length === 0) return (
    <div className="px-4 py-10 pb-24 text-center flex flex-col items-center gap-3">
      <Heart size={64} className="text-gray-300" />
      <h2 className="font-semibold text-gray-800">Wishlist is empty</h2>
      <p className="text-sm text-gray-500">Save items you love to your wishlist.</p>
    </div>
  );
  return (
    <div className="px-3 py-4 pb-24 grid grid-cols-2 gap-3">
      {list.map(p => (
        <div key={p.id} className="border rounded overflow-hidden">
          <img src={p.image} alt={p.name} onClick={()=>nav(`/product/${p.id}`)} className="w-full aspect-square object-cover" />
          <div className="p-2">
            <p className="text-xs line-clamp-2">{p.name}</p>
            <p className="font-bold text-sm mt-1">₹{p.price}</p>
            <button onClick={()=>addToCart(p)} className="mt-1 w-full py-1 text-xs rounded border border-[#f43397] text-[#f43397]">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};
