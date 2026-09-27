import { Link } from "react-router-dom";
import PublicPageShell from "./PublicPageShell";

const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const STATS = [
  { value: "10,000+", label: "Active members" },
  { value: "47",      label: "Counties" },
  { value: "320+",    label: "Farmer groups" },
  { value: "1.2K",    label: "Weekly posts" },
];

const GROUPS = [
  { name: "Dairy Farmers Kenya",       members: "2,340", emoji: "🐄", topic: "Livestock",      desc: "Milk pricing, feed, breeding and herd health." },
  { name: "Maize Growers Network",     members: "1,890", emoji: "🌾", topic: "Grains",         desc: "Planting, pest control and market rates." },
  { name: "Horticulture Hub",          members: "1,220", emoji: "🍅", topic: "Vegetables",     desc: "Greenhouse tips, export standards and buyers." },
  { name: "Avocado Exporters",         members: "870",   emoji: "🥑", topic: "Fruits",         desc: "Global markets, certifications and logistics." },
  { name: "Organic Farming Circle",    members: "640",   emoji: "🌱", topic: "Organic",        desc: "Certification, composting and natural pest control." },
  { name: "Poultry Keepers",           members: "1,050", emoji: "🐔", topic: "Livestock",      desc: "Broilers, layers, feeds and disease prevention." },
];

const STORIES = [
  { name: "Wanjiku K.",   role: "Dairy farmer, Kiambu",   quote: "I found my best buyers through the community. My monthly income has doubled.", emoji: "👩🏾‍🌾" },
  { name: "Peter M.",     role: "Maize grower, Kitale",   quote: "The group helped me learn proper drying techniques. No more post-harvest losses.", emoji: "👨🏿‍🌾" },
  { name: "Grace N.",     role: "Horticulture, Naivasha", quote: "I now ship to export standards because of the advice I got here.", emoji: "👩🏽‍🌾" },
];

const Community = () => {
  return (
    <PublicPageShell>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent-fg)] mb-4">
              <span className="w-6 h-px bg-[var(--accent-fg)]/40" />
              Community
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] tracking-[-0.02em] leading-[1.1]">
              Grow together with <span className="text-[var(--accent-fg)]">Kenyan farmers</span>
            </h1>
            <p className="mt-5 text-[15px] sm:text-base text-[var(--text-muted)] leading-relaxed max-w-lg">
              Join farmer groups, exchange advice, and learn from people who understand
              the land you work. From dairy to horticulture — there's a circle for you.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/auth"
                className="inline-flex items-center gap-2 bg-[var(--brand)] text-[var(--brand-fg)] font-semibold text-sm px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Join the community
                <ArrowRightIcon />
              </Link>
              <Link
                to="/marketplace"
                className="inline-flex items-center gap-2 border border-[var(--border-strong)] text-[var(--text)] font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-[var(--surface-2)] transition-colors"
              >
                Explore marketplace
              </Link>
            </div>
          </div>

          {/* Right visual: farmer emoji grid */}
          <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-[var(--brand)] via-[var(--accent)] to-[var(--highlight)] overflow-hidden border-4 border-[var(--surface)] shadow-[0_30px_80px_-30px_rgba(20,60,35,0.4)]">
            <div className="absolute inset-0 grid grid-cols-3 gap-3 p-5">
              {["👩🏾‍🌾","👨🏿‍🌾","👩🏽‍🌾","🧑🏾‍🌾","👨🏽‍🌾","👩🏿‍🌾","👨🏾‍🌾","👩🏽‍🌾","🧑🏿‍🌾"].map((e, i) => (
                <div key={i} className="aspect-square rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center text-3xl">
                  {e}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl grid grid-cols-2 lg:grid-cols-4 divide-x divide-[var(--border)]">
          {STATS.map((s, i) => (
            <div key={i} className={`py-6 sm:py-8 px-4 text-center ${i >= 2 ? "border-t lg:border-t-0 border-[var(--border)]" : ""}`}>
              <p className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">{s.value}</p>
              <p className="text-[12px] text-[var(--text-muted)] mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Groups */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight mb-6">
          Popular farmer groups
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GROUPS.map((g) => (
            <div
              key={g.name}
              className="group bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-5 hover:border-[var(--border-strong)] hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="w-12 h-12 rounded-2xl bg-[var(--accent-soft)] text-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {g.emoji}
                </span>
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--highlight-fg)] bg-[var(--highlight-soft)] px-2.5 py-1 rounded-full">
                  {g.topic}
                </span>
              </div>
              <p className="font-display font-bold text-[15px] text-[var(--text)] leading-tight">{g.name}</p>
              <p className="text-[12.5px] text-[var(--text-muted)] mt-2 leading-relaxed">{g.desc}</p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--border)]">
                <span className="text-[11.5px] text-[var(--text-dim)]">{g.members} members</span>
                <span className="text-[12px] font-semibold text-[var(--accent-fg)] inline-flex items-center gap-1">
                  Join
                  <ArrowRightIcon className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight mb-6">
          Member stories
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {STORIES.map((s) => (
            <div key={s.name} className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6">
              <p className="text-[13.5px] text-[var(--text)] leading-relaxed italic">
                "{s.quote}"
              </p>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-[var(--border)]">
                <span className="w-10 h-10 rounded-full bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-xl">
                  {s.emoji}
                </span>
                <div>
                  <p className="text-[13px] font-bold text-[var(--text)]">{s.name}</p>
                  <p className="text-[11.5px] text-[var(--text-dim)]">{s.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PublicPageShell>
  );
};

export default Community;