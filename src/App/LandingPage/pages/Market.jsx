import { Link } from "react-router-dom";
import PublicPageShell from "./PublicPageShell";
import { MOCK_PRODUCTS } from "../../Modules/Buyers/Header/Cart/StoreContext";

const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const CATS = [
  { name: "Fruits",          emoji: "🍎", count: 142 },
  { name: "Vegetables",      emoji: "🥬", count: 98 },
  { name: "Grains & Cereals", emoji: "🌾", count: 87 },
  { name: "Dairy",           emoji: "🥛", count: 64 },
  { name: "Livestock",       emoji: "🐄", count: 41 },
  { name: "Seeds",           emoji: "🌱", count: 116 },
  { name: "Farm Tools",      emoji: "🛠️", count: 73 },
  { name: "Fertilizers",     emoji: "🧪", count: 52 },
];

const FEATURED = MOCK_PRODUCTS.slice(0, 8);

const Market = () => {
  return (
    <PublicPageShell>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-10">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--brand)] px-6 sm:px-10 lg:px-14 py-12 sm:py-16">
          <div className="absolute -top-24 -right-16 w-80 h-80 rounded-full bg-[var(--highlight)] opacity-15 blur-3xl" />
          <div className="absolute -bottom-28 -left-16 w-80 h-80 rounded-full bg-[var(--accent)] opacity-15 blur-3xl" />
          <div className="relative max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.18em] text-[var(--highlight)] mb-4">
              <span className="w-5 h-px bg-[var(--highlight)]/50" />
              The Market
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--brand-fg)] tracking-[-0.02em] leading-[1.1]">
              Fresh from Kenyan farms, every day
            </h1>
            <p className="text-[var(--brand-fg)]/70 mt-4 text-[15px] leading-relaxed max-w-lg">
              Over 2,500 listings from verified farmers across all 47 counties. Fair prices, zero middlemen, delivered to your door.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/marketplace"
                className="inline-flex items-center gap-2 bg-[var(--highlight)] text-[var(--highlight-fg)] font-semibold text-sm px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Browse Full Marketplace
                <ArrowRightIcon />
              </Link>
              <Link
                to="/services/verification"
                className="inline-flex items-center gap-2 border border-[var(--brand-fg)]/25 text-[var(--brand-fg)] font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-[var(--brand-fg)]/10 transition-colors"
              >
                How we verify sellers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">
              Shop by category
            </h2>
            <p className="text-[13.5px] text-[var(--text-muted)] mt-1">
              Everything the farm and family needs
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {CATS.map((c) => (
            <Link
              key={c.name}
              to={`/marketplace`}
              className="group bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-5 hover:border-[var(--border-strong)] hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl group-hover:scale-110 transition-transform">{c.emoji}</span>
                <span className="text-[10.5px] font-bold text-[var(--text-dim)] bg-[var(--surface-2)] px-2 py-0.5 rounded-full border border-[var(--border)]">
                  {c.count}
                </span>
              </div>
              <p className="font-display font-bold text-[14px] text-[var(--text)] leading-tight">
                {c.name}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">
              Trending this week
            </h2>
            <p className="text-[13.5px] text-[var(--text-muted)] mt-1">
              Popular picks from our community
            </p>
          </div>
          <Link
            to="/marketplace"
            className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--accent-fg)] hover:underline"
          >
            See all
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {FEATURED.map((p) => (
            <Link
              key={p._id}
              to="/marketplace"
              className="group bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden hover:shadow-[0_20px_45px_-25px_rgba(20,60,35,0.35)] hover:-translate-y-0.5 transition-all"
            >
              <div className="aspect-square bg-[var(--surface-2)] border-b border-[var(--border)] flex items-center justify-center text-[54px] group-hover:scale-110 transition-transform duration-500">
                {p.image}
              </div>
              <div className="p-4">
                <p className="font-display font-bold text-[13.5px] text-[var(--text)] truncate">
                  {p.name}
                </p>
                <p className="text-[11.5px] text-[var(--text-dim)] mt-1 truncate">
                  {p.seller}
                </p>
                <p className="text-[13px] font-bold text-[var(--accent-fg)] mt-2.5">
                  KES {p.price}
                  <span className="text-[10.5px] font-medium text-[var(--text-dim)]"> / {p.unit}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust band */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 sm:p-8 grid sm:grid-cols-3 gap-6">
          {[
            { icon: "🛡️", title: "Escrow protected",   desc: "Funds held until delivery is confirmed" },
            { icon: "🚚", title: "Nationwide delivery", desc: "Cold-chain logistics across 47 counties" },
            { icon: "📍", title: "Verified sellers",    desc: "Every farmer ID-verified with farm photos" },
          ].map((t) => (
            <div key={t.title} className="flex items-start gap-4">
              <span className="w-11 h-11 rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-fg)] flex items-center justify-center text-lg flex-shrink-0">
                {t.icon}
              </span>
              <div>
                <p className="text-[13.5px] font-bold text-[var(--text)]">{t.title}</p>
                <p className="text-[12px] text-[var(--text-muted)] mt-0.5 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PublicPageShell>
  );
};

export default Market;