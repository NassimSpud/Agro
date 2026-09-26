import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

// ======================== Icons ========================
const SearchIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
  </svg>
);

const PackageIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m7.5 4.27 9 5.15" />
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
  </svg>
);

const TruckIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="6" width="14" height="11" rx="1.5" />
    <path d="M15 10h4l3 3v4h-7z" />
    <circle cx="6" cy="19" r="1.6" /><circle cx="17.5" cy="19" r="1.6" />
  </svg>
);

const CheckIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const ClockIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
  </svg>
);

const XIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const RefreshIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
    <path d="M3 21v-5h5" />
  </svg>
);

const MapPinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const BoxIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </svg>
);

// ======================== Status Config ========================
const STATUS = {
  Processing: {
    icon: <ClockIcon className="w-3.5 h-3.5" />,
    bg: "rgba(59,130,246,0.12)",
    color: "#3B82F6",
    label: "Processing",
  },
  "In Transit": {
    icon: <TruckIcon className="w-3.5 h-3.5" />,
    bg: "rgba(245,158,11,0.14)",
    color: "#F59E0B",
    label: "In Transit",
  },
  Delivered: {
    icon: <CheckIcon className="w-3.5 h-3.5" />,
    bg: "rgba(34,197,94,0.14)",
    color: "#16A34A",
    label: "Delivered",
  },
  Cancelled: {
    icon: <XIcon className="w-3.5 h-3.5" />,
    bg: "rgba(239,68,68,0.12)",
    color: "#EF4444",
    label: "Cancelled",
  },
};

const StatusBadge = ({ status }) => {
  const s = STATUS[status] || STATUS.Processing;
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11.5px] font-bold"
      style={{ background: s.bg, color: s.color }}
    >
      {s.icon}
      {s.label}
    </span>
  );
};

// ======================== Mock Data ========================
const MOCK_ORDERS = [
  {
    id: "AGS-2941",
    date: "Today, 9:15 AM",
    status: "In Transit",
    total: 14400,
    estimated: "Tomorrow, 10 AM – 2 PM",
    destination: "Westlands, Nairobi",
    items: [
      { name: "Hass Avocado", emoji: "🥑", qty: 120, unit: "kg", price: 120, seller: "Kiambu Fresh Farms" },
    ],
  },
  {
    id: "AGS-2938",
    date: "Yesterday, 4:30 PM",
    status: "Delivered",
    total: 6800,
    estimated: "Delivered 2 days ago",
    destination: "Karen, Nairobi",
    items: [
      { name: "Red Tomatoes", emoji: "🍅", qty: 80, unit: "kg", price: 85, seller: "Nakuru Green Growers" },
    ],
  },
  {
    id: "AGS-2935",
    date: "Yesterday, 11:00 AM",
    status: "Processing",
    total: 22000,
    estimated: "Ships in 1–2 days",
    destination: "Eldoret, Uasin Gishu",
    items: [
      { name: "Dairy Meal (50kg)", emoji: "🌾", qty: 10, unit: "bags", price: 2200, seller: "Eldoret Feeds Ltd" },
    ],
  },
  {
    id: "AGS-2932",
    date: "3 days ago",
    status: "Delivered",
    total: 4250,
    estimated: "Delivered 1 day ago",
    destination: "Kikuyu, Kiambu",
    items: [
      { name: "Fresh Sukuma Wiki", emoji: "🥬", qty: 60, unit: "bunches", price: 40, seller: "Limuru Family Farm" },
      { name: "Organic Honey", emoji: "🍯", qty: 2, unit: "500ml", price: 850, seller: "Baringo Bee Keepers" },
    ],
  },
  {
    id: "AGS-2928",
    date: "5 days ago",
    status: "Cancelled",
    total: 3600,
    estimated: "Refund issued",
    destination: "Nakuru Town",
    items: [
      { name: "Dry Maize", emoji: "🌽", qty: 80, unit: "kg", price: 45, seller: "Kitale Grain Hub" },
    ],
  },
  {
    id: "AGS-2921",
    date: "1 week ago",
    status: "Delivered",
    total: 18700,
    estimated: "Delivered 4 days ago",
    destination: "Ruiru, Kiambu",
    items: [
      { name: "Grade A Avocado", emoji: "🥑", qty: 100, unit: "kg", price: 135, seller: "Kiambu Fresh Farms" },
      { name: "Red Tomatoes", emoji: "🍅", qty: 60, unit: "kg", price: 85, seller: "Nakuru Green Growers" },
    ],
  },
];

const KES = (n) => `KES ${n.toLocaleString()}`;

