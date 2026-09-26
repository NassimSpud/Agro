import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "../Modules/Users/ThemeToggle";

// ======================== Icons ========================
const BrandIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c-4-1-7-5-7-10a10 10 0 0 1 10-10c1 5 0 9-3 12-1.5 1.5-3.5 2.2-5.5 2.3" />
  </svg>
);

const SearchIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const BellIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.9 1.9 0 0 0 3.4 0" />
  </svg>
);

const ChevronDownIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const LeafIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 4 13c0-6 5-10 16-10 0 11-4 16-9 17Z" />
    <path d="M4 20c3-3 6-5 10-7" />
  </svg>
);

const ShieldIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 4 5v6c0 5.5 3.4 9.7 8 11 4.6-1.3 8-5.5 8-11V5z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const TruckIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="6" width="14" height="11" rx="1.5" />
    <path d="M15 10h4l3 3v4h-7z" />
    <circle cx="6" cy="19" r="1.6" />
    <circle cx="17.5" cy="19" r="1.6" />
  </svg>
);

const UsersIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="3" />
    <path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2" />
    <path d="M17 3.5a3 3 0 0 1 0 7" />
    <path d="M22 21v-2a5 5 0 0 0-3-4.5" />
  </svg>
);

const SproutIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V10" />
    <path d="M12 10C12 6 9 3 4 3c0 5 3 7 8 7Z" />
    <path d="M12 13c0-3.5 2.5-6 7-6 0 4.5-3 6-7 6Z" />
  </svg>
);

const MapPinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const MailIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m3 6 9 6 9-6" />
  </svg>
);

const PhoneIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2C9.6 22 2 14.4 2 6a2 2 0 0 1 2-2z" />
  </svg>
);

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-1.4-.7-2.3-1.2-3.2-2.8-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4L9.5 8.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.9 2.3 1 2.4c.1.2 1.7 2.7 4.2 3.7.6.2 1 .4 1.4.5.6.2 1.1.2 1.5.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z" />
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 8.5h2.5V5H14c-2.2 0-4 1.8-4 4v2H8v3.5h2V22h3.5v-7.5H16l.5-3.5h-3V9c0-.6.4-1 1-1z" />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const XSocialIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4l7.2 9.1L4.4 20H7l5-5.6 4 5.6h4l-7.5-9.6L19.6 4H17l-4.6 5.2L8.8 4z" />
  </svg>
);

