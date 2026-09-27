import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
  </svg>
);
const MapPinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const PhoneIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2C9.6 22 2 14.4 2 6a2 2 0 0 1 2-2z" />
  </svg>
);
const NavigationIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 11 19-9-9 19-2-8-8-2z" />
  </svg>
);

const DELIVERIES = [
  {
    id: "AGS-2941", type: "wholesale", product: "Hass Avocado", qty: "120 kg", emoji: "🥑",
    pickup: "Kiambu Fresh Farms, Kiambu", drop: "Westlands Market, Nairobi",
    customer: "Nairobi Grocers Ltd", phone: "+254 712 345 678",
    eta: "10:30 AM", distance: "12.4 km", status: "In Transit", payout: 850, priority: "high",
  },
  {
    id: "AGS-2942", type: "consumer", product: "Fresh Sukuma Wiki", qty: "12 bunches", emoji: "🥬",
    pickup: "Limuru Family Farm, Limuru", drop: "Kikuyu Town, Kiambu",
    customer: "Wanjiku Kamau", phone: "+254 720 111 222",
    eta: "11:15 AM", distance: "8.9 km", status: "Picked up", payout: 320, priority: "normal",
  },
  {
    id: "AGS-2943", type: "wholesale", product: "Dairy Meal (50kg bags)", qty: "20 bags", emoji: "🌾",
    pickup: "Eldoret Feeds Ltd, Eldoret", drop: "Industrial Area, Nairobi",
    customer: "Kenya Feeds Distributors", phone: "+254 733 444 555",
    eta: "1:45 PM", distance: "22.1 km", status: "Assigned", payout: 1650, priority: "high",
  },
  {
    id: "AGS-2944", type: "consumer", product: "Red Tomatoes", qty: "30 kg", emoji: "🍅",
    pickup: "Nakuru Green Growers, Nakuru", drop: "Karen, Nairobi",
    customer: "Joseph Mwangi", phone: "+254 701 987 654",
    eta: "3:00 PM", distance: "14.2 km", status: "Assigned", payout: 540, priority: "normal",
  },
];

const STATUSES = {
  Assigned:    { color: "bg-[var(--surface-3)] text-[var(--text-muted)]",       label: "Assigned" },
  "Picked up": { color: "bg-[var(--accent-soft)] text-[var(--accent-fg)]",       label: "Picked up" },
  "In Transit":{ color: "bg-[var(--highlight-soft)] text-[var(--highlight-fg)]", label: "In Transit" },
  Delivered:   { color: "bg-emerald-50 text-emerald-700",                         label: "Delivered" },
};