// ======================== Component ========================
const Orders = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filters = ["All", "Processing", "In Transit", "Delivered", "Cancelled"];

  const counts = useMemo(() => {
    const c = { All: MOCK_ORDERS.length };
    MOCK_ORDERS.forEach((o) => {
      c[o.status] = (c[o.status] || 0) + 1;
    });
    return c;
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return MOCK_ORDERS.filter((o) => {
      const matchStatus = filter === "All" || o.status === filter;
      const matchSearch =
        !q ||
        o.id.toLowerCase().includes(q) ||
        o.items.some((i) => i.name.toLowerCase().includes(q)) ||
        o.items.some((i) => i.seller.toLowerCase().includes(q));
      return matchStatus && matchSearch;
    });
  }, [filter, search]);

  return (
    <div className="font-body">
      {/* ===== Header ===== */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">
            My Orders
          </h1>
          <p className="text-[13.5px] text-[var(--text-muted)] mt-1">
            Track, manage and reorder your purchases
          </p>
        </div>

        <div className="flex items-center bg-[var(--surface)] border border-[var(--border)] rounded-full px-4 py-2.5 w-full sm:w-72">
          <SearchIcon className="w-4 h-4 text-[var(--text-dim)] flex-shrink-0" />
          <input
            type="text"
            placeholder="Search by order ID or product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full ml-2.5 bg-transparent outline-none text-[13px] text-[var(--text)] placeholder-[var(--text-dim)]"
          />
        </div>
      </div>

      {/* ===== Filter tabs ===== */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-5">
        {filters.map((f) => {
          const active = filter === f;
          const count = counts[f] || 0;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12.5px] font-semibold whitespace-nowrap transition-all ${
                active
                  ? "bg-[var(--brand)] text-[var(--brand-fg)]"
                  : "bg-[var(--surface)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border-strong)]"
              }`}
            >
              {f}
              <span
                className={`min-w-[20px] h-5 px-1.5 rounded-full text-[10.5px] font-bold flex items-center justify-center ${
                  active
                    ? "bg-[var(--highlight)] text-[var(--highlight-fg)]"
                    : "bg-[var(--surface-2)] text-[var(--text-dim)]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ===== Order list ===== */}
      {filtered.length === 0 ? (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-10 sm:p-16 text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-[var(--text-dim)] mb-5">
            <BoxIcon className="w-7 h-7" />
          </div>
          <h2 className="font-display text-xl font-bold text-[var(--text)]">No orders found</h2>
          <p className="text-[13px] text-[var(--text-muted)] mt-2 max-w-sm mx-auto">
            {search
              ? `Nothing matches "${search}". Try a different search term.`
              : `You don't have any ${filter.toLowerCase()} orders yet.`}
          </p>
          <button
            onClick={() => navigate("/buyerdashboard/marketplace")}
            className="mt-6 inline-flex items-center gap-2 bg-[var(--brand)] text-[var(--brand-fg)] font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Browse Marketplace
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((order) => (
            <article
              key={order.id}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl overflow-hidden hover:border-[var(--border-strong)] transition-colors"
            >
              {/* Header row */}
              <header className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-[var(--border)] bg-[var(--surface-2)]">
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="w-9 h-9 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--accent-fg)]">
                    <PackageIcon className="w-[18px] h-[18px]" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-[14px] text-[var(--text)] tracking-tight">
                      #{order.id}
                    </p>
                    <p className="text-[11.5px] text-[var(--text-dim)]">{order.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <StatusBadge status={order.status} />
                  <p className="hidden sm:block font-display font-bold text-[14px] text-[var(--text)]">
                    {KES(order.total)}
                  </p>
                </div>
              </header>

              {/* Items */}
              <div className="divide-y divide-[var(--border)]">
                {order.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 px-5 py-4">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-xl flex-shrink-0">
                      {item.emoji}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[13.5px] font-semibold text-[var(--text)] truncate">
                        {item.name}
                      </p>
                      <p className="text-[12px] text-[var(--text-dim)] mt-0.5 truncate">
                        {item.seller}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-[12px] text-[var(--text-muted)]">
                        {item.qty} {item.unit}
                      </p>
                      <p className="text-[12.5px] font-bold text-[var(--text)] mt-0.5">
                        {KES(item.price * item.qty)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <footer className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-t border-[var(--border)] bg-[var(--surface-2)]">
                <div className="flex items-center gap-4 text-[12px] text-[var(--text-muted)]">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPinIcon className="w-3.5 h-3.5 text-[var(--text-dim)]" />
                    {order.destination}
                  </span>
                  <span className="hidden sm:inline text-[var(--text-dim)]">·</span>
                  <span className="hidden sm:inline">{order.estimated}</span>
                </div>

                <div className="flex items-center gap-2">
                  {order.status === "In Transit" && (
                    <button
                      onClick={() => navigate("/buyerdashboard/tracking")}
                      className="inline-flex items-center gap-1.5 bg-[var(--brand)] text-[var(--brand-fg)] text-[12.5px] font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                    >
                      <TruckIcon className="w-3.5 h-3.5" />
                      Track
                    </button>
                  )}
                  {order.status === "Delivered" && (
                    <button className="inline-flex items-center gap-1.5 bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] text-[12.5px] font-semibold px-4 py-2 rounded-full hover:bg-[var(--surface-3)] transition-colors">
                      <RefreshIcon className="w-3.5 h-3.5" />
                      Reorder
                    </button>
                  )}
                  {order.status === "Processing" && (
                    <button className="inline-flex items-center gap-1.5 bg-[var(--surface)] border border-[var(--border)] text-[var(--danger)] text-[12.5px] font-semibold px-4 py-2 rounded-full hover:bg-[var(--danger-soft)] transition-colors">
                      Cancel
                    </button>
                  )}
                  <button className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-[var(--accent-fg)] hover:underline px-2">
                    Details
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </footer>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;