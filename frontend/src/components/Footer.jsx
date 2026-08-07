import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ShieldCheck, RotateCcw, Wallet, Truck, Loader2, Check } from 'lucide-react';
import { api } from '../lib/api';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [msg, setMsg] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');
    setMsg('');
    try {
      const res = await api.post('/subscribe', { email: email.trim() });
      setStatus('success');
      setMsg(res.data.already_subscribed ? "You're already subscribed — thanks!" : 'Subscribed! Watch your inbox for deals.');
      if (!res.data.already_subscribed) setEmail('');
    } catch (err) {
      setStatus('error');
      setMsg(err?.response?.data?.detail || 'Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={submit} className="w-full max-w-md">
      <h4 className="font-bold text-gray-900 text-sm mb-1">Get exclusive deals & offers</h4>
      <p className="text-xs text-gray-500 mb-3">Join our newsletter — no spam, unsubscribe any time.</p>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
          placeholder="you@example.com"
          className="flex-1 border rounded px-3 py-2.5 text-sm outline-none focus:border-[#f43397]"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-5 py-2.5 rounded font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-60"
          style={{ background: '#f43397' }}
        >
          {status === 'loading' && <Loader2 size={14} className="animate-spin" />}
          {status === 'success' ? <><Check size={14} /> Subscribed</> : 'Subscribe'}
        </button>
      </div>
      {msg && (
        <p className={`mt-2 text-xs ${status === 'success' ? 'text-[#0f9d58]' : 'text-red-600'}`}>{msg}</p>
      )}
    </form>
  );
};

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-gray-200 bg-white">
      {/* Trust strip */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Truck, title: 'Free Delivery', sub: 'On all orders' },
            { icon: RotateCcw, title: '7 Days Return', sub: 'Easy replacement' },
            { icon: Wallet, title: 'Cash on Delivery', sub: 'Pay when you receive' },
            { icon: ShieldCheck, title: 'Secure Payments', sub: '100% safe & trusted' },
          ].map(({ icon: Icon, title, sub }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#fde5ef' }}>
                <Icon size={20} className="text-[#f43397]" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-800">{title}</div>
                <div className="text-[11px] text-gray-500">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <NewsletterForm />
          <div className="hidden md:flex items-center gap-3 text-sm text-gray-600">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#fde5ef' }}>
              <Mail size={20} className="text-[#f43397]" />
            </div>
            <div>
              <div className="font-semibold text-gray-800">10,000+ subscribers</div>
              <div className="text-xs">get our deals every week</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main columns */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
        <div className="col-span-2 md:col-span-2">
          <div className="font-extrabold text-2xl text-[#f43397] mb-3" style={{ fontFamily: 'Manrope, Poppins, sans-serif' }}>meesho</div>
          <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
            India's most affordable online shopping destination for grocery combos, dry fruits, oils, cleaning, and personal care essentials — delivered to your doorstep.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#fde5ef] hover:border-[#f43397] transition-colors">
              <Facebook size={16} className="text-gray-700" />
            </a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#fde5ef] hover:border-[#f43397] transition-colors">
              <Instagram size={16} className="text-gray-700" />
            </a>
            <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#fde5ef] hover:border-[#f43397] transition-colors">
              <Twitter size={16} className="text-gray-700" />
            </a>
            <a href="#" aria-label="Youtube" className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#fde5ef] hover:border-[#f43397] transition-colors">
              <Youtube size={16} className="text-gray-700" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 text-sm mb-3">Categories</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            {['Foodgrains', 'Dry Fruits', 'Oils & Ghee', 'Cleaning', 'Personal Care', 'Beverages'].map(x => (
              <li key={x}><a href="#" className="hover:text-[#f43397]">{x}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 text-sm mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            {['My Orders', 'Wishlist', 'Cart', 'Account', 'Track Order'].map(x => (
              <li key={x}><a href="#" className="hover:text-[#f43397]">{x}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 text-sm mb-3">Help & Support</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            {['FAQs', 'Contact Us', 'Return Policy', 'Shipping Policy', 'Privacy Policy', 'Terms of Use'].map(x => (
              <li key={x}><a href="#" className="hover:text-[#f43397]">{x}</a></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact + Apps */}
      <div className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-6 grid gap-4 md:grid-cols-2">
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex items-start gap-2"><Phone size={16} className="text-[#f43397] mt-0.5" /><span>+91 90000 00000 (Mon–Sat, 9AM–6PM)</span></div>
            <div className="flex items-start gap-2"><Mail size={16} className="text-[#f43397] mt-0.5" /><a href="mailto:support@grocerryshop.com" className="hover:text-[#f43397]">support@grocerryshop.com</a></div>
            <div className="flex items-start gap-2"><MapPin size={16} className="text-[#f43397] mt-0.5" /><span>Bangalore, Karnataka, India</span></div>
          </div>
          <div className="md:text-right">
            <h4 className="font-bold text-gray-900 text-sm mb-2">Download Our App</h4>
            <div className="flex md:justify-end gap-2">
              <a href="#" aria-label="App Store" className="inline-block">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/220px-Download_on_the_App_Store_Badge.svg.png" alt="App Store" className="h-10" />
              </a>
              <a href="#" aria-label="Google Play" className="inline-block">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/240px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" className="h-10" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-4 text-center md:flex md:justify-between md:items-center gap-3">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Meesho Grocery Mart. All rights reserved.</p>
          <div className="mt-2 md:mt-0 flex justify-center md:justify-end gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-[#f43397]">Privacy</a>
            <a href="#" className="hover:text-[#f43397]">Terms</a>
            <a href="#" className="hover:text-[#f43397]">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
