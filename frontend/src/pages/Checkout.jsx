import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { truncate } from '../lib/text';
import {
  CheckCircle2, Loader2, ShieldCheck, ArrowLeft, Wallet, Check
} from 'lucide-react';

// UPI merchant details (hardcoded, single-merchant)
const UPI_ID = '9067020310@okbizaxis';
const PAYEE_NAME = 'Grocerry Shop';

const upiParams = (amount) => new URLSearchParams({
  pa: UPI_ID,
  pn: PAYEE_NAME,
  am: amount.toFixed(2),
  cu: 'INR',
  tn: 'Grocerry Shop Order',
}).toString();

// App-specific deep links + Android intent fallback
const buildAppLink = (app, amount) => {
  const q = upiParams(amount);
  switch (app) {
    case 'PhonePe':
      return `phonepe://pay?${q}`;
    case 'GPay':
      return `tez://upi/pay?${q}`;
    case 'Paytm':
      return `paytmmp://pay?${q}`;
    default:
      return `upi://pay?${q}`;
  }
};

const androidPackage = {
  PhonePe: 'com.phonepe.app',
  GPay: 'com.google.android.apps.nbu.paisa.user',
  Paytm: 'net.one97.paytm',
};

const buildIntentLink = (app, amount) => {
  const q = upiParams(amount);
  const pkg = androidPackage[app];
  if (!pkg) return `upi://pay?${q}`;
  return `intent://pay?${q}#Intent;scheme=upi;package=${pkg};end`;
};

const openUpiApp = (app, amount) => {
  const ua = navigator.userAgent || '';
  const isAndroid = /Android/i.test(ua);
  const primary = isAndroid ? buildIntentLink(app, amount) : buildAppLink(app, amount);
  // Use an anchor click so the current tab keeps its JS state
  try {
    const a = document.createElement('a');
    a.href = primary;
    a.rel = 'noopener';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => a.remove(), 500);
  } catch (e) {
    try { window.location.href = primary; } catch (_) {}
  }
};

const STEPS = [
  { key: 'cart', label: 'Cart' },
  { key: 'address', label: 'Address' },
  { key: 'payment', label: 'Payment' },
  { key: 'summary', label: 'Summary' },
];

const Stepper = ({ current }) => (
  <div className="border-b bg-white sticky top-[64px] md:top-[68px] z-20">
    <div className="max-w-4xl mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        {STEPS.map((s, i) => {
          const done = i < current;
          const active = i === current;
          return (
            <React.Fragment key={s.key}>
              <div className="flex flex-col items-center gap-1 min-w-[60px]">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 ${done ? 'bg-[#f43397] border-[#f43397] text-white' : active ? 'border-[#f43397] text-[#f43397] bg-white' : 'border-gray-300 text-gray-400 bg-white'}`}>
                  {done ? <Check size={16} /> : i + 1}
                </div>
                <span className={`text-[11px] md:text-xs font-semibold ${active || done ? 'text-[#f43397]' : 'text-gray-400'}`}>{s.label}</span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 ${i < current ? 'bg-[#f43397]' : 'bg-gray-200'}`} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  </div>
);

const PriceBox = ({ total, itemsCount }) => (
  <div className="border border-gray-100 rounded-lg p-4 bg-gray-50 space-y-2 text-sm">
    <div className="flex justify-between"><span className="text-gray-600">Total Product Price ({itemsCount} items):</span><span className="font-medium">₹{total.toFixed(2)}</span></div>
    <div className="flex justify-between"><span className="text-gray-600">Shipping:</span><span className="font-semibold text-[#0f9d58]">FREE</span></div>
    <div className="flex justify-between border-t pt-2 mt-1"><span className="font-bold">Order Total:</span><span className="font-bold">₹{total.toFixed(2)}</span></div>
  </div>
);

const StickyPayBar = ({ total, ctaLabel, onClick, disabled, loading }) => (
  <div className="fixed md:sticky bottom-0 md:bottom-4 left-0 right-0 md:left-auto md:right-auto z-40 bg-white border-t md:border md:rounded-lg md:shadow-lg mt-6">
    <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
      <div>
        <div className="font-bold text-gray-900">₹{total.toFixed(2)}</div>
        <div className="text-[11px] text-[#f43397] font-semibold uppercase">View Price Details</div>
      </div>
      <button disabled={disabled || loading} onClick={onClick} className="px-8 py-3 rounded font-semibold text-white disabled:opacity-60 flex items-center gap-2" style={{ background: '#f43397' }}>
        {loading && <Loader2 size={16} className="animate-spin" />}
        {ctaLabel}
      </button>
    </div>
  </div>
);

