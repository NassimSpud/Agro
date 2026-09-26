import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "./StoreContext";

// ======================== Icons ========================
const ArrowLeftIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);
const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const TrashIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
  </svg>
);
const CheckIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const ShieldIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 4 5v6c0 5.5 3.4 9.7 8 11 4.6-1.3 8-5.5 8-11V5z" />
  </svg>
);
const TruckIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="6" width="14" height="11" rx="1.5" />
    <path d="M15 10h4l3 3v4h-7z" />
    <circle cx="6" cy="19" r="1.6" /><circle cx="17.5" cy="19" r="1.6" />
  </svg>
);
const PhoneIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="2" width="12" height="20" rx="2" /><path d="M12 18h.01" />
  </svg>
);
const CardIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" />
  </svg>
);
const CashIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="20" height="12" rx="2" /><circle cx="12" cy="12" r="2.5" />
  </svg>
);
const CartEmptyIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);
const SproutIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V10" />
    <path d="M12 10C12 6 9 3 4 3c0 5 3 7 8 7Z" />
    <path d="M12 13c0-3.5 2.5-6 7-6 0 4.5-3 6-7 6Z" />
  </svg>
);

// ======================== Stepper ========================
const Stepper = ({ current }) => {
  const steps = ["Cart", "Delivery", "Payment", "Done"];
  return (
    <div className="flex items-center gap-2 sm:gap-4">
      {steps.map((label, i) => {
        const idx = i + 1;
        const isDone = current > idx;
        const isActive = current === idx;
        return (
          <div key={label} className="flex items-center gap-2 sm:gap-4 flex-1 last:flex-initial">
            <div className="flex items-center gap-2">
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[11px] sm:text-xs font-bold transition-all ${
                  isDone
                    ? "bg-[var(--accent)] text-[var(--brand-fg)]"
                    : isActive
                    ? "bg-[var(--brand)] text-[var(--brand-fg)] ring-4 ring-[var(--accent-soft)]"
                    : "bg-[var(--surface-2)] text-[var(--text-dim)] border border-[var(--border)]"
                }`}
              >
                {isDone ? <CheckIcon className="w-3.5 h-3.5" /> : idx}
              </div>
              <span
                className={`text-[12.5px] font-semibold hidden sm:block ${
                  isActive || isDone ? "text-[var(--text)]" : "text-[var(--text-dim)]"
                }`}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex-1 h-px bg-[var(--border)] relative overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-[var(--accent)] transition-all duration-500"
                  style={{ width: isDone ? "100%" : "0%" }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

// ======================== Main ========================
const Cart = () => {
  const navigate = useNavigate();
  const {
    cartItems = {},
    products = [],
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
  } = useStore() || {};

  const [step, setStep] = useState(1);
  const [delivery, setDelivery] = useState({
    name: "John Doe",
    phone: "",
    county: "Nairobi",
    address: "",
    notes: "",
  });
  const [payment, setPayment] = useState("mpesa");

  const items = Object.entries(cartItems)
    .map(([id, qty]) => {
      const product = products.find((p) => p._id === id);
      return product ? { ...product, qty } : null;
    })
    .filter(Boolean);

  const subtotal = typeof getCartTotal === "function" ? getCartTotal() : 0;
  const deliveryFee = items.length > 0 ? 250 : 0;
  const serviceFee = Math.round(subtotal * 0.02);
  const total = subtotal + deliveryFee + serviceFee;

  const KES = (n) => `KES ${n.toLocaleString()}`;

  const canProceedDelivery =
    delivery.name.trim() && delivery.phone.trim().length >= 9 && delivery.address.trim();

  const handlePlaceOrder = () => {
    setStep(4);
    setTimeout(() => {
      if (typeof clearCart === "function") clearCart();
    }, 400);
  };

  // ---------- Empty state ----------
  if (items.length === 0 && step !== 4) {
    return (
      <div className="font-body">
        <div className="max-w-2xl mx-auto text-center py-16 sm:py-24">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-[var(--text-dim)] mb-6">
            <CartEmptyIcon className="w-9 h-9" />
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)]">
            Your cart is empty
          </h1>
          <p className="text-[var(--text-muted)] mt-3 max-w-sm mx-auto text-sm leading-relaxed">
            Browse the marketplace to find fresh produce, seeds, livestock feeds and more from verified Kenyan farmers.
          </p>
          <button
            onClick={() => navigate("/buyerdashboard/marketplace")}
            className="mt-7 inline-flex items-center gap-2 bg-[var(--brand)] text-[var(--brand-fg)] font-semibold text-sm px-6 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-lg"
          >
            Browse Marketplace
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // ---------- Success state ----------
  if (step === 4) {
    return (
      <div className="font-body max-w-2xl mx-auto">
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 sm:p-12 text-center shadow-sm">
          <div className="w-20 h-20 mx-auto rounded-full bg-[var(--accent-soft)] flex items-center justify-center text-[var(--accent-fg)] mb-6 animate-[pop_0.5s_ease-out]">
            <CheckIcon className="w-10 h-10" />
          </div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent-fg)] mb-2">
            Order Confirmed
          </p>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)]">
            Asante, {delivery.name.split(" ")[0]}!
          </h1>
          <p className="text-[var(--text-muted)] mt-3 text-sm leading-relaxed max-w-md mx-auto">
            Your order <span className="font-bold text-[var(--text)]">#AGS-{Math.floor(1000 + Math.random() * 9000)}</span> has been placed. You'll receive an SMS confirmation shortly.
          </p>

          <div className="grid grid-cols-2 gap-3 mt-8 text-left">
            <div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-2xl p-4">
              <p className="text-[11px] uppercase tracking-wider text-[var(--text-dim)] font-bold mb-1">
                Delivery to
              </p>
              <p className="text-[13px] font-semibold text-[var(--text)] leading-snug">
                {delivery.address}, {delivery.county}
              </p>
            </div>
            <div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-2xl p-4">
              <p className="text-[11px] uppercase tracking-wider text-[var(--text-dim)] font-bold mb-1">
                Estimated arrival
              </p>
              <p className="text-[13px] font-semibold text-[var(--text)] leading-snug">
                Tomorrow, 10 AM – 2 PM
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <button
              onClick={() => navigate("/buyerdashboard/tracking")}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[var(--brand)] text-[var(--brand-fg)] font-semibold text-sm px-6 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Track Order
            </button>
            <button
              onClick={() => navigate("/buyerdashboard/marketplace")}
              className="flex-1 inline-flex items-center justify-center gap-2 border border-[var(--border-strong)] text-[var(--text)] font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-[var(--surface-2)] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
        <style>{`@keyframes pop { 0%{transform:scale(.5);opacity:0} 60%{transform:scale(1.08)} 100%{transform:scale(1);opacity:1} }`}</style>
      </div>
    );
  }

  // ---------- Main checkout ----------
  return (
    <div className="font-body">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={() => (step > 1 ? setStep(step - 1) : navigate("/buyerdashboard/marketplace"))}
          className="inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--text-muted)] hover:text-[var(--text)] mb-4 transition-colors"
        >
          <ArrowLeftIcon className="w-3.5 h-3.5" />
          {step > 1 ? "Back" : "Continue shopping"}
        </button>
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">
          {step === 1 && "Review your cart"}
          {step === 2 && "Delivery details"}
          {step === 3 && "Payment method"}
        </h1>
        <p className="text-[13.5px] text-[var(--text-muted)] mt-1">
          {items.length} {items.length === 1 ? "item" : "items"} · Secure checkout
        </p>
      </div>

      {/* Stepper */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl px-4 sm:px-6 py-4 mb-6">
        <Stepper current={step} />
      </div>

      <div className="grid lg:grid-cols-[1fr_380px] gap-6">
        {/* ===== Left column ===== */}
        <div className="space-y-4">
          {/* STEP 1 — Cart items */}
          {step === 1 && (
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl overflow-hidden">
              {items.map((item, i) => (
                <div
                  key={item._id}
                  className={`flex items-center gap-4 p-4 sm:p-5 ${
                    i < items.length - 1 ? "border-b border-[var(--border)]" : ""
                  }`}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-2xl flex-shrink-0">
                    {item.image || "🌾"}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-[14px] text-[var(--text)] truncate">
                      {item.name}
                    </p>
                    <p className="text-[12px] text-[var(--text-dim)] mt-0.5 truncate">
                      {item.seller}
                    </p>
                    <p className="text-[13px] font-bold text-[var(--accent-fg)] mt-1.5">
                      {KES(item.price)}{" "}
                      <span className="text-[11px] font-medium text-[var(--text-dim)]">/ {item.unit}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-1 bg-[var(--surface-2)] border border-[var(--border)] rounded-full p-1">
                    <button
                      onClick={() => removeFromCart?.(item._id)}
                      className="w-7 h-7 rounded-full hover:bg-[var(--surface-3)] flex items-center justify-center text-[var(--text-muted)] transition-colors"
                      aria-label="Decrease"
                    >
                      <span className="text-base leading-none">−</span>
                    </button>
                    <span className="w-7 text-center text-[13px] font-bold text-[var(--text)]">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => addToCart?.(item._id)}
                      className="w-7 h-7 rounded-full hover:bg-[var(--surface-3)] flex items-center justify-center text-[var(--text-muted)] transition-colors"
                      aria-label="Increase"
                    >
                      <span className="text-base leading-none">+</span>
                    </button>
                  </div>

                  <div className="hidden sm:flex flex-col items-end gap-1 ml-2">
                    <p className="font-display font-bold text-[14px] text-[var(--text)]">
                      {KES(item.price * item.qty)}
                    </p>
                    <button
                      onClick={() => {
                        for (let k = 0; k < item.qty; k++) removeFromCart?.(item._id);
                      }}
                      className="text-[11px] text-[var(--text-dim)] hover:text-[var(--danger)] inline-flex items-center gap-1 transition-colors"
                    >
                      <TrashIcon className="w-3 h-3" />
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex items-center justify-between p-4 sm:p-5 bg-[var(--surface-2)] border-t border-[var(--border)]">
                <Link
                  to="/buyerdashboard/marketplace"
                  className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-[var(--accent-fg)] hover:underline"
                >
                  <ArrowLeftIcon className="w-3.5 h-3.5" />
                  Add more items
                </Link>
                <button
                  onClick={() => clearCart?.()}
                  className="text-[12px] font-medium text-[var(--text-dim)] hover:text-[var(--danger)] transition-colors"
                >
                  Clear cart
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 — Delivery */}
          {step === 2 && (
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-5 sm:p-6 space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-[var(--border)]">
                <span className="w-10 h-10 rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-fg)] flex items-center justify-center">
                  <TruckIcon className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-semibold text-[14px] text-[var(--text)]">Delivery Information</p>
                  <p className="text-[12px] text-[var(--text-dim)]">Where should we send your order?</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full name">
                  <input
                    type="text"
                    value={delivery.name}
                    onChange={(e) => setDelivery({ ...delivery, name: e.target.value })}
                    placeholder="e.g. Wanjiku Kamau"
                    className="input-base"
                  />
                </Field>
                <Field label="Phone number">
                  <input
                    type="tel"
                    value={delivery.phone}
                    onChange={(e) => setDelivery({ ...delivery, phone: e.target.value })}
                    placeholder="+254 7XX XXX XXX"
                    className="input-base"
                  />
                </Field>
                <Field label="County">
                  <select
                    value={delivery.county}
                    onChange={(e) => setDelivery({ ...delivery, county: e.target.value })}
                    className="input-base"
                  >
                    {["Nairobi", "Kiambu", "Nakuru", "Kisumu", "Mombasa", "Eldoret", "Nyeri", "Machakos"].map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Delivery address">
                  <input
                    type="text"
                    value={delivery.address}
                    onChange={(e) => setDelivery({ ...delivery, address: e.target.value })}
                    placeholder="Street, building, landmark..."
                    className="input-base"
                  />
                </Field>
              </div>

              <Field label="Delivery notes (optional)">
                <textarea
                  rows={3}
                  value={delivery.notes}
                  onChange={(e) => setDelivery({ ...delivery, notes: e.target.value })}
                  placeholder="Gate code, best time to deliver, etc."
                  className="input-base resize-none"
                />
              </Field>

              <div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-2xl p-4 flex items-start gap-3">
                <span className="w-9 h-9 rounded-xl bg-[var(--accent-soft)] text-[var(--accent-fg)] flex items-center justify-center flex-shrink-0">
                  <ShieldIcon className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-[12.5px] font-semibold text-[var(--text)]">
                    Escrow-protected delivery
                  </p>
                  <p className="text-[11.5px] text-[var(--text-dim)] mt-0.5 leading-relaxed">
                    Your payment is held safely until you confirm delivery.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 — Payment */}
          {step === 3 && (
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-5 sm:p-6 space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-[var(--border)]">
                <span className="w-10 h-10 rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-fg)] flex items-center justify-center">
                  <ShieldIcon className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-semibold text-[14px] text-[var(--text)]">Payment Method</p>
                  <p className="text-[12px] text-[var(--text-dim)]">Choose how you'd like to pay</p>
                </div>
              </div>

              <div className="space-y-2.5">
                {[
                  { id: "mpesa", label: "M-Pesa",           desc: "Pay via Safaricom M-Pesa",           icon: <PhoneIcon /> },
                  { id: "card",  label: "Card",             desc: "Visa, Mastercard, or Airtel Money",  icon: <CardIcon /> },
                  { id: "cash",  label: "Cash on Delivery", desc: "Pay the rider on arrival",           icon: <CashIcon /> },
                ].map((opt) => {
                  const active = payment === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setPayment(opt.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all ${
                        active
                          ? "border-[var(--brand)] bg-[var(--accent-soft)]"
                          : "border-[var(--border)] hover:border-[var(--border-strong)] bg-[var(--surface)]"
                      }`}
                    >
                      <span
                        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          active
                            ? "bg-[var(--brand)] text-[var(--brand-fg)]"
                            : "bg-[var(--surface-2)] text-[var(--text-muted)]"
                        }`}
                      >
                        {opt.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[13.5px] font-semibold text-[var(--text)]">{opt.label}</p>
                        <p className="text-[12px] text-[var(--text-dim)] mt-0.5">{opt.desc}</p>
                      </div>
                      <span
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                          active
                            ? "border-[var(--brand)] bg-[var(--brand)]"
                            : "border-[var(--border-strong)]"
                        }`}
                      >
                        {active && <CheckIcon className="w-3 h-3 text-[var(--brand-fg)]" />}
                      </span>
                    </button>
                  );
                })}
              </div>

              {payment === "mpesa" && (
                <div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-2xl p-4 space-y-3">
                  <Field label="M-Pesa phone number">
                    <input
                      type="tel"
                      placeholder="+254 7XX XXX XXX"
                      defaultValue={delivery.phone}
                      className="input-base"
                    />
                  </Field>
                  <p className="text-[11.5px] text-[var(--text-dim)] leading-relaxed">
                    You'll receive an STK push on this number. Enter your PIN to complete payment.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Continue buttons (desktop) */}
          <div className="hidden lg:block">
            {step === 1 && (
              <button
                onClick={() => setStep(2)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[var(--brand)] text-[var(--brand-fg)] font-semibold text-sm px-6 py-4 rounded-full hover:opacity-90 transition-opacity"
              >
                Continue to delivery
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            )}
            {step === 2 && (
              <button
                onClick={() => canProceedDelivery && setStep(3)}
                disabled={!canProceedDelivery}
                className={`w-full inline-flex items-center justify-center gap-2 font-semibold text-sm px-6 py-4 rounded-full transition-all ${
                  canProceedDelivery
                    ? "bg-[var(--brand)] text-[var(--brand-fg)] hover:opacity-90"
                    : "bg-[var(--surface-2)] text-[var(--text-dim)] cursor-not-allowed border border-[var(--border)]"
                }`}
              >
                Continue to payment
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            )}
            {step === 3 && (
              <button
                onClick={handlePlaceOrder}
                className="w-full inline-flex items-center justify-center gap-2 bg-[var(--brand)] text-[var(--brand-fg)] font-bold text-sm px-6 py-4 rounded-full hover:opacity-90 transition-opacity shadow-lg"
              >
                Place Order · {KES(total)}
              </button>
            )}
          </div>
        </div>

        {/* ===== Right column — Order summary ===== */}
        <aside className="lg:sticky lg:top-24 h-fit">
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-5 sm:p-6">
            <h2 className="font-display font-bold text-[16px] text-[var(--text)] mb-4">
              Order Summary
            </h2>

            {step >= 2 && (
              <div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-2xl p-4 mb-4 space-y-2">
                <p className="text-[11px] uppercase tracking-wider text-[var(--text-dim)] font-bold">
                  Delivering to
                </p>
                <p className="text-[13px] font-semibold text-[var(--text)] leading-snug">
                  {delivery.name || "—"}
                </p>
                <p className="text-[12px] text-[var(--text-muted)] leading-snug">
                  {delivery.address ? `${delivery.address}, ` : ""}{delivery.county}
                </p>
                {delivery.phone && (
                  <p className="text-[12px] text-[var(--text-dim)]">{delivery.phone}</p>
                )}
              </div>
            )}

            <div className="space-y-2.5 pb-4 border-b border-[var(--border)]">
              <Row label={`Subtotal (${items.length} items)`} value={KES(subtotal)} />
              <Row label="Delivery fee" value={KES(deliveryFee)} />
              <Row label="Service fee (2%)" value={KES(serviceFee)} />
            </div>

            <div className="flex items-center justify-between pt-4">
              <div>
                <p className="text-[12px] font-semibold text-[var(--text-muted)]">Total</p>
                <p className="text-[11px] text-[var(--text-dim)]">Incl. all fees</p>
              </div>
              <p className="font-display font-bold text-xl text-[var(--text)]">{KES(total)}</p>
            </div>

            <div className="mt-5 pt-5 border-t border-[var(--border)] space-y-2.5">
              <Badge icon={<ShieldIcon />} text="Escrow-protected payment" />
              <Badge icon={<TruckIcon />} text="Nationwide delivery" />
              <Badge icon={<SproutIcon />} text="Farm-fresh guarantee" />
            </div>

            {/* Continue buttons (mobile) */}
            <div className="mt-5 lg:hidden">
              {step === 1 && (
                <button
                  onClick={() => setStep(2)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[var(--brand)] text-[var(--brand-fg)] font-semibold text-sm px-6 py-3.5 rounded-full"
                >
                  Continue to delivery
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              )}
              {step === 2 && (
                <button
                  onClick={() => canProceedDelivery && setStep(3)}
                  disabled={!canProceedDelivery}
                  className={`w-full inline-flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3.5 rounded-full ${
                    canProceedDelivery
                      ? "bg-[var(--brand)] text-[var(--brand-fg)]"
                      : "bg-[var(--surface-2)] text-[var(--text-dim)] cursor-not-allowed border border-[var(--border)]"
                  }`}
                >
                  Continue to payment
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              )}
              {step === 3 && (
                <button
                  onClick={handlePlaceOrder}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[var(--brand)] text-[var(--brand-fg)] font-bold text-sm px-6 py-3.5 rounded-full shadow-lg"
                >
                  Place Order · {KES(total)}
                </button>
              )}
            </div>
          </div>
        </aside>
      </div>

      <style>{`
        .input-base {
          width: 100%;
          background: var(--surface-2);
          border: 1px solid var(--border);
          color: var(--text);
          border-radius: 12px;
          padding: 10px 14px;
          font-size: 13.5px;
          outline: none;
          transition: border-color .15s, background .15s;
        }
        .input-base::placeholder { color: var(--text-dim); }
        .input-base:focus {
          border-color: var(--accent);
          background: var(--surface);
        }
      `}</style>
    </div>
  );
};

// ======================== Helpers ========================
const Row = ({ label, value }) => (
  <div className="flex items-center justify-between">
    <span className="text-[13px] text-[var(--text-muted)]">{label}</span>
    <span className="text-[13px] font-semibold text-[var(--text)]">{value}</span>
  </div>
);

const Badge = ({ icon, text }) => (
  <div className="flex items-center gap-2.5 text-[12px] text-[var(--text-muted)]">
    <span className="w-7 h-7 rounded-lg bg-[var(--accent-soft)] text-[var(--accent-fg)] flex items-center justify-center flex-shrink-0">
      {icon}
    </span>
    {text}
  </div>
);

const Field = ({ label, children }) => (
  <label className="block">
    <span className="block text-[12px] font-semibold text-[var(--text-muted)] mb-1.5">
      {label}
    </span>
    {children}
  </label>
);

export default Cart;