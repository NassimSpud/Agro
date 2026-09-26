import { Link, useNavigate } from "react-router-dom";

// ======================== Icons ========================
const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const PackageIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m7.5 4.27 9 5.15" />
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
  </svg>
);
const TruckIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="6" width="14" height="11" rx="1.5" />
    <path d="M15 10h4l3 3v4h-7z" />
    <circle cx="6" cy="19" r="1.6" /><circle cx="17.5" cy="19" r="1.6" />
  </svg>
);
const WalletIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 12V8a2 2 0 0 0-2-2H4a2 2 0 0 0 0 4h16v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6" />
    <circle cx="16" cy="12" r="1" fill="currentColor" />
  </svg>
);
const HeartIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z" />
  </svg>
);
const StarIcon = ({ className = "w-3 h-3" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const SproutIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V10" />
    <path d="M12 10C12 6 9 3 4 3c0 5 3 7 8 7Z" />
    <path d="M12 13c0-3.5 2.5-6 7-6 0 4.5-3 6-7 6Z" />
  </svg>
);

// ======================== Data ========================
const METRICS = [
  { label: "Active Orders", value: "3",          change: "1 arriving today",       icon: PackageIcon, accent: "bg-[var(--accent-soft)] text-[var(--accent-fg)]" },
  { label: "Total Spent",   value: "KES 84,250", change: "+12% vs last month",     icon: WalletIcon,  accent: "bg-[var(--highlight-soft)] text-[var(--highlight-fg)]" },
  { label: "In Transit",    value: "2",          change: "Delivering soon",        icon: TruckIcon,   accent: "bg-[var(--accent-soft)] text-[var(--accent-fg)]" },
  { label: "Favorites",     value: "14",         change: "3 new this week",        icon: HeartIcon,   accent: "bg-[var(--danger-soft)] text-[var(--danger)]" },
];

const RECENT_ORDERS = [
  { id: "AGS-2941", product: "Hass Avocado",     emoji: "🥑", qty: "120 kg",   price: 14400, status: "In Transit", statusStyle: "bg-[var(--highlight-soft)] text-[var(--highlight-fg)]", date: "Today, 9:15 AM" },
  { id: "AGS-2938", product: "Organic Tomatoes", emoji: "🍅", qty: "80 kg",    price: 6800,  status: "Delivered",  statusStyle: "bg-[var(--accent-soft)] text-[var(--accent-fg)]",     date: "Yesterday, 4:30 PM" },
  { id: "AGS-2935", product: "Dairy Meal (50kg)", emoji: "🌾", qty: "10 bags", price: 22000, status: "Processing", statusStyle: "bg-[var(--surface-3)] text-[var(--text-muted)]",     date: "Yesterday, 11:00 AM" },
];

const RECOMMENDED = [
  { name: "Hass Avocado", price: 120,  unit: "kg",   emoji: "🥑", seller: "Kiambu Fresh Farms",   rating: 4.9, tag: "Top Rated" },
  { name: "Red Tomatoes", price: 85,   unit: "kg",   emoji: "🍅", seller: "Nakuru Green Growers", rating: 4.7, tag: "Fresh" },
  { name: "Dry Maize",    price: 45,   unit: "kg",   emoji: "🌽", seller: "Kitale Grain Hub",     rating: 4.8, tag: "Bulk Deal" },
  { name: "Dairy Meal",   price: 2200, unit: "50kg", emoji: "🌾", seller: "Eldoret Feeds Ltd",    rating: 4.6, tag: "Best Seller" },
];

const CATEGORIES = [
  { name: "Fruits",     emoji: "🍎", to: "/buyerdashboard/categories/fruits" },
  { name: "Vegetables", emoji: "🥬", to: "/buyerdashboard/categories/vegetables" },
  { name: "Dairy",      emoji: "🥛", to: "/buyerdashboard/categories/dairy" },
  { name: "Grains",     emoji: "🌾", to: "/buyerdashboard/categories" },
];

const KES = (n) => `KES ${n.toLocaleString()}`;

// ======================== Component ========================
const BuyerHome = () => {
  const navigate = useNavigate();

  return (
    <div className="font-body space-y-6">
      {/* ================= Welcome hero ================= */}
      <section className="relative overflow-hidden rounded-3xl bg-[var(--brand)] px-6 sm:px-8 py-7 sm:py-9">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[var(--highlight)] opacity-15 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 w-64 h-64 rounded-full bg-[var(--accent)] opacity-10 blur-3xl" />

        <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="max-w-lg">
            <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.15em] text-[var(--highlight)] mb-2">
              <span className="w-5 h-px bg-[var(--highlight)]/50" />
              Welcome back
            </span>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--brand-fg)] tracking-tight leading-tight">
              Good morning, Wanjiku 👋
            </h1>
            <p className="text-[13.5px] text-[var(--brand-fg)]/70 mt-2 leading-relaxed">
              You have <span className="font-bold text-[var(--brand-fg)]">3 active orders</span> and{" "}
              <span className="font-bold text-[var(--brand-fg)]">1 delivery</span> arriving today.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <button
                onClick={() => navigate("/buyerdashboard/marketplace")}
                className="inline-flex items-center gap-2 bg-[var(--highlight)] text-[var(--highlight-fg)] font-semibold text-[13px] px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Browse Marketplace
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => navigate("/buyerdashboard/orders")}
                className="inline-flex items-center gap-2 border border-[var(--brand-fg)]/25 text-[var(--brand-fg)] font-semibold text-[13px] px-5 py-2.5 rounded-full hover:bg-[var(--brand-fg)]/10 transition-colors"
              >
                Track Orders
              </button>
            </div>
          </div>

          <div className="hidden sm:flex items-center justify-center w-24 h-24 rounded-3xl bg-[var(--brand-fg)]/10 border border-[var(--brand-fg)]/15 text-5xl flex-shrink-0">
            🌾
          </div>
        </div>
      </section>

      {/* ================= Metrics ================= */}
      <section className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {METRICS.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.label}
              className="group bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-5 hover:shadow-[0_20px_45px_-25px_rgba(20,60,35,0.3)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className={`w-11 h-11 rounded-2xl ${m.accent} flex items-center justify-center mb-4`}>
                <Icon className="w-5 h-5" />
              </div>
              <p className="font-display text-2xl font-bold text-[var(--text)] tracking-tight">
                {m.value}
              </p>
              <p className="text-[12.5px] font-semibold text-[var(--text-muted)] mt-1">
                {m.label}
              </p>
              <p className="text-[11px] text-[var(--text-dim)] mt-0.5">{m.change}</p>
            </div>
          );
        })}
      </section>

      {/* ================= Recent orders + Recommended ================= */}
      <section className="grid xl:grid-cols-[1.35fr_1fr] gap-6">
        {/* Recent Orders */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-5 sm:p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-display text-lg font-bold text-[var(--text)] tracking-tight">
                Recent Orders
              </h2>
              <p className="text-[12.5px] text-[var(--text-dim)] mt-0.5">
                Your latest purchases
              </p>
            </div>
            <Link
              to="/buyerdashboard/orders"
              className="group inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[var(--accent-fg)] hover:underline"
            >
              View all
              <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="space-y-2">
            {RECENT_ORDERS.map((order) => (
              <div
                key={order.id}
                className="flex items-center gap-4 p-3.5 rounded-2xl border border-transparent hover:border-[var(--border)] hover:bg-[var(--surface-2)] transition-all cursor-pointer"
              >
                <span className="w-11 h-11 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-xl flex-shrink-0">
                  {order.emoji}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[13.5px] font-semibold text-[var(--text)] truncate">
                    {order.product}
                  </p>
                  <p className="text-[11.5px] text-[var(--text-dim)] mt-0.5 truncate">
                    #{order.id} · {order.qty}
                  </p>
                </div>
                <div className="hidden sm:block text-right flex-shrink-0">
                  <p className="text-[13px] font-bold text-[var(--text)]">
                    {KES(order.price)}
                  </p>
                  <p className="text-[11px] text-[var(--text-dim)]">{order.date}</p>
                </div>
                <span className={`hidden md:inline-flex px-2.5 py-1 rounded-full text-[11px] font-bold flex-shrink-0 ${order.statusStyle}`}>
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-5 sm:p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-display text-lg font-bold text-[var(--text)] tracking-tight">
                Recommended
              </h2>
              <p className="text-[12.5px] text-[var(--text-dim)] mt-0.5">
                Based on your history
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {RECOMMENDED.map((item) => (
              <div
                key={item.name}
                className="group bg-[var(--surface-2)] border border-[var(--border)] rounded-2xl p-4 hover:shadow-[0_18px_40px_-22px_rgba(20,60,35,0.3)] hover:-translate-y-0.5 hover:border-[var(--border-strong)] transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    {item.emoji}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--highlight-fg)] bg-[var(--highlight-soft)] px-2 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <p className="text-[13px] font-bold text-[var(--text)] leading-tight">
                  {item.name}
                </p>
                <p className="text-[11px] text-[var(--text-dim)] mt-1 truncate">
                  {item.seller}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-[12.5px] font-bold text-[var(--accent-fg)]">
                    KES {item.price}
                    <span className="text-[10px] font-medium text-[var(--text-dim)]"> /{item.unit}</span>
                  </p>
                  <span className="flex items-center gap-0.5 text-[11px] font-bold text-[var(--highlight-fg)]">
                    <StarIcon className="w-3 h-3 text-[var(--highlight)]" />
                    {item.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Categories + Quick reorder ================= */}
      <section className="grid lg:grid-cols-[1.35fr_1fr] gap-6">
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-5 sm:p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-display text-lg font-bold text-[var(--text)] tracking-tight">
                Shop by Category
              </h2>
              <p className="text-[12.5px] text-[var(--text-dim)] mt-0.5">
                Jump straight to what you need
              </p>
            </div>
            <Link
              to="/buyerdashboard/categories"
              className="group inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[var(--accent-fg)] hover:underline"
            >
              All categories
              <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.name}
                to={cat.to}
                className="group flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] transition-all"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform">
                  {cat.emoji}
                </span>
                <span className="text-[12px] font-semibold text-[var(--text)] group-hover:text-[var(--accent-fg)]">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-[var(--brand)] p-6 sm:p-7 flex flex-col justify-between">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[var(--highlight)] opacity-15 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.15em] text-[var(--highlight)] mb-3">
              <span className="w-4 h-px bg-[var(--highlight)]/50" />
              Quick reorder
            </span>
            <div className="w-12 h-12 rounded-2xl bg-[var(--brand-fg)]/10 border border-[var(--brand-fg)]/15 flex items-center justify-center text-[var(--brand-fg)] mb-4">
              <SproutIcon className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-[var(--brand-fg)] leading-tight">
              Need your usual dairy meal?
            </h3>
            <p className="text-[13px] text-[var(--brand-fg)]/65 mt-2 leading-relaxed">
              You've ordered from <span className="font-semibold text-[var(--brand-fg)]">Eldoret Feeds Ltd</span> four times. Reorder in one tap.
            </p>
          </div>

          <button
            onClick={() => navigate("/buyerdashboard/marketplace")}
            className="relative mt-5 inline-flex items-center justify-center gap-2 bg-[var(--highlight)] text-[var(--highlight-fg)] font-bold text-[13px] px-5 py-3 rounded-full hover:opacity-90 transition-opacity self-start"
          >
            Reorder now
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* ================= Trust strip ================= */}
      <section className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 sm:p-7">
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {[
            { title: "Escrow Protected",   desc: "Funds released only on delivery confirmation", icon: "🛡️" },
            { title: "Nationwide Delivery", desc: "Cold-chain logistics across all 47 counties",   icon: "🚚" },
            { title: "Verified Sellers",    desc: "Every farmer ID-verified with farm photos",     icon: "📍" },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <span className="w-11 h-11 rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-fg)] flex items-center justify-center text-lg flex-shrink-0">
                {item.icon}
              </span>
              <div>
                <p className="text-[13.5px] font-bold text-[var(--text)]">{item.title}</p>
                <p className="text-[12px] text-[var(--text-muted)] mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BuyerHome;