const CartStep = ({ items, total, onNext, updateQty, removeItem }) => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold text-gray-900">Review Your Cart</h2>
    {items.length === 0 ? (
      <div className="py-16 text-center text-gray-500">Your cart is empty.</div>
    ) : (
      <ul className="divide-y border border-gray-100 rounded-lg">
        {items.map(it => (
          <li key={it.id} className="p-3 flex gap-3">
            <img src={it.image} alt={it.name} className="w-20 h-20 object-cover rounded" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800 line-clamp-2">{truncate(it.name, 60)}</p>
              <div className="mt-1 flex items-center gap-2">
                <span className="font-bold text-gray-900">₹{it.price}</span>
                <span className="text-xs text-gray-500 line-through">₹{it.mrp}</span>
              </div>
              <div className="mt-2 flex items-center gap-3">
                <div className="flex items-center border rounded">
                  <button className="px-2 py-1" onClick={() => updateQty(it.id, it.qty - 1)}>−</button>
                  <span className="px-3 text-sm">{it.qty}</span>
                  <button className="px-2 py-1" onClick={() => updateQty(it.id, it.qty + 1)}>+</button>
                </div>
                <button className="text-xs text-gray-500 hover:text-red-500" onClick={() => removeItem(it.id)}>Remove</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )}
    <PriceBox total={total} itemsCount={items.reduce((s, i) => s + i.qty, 0)} />
    <StickyPayBar total={total} ctaLabel="Continue" onClick={onNext} disabled={items.length === 0} />
  </div>
);

const AddressStep = ({ form, setForm, onNext, onBack, error, total }) => {
  const change = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <button onClick={onBack} className="p-1"><ArrowLeft size={20} /></button>
        <h2 className="text-lg font-semibold text-gray-900">Delivery Address</h2>
      </div>
      <div className="space-y-3">
        <input value={form.name} onChange={change('name')} placeholder="Full Name" className="w-full border rounded px-3 py-2.5 text-sm outline-none focus:border-[#f43397]" />
        <input value={form.phone} onChange={change('phone')} placeholder="Phone Number" className="w-full border rounded px-3 py-2.5 text-sm outline-none focus:border-[#f43397]" />
        <input value={form.line1} onChange={change('line1')} placeholder="House / Street / Landmark" className="w-full border rounded px-3 py-2.5 text-sm outline-none focus:border-[#f43397]" />
        <div className="grid grid-cols-2 gap-3">
          <input value={form.city} onChange={change('city')} placeholder="City" className="border rounded px-3 py-2.5 text-sm outline-none focus:border-[#f43397]" />
          <input value={form.pincode} onChange={change('pincode')} placeholder="Pincode" className="border rounded px-3 py-2.5 text-sm outline-none focus:border-[#f43397]" />
        </div>
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <StickyPayBar total={total} ctaLabel="Continue to Payment" onClick={onNext} />
    </div>
  );
};

const upiApps = [
  { key: 'PhonePe', label: 'PhonePe', tag: '20% OFF', color: '#5f259f', badgeBg: '#5f259f', badgeText: 'Pe' },
  { key: 'GPay', label: 'Google Pay', tag: null, color: '#4285f4', badgeBg: '#ffffff', badgeText: 'G' },
  { key: 'Paytm', label: 'Paytm', tag: null, color: '#00baf2', badgeBg: '#00baf2', badgeText: 'Pₜ' },
];

const AppBadge = ({ app }) => {
  const styles = {
    PhonePe: { bg: '#5f259f', color: '#fff', label: 'Pe' },
    GPay: { bg: '#fff', color: '#4285f4', label: 'G', border: '1px solid #e5e7eb' },
    Paytm: { bg: '#00baf2', color: '#fff', label: 'Pₜ' },
  };
  const s = styles[app.key] || {};
  return (
    <div
      className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
      style={{ background: s.bg, color: s.color, border: s.border }}
    >
      {s.label}
    </div>
  );
};

const PaymentStep = ({ total, onBack, onPay, selection, setSelection, submitting }) => {
  const [tab, setTab] = useState('online'); // online | cod

  const cta = selection.mode === 'UPI' ? `Pay ₹${total.toFixed(2)} with ${selection.app}` :
              selection.mode === 'COD' ? `Place Order · ₹${total.toFixed(2)}` : 'Select a payment method';

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button onClick={onBack} className="p-1"><ArrowLeft size={20} /></button>
          <h2 className="text-lg font-semibold text-gray-900">Select Payment Method</h2>
        </div>
        <div className="hidden md:flex items-center gap-1 text-xs font-semibold text-[#1e3a8a]">
          <ShieldCheck size={16} className="text-[#1e3a8a]" /> 100% SAFE PAYMENTS
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-sm">
        <button onClick={() => setTab('online')} className={`py-2 rounded font-semibold border ${tab==='online' ? 'border-[#f43397] text-[#f43397] bg-[#fde5ef]' : 'border-gray-200 text-gray-700'}`}>Pay Online</button>
        <button onClick={() => { setTab('cod'); setSelection({ mode: 'COD', app: null }); }} className={`py-2 rounded font-semibold border ${tab==='cod' ? 'border-[#f43397] text-[#f43397] bg-[#fde5ef]' : 'border-gray-200 text-gray-700'}`}>Cash on Delivery</button>
      </div>

      {tab === 'online' ? (
        <div className="space-y-3">
          <p className="text-xs font-bold text-gray-600 uppercase tracking-wider">Pay Online</p>
          <div className="border border-gray-100 rounded-lg divide-y bg-white">
            <div className="p-3 flex items-center gap-2">
              <span className="bg-[#0f9d58] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">UPI</span>
              <span className="font-semibold text-sm text-gray-800">UPI (GPay / PhonePe / Paytm)</span>
            </div>
            {upiApps.map(a => {
              const active = selection.mode === 'UPI' && selection.app === a.key;
              return (
                <label
                  key={a.key}
                  className={`p-3 flex items-center gap-3 cursor-pointer hover:bg-gray-50 ${active ? 'bg-[#fef1f7]' : ''}`}
                  onClick={() => setSelection({ mode: 'UPI', app: a.key })}
                >
                  <input type="radio" checked={active} onChange={() => setSelection({ mode: 'UPI', app: a.key })} className="accent-[#f43397]" />
                  <AppBadge app={a} />
                  <span className="font-medium text-sm text-gray-800">{a.label}</span>
                  {a.tag && <span className="text-xs text-[#0f9d58] font-semibold ml-2">{a.tag}</span>}
                </label>
              );
            })}
          </div>
        </div>
      ) : (
        <label className="border border-gray-100 rounded-lg p-4 bg-white flex items-center gap-3 cursor-pointer">
          <input type="radio" checked={selection.mode === 'COD'} onChange={() => setSelection({ mode: 'COD', app: null })} className="accent-[#f43397]" />
          <Wallet size={22} className="text-[#f43397]" />
          <div>
            <div className="font-semibold text-sm text-gray-800">Cash on Delivery</div>
            <div className="text-[11px] text-gray-500">Pay in cash when your order arrives.</div>
          </div>
        </label>
      )}

      <PriceBox total={total} itemsCount={1} />

      <StickyPayBar
        total={total}
        ctaLabel={selection.mode === 'UPI' ? 'Pay Now' : selection.mode === 'COD' ? 'Place Order' : 'Select payment'}
        onClick={onPay}
        disabled={!selection.mode}
        loading={submitting}
      />
    </div>
  );
};

