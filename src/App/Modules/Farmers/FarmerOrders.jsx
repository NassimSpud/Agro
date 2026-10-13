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
const XIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);
const MapPinIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const ORDERS = [
  { id: "AGS-3102", buyer: "Nairobi Grocers Ltd", product: "Hass Avocado", qty: "120 kg", emoji: "🥑", total: 14400, status: "Pending",   placed: "12 min ago", drop: "Westlands, Nairobi" },
  { id: "AGS-3101", buyer: "Grace Njeri",          product: "Red Tomatoes", qty: "25 kg",  emoji: "🍅", total: 2125,  status: "Pending",   placed: "28 min ago", drop: "Karen, Nairobi" },
  { id: "AGS-3098", buyer: "Wanjiku Kamau",        product: "Sukuma Wiki",  qty: "12 bunches", emoji: "🥬", total: 480, status: "Confirmed", placed: "1h ago",     drop: "Limuru, Kiambu" },
  { id: "AGS-3095", buyer: "Kenya Feeds Distributors", product: "Dry Maize", qty: "500 kg", emoji: "🌽", total: 22500, status: "Ready",     placed: "3h ago",     drop: "Industrial Area, Nairobi" },
  { id: "AGS-3092", buyer: "Kiambu Dairy Co-op",   product: "Fresh Milk",   qty: "40 litres", emoji: "🥛", total: 2400, status: "Delivered", placed: "Yesterday",  drop: "Kikuyu, Kiambu" },
  { id: "AGS-3089", buyer: "Joseph Mwangi",        product: "Passion Fruit", qty: "15 kg", emoji: "🍈", total: 2100,  status: "Cancelled", placed: "2 days ago",  drop: "Ruiru, Kiambu" },
];

const STATUSES = {
  Pending:   { color: "bg-[var(--surface-3)] text-[var(--text-muted)]" },
  Confirmed: { color: "bg-[var(--accent-soft)] text-[var(--accent-fg)]" },
  Ready:     { color: "bg-[var(--highlight-soft)] text-[var(--highlight-fg)]" },
  Delivered: { color: "bg-emerald-50 text-emerald-700" },
  Cancelled: { color: "bg-[var(--danger-soft)] text-[var(--danger)]" },
};

const TABS = [
  { id: "all",       label: "All" },
  { id: "Pending",   label: "Pending" },
  { id: "Confirmed", label: "Confirmed" },
  { id: "Ready",     label: "Ready" },
  { id: "Delivered", label: "Delivered" },
  { id: "Cancelled", label: "Cancelled" },
];

const FarmerOrders = () => {
  const [tab, setTab] = useState("all");
  const [search, setSearch] = useState("");

  const counts = useMemo(() => {
    const c = { all: ORDERS.length };
    ORDERS.forEach((o) => { c[o.status] = (c[o.status] || 0) + 1; });
    return c;
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return ORDERS.filter((o) => {
      const matchTab = tab === "all" || o.status === tab;
      const matchSearch = !q || o.id.toLowerCase().includes(q) || o.buyer.toLowerCase().includes(q) || o.product.toLowerCase().includes(q);
      return matchTab && matchSearch;
    });
  }, [tab, search]);

  return (
    <div className="font-body">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">Orders</h1>
          <p className="text-[13.5px] text-[var(--text-muted)] mt-1">Incoming orders from buyers across Kenya</p>
        </div>

        <div className="flex items-center bg-[var(--surface)] border border-[var(--border)] rounded-full px-4 py-2.5 w-full sm:w-72">
          <SearchIcon className="w-4 h-4 text-[var(--text-dim)] flex-shrink-0" />
          <input
            type="text"
            placeholder="Search by order ID, buyer or product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full ml-2.5 bg-transparent outline-none text-[13px] text-[var(--text)] placeholder-[var(--text-dim)]"
          />
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-3 mb-5">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12.5px] font-semibold whitespace-nowrap transition-all ${
              tab === t.id
                ? "bg-[var(--brand)] text-[var(--brand-fg)]"
                : "bg-[var(--surface)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border-strong)]"
            }`}
          >
            {t.label}
            <span className={`min-w-[20px] h-5 px-1.5 rounded-full text-[10.5px] font-bold flex items-center justify-center ${
              tab === t.id ? "bg-[var(--highlight)] text-[var(--highlight-fg)]" : "bg-[var(--surface-2)] text-[var(--text-dim)]"
            }`}>
              {counts[t.id] || 0}
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-12 text-center">
          <p className="text-[13px] text-[var(--text-muted)]">No orders match your filters.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((o) => (
            <article key={o.id} className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-5 hover:border-[var(--border-strong)] transition-colors">
              <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-[var(--border)]">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-xl flex-shrink-0">
                    {o.emoji}
                  </span>
                  <div>
                    <p className="font-display font-bold text-[14.5px] text-[var(--text)] tracking-tight">
                      {o.product} · {o.qty}
                    </p>
                    <p className="text-[11.5px] text-[var(--text-dim)] mt-0.5">
                      #{o.id} · {o.placed}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-[11.5px] font-bold ${STATUSES[o.status]?.color || ""}`}>
                    {o.status}
                  </span>
                  <p className="font-display font-bold text-[15px] text-[var(--accent-fg)]">KES {o.total.toLocaleString()}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 py-4">
                <div className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-[var(--accent-soft)] text-[var(--accent-fg)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="4" /><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="text-[12.5px] font-semibold text-[var(--text)] leading-snug">{o.buyer}</p>
                    <p className="text-[11px] text-[var(--text-dim)] mt-0.5">Buyer</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-[var(--highlight-soft)] text-[var(--highlight-fg)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPinIcon className="w-3 h-3" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[12.5px] font-semibold text-[var(--text)] leading-snug">{o.drop}</p>
                    <p className="text-[11px] text-[var(--text-dim)] mt-0.5">Delivery point</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-2 pt-4 border-t border-[var(--border)]">
                {o.status === "Pending" && (
                  <>
                    <button className="inline-flex items-center gap-1.5 border border-[var(--border)] text-[var(--text)] text-[12.5px] font-semibold px-4 py-2 rounded-full hover:bg-[var(--surface-2)] transition-colors">
                      <XIcon className="w-3.5 h-3.5" />
                      Decline
                    </button>
                    <button className="inline-flex items-center gap-1.5 bg-[var(--brand)] text-[var(--brand-fg)] text-[12.5px] font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
                      <CheckIcon className="w-3.5 h-3.5" />
                      Confirm Order
                    </button>
                  </>
                )}
                {o.status === "Confirmed" && (
                  <button className="inline-flex items-center gap-1.5 bg-[var(--brand)] text-[var(--brand-fg)] text-[12.5px] font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
                    Mark Ready for Pickup
                  </button>
                )}
                {o.status === "Ready" && (
                  <button className="inline-flex items-center gap-1.5 bg-[var(--brand)] text-[var(--brand-fg)] text-[12.5px] font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
                    Assign Delivery Rider
                  </button>
                )}
                <button className="text-[12.5px] font-semibold text-[var(--accent-fg)] hover:underline px-3">
                  View details
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default FarmerOrders;