const ActiveDeliveries = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("all");
  const [search, setSearch] = useState("");

  const tabs = [
    { id: "all",       label: "All",       count: DELIVERIES.length },
    { id: "wholesale", label: "Wholesale", count: DELIVERIES.filter((d) => d.type === "wholesale").length },
    { id: "consumer",  label: "Consumer",  count: DELIVERIES.filter((d) => d.type === "consumer").length },
  ];

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return DELIVERIES.filter((d) => {
      const matchTab = tab === "all" || d.type === tab;
      const matchSearch =
        !q ||
        d.id.toLowerCase().includes(q) ||
        d.product.toLowerCase().includes(q) ||
        d.customer.toLowerCase().includes(q) ||
        d.drop.toLowerCase().includes(q);
      return matchTab && matchSearch;
    });
  }, [tab, search]);

  const nextLabel = (status) => {
    if (status === "Assigned") return "Confirm Pickup";
    if (status === "Picked up") return "Start Trip";
    if (status === "In Transit") return "Mark Delivered";
    return null;
  };

  return (
    <div className="font-body">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">
            Active Deliveries
          </h1>
          <p className="text-[13.5px] text-[var(--text-muted)] mt-1">
            Manage and complete your assigned trips
          </p>
        </div>

        <div className="flex items-center bg-[var(--surface)] border border-[var(--border)] rounded-full px-4 py-2.5 w-full sm:w-72">
          <SearchIcon className="w-4 h-4 text-[var(--text-dim)] flex-shrink-0" />
          <input
            type="text"
            placeholder="Search by ID, product or customer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full ml-2.5 bg-transparent outline-none text-[13px] text-[var(--text)] placeholder-[var(--text-dim)]"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
        {tabs.map((t) => (
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
              {t.count}
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-10 sm:p-16 text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-3xl mb-5">
            📦
          </div>
          <h2 className="font-display text-lg font-bold text-[var(--text)]">No active deliveries</h2>
          <p className="text-[13px] text-[var(--text-muted)] mt-2">
            New deliveries will appear here as they're assigned.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((d) => (
            <article
              key={d.id}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl overflow-hidden hover:border-[var(--border-strong)] transition-colors"
            >
              <header className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-[var(--border)] bg-[var(--surface-2)]">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-xl flex-shrink-0">
                    {d.emoji}
                  </span>
                  <div>
                    <p className="font-display font-bold text-[14px] text-[var(--text)] tracking-tight">
                      {d.product} · {d.qty}
                    </p>
                    <p className="text-[11.5px] text-[var(--text-dim)]">
                      #{d.id} · {d.type === "wholesale" ? "Wholesale" : "Consumer"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {d.priority === "high" && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--danger)] bg-[var(--danger-soft)] px-2 py-1 rounded-full">
                      Priority
                    </span>
                  )}
                  <span className={`px-3 py-1 rounded-full text-[11.5px] font-bold ${STATUSES[d.status]?.color || ""}`}>
                    {STATUSES[d.status]?.label || d.status}
                  </span>
                </div>
              </header>

              <div className="grid sm:grid-cols-2 gap-4 px-5 py-4">
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[var(--accent-soft)] text-[var(--accent-fg)] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">
                    FROM
                  </span>
                  <div className="min-w-0">
                    <p className="text-[12.5px] font-semibold text-[var(--text)] leading-snug">{d.pickup}</p>
                    <p className="text-[11px] text-[var(--text-dim)] mt-0.5">Pickup point</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[var(--highlight-soft)] text-[var(--highlight-fg)] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">
                    TO
                  </span>
                  <div className="min-w-0">
                    <p className="text-[12.5px] font-semibold text-[var(--text)] leading-snug">{d.drop}</p>
                    <p className="text-[11px] text-[var(--text-dim)] mt-0.5">{d.customer} · {d.phone}</p>
                  </div>
                </div>
              </div>

              <footer className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-t border-[var(--border)] bg-[var(--surface-2)]">
                <div className="flex items-center gap-4 text-[12px] text-[var(--text-muted)]">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPinIcon className="w-3.5 h-3.5 text-[var(--text-dim)]" />
                    {d.distance}
                  </span>
                  <span className="text-[var(--text-dim)]">·</span>
                  <span className="font-semibold text-[var(--text)]">ETA {d.eta}</span>
                  <span className="text-[var(--text-dim)]">·</span>
                  <span className="font-semibold text-[var(--accent-fg)]">KES {d.payout}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    aria-label="Call customer"
                    className="w-9 h-9 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-fg)] hover:border-[var(--border-strong)] transition-colors"
                  >
                    <PhoneIcon />
                  </button>
                  <button
                    onClick={() => navigate("../tracking")}
                    className="inline-flex items-center gap-1.5 bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] text-[12.5px] font-semibold px-3.5 py-2 rounded-full hover:bg-[var(--surface-3)] transition-colors"
                  >
                    <NavigationIcon className="w-3.5 h-3.5" />
                    Navigate
                  </button>
                  {d.status !== "Delivered" && (
                    <button className="inline-flex items-center gap-1.5 bg-[var(--brand)] text-[var(--brand-fg)] text-[12.5px] font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
                      {nextLabel(d.status)}
                    </button>
                  )}
                </div>
              </footer>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActiveDeliveries;