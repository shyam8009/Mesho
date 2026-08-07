import React, { useState } from 'react';
import { Menu, Heart, ShoppingCart, Search, ChevronLeft, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';

const desktopNav = [
  { label: 'Home', path: '/' },
  { label: 'Categories', path: '/categories' },
  { label: 'My Orders', path: '/orders' },
  { label: 'Wishlist', path: '/wishlist' },
  { label: 'Help', path: '/help' },
  { label: 'Account', path: '/account' },
];

const Header = ({ variant = 'shop' }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { count, setCartOpen, wishlist } = useCart();
  const { query, setQuery } = useSearch();
  const [menuOpen, setMenuOpen] = useState(false);

  const onSearchChange = (e) => {
    setQuery(e.target.value);
    if (location.pathname !== '/') navigate('/');
  };

  const isProduct = location.pathname.startsWith('/product');

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-[500px] md:max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {isProduct ? (
              <button onClick={() => navigate(-1)} aria-label="back" className="-ml-1 md:hidden">
                <ChevronLeft size={26} className="text-[#f43397]" />
              </button>
            ) : (
              <button onClick={() => setMenuOpen(true)} aria-label="menu" className="-ml-1 md:hidden">
                <Menu size={26} className="text-gray-800" />
              </button>
            )}
            <button onClick={() => navigate('/')} className="flex items-center">
              <span className="font-extrabold text-[22px] md:text-[26px] tracking-tight text-[#f43397]" style={{fontFamily:'Manrope, Poppins, sans-serif'}}>meesho</span>
            </button>
          </div>

          {/* Desktop search */}
          {variant === 'shop' && (
            <div className="hidden md:flex flex-1 max-w-xl">
              <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 w-full">
                <Search size={18} className="text-gray-500" />
                <input
                  value={query}
                  onChange={onSearchChange}
                  placeholder="Search for combos, dry fruits, oils, atta..."
                  className="bg-transparent flex-1 ml-2 text-sm outline-none placeholder:text-gray-500"
                />
                {query && (
                  <button onClick={() => setQuery('')} aria-label="clear">
                    <X size={16} className="text-gray-500" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-gray-700">
            {desktopNav.map(n => (
              <button key={n.path} onClick={() => navigate(n.path)} className={`hover:text-[#f43397] ${location.pathname === n.path ? 'text-[#f43397]' : ''}`}>{n.label}</button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button aria-label="wishlist" className="relative" onClick={() => navigate('/wishlist')}>
              <Heart size={24} className="text-[#f43397]" fill={wishlist.length ? '#f43397' : 'none'} />
            </button>
            <button aria-label="cart" className="relative" onClick={() => setCartOpen(true)}>
              <ShoppingCart size={24} className="text-gray-800" />
              <span className="absolute -top-2 -right-2 bg-[#f43397] text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">{count}</span>
            </button>
          </div>
        </div>

        {/* Mobile search */}
        {variant === 'shop' && (
          <div className="md:hidden max-w-[500px] mx-auto px-4 pb-3">
            <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
              <Search size={18} className="text-gray-500" />
              <input
                value={query}
                onChange={onSearchChange}
                placeholder="Search for combos, dry fruits, oils, atta..."
                className="bg-transparent flex-1 ml-2 text-sm outline-none placeholder:text-gray-500"
              />
              {query && (
                <button onClick={() => setQuery('')} aria-label="clear">
                  <X size={16} className="text-gray-500" />
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setMenuOpen(false)}>
          <div className="bg-white w-[80%] max-w-[320px] h-full p-5" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <span className="font-extrabold text-[22px] text-[#f43397]">meesho</span>
              <button onClick={() => setMenuOpen(false)}><X size={22} /></button>
            </div>
            <ul className="space-y-4 text-gray-800">
              {['Home','Categories','My Orders','Wishlist','Help','Account','Sell on Meesho','About Us'].map(x => (
                <li key={x} className="py-2 border-b border-gray-100 cursor-pointer hover:text-[#f43397]">{x}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
