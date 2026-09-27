import { Link } from "react-router-dom";
import PublicPageShell from "./PublicPageShell";

// ======================== Icons ========================
const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

// ======================== Data ========================
const STATS = [
  { value: "10,000+", label: "Active Farmers" },
  { value: "47",      label: "Counties Covered" },
  { value: "2,500+",  label: "Live Listings" },
  { value: "98%",     label: "Buyer Satisfaction" },
];

const VALUES = [
  {
    icon: "🌾",
    title: "Farmer first",
    desc: "Every feature we build starts with one question: does this help a farmer earn more, waste less, or work easier? We don't build for headlines — we build for the people who wake up before sunrise to work the land.",
  },
  {
    icon: "🤝",
    title: "Fairness by default",
    desc: "No hidden commissions. No forced markups. No brokers skimming off the top. Farmers set their own prices and keep the value they create. We take a small service fee on completed sales — that's it.",
  },
  {
    icon: "🛡️",
    title: "Trust is non-negotiable",
    desc: "Every seller is ID-verified. Every payment is escrow-protected. Every delivery is tracked. If a buyer doesn't receive what they ordered, they get a full refund. We'd rather lose a fee than break someone's trust.",
  },
  {
    icon: "🇰🇪",
    title: "Built for Kenya",
    desc: "We designed AgriSoko for Kenyan conditions — patchy connectivity, M-Pesa dominance, county-level logistics, and the reality of smallholder farming. What works elsewhere rarely works here. So we built something that does.",
  },
];

const MILESTONES = [
  {
    year: "2021",
    title: "The problem becomes a company",
    text: "AgriSoko started with a simple observation: Kenyan farmers were growing great produce but earning almost nothing from it. Middlemen captured most of the value. We set out to change that with a direct marketplace.",
  },
  {
    year: "2022",
    title: "Escrow changes everything",
    text: "We launched escrow-protected payments with M-Pesa integration. Buyers could pay with confidence — knowing their money was safe until delivery. Sellers stopped chasing payments. Trust became the default.",
  },
  {
    year: "2023",
    title: "From 5 counties to 47",
    text: "We built the logistics network that reaches all 47 counties. Cold-chain vehicles for perishables. Real-time tracking. Same-day dispatch on most routes. Distance stopped being a barrier to fair trade.",
  },
  {
    year: "2024",
    title: "A community, not just a platform",
    text: "We crossed 10,000 active farmers and 2,500 live listings. Farmers started forming groups, sharing advice, and pooling resources. The platform became something bigger than transactions — a community that grows together.",
  },
];

const RECOGNITION = [
  { name: "TechCrunch Africa",  emoji: "📰" },
  { name: "Safaricom Spark",     emoji: "📡" },
  { name: "iHub Kenya",          emoji: "🏢" },
  { name: "AgriTech Summit",     emoji: "🌍" },
  { name: "Kenya Agribusiness",  emoji: "🚜" },
];

// ======================== Component ========================
const AboutUs = () => {
  return (
    <PublicPageShell>
      {/* ================= Hero ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-12">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent-fg)] mb-4">
            <span className="w-6 h-px bg-[var(--accent-fg)]/40" />
            About AgriSoko
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] tracking-[-0.02em] leading-[1.1]">
            We're building the marketplace Kenyan agriculture actually deserves.
          </h1>
          <p className="mt-6 text-[15.5px] sm:text-lg text-[var(--text-muted)] leading-relaxed">
            AgriSoko started because farmers were growing great produce — and earning almost nothing
            from it. Middlemen took the margin. Buyers overpaid. Everyone lost except the people
            in the middle. We're here to fix that.
          </p>
        </div>
      </section>

      {/* ================= Mission ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight mb-5">
              Our mission
            </h2>
            <div className="space-y-4 text-[15px] text-[var(--text-muted)] leading-relaxed">
              <p>
                Too many Kenyan farmers sell their harvest to the first broker who shows up —
                because they have no way to reach buyers directly. The broker sets the price.
                The farmer has no leverage. The produce moves on, but the value stays behind.
              </p>
              <p>
                On the other side, buyers — supermarkets, restaurants, families — pay inflated prices
                because the produce passes through three or four hands before it reaches them.
                Everyone in the chain takes a cut. The farmer gets the least.
              </p>
              <p>
                AgriSoko removes the middlemen entirely. Farmers list directly. Buyers buy directly.
                Payment is protected by escrow. Delivery is handled by our logistics network.
                The farmer sets the price. The buyer pays a fair one. Nobody skims off the top.
              </p>
              <p>
                We're cloud-native, mobile-first, and designed for how Kenyan agriculture actually
                works — not how it works in a textbook. We ship fast, listen to farmers, and treat
                reliability as non-negotiable.
              </p>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-[var(--brand)] via-[var(--accent)] to-[var(--highlight)] overflow-hidden border-4 border-[var(--surface)] shadow-[0_30px_80px_-30px_rgba(20,60,35,0.4)] flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }}
            />
            <span className="relative text-[100px] sm:text-[120px] drop-shadow-2xl">🌾</span>
          </div>
        </div>
      </section>

      {/* ================= Stats ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl grid grid-cols-2 lg:grid-cols-4 divide-x divide-[var(--border)]">
          {STATS.map((s, i) => (
            <div
              key={i}
              className={`py-6 sm:py-8 px-4 text-center ${
                i >= 2 ? "border-t lg:border-t-0 border-[var(--border)]" : ""
              }`}
            >
              <p className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">
                {s.value}
              </p>
              <p className="text-[12px] text-[var(--text-muted)] mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Values ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-8 max-w-2xl">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent-fg)] mb-3">
            <span className="w-6 h-px bg-[var(--accent-fg)]/40" />
            What we believe
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text)] tracking-tight leading-tight">
            Values we build by
          </h2>
          <p className="text-[14px] text-[var(--text-muted)] mt-3 leading-relaxed">
            These aren't poster slogans. They're the questions we ask before shipping anything.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 sm:p-7 hover:border-[var(--border-strong)] hover:-translate-y-0.5 transition-all"
            >
              <span className="w-12 h-12 rounded-2xl bg-[var(--accent-soft)] flex items-center justify-center text-2xl mb-4">
                {v.icon}
              </span>
              <h3 className="font-display font-bold text-[16px] text-[var(--text)] leading-tight">
                {v.title}
              </h3>
              <p className="text-[13.5px] text-[var(--text-muted)] mt-2.5 leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Journey ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-8 max-w-2xl">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent-fg)] mb-3">
            <span className="w-6 h-px bg-[var(--accent-fg)]/40" />
            Our journey
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text)] tracking-tight leading-tight">
            How we got here
          </h2>
        </div>

        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 sm:p-10">
          <div className="space-y-8">
            {MILESTONES.map((m, i) => (
              <div key={m.year} className="flex gap-5 sm:gap-8">
                {/* Timeline column */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--brand)] text-[var(--brand-fg)] font-display font-bold text-[13px] flex items-center justify-center shadow-sm">
                    {m.year}
                  </div>
                  {i < MILESTONES.length - 1 && (
                    <div className="w-px flex-1 bg-[var(--border)] mt-3" />
                  )}
                </div>

                {/* Content */}
                <div className="pt-2 pb-2">
                  <h3 className="font-display font-bold text-[16px] text-[var(--text)] leading-tight">
                    {m.title}
                  </h3>
                  <p className="text-[13.5px] text-[var(--text-muted)] mt-2 leading-relaxed max-w-2xl">
                    {m.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Recognition ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent-fg)] mb-3">
            <span className="w-6 h-px bg-[var(--accent-fg)]/40" />
            Recognised by
            <span className="w-6 h-px bg-[var(--accent-fg)]/40" />
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">
            Featured in the press and startup community
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {RECOGNITION.map((r) => (
            <div
              key={r.name}
              className="flex items-center gap-2.5 bg-[var(--surface)] border border-[var(--border)] rounded-full px-5 py-3 hover:border-[var(--border-strong)] transition-colors"
            >
              <span className="text-lg">{r.emoji}</span>
              <span className="text-[13px] font-semibold text-[var(--text)] whitespace-nowrap">
                {r.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--brand)] px-6 sm:px-10 lg:px-14 py-12 sm:py-16">
          <div className="absolute -top-24 -right-16 w-80 h-80 rounded-full bg-[var(--highlight)] opacity-15 blur-3xl" />
          <div className="absolute -bottom-28 -left-16 w-80 h-80 rounded-full bg-[var(--accent)] opacity-15 blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-xl">
              <span className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.18em] text-[var(--highlight)] mb-4">
                <span className="w-6 h-px bg-[var(--highlight)]/50" />
                Join us
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--brand-fg)] tracking-tight leading-tight">
                Come grow with us.
              </h2>
              <p className="text-[var(--brand-fg)]/70 mt-3 text-sm sm:text-base leading-relaxed">
                Whether you farm, buy, or deliver — there's a place for you on AgriSoko.
                It takes two minutes to get started.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                to="/auth"
                className="inline-flex items-center justify-center gap-2 bg-[var(--highlight)] text-[var(--highlight-fg)] font-bold text-sm px-8 py-4 rounded-full hover:opacity-90 transition-opacity flex-shrink-0"
              >
                Create an account
                <ArrowRightIcon />
              </Link>
              <Link
                to="/market"
                className="inline-flex items-center justify-center gap-2 border border-[var(--brand-fg)]/25 text-[var(--brand-fg)] font-semibold text-sm px-8 py-4 rounded-full hover:bg-[var(--brand-fg)]/10 transition-colors flex-shrink-0"
              >
                Browse marketplace
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PublicPageShell>
  );
};

export default AboutUs;