import { Link, useNavigate } from "react-router-dom";

const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const SproutIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V10" /><path d="M12 10C12 6 9 3 4 3c0 5 3 7 8 7Z" />
    <path d="M12 13c0-3.5 2.5-6 7-6 0 4.5-3 6-7 6Z" />
  </svg>
);
const OrdersIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
  </svg>
);
const WalletIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 12V8a2 2 0 0 0-2-2H4a2 2 0 0 0 0 4h16v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6" />
    <circle cx="16" cy="12" r="1" fill="currentColor" />
  </svg>
);
const StarIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const MapPinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const METRICS = [
  { label: "Active Listings", value: "18",          change: "3 running low on stock", icon: SproutIcon, accent: "bg-[var(--accent-soft)] text-[var(--accent-fg)]" },
  { label: "New Orders",      value: "6",           change: "2 awaiting confirmation", icon: OrdersIcon, accent: "bg-[var(--highlight-soft)] text-[var(--highlight-fg)]" },
  { label: "This Week",       value: "KES 42,180",  change: "+22% vs last week",      icon: WalletIcon, accent: "bg-[var(--accent-soft)] text-[var(--accent-fg)]" },
  { label: "Buyer Rating",    value: "4.9",         change: "Based on 214 reviews",   icon: StarIcon,   accent: "bg-[var(--highlight-soft)] text-[var(--highlight-fg)]" },
];

const ORDERS = [
  { id: "AGS-3102", buyer: "Nairobi Grocers Ltd", product: "Hass Avocado", qty: "120 kg", emoji: "🥑", total: 14400, status: "Pending", statusColor: "bg-[var(--surface-3)] text-[var(--text-muted)]", placed: "12 min ago" },
  { id: "AGS-3098", buyer: "Wanjiku Kamau",        product: "Fresh Sukuma Wiki", qty: "12 bunches", emoji: "🥬", total: 480, status: "Confirmed", statusColor: "bg-[var(--accent-soft)] text-[var(--accent-fg)]", placed: "1h ago" },
  { id: "AGS-3095", buyer: "Kenya Feeds Distributors", product: "Dry Maize", qty: "500 kg", emoji: "🌽", total: 22500, status: "Ready", statusColor: "bg-[var(--highlight-soft)] text-[var(--highlight-fg)]", placed: "3h ago" },
];

const TOP_PRODUCTS = [
  { name: "Hass Avocado", sold: 142, revenue: 17040, emoji: "🥑" },
  { name: "Red Tomatoes", sold: 98,  revenue: 8330,  emoji: "🍅" },
  { name: "Fresh Milk",   sold: 210, revenue: 12600, emoji: "🥛" },
];

