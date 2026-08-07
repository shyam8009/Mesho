import React from 'react';
import { Home, LayoutGrid, ShoppingBag, HelpCircle, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const items = [
  { key: 'home', label: 'Home', icon: Home, path: '/' },
  { key: 'cat', label: 'Categories', icon: LayoutGrid, path: '/categories' },
  { key: 'ord', label: 'My Orders', icon: ShoppingBag, path: '/orders' },
  { key: 'help', label: 'Help', icon: HelpCircle, path: '/help' },
  { key: 'acc', label: 'Account', icon: User, path: '/account' },
];

const BottomNav = () => {
  const nav = useNavigate();
  const loc = useLocation();
  if (loc.pathname === '/checkout') return null;
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200 md:hidden">
      <div className="max-w-[500px] mx-auto grid grid-cols-5">
        {items.map(it => {
          const Icon = it.icon;
          const active = loc.pathname === it.path;
          return (
            <button key={it.key} onClick={() => nav(it.path)} className="flex flex-col items-center justify-center py-2 gap-0.5">
              <Icon size={20} className={active ? 'text-[#f43397]' : 'text-gray-700'} />
              <span className={`text-[11px] ${active ? 'text-[#f43397] font-semibold' : 'text-gray-700'}`}>{it.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
