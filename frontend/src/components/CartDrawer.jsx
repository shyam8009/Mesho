import React from 'react';
import { X, ShoppingCart, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { truncate } from '../lib/text';

const CartDrawer = () => {
  const { cartOpen, setCartOpen, items, total, updateQty, removeItem } = useCart();
  const navigate = useNavigate();
  const goCheckout = () => { setCartOpen(false); navigate('/checkout'); };
  if (!cartOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-end" onClick={() => setCartOpen(false)}>
      <div className="bg-white w-full max-w-[440px] h-full flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h3 className="font-semibold text-gray-900">My Cart ({items.length})</h3>
          <button onClick={() => setCartOpen(false)}><X size={22} /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <ShoppingCart size={64} className="text-gray-300" />
              <p className="mt-4 font-semibold text-gray-800">Your cart is empty</p>
              <p className="text-sm text-gray-500 mt-1">Add products to continue shopping.</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map(it => (
                <li key={it.id} className="flex gap-3 border-b pb-4">
                  <img src={it.image} alt={it.name} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800 line-clamp-2">{truncate(it.name, 60)}</p>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="font-bold text-gray-900">₹{it.price}</span>
                      <span className="text-xs text-gray-500 line-through">₹{it.mrp}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center border rounded">
                        <button className="px-2 py-1" onClick={() => updateQty(it.id, it.qty - 1)}><Minus size={14}/></button>
                        <span className="px-3 text-sm">{it.qty}</span>
                        <button className="px-2 py-1" onClick={() => updateQty(it.id, it.qty + 1)}><Plus size={14}/></button>
                      </div>
                      <button onClick={() => removeItem(it.id)} className="text-gray-400 hover:text-red-500"><Trash2 size={18}/></button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border-t p-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Total Value:</span>
            <span className="font-bold text-gray-900">₹{total.toFixed(2)}</span>
          </div>
          <button onClick={goCheckout} disabled={items.length===0} className="w-full py-3 rounded font-semibold text-white disabled:opacity-50" style={{background:'#f43397'}}>Proceed to Buy</button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
