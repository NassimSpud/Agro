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
  { value: "10K+", label: "Active Farmers",   desc: "Verified sellers across Kenya" },
  { value: "47",   label: "Counties",         desc: "Full national delivery reach" },
  { value: "2.5K+", label: "Live Listings",   desc: "Fresh produce, daily" },
  { value: "98%",  label: "Satisfaction",     desc: "Buyer-reported rating" },
];

const VALUES = [
  {
    emoji: "🌾",
    title: "Farmer first",
    desc: "Every feature we build starts with one question: does this help a farmer earn more, waste less, or work easier? We don't build for headlines — we build for the people who wake up before sunrise to work the land.",
    size: "large",
  },
  {
    emoji: "🤝",
    title: "Fairness by default",
    desc: "No hidden commissions. No forced markups. No brokers skimming off the top.",
    size: "small",
  },
  {
    emoji: "🛡️",
    title: "Trust is currency",
    desc: "Every seller is ID-verified. Every payment is escrow-protected. Every delivery is tracked.",
    size: "small",
  },
  {
    emoji: "🇰🇪",
    title: "Built for Kenya",
    desc: "We designed for patchy connectivity, M-Pesa dominance, and the reality of smallholder farming.",
    size: "small",
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
    text: "We built the logistics network that reaches every county. Cold-chain vehicles for perishables. Real-time tracking. Same-day dispatch on most routes. Distance stopped being a barrier to fair trade.",
  },
  {
    year: "2024",
    title: "A community, not just a platform",
    text: "We crossed 10,000 active farmers and 2,500 live listings. Farmers started forming groups, sharing advice, and pooling resources. The platform became bigger than transactions — a community that grows together.",
  },
];

const RECOGNITION = [
  "TechCrunch Africa",
  "Safaricom Spark",
  "iHub Kenya",
  "AgriTech Summit",
  "Kenya Agribusiness",
];

