import { useState } from "react";

const FAQS = [
  { q: "How do I accept a delivery?",          a: "New deliveries appear in Active Deliveries. Tap 'Confirm Pickup' to accept and start the trip." },
  { q: "When do I get paid?",                   a: "Payouts are released within 24 hours of delivery confirmation. They're added to your weekly statement." },
  { q: "What if the customer isn't available?", a: "Call them via the app. If you can't reach them after 10 minutes, mark it as 'Attempted Delivery' and dispatch will advise." },
  { q: "Can I refuse a delivery?",              a: "Yes. You can decline any assignment from Active Deliveries. Frequent declines may reduce future offers." },
  { q: "How is my rating calculated?",          a: "Buyers and sellers rate each delivery. Your rating is the rolling average of your last 100 completed trips." },
  { q: "What if goods are damaged in transit?", a: "Report immediately via the app. Damage caused by handling errors may reduce your payout for that trip." },
];

const DeliveryFaq = () => {
  const [open, setOpen] = useState(0);

  return (
    <div className="font-body max-w-3xl">
      <div className="mb-6">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-[13.5px] text-[var(--text-muted)] mt-1">
          Everything you need to know about deliveries
        </p>
      </div>

      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl overflow-hidden divide-y divide-[var(--border)]">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i}>
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-[var(--surface-2)] transition-colors"
              >
                <span className="text-[14px] font-semibold text-[var(--text)]">{f.q}</span>
                <span className={`w-7 h-7 rounded-full bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] flex-shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`}>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 -mt-1 text-[13px] text-[var(--text-muted)] leading-relaxed">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DeliveryFaq;