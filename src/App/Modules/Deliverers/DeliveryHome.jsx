import { Link, useNavigate } from "react-router-dom";

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
const CheckIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="9" />
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
  { label: "Active Deliveries", value: "4",         change: "2 due this morning",  icon: PackageIcon, accent: "bg-[var(--accent-soft)] text-[var(--accent-fg)]" },
  { label: "Completed Today",    value: "7",         change: "On track",            icon: CheckIcon,   accent: "bg-[var(--highlight-soft)] text-[var(--highlight-fg)]" },
  { label: "Today's Earnings",   value: "KES 4,850", change: "+18% vs yesterday",   icon: WalletIcon,  accent: "bg-[var(--accent-soft)] text-[var(--accent-fg)]" },
  { label: "Driver Rating",      value: "4.9",       change: "Based on 142 trips",  icon: StarIcon,    accent: "bg-[var(--highlight-soft)] text-[var(--highlight-fg)]" },
];

const ACTIVE = [
  { id: "AGS-2941", type: "Wholesale", product: "Hass Avocado (120kg)",      emoji: "🥑", drop: "Westlands, Nairobi",      eta: "10:30 AM", status: "In Transit",  statusColor: "bg-[var(--highlight-soft)] text-[var(--highlight-fg)]", distance: "12.4 km" },
  { id: "AGS-2942", type: "Consumer",  product: "Fresh Sukuma Wiki (12 bunches)", emoji: "🥬", drop: "Kikuyu, Kiambu",     eta: "11:15 AM", status: "Picked up",  statusColor: "bg-[var(--accent-soft)] text-[var(--accent-fg)]",     distance: "8.9 km" },
  { id: "AGS-2943", type: "Wholesale", product: "Dairy Meal (20 bags)",       emoji: "🌾", drop: "Industrial Area, Nairobi", eta: "1:45 PM",  status: "Assigned",   statusColor: "bg-[var(--surface-3)] text-[var(--text-muted)]",       distance: "22.1 km" },
];

const DeliveryHome = () => {
  const navigate = useNavigate();

  return (
    <div className="font-body space-y-6">
      {/* Welcome hero */}
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
              Ready for today, James? 🚚
            </h1>
            <p className="text-[13.5px] text-[var(--brand-fg)]/70 mt-2 leading-relaxed">
              You have <span className="font-bold text-[var(--brand-fg)]">4 active deliveries</span> and{" "}
              <span className="font-bold text-[var(--brand-fg)]">2 pickups</span> scheduled this morning.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <button
                onClick={() => navigate("activedeliveries")}
                className="inline-flex items-center gap-2 bg-[var(--highlight)] text-[var(--highlight-fg)] font-semibold text-[13px] px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
              >
                View Deliveries
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => navigate("routes")}
                className="inline-flex items-center gap-2 border border-[var(--brand-fg)]/25 text-[var(--brand-fg)] font-semibold text-[13px] px-5 py-2.5 rounded-full hover:bg-[var(--brand-fg)]/10 transition-colors"
              >
                Plan Route
              </button>
            </div>
          </div>

          <div className="hidden sm:flex items-center justify-center w-24 h-24 rounded-3xl bg-[var(--brand-fg)]/10 border border-[var(--brand-fg)]/15 text-5xl flex-shrink-0">
            🚚
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {METRICS.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.label}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-5 hover:shadow-[0_20px_45px_-25px_rgba(20,60,35,0.3)] hover:-translate-y-0.5 transition-all duration-300"
            >
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

      {/* Today's deliveries */}
      <section className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-5 sm:p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="font-display text-lg font-bold text-[var(--text)] tracking-tight">
              Today's Deliveries
            </h2>
            <p className="text-[12.5px] text-[var(--text-dim)] mt-0.5">Your next three stops</p>
          </div>
          <Link
            to="activedeliveries"
            className="group inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[var(--accent-fg)] hover:underline"
          >
            View all
            <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="space-y-2">
          {ACTIVE.map((d) => (
            <div
              key={d.id}
              className="flex items-center gap-4 p-3.5 rounded-2xl border border-transparent hover:border-[var(--border)] hover:bg-[var(--surface-2)] transition-all cursor-pointer"
            >
              <span className="w-11 h-11 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-xl flex-shrink-0">
                {d.emoji}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-[13.5px] font-semibold text-[var(--text)] truncate">{d.product}</p>
                  <span className="hidden sm:inline-flex text-[10px] font-bold uppercase tracking-wider text-[var(--text-dim)] bg-[var(--surface-2)] px-2 py-0.5 rounded-full border border-[var(--border)]">
                    {d.type}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11.5px] text-[var(--text-dim)] mt-1">
                  <MapPinIcon className="w-3 h-3" />
                  <span className="truncate">{d.drop}</span>
                </div>
              </div>
              <div className="hidden sm:block text-right flex-shrink-0">
                <p className="text-[12.5px] font-bold text-[var(--text)]">{d.eta}</p>
                <p className="text-[11px] text-[var(--text-dim)]">{d.distance}</p>
              </div>
              <span className={`hidden md:inline-flex px-2.5 py-1 rounded-full text-[11px] font-bold flex-shrink-0 ${d.statusColor}`}>
                {d.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Quick actions */}
      <section className="grid sm:grid-cols-3 gap-4">
        {[
          { label: "Start Route",   desc: "Begin your planned trip",   emoji: "🗺️", to: "routes" },
          { label: "Scan Delivery", desc: "Confirm pickup or dropoff", emoji: "📦", to: "activedeliveries" },
          { label: "View Earnings", desc: "See your weekly payout",    emoji: "💵", to: "deliveryhistory" },
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

export default DeliveryHome;