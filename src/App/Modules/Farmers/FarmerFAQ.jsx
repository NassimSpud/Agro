import { useState } from "react";

const FAQS = [
  { q: "How do I list a new product?",         a: "Go to My Products and click 'Add Product'. Fill in name, price, unit and quantity. Your listing goes live immediately." },
  { q: "When do I get paid for an order?",      a: "Payouts release 24 hours after the buyer confirms delivery. You can withdraw to M-Pesa every Friday at 5 PM." },
  { q: "Can I reject an order?",                a: "Yes. Pending orders have a Decline button. Frequent declines may affect your ranking on the marketplace." },
  { q: "Who handles delivery?",                 a: "We assign a verified AgriSoko rider to pick up from your farm and deliver to the buyer. You don't need your own transport." },
  { q: "What if a buyer doesn't pay?",          a: "Escrow protects you — the buyer's money is held before you dispatch. You always get paid once delivery is confirmed." },
  { q: "How do I update my stock?",             a: "Go to Inventory and click Restock on any product. Changes take effect immediately across the marketplace." },
  { q: "Can I offer wholesale pricing?",        a: "Yes. When creating a product, set tiered pricing for bulk quantities. Buyers see discounts automatically." },
  { q: "What if produce is damaged in transit?", a: "Report immediately via Messages. We investigate and, where AgriSoko is at fault, refund both you and the buyer." },
  { q: "How do I verify my farm?",              a: "Upload your national ID and a photo of your farm in Settings → Verification. Approval takes 48 hours." },
  { q: "Are there any monthly fees?",           a: "No. Listing is free. We charge a 2% service fee only on completed sales — nothing else." },
];

const FarmerFAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <div className="font-body max-w-3xl">
      <div className="mb-6">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-[13.5px] text-[var(--text-muted)] mt-1">
          Everything you need to know about selling on AgriSoko
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

export default FarmerFAQ;