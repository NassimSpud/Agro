import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "../Modules/Users/ThemeToggle";
import MarketPlace from "../Modules/Buyers/MarketPlace";
import { useStore } from "../Modules/Buyers/Header/Cart/StoreContext";

// ======================== Icons ========================
const BrandIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c-4-1-7-5-7-10a10 10 0 0 1 10-10c1 5 0 9-3 12-1.5 1.5-3.5 2.2-5.5 2.3" />
  </svg>
);
const CartIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);
const ArrowRightIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

// ======================== Component ========================
const PublicMarketplace = () => {
  const navigate = useNavigate();
  const { getCartCount } = useStore();
  const cartCount = getCartCount();

  // Detect if a user is logged in — swap the header CTA accordingly
  const userId = typeof window !== "undefined" ? localStorage.getItem("userId") : null;
  const isLoggedIn = Boolean(userId);

  const navLinks = [
    { name: "Home",      to: "/" },
    { name: "Market",    to: "/marketplace", active: true },
    { name: "Community", to: "#" },
    { name: "Services",  to: "#" },
    { name: "About Us",  to: "#" },
  ];

  const handleCartClick = () => {
    if (!isLoggedIn) {
      navigate("/auth");
      return;
    }
    navigate("/buyerdashboard/cart");
  };

  return (
    <div className="font-body min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased transition-colors duration-300">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 w-[36rem] h-[36rem] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full bg-[var(--highlight)] opacity-[0.04] blur-[130px]" />
      </div>

      {/* ================= Header ================= */}
      <header className="sticky top-0 z-50 bg-[var(--bg)]/85 backdrop-blur-xl border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 sm:h-20 gap-4">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
              <span className="w-9 h-9 rounded-xl bg-[var(--brand)] flex items-center justify-center text-[var(--brand-fg)] shadow-sm">
                <BrandIcon className="w-5 h-5" />
              </span>
              <span className="font-display font-bold text-[15.5px] tracking-tight text-[var(--text)]">
                Agri<span className="text-[var(--accent-fg)]">Soko</span>
              </span>
            </Link>

            {/* Nav links */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className={`text-[13.5px] font-medium px-4 py-2 rounded-full transition-colors ${
                      item.active
                        ? "text-[var(--accent-fg)] bg-[var(--accent-soft)]"
                        : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)]"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <ThemeToggle />

              {/* Cart */}
              <button
                onClick={handleCartClick}
                aria-label="Cart"
                className="relative w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-fg)] transition-colors"
              >
                <CartIcon className="w-[18px] h-[18px]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-[var(--highlight)] text-[var(--highlight-fg)] text-[10px] font-bold flex items-center justify-center ring-2 ring-[var(--bg)]">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Login / Dashboard */}
              {isLoggedIn ? (
                <button
                  onClick={() => navigate("/buyerdashboard")}
                  className="inline-flex items-center gap-2 bg-[var(--brand)] text-[var(--brand-fg)] font-semibold text-[13.5px] px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
                >
                  Dashboard
                  <ArrowRightIcon />
                </button>
              ) : (
                <button
                  onClick={() => navigate("/auth")}
                  className="inline-flex items-center gap-2 bg-[var(--brand)] text-[var(--brand-fg)] font-semibold text-[13.5px] px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
                >
                  Login
                  <ArrowRightIcon />
                </button>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* ================= Intro banner ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--brand)] px-6 sm:px-8 py-7 sm:py-9">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[var(--highlight)] opacity-15 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 w-64 h-64 rounded-full bg-[var(--accent)] opacity-10 blur-3xl" />

          <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="max-w-lg">
              <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.15em] text-[var(--highlight)] mb-2">
                <span className="w-5 h-px bg-[var(--highlight)]/50" />
                Public Marketplace
              </span>
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--brand-fg)] tracking-tight leading-tight">
                Shop Kenya's freshest farm produce
              </h1>
              <p className="text-[13.5px] text-[var(--brand-fg)]/70 mt-2 leading-relaxed">
                Browse over 2,500 listings from verified farmers — no account needed to explore.
              </p>

              {!isLoggedIn && (
                <button
                  onClick={() => navigate("/auth")}
                  className="mt-5 inline-flex items-center gap-2 bg-[var(--highlight)] text-[var(--highlight-fg)] font-semibold text-[13px] px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
                >
                  Create a free account
                  <ArrowRightIcon />
                </button>
              )}
            </div>

            <div className="hidden sm:flex items-center justify-center w-24 h-24 rounded-3xl bg-[var(--brand-fg)]/10 border border-[var(--brand-fg)]/15 text-5xl flex-shrink-0">
              🛒
            </div>
          </div>
        </div>
      </section>

      {/* ================= Marketplace body ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <MarketPlace />
      </section>

      {/* ================= Footer ================= */}
      <footer className="border-t border-[var(--border)] py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-[var(--brand)] flex items-center justify-center text-[var(--brand-fg)]">
              <BrandIcon className="w-4 h-4" />
            </span>
            <span className="font-display font-bold text-sm text-[var(--text)]">AgriSoko</span>
          </div>
          <p className="text-xs text-[var(--text-dim)]">
            © 2025 AgriSoko. Growing Kenya's agriculture, together.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PublicMarketplace;