// ======================== Component ========================
const LandingPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Fruits");

  const categories = [
    { name: "Fruits", emoji: "🍎" },
    { name: "Vegetables", emoji: "🥬" },
    { name: "Grains", emoji: "🌾" },
    { name: "Livestock", emoji: "🐄" },
    { name: "Fertilizers", emoji: "🧪" },
    { name: "Farm Tools", emoji: "🛠️" },
    { name: "Seeds", emoji: "🌱" },
    { name: "More", emoji: "⋯" },
  ];

  const features = [
    {
      icon: <LeafIcon className="w-6 h-6" />,
      title: "Farm-Fresh Quality",
      description: "Every product verified and sourced straight from Kenyan farms.",
      accent: "from-emerald-500 to-green-600",
    },
    {
      icon: <ShieldIcon className="w-6 h-6" />,
      title: "Secure M-Pesa Payments",
      description: "Escrow-protected transactions so both sides trade with confidence.",
      accent: "from-lime-500 to-emerald-600",
    },
    {
      icon: <TruckIcon className="w-6 h-6" />,
      title: "Nationwide Delivery",
      description: "Reliable cold-chain logistics reaching all 47 counties.",
      accent: "from-amber-500 to-orange-600",
    },
    {
      icon: <UsersIcon className="w-6 h-6" />,
      title: "Verified Community",
      description: "Join 10,000+ ID-verified farmers and buyers trading daily.",
      accent: "from-teal-500 to-emerald-600",
    },
  ];

  const stats = [
    { value: "10K+", label: "Active Farmers" },
    { value: "47", label: "Counties" },
    { value: "2.5K+", label: "Products" },
    { value: "98%", label: "Satisfaction" },
  ];

  const steps = [
    { step: "01", title: "List Your Produce", desc: "Create a free listing with photos, quantity and your asking price in minutes." },
    { step: "02", title: "Connect Directly", desc: "Buyers browse and reach out. No brokers, no hidden commissions." },
    { step: "03", title: "Trade & Deliver", desc: "Agree on terms, get paid securely and arrange delivery to your buyer." },
  ];

  const ticker = [
    "🌾 Maize", "🍅 Tomatoes", "🥑 Avocado", "🐄 Dairy", "☕ Coffee",
    "🍌 Bananas", "🥔 Potatoes", "🌽 Sukuma Wiki", "🍯 Honey", "🐔 Poultry",
  ];

  const handleGetStarted = () => navigate("/auth");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="font-body text-[var(--text)] min-h-screen bg-[var(--bg)] antialiased overflow-x-hidden transition-colors duration-300">
      {/* ================= Ambient background ================= */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 w-[38rem] h-[38rem] rounded-full bg-[var(--accent)] opacity-[0.07] blur-[120px] animate-float-slow" />
        <div className="absolute top-1/3 -right-40 w-[32rem] h-[32rem] rounded-full bg-[var(--highlight)] opacity-[0.06] blur-[120px] animate-float-slower" />
        <div className="absolute bottom-0 left-1/3 w-[30rem] h-[30rem] rounded-full bg-[var(--brand)] opacity-[0.05] blur-[120px] animate-float-slow" />
      </div>

      {/* ================= Header ================= */}
      <header className="sticky top-0 z-50 px-3 sm:px-4 pt-3 sm:pt-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass-surface backdrop-blur-2xl border border-[var(--border)] rounded-2xl sm:rounded-full shadow-[0_8px_30px_-12px_rgba(20,60,35,0.25)]">
            <nav className="flex items-center justify-between h-15 sm:h-16 px-3 sm:px-5">
              {/* Brand */}
              <Link to="/" className="flex items-center gap-2.5 group">
                <span className="w-9 h-9 rounded-xl bg-[var(--brand)] flex items-center justify-center text-[var(--brand-fg)] shadow-lg group-hover:scale-105 transition-transform">
                  <BrandIcon className="w-5 h-5" />
                </span>
                <span className="font-display font-bold text-lg tracking-tight text-[var(--text)]">
                  Agri<span className="text-[var(--accent-fg)]">Soko</span>
                </span>
              </Link>

              {/* Desktop nav */}
              <ul className="hidden lg:flex items-center gap-1">
                {["Explore", "Market", "Community", "Services", "About Us"].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to="#"
                      className={`group relative flex items-center gap-1 text-[13.5px] font-medium px-4 py-2 rounded-full transition-all ${
                        item === "Explore"
                          ? "text-[var(--accent-fg)] bg-[var(--accent-soft)]"
                          : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)]"
                      }`}
                    >
                      {item}
                      {item === "Services" && (
                        <ChevronDownIcon className="w-3 h-3 opacity-60 group-hover:rotate-180 transition-transform" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  aria-label="Search"
                  className="hidden sm:flex w-10 h-10 rounded-full bg-[var(--surface-2)] items-center justify-center text-[var(--text-muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-fg)] transition-colors"
                >
                  <SearchIcon className="w-[18px] h-[18px]" />
                </button>
                <button
                  aria-label="Notifications"
                  className="hidden sm:flex relative w-10 h-10 rounded-full bg-[var(--surface-2)] items-center justify-center text-[var(--text-muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-fg)] transition-colors"
                >
                  <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[var(--highlight)] rounded-full ring-2 ring-[var(--surface)]" />
                  <BellIcon className="w-[18px] h-[18px]" />
                </button>
                <button
                  onClick={() => navigate("/auth")}
                  className="group inline-flex items-center gap-2 pl-5 pr-4 py-2.5 rounded-full bg-[var(--brand)] text-[var(--brand-fg)] font-semibold text-[13.5px] hover:opacity-90 transition-all shadow-lg"
                >
                  Login
                  <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* ================= Hero ================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-20 pb-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="relative">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 bg-[var(--surface)] border border-[var(--border)] text-[var(--accent-fg)] text-xs font-semibold px-4 py-2 rounded-full shadow-sm mb-7">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-[var(--accent)] opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-[var(--accent)]" />
              </span>
              Trusted by 10,000+ Kenyan farmers
            </div>

            <h1 className="font-display text-[clamp(3.2rem,7vw,7rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-[var(--text)] max-w-[620px]">
              <span className="block">Grow more.</span>
              <span className="block opacity-85">
                Trade <span className="text-[var(--accent-fg)] italic font-light">smarter.</span>
              </span>
              <span className="block text-[var(--text-muted)]">Together.</span>
            </h1>

            <p className="mt-6 text-[15.5px] sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-xl">
              Kenya&apos;s agriculture marketplace — buy and sell farm produce, connect directly
              with farmers and get fair prices, with zero middlemen.
            </p>

            {/* Search */}
            <form
              onSubmit={handleSearch}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 bg-[var(--surface)] rounded-2xl sm:rounded-full p-2 shadow-[0_10px_40px_-16px_rgba(20,60,35,0.35)] border border-[var(--border)] max-w-xl"
            >
              <div className="flex items-center flex-1 px-3 sm:px-4 py-2">
                <SearchIcon className="w-5 h-5 text-[var(--text-dim)] flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search produce, categories or sellers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full ml-3 bg-transparent outline-none text-[var(--text)] placeholder-[var(--text-dim)] text-sm"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-[var(--brand)] hover:opacity-90 text-[var(--brand-fg)] font-bold text-sm px-7 py-3.5 rounded-xl sm:rounded-full transition-all shadow-lg"
              >
                Search
              </button>
            </form>

            {/* CTA row */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <button
                onClick={handleGetStarted}
                className="group inline-flex items-center gap-2 bg-[var(--brand)] text-[var(--brand-fg)] rounded-full px-7 py-3.5 font-semibold text-sm hover:opacity-90 transition-all shadow-xl"
              >
                Get Started Free
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                to="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--accent-fg)] transition-colors"
              >
                <span className="w-9 h-9 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shadow-sm">
                  <svg className="w-3.5 h-3.5 fill-[var(--accent-fg)] ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Watch how it works
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 flex items-center gap-6 sm:gap-8 flex-wrap">
              {stats.map((s, i) => (
                <div key={i} className="flex items-center gap-6 sm:gap-8">
                  <div>
                    <p className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">{s.value}</p>
                    <p className="text-[11px] sm:text-xs uppercase tracking-wider text-[var(--text-dim)] font-semibold mt-0.5">
                      {s.label}
                    </p>
                  </div>
                  {i < stats.length - 1 && <div className="w-px h-9 bg-[var(--border-strong)]" />}
                </div>
              ))}
            </div>
          </div>

          {/* Right: image collage */}
          <div className="relative">
            <div className="relative aspect-[4/5] sm:aspect-[5/5] lg:aspect-[4/5] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_-30px_rgba(20,60,35,0.5)] border-4 border-[var(--surface)]">
              {/* Fallback gradient behind the image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)] via-[var(--accent)] to-[var(--highlight)]" />
              <img
                src="/images/agriland.jpg"
                alt="Kenyan farmland at golden hour"
                className="relative w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.opacity = 0; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Agricultural field motif — a row of grass/crop blades along the base of the photo, representing the produce AgriSoko trades in */}
              <svg
                className="absolute bottom-0 left-0 w-full h-12 sm:h-16 text-white/30 pointer-events-none"
                viewBox="0 0 400 40"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <pattern id="agriGrassRow" width="24" height="40" patternUnits="userSpaceOnUse">
                    <path d="M4 40 L7 8 L10 40 Z" fill="currentColor" />
                    <path d="M12 40 L15 2 L18 40 Z" fill="currentColor" />
                    <path d="M20 40 L22 12 L24 40 Z" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#agriGrassRow)" />
              </svg>

              {/* Bottom overlay chip */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 bg-black/25 backdrop-blur-xl border border-white/20 rounded-2xl p-3.5">
                <span className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white flex-shrink-0">
                  <SproutIcon className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm leading-tight">Fresh harvest today</p>
                  <p className="text-white/70 text-xs">1,240 listings added across Kenya</p>
                </div>
              </div>
            </div>

            {/* Floating card — top left */}
            <div className="hidden sm:flex absolute -top-5 -left-5 lg:-left-8 items-center gap-3 bg-[var(--surface)] rounded-2xl p-3.5 shadow-[0_18px_45px_-18px_rgba(20,60,35,0.45)] border border-[var(--border)] animate-float">
              <span className="w-10 h-10 rounded-xl bg-[var(--accent-soft)] text-[var(--accent-fg)] flex items-center justify-center flex-shrink-0">
                <ShieldIcon className="w-5 h-5" />
              </span>
              <div>
                <p className="text-[13px] font-bold text-[var(--text)] leading-tight">Secure payment</p>
                <p className="text-[11px] text-[var(--text-dim)]">M-Pesa protected</p>
              </div>
            </div>

            {/* Floating card — right */}
            <div className="hidden sm:flex absolute top-1/3 -right-4 lg:-right-8 items-center gap-3 bg-[var(--surface)] rounded-2xl p-3.5 shadow-[0_18px_45px_-18px_rgba(20,60,35,0.45)] border border-[var(--border)] animate-float-delayed">
              <span className="w-10 h-10 rounded-xl bg-[var(--accent-soft)] text-[var(--accent-fg)] flex items-center justify-center flex-shrink-0">
                <TruckIcon className="w-5 h-5" />
              </span>
              <div>
                <p className="text-[13px] font-bold text-[var(--text)] leading-tight">Fast delivery</p>
                <p className="text-[11px] text-[var(--text-dim)]">All 47 counties</p>
              </div>
            </div>

            {/* Floating price tag — bottom right */}
            <div className="hidden lg:block absolute -bottom-5 right-6 bg-[var(--brand)] text-[var(--brand-fg)] rounded-2xl px-4 py-3 shadow-[0_18px_45px_-18px_rgba(20,60,35,0.6)] animate-float">
              <p className="text-[10px] uppercase tracking-widest opacity-70 font-semibold">Avg. price</p>
              <p className="font-display font-bold text-lg leading-tight">
                KES 85<span className="text-xs font-normal opacity-60">/kg</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Ticker ================= */}
      <section className="mt-8 sm:mt-14 border-y border-[var(--border)] bg-[var(--surface)] py-5 overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...ticker, ...ticker].map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center gap-3 px-7 whitespace-nowrap">
              <span className="text-sm font-semibold text-[var(--text-muted)] tracking-wide">{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-30" />
            </div>
          ))}
        </div>
      </section>

      {/* ================= Categories ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-9">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent-fg)] mb-3">
              <span className="w-6 h-px bg-[var(--accent-fg)] opacity-40" />
              Browse
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.02em] text-[var(--text)] leading-tight">
              Everything the farm needs
            </h2>
            <p className="text-[var(--text-muted)] mt-2 text-sm sm:text-base">
              From seeds to livestock — sourced from verified Kenyan farmers.
            </p>
          </div>
          <Link
            to="#"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-fg)] hover:opacity-80 self-start sm:self-auto"
          >
            View all categories
            <span className="w-7 h-7 rounded-full bg-[var(--accent-soft)] flex items-center justify-center transition-colors">
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`group relative flex flex-col items-start gap-4 p-4 sm:p-5 rounded-2xl sm:rounded-3xl border text-left transition-all duration-300 overflow-hidden ${
                  isActive
                    ? "bg-[var(--brand)] border-[var(--brand)] shadow-[0_20px_45px_-20px_rgba(20,60,35,0.6)]"
                    : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)] hover:shadow-[0_18px_40px_-22px_rgba(20,60,35,0.35)] hover:-translate-y-0.5"
                }`}
              >
                {/* glow */}
                <span
                  className={`absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl transition-opacity ${
                    isActive
                      ? "bg-[var(--highlight)] opacity-25"
                      : "bg-[var(--accent)] opacity-0 group-hover:opacity-20"
                  }`}
                />
                <span
                  className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-110 ${
                    isActive ? "chip-on-brand" : "bg-[var(--surface-2)]"
                  }`}
                >
                  {cat.emoji}
                </span>
                <span className="relative">
                  <span
                    className={`block font-display font-bold text-sm sm:text-[15px] leading-tight ${
                      isActive ? "text-[var(--brand-fg)]" : "text-[var(--text)]"
                    }`}
                  >
                    {cat.name}
                  </span>
                  <span
                    className={`block text-[11px] mt-1 ${
                      isActive ? "text-[var(--brand-fg)] opacity-70" : "text-[var(--text-dim)]"
                    }`}
                  >
                    {isActive ? "Selected" : "Browse listings"}
                  </span>
                </span>
                <span
                  className={`relative ml-auto mt-auto w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    isActive
                      ? "bg-[var(--highlight)] text-[var(--highlight-fg)]"
                      : "bg-[var(--surface-2)] text-[var(--text-dim)] group-hover:bg-[var(--brand)] group-hover:text-[var(--brand-fg)]"
                  }`}
                >
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ================= Features (Bento) ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="mb-9 max-w-2xl">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent-fg)] mb-3">
            <span className="w-6 h-px bg-[var(--accent-fg)] opacity-40" />
            Why AgriSoko
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.02em] text-[var(--text)] leading-tight">
            Built for the way farmers actually trade
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 overflow-hidden hover:shadow-[0_24px_50px_-24px_rgba(20,60,35,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              <span
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity`}
              />
              <div className="w-12 h-12 rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-fg)] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {feature.icon}
              </div>
              <h4 className="font-display font-bold text-[15.5px] text-[var(--text)] mb-2 leading-snug">
                {feature.title}
              </h4>
              <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">
                {feature.description}
              </p>
              <span
                className={`absolute bottom-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br ${feature.accent} opacity-[0.06] blur-xl group-hover:opacity-[0.14] transition-opacity`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= How it works ================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[2rem] sm:rounded-[2.5rem] px-6 sm:px-10 lg:px-14 py-12 sm:py-16 shadow-[0_30px_70px_-40px_rgba(20,60,35,0.35)]">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent-fg)] mb-3">
                <span className="w-6 h-px bg-[var(--accent-fg)] opacity-40" />
                How it works
                <span className="w-6 h-px bg-[var(--accent-fg)] opacity-40" />
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[var(--text)] leading-tight">
                From farm to buyer in three steps
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              {steps.map((item, i) => (
                <div key={i} className="relative text-center md:text-left">
                  {i < 2 && (
                    <div className="hidden md:block absolute top-7 left-[70%] w-[60%] h-px bg-gradient-to-r from-[var(--accent)] to-transparent opacity-40" />
                  )}
                  <div className="w-14 h-14 mx-auto md:mx-0 rounded-2xl bg-[var(--brand)] text-[var(--brand-fg)] font-display font-bold text-lg flex items-center justify-center shadow-lg mb-5">
                    {item.step}
                  </div>
                  <h3 className="font-display font-bold text-lg text-[var(--text)] mb-2">{item.title}</h3>
                  <p className="text-[13.5px] text-[var(--text-muted)] leading-relaxed max-w-xs mx-auto md:mx-0">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA band ================= */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-[var(--brand)] px-6 sm:px-10 lg:px-14 py-14 sm:py-16 shadow-[0_35px_80px_-40px_rgba(20,60,35,0.9)]">
          {/* decorative blobs */}
          <div className="absolute -top-24 -right-16 w-80 h-80 rounded-full bg-[var(--highlight)] opacity-[0.15] blur-[80px]" />
          <div className="absolute -bottom-28 -left-16 w-80 h-80 rounded-full bg-[var(--accent)] opacity-20 blur-[80px]" />
          {/* leaf pattern */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-xl">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand-fg)] opacity-70 mb-4">
                <span className="w-6 h-px bg-[var(--brand-fg)] opacity-40" />
                Join the movement
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.02em] text-[var(--brand-fg)] leading-tight">
                Ready to grow your agribusiness?
              </h2>
              <p className="text-[var(--brand-fg)] opacity-70 mt-3 text-sm sm:text-base leading-relaxed">
                Join thousands of Kenyan farmers and buyers already trading fairly on AgriSoko.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={handleGetStarted}
                className="group inline-flex items-center justify-center gap-2 bg-[var(--highlight)] text-[var(--highlight-fg)] font-bold px-8 py-4 rounded-full hover:opacity-90 transition-all shadow-xl text-sm"
              >
                Start Selling Free
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                to="#"
                className="btn-ghost-brand inline-flex items-center justify-center gap-2 text-[var(--brand-fg)] font-semibold px-8 py-4 rounded-full transition-colors text-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Footer ================= */}
      <footer className="relative bg-[var(--brand)] text-[var(--brand-fg)] overflow-hidden">
        {/* subtle leaf pattern, consistent with the CTA band above */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10">
          <div className="grid lg:grid-cols-[1.3fr_2fr_1fr] gap-12 lg:gap-8">
            {/* Brand */}
            <div>
              <Link to="/" className="inline-flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-xl bg-[var(--brand-fg)]/12 flex items-center justify-center">
                  <BrandIcon className="w-5 h-5" />
                </span>
                <span className="font-display font-bold text-lg">AgriSoko</span>
              </Link>
              <p className="mt-4 text-sm opacity-70 leading-relaxed max-w-xs">
                Connecting Kenyan farmers directly with buyers — verified produce, fair prices,
                and payments that land the same day.
              </p>

              <ul className="mt-6 space-y-3 text-sm opacity-80">
                <li className="flex items-center gap-2.5">
                  <MapPinIcon className="w-4 h-4 shrink-0" /> Nairobi, Kenya
                </li>
                <li className="flex items-center gap-2.5">
                  <MailIcon className="w-4 h-4 shrink-0" /> hello@agrisoko.co.ke
                </li>
                <li className="flex items-center gap-2.5">
                  <PhoneIcon className="w-4 h-4 shrink-0" /> +254 700 000 000
                </li>
              </ul>

              <div className="mt-6 flex items-center gap-2.5">
                {[WhatsAppIcon, FacebookIcon, InstagramIcon, XSocialIcon].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social link"
                    className="w-9 h-9 rounded-full bg-[var(--brand-fg)]/10 flex items-center justify-center hover:bg-[var(--brand-fg)]/20 transition-colors"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h5 className="text-sm font-semibold mb-4">Marketplace</h5>
                <ul className="space-y-2.5 text-sm opacity-70">
                  {["Browse produce", "Sell your harvest", "Farm tools & seeds", "Livestock", "Track an order"].map((l) => (
                    <li key={l}>
                      <Link to="#" className="hover:opacity-100 hover:underline underline-offset-4 transition-opacity">
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-semibold mb-4">Company</h5>
                <ul className="space-y-2.5 text-sm opacity-70">
                  {["About us", "How it works", "Careers", "Blog", "Press"].map((l) => (
                    <li key={l}>
                      <Link to="#" className="hover:opacity-100 hover:underline underline-offset-4 transition-opacity">
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-semibold mb-4">Support</h5>
                <ul className="space-y-2.5 text-sm opacity-70">
                  {["Help centre", "Contact us", "Safety & trust", "Delivery info", "FAQs"].map((l) => (
                    <li key={l}>
                      <Link to="#" className="hover:opacity-100 hover:underline underline-offset-4 transition-opacity">
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="text-sm font-semibold mb-3">Weekly harvest prices</h5>
              <p className="text-sm opacity-70 leading-relaxed mb-4">
                Crop prices and marketplace news, straight to your inbox every Friday.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center gap-2 bg-[var(--brand-fg)]/10 rounded-full p-1.5 border border-[var(--brand-fg)]/15"
              >
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full min-w-0 bg-transparent outline-none text-sm px-3 py-2 placeholder-[var(--brand-fg)]/40"
                />
                <button
                  type="submit"
                  className="shrink-0 bg-[var(--highlight)] text-[var(--highlight-fg)] text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 pt-8 border-t border-[var(--brand-fg)]/12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-60">
            <span>© 2026 AgriSoko. Built for Kenya&apos;s farmers.</span>
            <div className="flex items-center gap-6">
              <Link to="#" className="hover:opacity-100 transition-opacity">Privacy</Link>
              <Link to="#" className="hover:opacity-100 transition-opacity">Terms</Link>
              <span className="inline-flex items-center gap-1.5">
                <ShieldIcon className="w-3.5 h-3.5" /> Payments secured via M-Pesa
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* ================= Fonts & animations ================= */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..800;1,9..144,300..600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .font-display { font-family: 'Fraunces', Georgia, serif; font-variation-settings: 'SOFT' 0, 'WONK' 0; }
        .font-body    { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; }

        /* Translucent header pill that adapts to the active theme */
        .glass-surface {
          background: color-mix(in srgb, var(--surface) 78%, transparent);
        }

        /* Chip sitting on top of the brand-coloured surface */
        .chip-on-brand {
          background: color-mix(in srgb, var(--brand-fg) 14%, transparent);
        }

        /* Ghost button sitting on top of the brand-coloured CTA band */
        .btn-ghost-brand {
          border: 1px solid color-mix(in srgb, var(--brand-fg) 25%, transparent);
        }
        .btn-ghost-brand:hover {
          background: color-mix(in srgb, var(--brand-fg) 10%, transparent);
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 34s linear infinite; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-9px); }
        }
        .animate-float         { animation: float 5s ease-in-out infinite; }
        .animate-float-delayed { animation: float 5s ease-in-out infinite 1.4s; }

        @keyframes floatSlow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%      { transform: translate(24px, -24px) scale(1.06); }
        }
        .animate-float-slow   { animation: floatSlow 18s ease-in-out infinite; }
        .animate-float-slower { animation: floatSlow 24s ease-in-out infinite reverse; }

        /* Slim scrollbars */
        ::-webkit-scrollbar { height: 6px; width: 6px; }
        ::-webkit-scrollbar-thumb { background: rgba(20,48,31,0.15); border-radius: 99px; }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee, .animate-float, .animate-float-delayed,
          .animate-float-slow, .animate-float-slower { animation: none; }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;