// ======================== Component ========================
const AboutUs = () => {
  return (
    <PublicPageShell>
      {/* ======================================================
          HERO — oversized editorial headline + layered visual
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-14 sm:pb-20">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-end">
          {/* Copy */}
          <div className="relative">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent-fg)] mb-5">
              <span className="w-6 h-px bg-[var(--accent-fg)]/40" />
              About AgriSoko
            </span>

            <h1 className="font-display text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[0.98] font-semibold tracking-[-0.035em] text-[var(--text)] max-w-[16ch]">
              Growing the <span className="italic font-light text-[var(--accent-fg)]">future</span> of
              Kenyan farming.
            </h1>

            <p className="mt-7 text-[15.5px] sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-xl">
              AgriSoko started because farmers were growing great produce — and earning almost
              nothing from it. Middlemen took the margin. Buyers overpaid. Everyone lost except
              the people in the middle. We're here to fix that.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/market"
                className="group inline-flex items-center gap-2 bg-[var(--brand)] text-[var(--brand-fg)] font-semibold text-sm px-6 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Browse the market
                <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/auth"
                className="inline-flex items-center gap-2 border border-[var(--border-strong)] text-[var(--text)] font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-[var(--surface-2)] transition-colors"
              >
                Join AgriSoko
              </Link>
            </div>
          </div>

          {/* Layered visual */}
          <div className="relative">
            {/* Organic shape panel */}
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-gradient-to-br from-[var(--brand)] via-[var(--accent)] to-[var(--highlight)] shadow-[0_30px_80px_-30px_rgba(20,60,35,0.45)]">
              {/* Leaf pattern */}
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                }}
              />

              {/* Center emoji */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[140px] sm:text-[160px] drop-shadow-2xl">🌾</span>
              </div>

              {/* Bottom caption chip */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 bg-black/25 backdrop-blur-xl border border-white/20 rounded-2xl p-3.5">
                <span className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white text-lg flex-shrink-0">
                  📍
                </span>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-[13px] leading-tight">
                    Proudly Kenyan
                  </p>
                  <p className="text-white/70 text-[11.5px]">
                    Built in Nairobi, serving 47 counties
                  </p>
                </div>
              </div>
            </div>

            {/* Floating stat chip */}
            <div className="hidden sm:flex absolute -left-6 top-10 items-center gap-3 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-3.5 shadow-[0_18px_45px_-18px_rgba(20,60,35,0.45)] animate-float">
              <span className="w-10 h-10 rounded-xl bg-[var(--accent-soft)] text-[var(--accent-fg)] flex items-center justify-center text-lg flex-shrink-0">
                📈
              </span>
              <div>
                <p className="text-[12px] font-bold text-[var(--text)] leading-tight">2.4× income</p>
                <p className="text-[10.5px] text-[var(--text-dim)]">Avg. farmer uplift</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          STATS STRIP — big numerals
      ====================================================== */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {STATS.map((s, i) => (
              <div key={s.label} className="relative">
                {i < STATS.length - 1 && (
                  <span className="hidden lg:block absolute right-0 top-2 bottom-2 w-px bg-[var(--border)]" />
                )}
                <p className="font-display text-[2.6rem] sm:text-5xl font-bold tracking-[-0.03em] text-[var(--text)] leading-none">
                  {s.value}
                </p>
                <p className="mt-3 text-[13px] font-bold uppercase tracking-[0.1em] text-[var(--accent-fg)]">
                  {s.label}
                </p>
                <p className="text-[12px] text-[var(--text-dim)] mt-1.5 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          MISSION — editorial two-column layout
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
          {/* Left: label + big statement */}
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent-fg)] mb-4">
              <span className="w-6 h-px bg-[var(--accent-fg)]/40" />
              Our Mission
            </span>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.025em] text-[var(--text)]">
              Level the playing field for every Kenyan farmer.
            </h2>
            <p className="mt-5 text-[14px] text-[var(--text-muted)] leading-relaxed max-w-sm">
              Fair prices. Direct access. No gatekeepers. That's the whole idea — and everything
              we build flows from it.
            </p>
          </div>

          {/* Right: detailed plain-language copy */}
          <div className="space-y-5">
            <p className="text-[16px] sm:text-[17px] text-[var(--text)] leading-[1.75] font-medium">
              Too many Kenyan farmers sell their harvest to the first broker who shows up — because
              they have no way to reach buyers directly. The broker sets the price. The farmer has
              no leverage. The produce moves on, but the value stays behind.
            </p>

            <p className="text-[15px] text-[var(--text-muted)] leading-[1.85]">
              On the other side, buyers — supermarkets, restaurants, families — pay inflated prices
              because the produce passes through three or four hands before it reaches them.
              Everyone in the chain takes a cut. The farmer gets the least.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 py-3">
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-5">
                <span className="w-10 h-10 rounded-xl bg-[var(--danger-soft)] text-[var(--danger)] flex items-center justify-center text-lg mb-3">
                  ✗
                </span>
                <p className="text-[13px] font-bold text-[var(--text)] mb-1">Before AgriSoko</p>
                <p className="text-[12.5px] text-[var(--text-muted)] leading-relaxed">
                  Farmer → Broker → Transporter → Wholesaler → Retailer → Buyer. Six hands. One product.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--accent)]/30 rounded-2xl p-5">
                <span className="w-10 h-10 rounded-xl bg-[var(--accent-soft)] text-[var(--accent-fg)] flex items-center justify-center text-lg mb-3">
                  ✓
                </span>
                <p className="text-[13px] font-bold text-[var(--text)] mb-1">With AgriSoko</p>
                <p className="text-[12.5px] text-[var(--text-muted)] leading-relaxed">
                  Farmer → Buyer. Two hands. Direct. Escrow-protected. Delivered by us.
                </p>
              </div>
            </div>

            <p className="text-[15px] text-[var(--text-muted)] leading-[1.85]">
              AgriSoko removes the middlemen entirely. Farmers list directly. Buyers buy directly.
              Payment is protected by escrow. Delivery is handled by our logistics network.
              The farmer sets the price. The buyer pays a fair one. Nobody skims off the top.
            </p>

            <p className="text-[15px] text-[var(--text-muted)] leading-[1.85]">
              We're cloud-native, mobile-first, and designed for how Kenyan agriculture actually
              works — not how it works in a textbook. We ship fast, listen to farmers, and treat
              reliability as non-negotiable.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          PULL QUOTE — centered editorial moment
      ====================================================== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        <div className="relative rounded-[2rem] overflow-hidden bg-[var(--brand)] px-8 sm:px-14 lg:px-20 py-14 sm:py-16">
          <div className="absolute -top-24 -right-16 w-80 h-80 rounded-full bg-[var(--highlight)] opacity-15 blur-3xl" />
          <div className="absolute -bottom-28 -left-16 w-80 h-80 rounded-full bg-[var(--accent)] opacity-15 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />

          <div className="relative text-center">
            <span className="font-display text-[5rem] leading-none text-[var(--highlight)] opacity-60 select-none">
              &ldquo;
            </span>
            <p className="font-display text-[clamp(1.4rem,3.2vw,2rem)] leading-[1.35] font-light italic text-[var(--brand-fg)] max-w-3xl mx-auto -mt-6">
              We're not building an app. We're rebuilding the relationship between the people who
              grow Kenya's food and the people who eat it.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--highlight)]">
              <span className="w-6 h-px bg-[var(--highlight)]/50" />
              The AgriSoko Team
              <span className="w-6 h-px bg-[var(--highlight)]/50" />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          VALUES — bento grid
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        <div className="mb-10 max-w-2xl">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent-fg)] mb-4">
            <span className="w-6 h-px bg-[var(--accent-fg)]/40" />
            What we believe
          </span>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-bold tracking-[-0.025em] text-[var(--text)] leading-tight">
            Values we build by
          </h2>
          <p className="text-[14px] text-[var(--text-muted)] mt-4 leading-relaxed">
            These aren't poster slogans. They're the questions we ask before shipping anything.
          </p>
        </div>

        {/* Bento grid: 1 large + 3 small */}
        <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-4 lg:auto-rows-fr">
          {/* Large tile */}
          <div className="lg:col-span-2 lg:row-span-2 relative overflow-hidden bg-gradient-to-br from-[var(--brand)] via-[var(--accent)] to-[var(--highlight)] rounded-3xl p-7 sm:p-9 flex flex-col justify-between min-h-[320px]">
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }}
            />

            <div className="relative">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 text-2xl">
                🌾
              </span>
            </div>

            <div className="relative mt-8">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-[-0.02em] leading-tight">
                Farmer first
              </h3>
              <p className="text-white/75 text-[13.5px] leading-[1.75] mt-4 max-w-lg">
                Every feature we build starts with one question: does this help a farmer earn more,
                waste less, or work easier? We don't build for headlines — we build for the people
                who wake up before sunrise to work the land.
              </p>
            </div>
          </div>

          {/* Small tile 1 */}
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 flex flex-col justify-between hover:border-[var(--border-strong)] hover:-translate-y-0.5 transition-all min-h-[220px]">
            <span className="w-11 h-11 rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-fg)] flex items-center justify-center text-xl flex-shrink-0">
              🤝
            </span>
            <div className="mt-6">
              <h3 className="font-display text-[17px] font-bold text-[var(--text)] tracking-[-0.01em]">
                Fairness by default
              </h3>
              <p className="text-[12.5px] text-[var(--text-muted)] mt-2 leading-relaxed">
                No hidden commissions. No forced markups. No brokers skimming off the top.
              </p>
            </div>
          </div>

          {/* Small tile 2 */}
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 flex flex-col justify-between hover:border-[var(--border-strong)] hover:-translate-y-0.5 transition-all min-h-[220px]">
            <span className="w-11 h-11 rounded-2xl bg-[var(--highlight-soft)] text-[var(--highlight-fg)] flex items-center justify-center text-xl flex-shrink-0">
              🛡️
            </span>
            <div className="mt-6">
              <h3 className="font-display text-[17px] font-bold text-[var(--text)] tracking-[-0.01em]">
                Trust is currency
              </h3>
              <p className="text-[12.5px] text-[var(--text-muted)] mt-2 leading-relaxed">
                Every seller verified. Every payment escrowed. Every delivery tracked.
              </p>
            </div>
          </div>

          {/* Small tile 3 — full width on third column row 2 */}
          <div className="lg:col-span-1 bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 flex flex-col justify-between hover:border-[var(--border-strong)] hover:-translate-y-0.5 transition-all min-h-[220px]">
            <span className="w-11 h-11 rounded-2xl bg-[var(--danger-soft)] text-[var(--danger)] flex items-center justify-center text-xl flex-shrink-0">
              🇰🇪
            </span>
            <div className="mt-6">
              <h3 className="font-display text-[17px] font-bold text-[var(--text)] tracking-[-0.01em]">
                Built for Kenya
              </h3>
              <p className="text-[12.5px] text-[var(--text-muted)] mt-2 leading-relaxed">
                Designed for patchy connectivity, M-Pesa dominance, and smallholder realities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          JOURNEY — numbered timeline with big year marks
      ====================================================== */}
      <section className="bg-[var(--surface)]/40 border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="mb-14 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent-fg)] mb-4">
              <span className="w-6 h-px bg-[var(--accent-fg)]/40" />
              Our journey
            </span>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-bold tracking-[-0.025em] text-[var(--text)] leading-tight">
              How we got here
            </h2>
            <p className="text-[14px] text-[var(--text-muted)] mt-4 leading-relaxed">
              Four years, one mission: make Kenyan agriculture fair.
            </p>
          </div>

          <div className="space-y-8 lg:space-y-0">
            {MILESTONES.map((m, i) => (
              <div
                key={m.year}
                className="lg:grid lg:grid-cols-[180px_1fr] lg:gap-12 lg:py-10 lg:border-t border-[var(--border)] first:lg:border-t-0 first:lg:pt-0 last:lg:pb-0"
              >
                {/* Year column */}
                <div className="flex items-center gap-4 lg:block">
                  <p className="font-display text-[2.5rem] sm:text-[3.25rem] font-bold tracking-[-0.04em] text-[var(--accent-fg)] leading-none">
                    {m.year}
                  </p>
                  <span className="lg:hidden text-[10.5px] font-bold uppercase tracking-[0.15em] text-[var(--text-dim)]">
                    Milestone 0{i + 1}
                  </span>
                </div>

                {/* Content column */}
                <div className="mt-4 lg:mt-0 max-w-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="hidden lg:inline-flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-[11px] font-bold text-[var(--text-muted)]">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-[18px] sm:text-[19px] font-bold text-[var(--text)] tracking-[-0.015em]">
                      {m.title}
                    </h3>
                  </div>
                  <p className="text-[14px] text-[var(--text-muted)] leading-[1.8]">
                    {m.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          RECOGNITION — minimal text strip
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent-fg)]">
            <span className="w-6 h-px bg-[var(--accent-fg)]/40" />
            Recognised by
            <span className="w-6 h-px bg-[var(--accent-fg)]/40" />
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {RECOGNITION.map((name) => (
            <span
              key={name}
              className="font-display text-[15px] sm:text-[17px] font-bold text-[var(--text-dim)] hover:text-[var(--text)] transition-colors tracking-[-0.01em]"
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* ======================================================
          CTA — layered brand band
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-[var(--brand)] px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
          <div className="absolute -top-24 -right-16 w-96 h-96 rounded-full bg-[var(--highlight)] opacity-15 blur-3xl" />
          <div className="absolute -bottom-28 -left-16 w-96 h-96 rounded-full bg-[var(--accent)] opacity-20 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-xl">
              <span className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.18em] text-[var(--highlight)] mb-5">
                <span className="w-6 h-px bg-[var(--highlight)]/50" />
                Join us
              </span>
              <h2 className="font-display text-[clamp(1.9rem,3.5vw,2.75rem)] font-bold text-[var(--brand-fg)] tracking-[-0.025em] leading-tight">
                Come grow with us.
              </h2>
              <p className="text-[var(--brand-fg)]/70 mt-4 text-[14px] sm:text-[15px] leading-relaxed">
                Whether you farm, buy, or deliver — there's a place for you on AgriSoko.
                It takes two minutes to get started.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                to="/auth"
                className="group inline-flex items-center justify-center gap-2 bg-[var(--highlight)] text-[var(--highlight-fg)] font-bold text-sm px-8 py-4 rounded-full hover:opacity-90 transition-opacity flex-shrink-0"
              >
                Create an account
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
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

      {/* ======================================================
          Animations
      ====================================================== */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .animate-float { animation: none; }
        }
      `}</style>
    </PublicPageShell>
  );
};

export default AboutUs;