import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "../../Modules/Users/ThemeToggle";

// ======================== Icons ========================
const BrandIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c-4-1-7-5-7-10a10 10 0 0 1 10-10c1 5 0 9-3 12-1.5 1.5-3.5 2.2-5.5 2.3" />
  </svg>
);
const ChevronDownIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const ArrowRightIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const CartIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);
const MenuIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);
const CloseIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

// ======================== Services Menu ========================
export const SERVICES_MENU = [
  { name: "Marketplace",         desc: "Buy & sell farm produce",       to: "/services/marketplace" },
  { name: "Logistics & Delivery", desc: "Nationwide cold-chain delivery", to: "/services/logistics" },
  { name: "Payments & Escrow",    desc: "Secure M-Pesa & card payments",  to: "/services/payments" },
  { name: "Farm Advisory",        desc: "Expert agronomy support",        to: "/services/advisory" },
  { name: "Bulk & Wholesale",     desc: "Volume pricing for institutions", to: "/services/wholesale" },
  { name: "Seller Verification",  desc: "ID-verified, trusted farmers",   to: "/services/verification" },
];

// ======================== Header ========================
export const PublicHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);

  const userId = typeof window !== "undefined" ? localStorage.getItem("userId") : null;
  const isLoggedIn = Boolean(userId);

  const navItems = [
    { name: "Home",      to: "/" },
    { name: "Market",    to: "/market" },
    { name: "Community", to: "/community" },
    { name: "Services",  to: "/services", dropdown: true },
    { name: "About Us",  to: "/about" },
  ];

  // Close dropdown when route changes
  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  // Desktop hover handlers (with small delay to prevent flicker)
  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  const isActive = (item) => {
    if (item.name === "Services") return location.pathname.startsWith("/services");
    return location.pathname === item.to;
  };

  return (
    <>
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

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const active = isActive(item);
                if (item.dropdown) {
                  return (
                    <li
                      key={item.name}
                      className="relative"
                      onMouseEnter={openMenu}
                      onMouseLeave={closeMenu}
                    >
                      <Link
                        to={item.to}
                        className={`flex items-center gap-1 text-[13.5px] font-medium px-4 py-2 rounded-full transition-colors ${
                          active || servicesOpen
                            ? "text-[var(--accent-fg)] bg-[var(--accent-soft)]"
                            : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)]"
                        }`}
                      >
                        {item.name}
                        <ChevronDownIcon
                          className={`w-3 h-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                        />
                      </Link>

                      {servicesOpen && (
                        <div className="absolute left-0 top-full pt-2 w-[340px]">
                          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-[0_25px_60px_-20px_rgba(20,60,35,0.35)] overflow-hidden py-2">
                            {SERVICES_MENU.map((s) => (
                              <Link
                                key={s.name}
                                to={s.to}
                                className="flex items-start gap-3 px-4 py-2.5 hover:bg-[var(--surface-2)] transition-colors"
                              >
                                <span className="w-8 h-8 rounded-lg bg-[var(--accent-soft)] text-[var(--accent-fg)] flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5">
                                  {s.name[0]}
                                </span>
                                <span className="min-w-0">
                                  <span className="block text-[13px] font-semibold text-[var(--text)]">
                                    {s.name}
                                  </span>
                                  <span className="block text-[11.5px] text-[var(--text-dim)] mt-0.5">
                                    {s.desc}
                                  </span>
                                </span>
                              </Link>
                            ))}
                            <div className="border-t border-[var(--border)] mt-1 pt-1">
                              <Link
                                to="/services"
                                className="flex items-center justify-between px-4 py-2.5 text-[12.5px] font-semibold text-[var(--accent-fg)] hover:bg-[var(--accent-soft)] transition-colors"
                              >
                                View all services
                                <ArrowRightIcon />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  );
                }
                return (
                  <li key={item.name}>
                    <Link
                      to={item.to}
                      className={`text-[13.5px] font-medium px-4 py-2 rounded-full transition-colors ${
                        active
                          ? "text-[var(--accent-fg)] bg-[var(--accent-soft)]"
                          : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Right actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <ThemeToggle />

              <button
                onClick={() => navigate("/marketplace")}
                aria-label="Browse marketplace"
                className="hidden sm:flex w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--border)] items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-fg)] transition-colors"
              >
                <CartIcon />
              </button>

              {isLoggedIn ? (
                <button
                  onClick={() => navigate("/buyerdashboard")}
                  className="hidden sm:inline-flex items-center gap-2 bg-[var(--brand)] text-[var(--brand-fg)] font-semibold text-[13.5px] px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
                >
                  Dashboard
                  <ArrowRightIcon />
                </button>
              ) : (
                <button
                  onClick={() => navigate("/auth")}
                  className="hidden sm:inline-flex items-center gap-2 bg-[var(--brand)] text-[var(--brand-fg)] font-semibold text-[13.5px] px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
                >
                  Login
                  <ArrowRightIcon />
                </button>
              )}

              {/* Mobile menu */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
                className="lg:hidden w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)]"
              >
                {mobileOpen ? <CloseIcon className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[var(--border)] bg-[var(--surface)]">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`block text-[14px] font-medium px-4 py-2.5 rounded-xl transition-colors ${
                    isActive(item)
                      ? "text-[var(--accent-fg)] bg-[var(--accent-soft)]"
                      : "text-[var(--text-muted)] hover:bg-[var(--surface-2)]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-3 mt-2 border-t border-[var(--border)]">
                <p className="px-4 text-[10.5px] font-bold uppercase tracking-[0.14em] text-[var(--text-dim)] mb-2">
                  Services
                </p>
                {SERVICES_MENU.map((s) => (
                  <Link
                    key={s.name}
                    to={s.to}
                    className="block text-[13.5px] font-medium px-4 py-2 rounded-xl text-[var(--text-muted)] hover:bg-[var(--surface-2)]"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>

              <div className="pt-3 mt-2 border-t border-[var(--border)]">
                <button
                  onClick={() => navigate(isLoggedIn ? "/buyerdashboard" : "/auth")}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[var(--brand)] text-[var(--brand-fg)] font-semibold text-sm px-5 py-3 rounded-full"
                >
                  {isLoggedIn ? "Dashboard" : "Login"}
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

// ======================== Footer ========================
export const PublicFooter = () => {
  const columns = [
    {
      title: "Marketplace",
      links: [
        { name: "Browse Products", to: "/marketplace" },
        { name: "Categories",      to: "/market" },
        { name: "Bulk Orders",     to: "/services/wholesale" },
        { name: "Nearby Shops",    to: "/marketplace" },
      ],
    },
    {
      title: "Services",
      links: SERVICES_MENU.map((s) => ({ name: s.name, to: s.to })),
    },
    {
      title: "Company",
      links: [
        { name: "About Us",  to: "/about" },
        { name: "Community", to: "/community" },
        { name: "Careers",   to: "#" },
        { name: "Contact",   to: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", to: "#" },
        { name: "Terms",       to: "#" },
        { name: "Privacy",     to: "#" },
        { name: "Security",    to: "/services/payments" },
      ],
    },
  ];

  return (
    <footer className="border-t border-[var(--border)] mt-16 bg-[var(--surface)]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand block */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-9 h-9 rounded-xl bg-[var(--brand)] flex items-center justify-center text-[var(--brand-fg)]">
                <BrandIcon className="w-5 h-5" />
              </span>
              <span className="font-display font-bold text-[15.5px] tracking-tight text-[var(--text)]">
                Agri<span className="text-[var(--accent-fg)]">Soko</span>
              </span>
            </div>
            <p className="text-[12.5px] text-[var(--text-muted)] leading-relaxed max-w-xs">
              Kenya's agriculture marketplace — connecting farmers, buyers, and the future of farming.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--text-dim)] mb-3">
                {col.title}
              </p>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.name}>
                    <Link
                      to={l.to}
                      className="text-[12.5px] text-[var(--text-muted)] hover:text-[var(--accent-fg)] transition-colors"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11.5px] text-[var(--text-dim)]">
            © 2025 AgriSoko. Growing Kenya's agriculture, together.
          </p>
          <p className="text-[11.5px] text-[var(--text-dim)]">
            Made with 🌱 in Nairobi
          </p>
        </div>
      </div>
    </footer>
  );
};

// ======================== Shell ========================
const PublicPageShell = ({ children }) => {
  return (
    <div className="font-body min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased transition-colors duration-300">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 w-[36rem] h-[36rem] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full bg-[var(--highlight)] opacity-[0.04] blur-[130px]" />
      </div>

      <PublicHeader />

      <main>{children}</main>

      <PublicFooter />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..800;1,9..144,300..600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .font-display { font-family: 'Fraunces', Georgia, serif; font-variation-settings: 'SOFT' 0, 'WONK' 0; }
        .font-body    { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; }
      `}</style>
    </div>
  );
};

export default PublicPageShell;