const WaitingForPayment = ({ app, amount, onPaid, onCancel, onRetry, submitting, error }) => (
  <div className="py-10 text-center flex flex-col items-center gap-4">
    <div className="relative">
      <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[#fde5ef]">
        <Loader2 size={40} className="text-[#f43397] animate-spin" />
      </div>
    </div>
    <h2 className="text-xl font-bold text-gray-900">Waiting for {app} Payment…</h2>
    <p className="text-sm text-gray-600 max-w-md">
      We've opened <span className="font-semibold">{app}</span> on your device.
      Pay <span className="font-bold">₹{amount.toFixed(2)}</span> and come back here to confirm.
    </p>

    {error && <p className="text-sm text-red-600">{error}</p>}

    <div className="mt-2 flex flex-col gap-2 w-full max-w-xs">
      <button
        onClick={onPaid}
        disabled={submitting}
        className="w-full py-3 rounded font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-60"
        style={{ background: '#0f9d58' }}
      >
        {submitting && <Loader2 size={16} className="animate-spin" />}
        I Have Paid
      </button>
      <button onClick={onRetry} className="w-full py-2.5 rounded font-semibold border border-[#f43397] text-[#f43397]">
        Open {app} Again
      </button>
      <button onClick={onCancel} className="w-full py-2 text-sm text-gray-500 underline">
        Cancel / Try Another Method
      </button>
    </div>

    <p className="text-[11px] text-gray-400 max-w-md mt-2">
      Note: Your payment will be manually verified by our team. Tapping "I Have Paid" will mark your order as pending verification.
    </p>
  </div>
);

const SummaryStep = ({ order, onGoOrders, onContinue, onRetryUpi, upiApp }) => (
  <div className="py-8 text-center flex flex-col items-center gap-3">
    <CheckCircle2 size={80} className="text-[#0f9d58]" />
    <h2 className="text-xl font-bold text-gray-900">Order Placed Successfully!</h2>
    <p className="text-sm text-gray-600">Your order <span className="font-mono">#{order.id.slice(0, 8)}</span> has been received.</p>
    <div className="mt-2 border border-gray-100 rounded-lg p-4 w-full max-w-md text-left space-y-2 text-sm">
      <div className="flex justify-between"><span className="text-gray-600">Payment Method:</span><span className="font-semibold">{order.payment_method}</span></div>
      <div className="flex justify-between"><span className="text-gray-600">Payment Status:</span><span className="font-semibold text-[#0f9d58]">{order.payment_method === 'COD' ? 'Pay on Delivery' : 'Pending Verification'}</span></div>
      <div className="flex justify-between"><span className="text-gray-600">Amount:</span><span className="font-bold">₹{order.total.toFixed(2)}</span></div>
      <div className="flex justify-between"><span className="text-gray-600">Deliver to:</span><span className="font-medium text-right">{order.address?.name}, {order.address?.city}</span></div>
    </div>

    {upiApp && (
      <button onClick={onRetryUpi} className="mt-3 px-6 py-3 rounded font-semibold text-white flex items-center gap-2" style={{ background: '#f43397' }}>
        Open {upiApp} to Complete Payment
      </button>
    )}

    <div className="mt-4 flex gap-3">
      <button onClick={onGoOrders} className="px-4 py-2 rounded font-semibold text-white" style={{ background: '#f43397' }}>View My Orders</button>
      <button onClick={onContinue} className="px-4 py-2 rounded font-semibold border border-[#f43397] text-[#f43397]">Continue Shopping</button>
    </div>
  </div>
);

const Checkout = () => {
  const { items, total, updateQty, removeItem, placeOrder, setCartOpen } = useCart();
  const nav = useNavigate();
  useEffect(() => { setCartOpen(false); }, [setCartOpen]);

  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: '', phone: '', line1: '', city: '', pincode: '' });
  const [selection, setSelection] = useState({ mode: '', app: null });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [placed, setPlaced] = useState(null);
  const [waiting, setWaiting] = useState(false);

  const goto = (i) => { setError(''); setStep(i); window.scrollTo(0, 0); };

  const submitAddress = () => {
    if (!form.name || !form.phone || !form.line1 || !form.city || !form.pincode) {
      return setError('Please fill in all address fields.');
    }
    goto(2);
  };

  const submitPayment = async () => {
    if (!selection.mode) return;
    if (selection.mode === 'UPI') {
      // Open the UPI app and show "waiting for payment" screen
      setWaiting(true);
      setError('');
      openUpiApp(selection.app, total);
      return;
    }
    // COD path — place order immediately
    setSubmitting(true);
    try {
      const order = await placeOrder(form, 'COD');
      setPlaced(order);
      goto(3);
    } catch (err) {
      setError(err?.response?.data?.detail || 'Failed to place order');
    } finally {
      setSubmitting(false);
    }
  };

  const confirmUpiPaid = async () => {
    setSubmitting(true);
    setError('');
    try {
      const order = await placeOrder(form, `UPI-${selection.app}`);
      setPlaced(order);
      setWaiting(false);
      goto(3);
    } catch (err) {
      setError(err?.response?.data?.detail || 'Failed to place order');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pb-24 md:pb-8">
      <Stepper current={step} />
      <div className="max-w-4xl mx-auto px-4 py-4">
        {step === 0 && <CartStep items={items} total={total} onNext={() => goto(1)} updateQty={updateQty} removeItem={removeItem} />}
        {step === 1 && <AddressStep form={form} setForm={setForm} onNext={submitAddress} onBack={() => goto(0)} error={error} total={total} />}
        {step === 2 && !waiting && (
          <div className="space-y-3">
            <PaymentStep total={total} onBack={() => goto(1)} onPay={submitPayment} selection={selection} setSelection={setSelection} submitting={submitting} />
            {error && <p className="text-sm text-red-600 text-center">{error}</p>}
          </div>
        )}
        {step === 2 && waiting && (
          <WaitingForPayment
            app={selection.app}
            amount={total}
            submitting={submitting}
            error={error}
            onPaid={confirmUpiPaid}
            onRetry={() => openUpiApp(selection.app, total)}
            onCancel={() => { setWaiting(false); setError(''); }}
          />
        )}
        {step === 3 && placed && (
          <SummaryStep
            order={placed}
            onGoOrders={() => nav('/orders')}
            onContinue={() => nav('/')}
            upiApp={selection.mode === 'UPI' ? selection.app : null}
            onRetryUpi={() => openUpiApp(selection.app, placed.total)}
          />
        )}
      </div>
    </div>
  );
};

export default Checkout;
