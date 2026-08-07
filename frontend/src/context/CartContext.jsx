import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { api, getSessionId } from '../lib/api';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const sessionId = getSessionId();
  const [items, setItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const cartSaveTimer = useRef(null);
  const wishSaveTimer = useRef(null);

  // initial load from backend
  useEffect(() => {
    (async () => {
      try {
        const [c, w] = await Promise.all([
          api.get(`/cart/${sessionId}`),
          api.get(`/wishlist/${sessionId}`),
        ]);
        setItems(c.data.items || []);
        setWishlist(w.data.ids || []);
      } catch (e) {
        console.error('cart load failed', e);
      } finally {
        setLoaded(true);
      }
    })();
  }, [sessionId]);

  // debounced persist cart
  useEffect(() => {
    if (!loaded) return;
    if (cartSaveTimer.current) clearTimeout(cartSaveTimer.current);
    cartSaveTimer.current = setTimeout(() => {
      api.put('/cart', { session_id: sessionId, items }).catch(err => console.error('cart save failed', err));
    }, 400);
    return () => cartSaveTimer.current && clearTimeout(cartSaveTimer.current);
  }, [items, loaded, sessionId]);

  useEffect(() => {
    if (!loaded) return;
    if (wishSaveTimer.current) clearTimeout(wishSaveTimer.current);
    wishSaveTimer.current = setTimeout(() => {
      api.put('/wishlist', { session_id: sessionId, ids: wishlist }).catch(err => console.error('wish save failed', err));
    }, 400);
    return () => wishSaveTimer.current && clearTimeout(wishSaveTimer.current);
  }, [wishlist, loaded, sessionId]);

  const addToCart = (product, qty = 1) => {
    const clean = { id: product.id, name: product.name, price: product.price, mrp: product.mrp, image: product.image };
    setItems(prev => {
      const found = prev.find(p => p.id === product.id);
      if (found) return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + qty } : p);
      return [...prev, { ...clean, qty }];
    });
    setCartOpen(true);
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) return removeItem(id);
    setItems(prev => prev.map(p => p.id === id ? { ...p, qty } : p));
  };
  const removeItem = (id) => setItems(prev => prev.filter(p => p.id !== id));
  const clearCart = () => setItems([]);
  const toggleWishlist = (id) => setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  const placeOrder = async (address, paymentMethod = 'COD') => {
    if (items.length === 0) throw new Error('Cart is empty');
    const res = await api.post('/orders', {
      session_id: sessionId,
      items,
      total,
      address,
      payment_method: paymentMethod,
    });
    setItems([]);
    return res.data;
  };

  const total = items.reduce((s, p) => s + p.price * p.qty, 0);
  const count = items.reduce((s, p) => s + p.qty, 0);

  return (
    <CartContext.Provider value={{ sessionId, items, wishlist, cartOpen, setCartOpen, addToCart, updateQty, removeItem, clearCart, toggleWishlist, placeOrder, total, count, loaded }}>
      {children}
    </CartContext.Provider>
  );
};
