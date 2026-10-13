import { useMemo, useState } from "react";

const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const TRANSACTIONS = [
  { id: "TX-8841", date: "Today, 11:24 AM",  amount: 14400, type: "credit", source: "AGS-3102 · Nairobi Grocers Ltd", status: "Pending" },
  { id: "TX-8839", date: "Yesterday, 4:00 PM", amount: 22500, type: "credit", source: "AGS-3095 · Kenya Feeds", status: "Paid" },
  { id: "TX-8836", date: "Yesterday, 11:00 AM", amount: 2400, type: "credit", source: "AGS-3092 · Kiambu Dairy Co-op", status: "Paid" },
  { id: "TX-8831", date: "2 days ago",       amount: 4200,  type: "credit", source: "AGS-3088 · Grace Njeri", status: "Paid" },
  { id: "TX-8827", date: "3 days ago",       amount: -500,  type: "fee",    source: "Platform service fee", status: "Paid" },
  { id: "TX-8822", date: "1 week ago",       amount: 18700, type: "credit", source: "AGS-3075 · Export Fresh Ltd", status: "Paid" },
];

const FarmerPayments = () => {
  const [range, setRange] = useState("week");

  const summary = useMemo(() => {
    const credits = TRANSACTIONS.filter((t) => t.type === "credit").reduce((s, t) => s + t.amount, 0);
    const fees = TRANSACTIONS.filter((t) => t.type === "fee").reduce((s, t) => s + Math.abs(t.amount), 0);
    return { credits, fees, net: credits - fees };
  }, []);

  return (
    <div className="font-body">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">Payments</h1>
          <p className="text-[13.5px] text-[var(--text-muted)] mt-1">Your earnings, fees and payout schedule</p>
        </div>

        <div className="inline-flex items-center gap-1 bg-[var(--surface)] border border-[var(--border)] rounded-full p-1">
          {[
            { id: "week",  label: "Week" },
            { id: "month", label: "Month" },
            { id: "year",  label: "Year" },
          ].map((r) => (
            <button
              key={r.id}
              onClick={() => setRange(r.id)}
              className={`px-4 py-2 rounded-full text-[12.5px] font-semibold transition-colors ${
                range === r.id ? "bg-[var(--brand)] text-[var(--brand-fg)]" : "text-[var(--text-muted)] hover:text-[var(--text)]"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-[var(--brand)] rounded-3xl p-6 text-[var(--brand-fg)] relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[var(--highlight)] opacity-20 blur-3xl" />
          <div className="relative">
            <p className="text-[10.5px] font-bold uppercase tracking-[0.15em] text-[var(--highlight)] mb-2">Available balance</p>
            <p className="font-display text-[2.25rem] font-bold tracking-tight leading-none">
              KES {summary.net.toLocaleString()}
            </p>
            <p className="text-[12px] text-[var(--brand-fg)]/70 mt-3">Next payout: Friday, 5:00 PM</p>
            <button className="mt-5 inline-flex items-center gap-2 bg-[var(--highlight)] text-[var(--highlight-fg)] text-[12.5px] font-bold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity">
              Withdraw to M-Pesa
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6">
          <p className="text-[10.5px] font-bold uppercase tracking-[0.15em] text-[var(--text-dim)] mb-2">Gross earnings</p>
          <p className="font-display text-2xl font-bold tracking-tight text-[var(--text)]">KES {summary.credits.toLocaleString()}</p>
          <p className="text-[12px] text-[var(--accent-fg)] mt-2 font-semibold">+22% vs last {range}</p>
        </div>

        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6">
          <p className="text-[10.5px] font-bold uppercase tracking-[0.15em] text-[var(--text-dim)] mb-2">Service fees</p>
          <p className="font-display text-2xl font-bold tracking-tight text-[var(--text)]">KES {summary.fees.toLocaleString()}</p>
          <p className="text-[12px] text-[var(--text-dim)] mt-2">2% of completed orders</p>
        </div>
      </section>

      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl overflow-hidden">
        <div className="px-5 py-4 border-b border-[var(--border)] flex items-center justify-between">
          <h2 className="font-display font-bold text-[15px] text-[var(--text)]">Transaction history</h2>
          <button className="text-[12px] font-semibold text-[var(--accent-fg)] hover:underline">Export CSV</button>
        </div>

        {TRANSACTIONS.map((tx, i) => (
          <div key={tx.id} className={`flex items-center gap-4 px-5 py-4 hover:bg-[var(--surface-2)] transition-colors ${i < TRANSACTIONS.length - 1 ? "border-b border-[var(--border)]" : ""}`}>
            <span className={`w-10 h-10 rounded-2xl flex items-center justify-center text-lg flex-shrink-0 ${
              tx.type === "fee" ? "bg-[var(--danger-soft)] text-[var(--danger)]" : "bg-[var(--accent-soft)] text-[var(--accent-fg)]"
            }`}>
              {tx.type === "fee" ? "−" : "+"}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-semibold text-[var(--text)] truncate">{tx.source}</p>
              <p className="text-[11.5px] text-[var(--text-dim)] mt-0.5">{tx.date}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className={`text-[13.5px] font-bold ${tx.amount >= 0 ? "text-[var(--accent-fg)]" : "text-[var(--danger)]"}`}>
                {tx.amount >= 0 ? "+" : "−"}KES {Math.abs(tx.amount).toLocaleString()}
              </p>
              <p className="text-[11px] text-[var(--text-dim)] mt-0.5">{tx.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmerPayments;