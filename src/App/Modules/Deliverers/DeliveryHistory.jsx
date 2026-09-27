import { useMemo, useState } from "react";

const SearchIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
  </svg>
);
const CheckIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const StarIcon = ({ className = "w-3 h-3" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const HISTORY = [
  { id: "AGS-2939", product: "Maize Grain",     qty: "80 kg",      emoji: "🌽", customer: "Nairobi Grocers Ltd", drop: "Westlands, Nairobi",  date: "Today",      time: "8:45 AM",  payout: 620,  rating: 5, type: "wholesale" },
  { id: "AGS-2937", product: "Fresh Milk",      qty: "40 litres",  emoji: "🥛", customer: "Kiambu Dairy Co-op", drop: "Kikuyu, Kiambu",      date: "Today",      time: "7:20 AM",  payout: 380,  rating: 5, type: "wholesale" },
  { id: "AGS-2934", product: "Tomatoes",        qty: "25 kg",      emoji: "🍅", customer: "Grace Njeri",        drop: "Karen, Nairobi",      date: "Yesterday",  time: "4:15 PM",  payout: 480,  rating: 4, type: "consumer" },
  { id: "AGS-2931", product: "Sukuma Wiki",     qty: "20 bunches", emoji: "🥬", customer: "Wanjiku Kamau",      drop: "Limuru, Kiambu",      date: "Yesterday",  time: "11:00 AM", payout: 280,  rating: 5, type: "consumer" },
  { id: "AGS-2928", product: "Avocado",         qty: "100 kg",     emoji: "🥑", customer: "Export Fresh Ltd",   drop: "JKIA Cargo, Nairobi", date: "Yesterday",  time: "9:30 AM",  payout: 1450, rating: 5, type: "wholesale" },
  { id: "AGS-2925", product: "Dairy Meal",      qty: "15 bags",    emoji: "🌾", customer: "Nakuru Feeds",       drop: "Nakuru Town",         date: "2 days ago", time: "2:00 PM",  payout: 1200, rating: 4, type: "wholesale" },
  { id: "AGS-2922", product: "Irish Potatoes",  qty: "60 kg",      emoji: "🥔", customer: "Joseph Mwangi",      drop: "Ruiru, Kiambu",       date: "2 days ago", time: "10:00 AM", payout: 520,  rating: 5, type: "consumer" },
];

const TABS = [
  { id: "all",       label: "All" },
  { id: "wholesale", label: "Wholesale" },
  { id: "consumer",  label: "Consumer" },
];

const DeliveryHistory = () => {
  const [tab, setTab] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return HISTORY.filter((d) => {
      const matchTab = tab === "all" || d.type === tab;
      const matchSearch =
        !q ||
        d.id.toLowerCase().includes(q) ||
        d.product.toLowerCase().includes(q) ||
        d.customer.toLowerCase().includes(q);
      return matchTab && matchSearch;
    });
  }, [tab, search]);

  const totalEarnings = HISTORY.reduce((s, d) => s + d.payout, 0);
  const avgRating = (HISTORY.reduce((s, d) => s + d.rating, 0) / HISTORY.length).toFixed(1);

  return (
    <div className="font-body">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">
            Delivery History
          </h1>
          <p className="text-[13.5px] text-[var(--text-muted)] mt-1">
            {HISTORY.length} completed deliveries
          </p>
        </div>

        <div className="flex items-center bg-[var(--surface)] border border-[var(--border)] rounded-full px-4 py-2.5 w-full sm:w-72">
          <SearchIcon className="w-4 h-4 text-[var(--text-dim)] flex-shrink-0" />
          <input
            type="text"
            placeholder="Search history..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full ml-2.5 bg-transparent outline-none text-[13px] text-[var(--text)] placeholder-[var(--text-dim)]"
          />
        </div>
      </div>

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Earned", value: `KES ${totalEarnings.toLocaleString()}`, accent: "bg-[var(--accent-soft)] text-[var(--accent-fg)]",     emoji: "💵" },
          { label: "Deliveries",   value: String(HISTORY.length),                  accent: "bg-[var(--highlight-soft)] text-[var(--highlight-fg)]", emoji: "📦" },
          { label: "Avg. Rating",  value: avgRating,                               accent: "bg-[var(--accent-soft)] text-[var(--accent-fg)]",     emoji: "⭐" },
          { label: "On-Time Rate", value: "97%",                                   accent: "bg-[var(--highlight-soft)] text-[var(--highlight-fg)]", emoji: "⏱️" },
        ].map((c) => (
          <div key={c.label} className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-5">
            <div className={`w-11 h-11 rounded-2xl ${c.accent} flex items-center justify-center text-lg mb-3`}>
              {c.emoji}
            </div>
            <p className="font-display text-xl font-bold text-[var(--text)] tracking-tight">{c.value}</p>
            <p className="text-[12px] text-[var(--text-muted)] mt-1 font-medium">{c.label}</p>
          </div>
        ))}
      </section>

      <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-2 rounded-full text-[12.5px] font-semibold whitespace-nowrap transition-all ${
              tab === t.id
                ? "bg-[var(--brand)] text-[var(--brand-fg)]"
                : "bg-[var(--surface)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border-strong)]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl overflow-hidden">
        {filtered.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-[13px] text-[var(--text-muted)]">No deliveries match your filters.</p>
          </div>
        ) : (
          filtered.map((d, i) => (
            <div
              key={d.id}
              className={`flex items-center gap-4 px-5 py-4 hover:bg-[var(--surface-2)] transition-colors ${
                i < filtered.length - 1 ? "border-b border-[var(--border)]" : ""
              }`}
            >
              <span className="w-11 h-11 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-xl flex-shrink-0">
                {d.emoji}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-[13.5px] font-semibold text-[var(--text)] truncate">
                    {d.product} · {d.qty}
                  </p>
                  <span className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-[var(--accent-soft)] text-[var(--accent-fg)] text-[10px] font-bold">
                    <CheckIcon className="w-2.5 h-2.5" /> Done
                  </span>
                </div>
                <p className="text-[11.5px] text-[var(--text-dim)] mt-0.5 truncate">
                  #{d.id} · {d.customer} · {d.drop}
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-0.5 flex-shrink-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className={`w-3 h-3 ${i < d.rating ? "text-[var(--highlight)]" : "text-[var(--text-dim)] opacity-30"}`} />
                ))}
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-[13px] font-bold text-[var(--accent-fg)]">KES {d.payout}</p>
                <p className="text-[11px] text-[var(--text-dim)]">{d.date} · {d.time}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DeliveryHistory;