const FarmerHome = () => {
  const navigate = useNavigate();

  return (
    <div className="font-body space-y-6">
      <section className="relative overflow-hidden rounded-3xl bg-[var(--brand)] px-6 sm:px-8 py-7 sm:py-9">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[var(--highlight)] opacity-15 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 w-64 h-64 rounded-full bg-[var(--accent)] opacity-10 blur-3xl" />

        <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="max-w-lg">
            <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.15em] text-[var(--highlight)] mb-2">
              <span className="w-5 h-px bg-[var(--highlight)]/50" />
              Good morning
            </span>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--brand-fg)] tracking-tight leading-tight">
              Karibu, Wanjiru 🌾
            </h1>
            <p className="text-[13.5px] text-[var(--brand-fg)]/70 mt-2 leading-relaxed">
              You have <span className="font-bold text-[var(--brand-fg)]">6 new orders</span> and{" "}
              <span className="font-bold text-[var(--brand-fg)]">3 listings</span> running low on stock.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <button onClick={() => navigate("orders")} className="inline-flex items-center gap-2 bg-[var(--highlight)] text-[var(--highlight-fg)] font-semibold text-[13px] px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity">
                View Orders
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => navigate("products")} className="inline-flex items-center gap-2 border border-[var(--brand-fg)]/25 text-[var(--brand-fg)] font-semibold text-[13px] px-5 py-2.5 rounded-full hover:bg-[var(--brand-fg)]/10 transition-colors">
                Add Listing
              </button>
            </div>
          </div>

          <div className="hidden sm:flex items-center justify-center w-24 h-24 rounded-3xl bg-[var(--brand-fg)]/10 border border-[var(--brand-fg)]/15 text-5xl flex-shrink-0">
            🌾
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {METRICS.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.label} className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-5 hover:shadow-[0_20px_45px_-25px_rgba(20,60,35,0.3)] hover:-translate-y-0.5 transition-all duration-300">
              <div className={`w-11 h-11 rounded-2xl ${m.accent} flex items-center justify-center mb-4`}>
                <Icon className="w-5 h-5" />
              </div>
              <p className="font-display text-2xl font-bold text-[var(--text)] tracking-tight">{m.value}</p>
              <p className="text-[12.5px] font-semibold text-[var(--text-muted)] mt-1">{m.label}</p>
              <p className="text-[11px] text-[var(--text-dim)] mt-0.5">{m.change}</p>
            </div>
          );
        })}
      </section>

      <section className="grid xl:grid-cols-[1.35fr_1fr] gap-6">
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-5 sm:p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-display text-lg font-bold text-[var(--text)] tracking-tight">Recent Orders</h2>
              <p className="text-[12.5px] text-[var(--text-dim)] mt-0.5">Latest purchases from buyers</p>
            </div>
            <Link to="orders" className="group inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[var(--accent-fg)] hover:underline">
              View all
              <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="space-y-2">
            {ORDERS.map((order) => (
              <div key={order.id} className="flex items-center gap-4 p-3.5 rounded-2xl border border-transparent hover:border-[var(--border)] hover:bg-[var(--surface-2)] transition-all cursor-pointer">
                <span className="w-11 h-11 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-xl flex-shrink-0">
                  {order.emoji}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[13.5px] font-semibold text-[var(--text)] truncate">{order.product} · {order.qty}</p>
                  <p className="text-[11.5px] text-[var(--text-dim)] mt-0.5 truncate">#{order.id} · {order.buyer}</p>
                </div>
                <div className="hidden sm:block text-right flex-shrink-0">
                  <p className="text-[13px] font-bold text-[var(--accent-fg)]">KES {order.total.toLocaleString()}</p>
                  <p className="text-[11px] text-[var(--text-dim)]">{order.placed}</p>
                </div>
                <span className={`hidden md:inline-flex px-2.5 py-1 rounded-full text-[11px] font-bold flex-shrink-0 ${order.statusColor}`}>
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-5 sm:p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-display text-lg font-bold text-[var(--text)] tracking-tight">Top Products</h2>
              <p className="text-[12.5px] text-[var(--text-dim)] mt-0.5">Your best sellers this month</p>
            </div>
          </div>

          <div className="space-y-3">
            {TOP_PRODUCTS.map((p, i) => (
              <div key={p.name} className="flex items-center gap-4 p-3.5 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)]">
                <span className="w-11 h-11 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-xl flex-shrink-0">
                  {p.emoji}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[13.5px] font-semibold text-[var(--text)] truncate">{p.name}</p>
                  <p className="text-[11.5px] text-[var(--text-dim)] mt-0.5">{p.sold} sold this month</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-[13px] font-bold text-[var(--accent-fg)]">KES {p.revenue.toLocaleString()}</p>
                  <p className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--text-dim)] mt-0.5">#{i + 1}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-5 border-t border-[var(--border)] grid grid-cols-2 gap-3">
            <div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-2xl p-3.5">
              <p className="text-[10px] uppercase tracking-wider text-[var(--text-dim)] font-bold mb-1">Avg. order</p>
              <p className="text-[15px] font-display font-bold text-[var(--text)]">KES 3,420</p>
            </div>
            <div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-2xl p-3.5">
              <p className="text-[10px] uppercase tracking-wider text-[var(--text-dim)] font-bold mb-1">Fulfilment</p>
              <p className="text-[15px] font-display font-bold text-[var(--text)]">96%</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid sm:grid-cols-3 gap-4">
        {[
          { label: "Add Listing",     desc: "List a new product for sale",   emoji: "🌱", to: "products" },
          { label: "Check Inventory", desc: "Update stock levels",           emoji: "📦", to: "inventory" },
          { label: "View Payouts",    desc: "See your earnings and schedule", emoji: "💵", to: "payments" },
        ].map((a) => (
          <button
            key={a.label}
            onClick={() => navigate(a.to)}
            className="group text-left bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-5 hover:border-[var(--border-strong)] hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-25px_rgba(20,60,35,0.3)] transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="w-12 h-12 rounded-2xl bg-[var(--accent-soft)] text-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {a.emoji}
              </span>
              <ArrowRightIcon className="w-4 h-4 text-[var(--text-dim)] group-hover:translate-x-0.5 transition-transform" />
            </div>
            <p className="font-display font-bold text-[15px] text-[var(--text)] leading-tight">{a.label}</p>
            <p className="text-[12.5px] text-[var(--text-muted)] mt-1 leading-relaxed">{a.desc}</p>
          </button>
        ))}
      </section>
    </div>
  );
};

export default FarmerHome;