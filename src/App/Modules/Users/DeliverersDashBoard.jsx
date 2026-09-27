import { useState } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

// ======================== Icons ========================
const BrandIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c-4-1-7-5-7-10a10 10 0 0 1 10-10c1 5 0 9-3 12-1.5 1.5-3.5 2.2-5.5 2.3" />
  </svg>
);
const SearchIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
  </svg>
);
const HomeIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M9 22V12h6v10" />
  </svg>
);
const TruckIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="6" width="14" height="11" rx="1.5" />
    <path d="M15 10h4l3 3v4h-7z" />
    <circle cx="6" cy="19" r="1.6" /><circle cx="17.5" cy="19" r="1.6" />
  </svg>
);
const MapIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z" />
    <path d="M8 2v16M16 6v16" />
  </svg>
);
const HistoryIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
    <path d="M3 3v5h5" />
    <path d="M12 7v5l3 2" />
  </svg>
);
const TrackingIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const MessageIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 1 1 9-8.4z" />
  </svg>
);
const GuidesIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);
const HelpIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2-3 4" />
    <path d="M12 17h.01" />
  </svg>
);
const ToolsIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a4 4 0 0 0 5.3 5.3l-1.6 1.6L10 5.6 11.6 4z" />
    <path d="m3 21 8.6-8.6" />
  </svg>
);
const UsersIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="3" />
    <path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2" />
    <path d="M17 3.5a3 3 0 0 1 0 7" />
    <path d="M22 21v-2a5 5 0 0 0-3-4.5" />
  </svg>
);
const SettingsIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
const BellIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.9 1.9 0 0 0 3.4 0" />
  </svg>
);
const LogoutIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><path d="M16 17l5-5-5-5M21 12H9" />
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
const ChevronDownIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

// ======================== Component ========================
const DeliveryDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navSections = [
    {
      label: "Deliveries",
      items: [
        { name: "Overview",         icon: HomeIcon,     to: "", end: true },
        { name: "Active Deliveries", icon: TruckIcon,    to: "activedeliveries", badge: "4" },
        { name: "Route Planner",    icon: MapIcon,      to: "routes" },
        { name: "Tracking",         icon: TrackingIcon, to: "tracking" },
        { name: "History",          icon: HistoryIcon,  to: "deliveryhistory" },
      ],
    },
    {
      label: "Support",
      items: [
        { name: "Messages",  icon: MessageIcon, to: "messages", badge: "2" },
        { name: "Guides",    icon: GuidesIcon,  to: "guides" },
        { name: "FAQ",       icon: HelpIcon,    to: "faq" },
        { name: "Tools",     icon: ToolsIcon,   to: "tools" },
        { name: "Community", icon: UsersIcon,   to: "community" },
      ],
    },
  ];

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="font-body min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased transition-colors duration-300">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 w-[36rem] h-[36rem] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full bg-[var(--highlight)] opacity-[0.04] blur-[130px]" />
      </div>

      {sidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* ================= Sidebar ================= */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-72 bg-[var(--surface)] border-r border-[var(--border)] flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-20 border-b border-[var(--border)] flex-shrink-0">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="w-9 h-9 rounded-xl bg-[var(--brand)] flex items-center justify-center text-[var(--brand-fg)] shadow-sm group-hover:scale-105 transition-transform">
              <BrandIcon className="w-5 h-5" />
            </span>
            <div>
              <p className="font-display font-bold text-[15px] tracking-tight text-[var(--text)] leading-none">
                Agri<span className="text-[var(--accent-fg)]">Soko</span>
              </p>
              <p className="text-[10.5px] text-[var(--text-dim)] font-medium mt-1 tracking-wider uppercase">
                Delivery Hub
              </p>
            </div>
          </Link>
          <button
            onClick={closeSidebar}
            className="lg:hidden w-8 h-8 rounded-lg hover:bg-[var(--surface-3)] flex items-center justify-center text-[var(--text-muted)] transition-colors"
            aria-label="Close sidebar"
          >
            <CloseIcon className="w-4 h-4" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-5 space-y-6">
          {navSections.map((section) => (
            <div key={section.label}>
              <p className="px-3 mb-2 text-[10.5px] font-bold uppercase tracking-[0.14em] text-[var(--text-dim)]">
                {section.label}
              </p>
              <div className="space-y-0.5">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      end={item.end}
                      onClick={closeSidebar}
                      className={({ isActive }) =>
                        `group flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13.5px] font-medium transition-all ${
                          isActive
                            ? "bg-[var(--brand)] text-[var(--brand-fg)] shadow-sm"
                            : "text-[var(--text-muted)] hover:text-[var(--accent-fg)] hover:bg-[var(--accent-soft)]"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <Icon
                            className={`w-[18px] h-[18px] flex-shrink-0 transition-colors ${
                              isActive
                                ? "text-[var(--highlight)]"
                                : "text-[var(--text-dim)] group-hover:text-[var(--accent-fg)]"
                            }`}
                          />
                          <span className="flex-1">{item.name}</span>
                          {item.badge && (
                            <span
                              className={`min-w-[22px] h-[22px] px-1.5 rounded-full text-[10.5px] font-bold flex items-center justify-center ${
                                isActive
                                  ? "bg-[var(--highlight)] text-[var(--highlight-fg)]"
                                  : "bg-[var(--surface-3)] text-[var(--text-muted)]"
                              }`}
                            >
                              {item.badge}
                            </span>
                          )}
                        </>
                      )}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="flex-shrink-0 border-t border-[var(--border)] p-3 space-y-2">
          <NavLink
            to="settings"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `group flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13.5px] font-medium transition-all ${
                isActive
                  ? "bg-[var(--brand)] text-[var(--brand-fg)]"
                  : "text-[var(--text-muted)] hover:text-[var(--accent-fg)] hover:bg-[var(--accent-soft)]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <SettingsIcon
                  className={`w-[18px] h-[18px] ${
                    isActive ? "text-[var(--highlight)]" : "text-[var(--text-dim)]"
                  }`}
                />
                Settings
              </>
            )}
          </NavLink>

          <div className="relative overflow-hidden rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] p-3.5">
            <div className="relative flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[var(--brand)] flex items-center justify-center text-[var(--brand-fg)] text-[13px] font-bold flex-shrink-0">
                JK
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-bold leading-tight truncate text-[var(--text)]">
                  James Kariuki
                </p>
                <p className="text-[11px] text-[var(--text-dim)] leading-tight">
                  Driver · Nairobi
                </p>
              </div>
              <button
                className="w-7 h-7 rounded-lg hover:bg-[var(--surface-3)] flex items-center justify-center text-[var(--text-dim)] transition-colors"
                aria-label="User menu"
              >
                <ChevronDownIcon className="w-3 h-3" />
              </button>
            </div>
          </div>

          <NavLink
            to="/"
            className="group flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13.5px] font-medium text-[var(--text-muted)] hover:text-[var(--danger)] hover:bg-[var(--danger-soft)] transition-all"
          >
            <LogoutIcon className="w-[18px] h-[18px] text-[var(--text-dim)] group-hover:text-[var(--danger)]" />
            Logout
          </NavLink>
        </div>
      </aside>

      {/* ================= Main ================= */}
      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 bg-[var(--bg)]/85 backdrop-blur-xl border-b border-[var(--border)]">
          <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8 gap-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-fg)] transition-colors flex-shrink-0"
                aria-label="Open sidebar"
              >
                <MenuIcon className="w-[18px] h-[18px]" />
              </button>

              <div className="hidden sm:flex items-center bg-[var(--surface)] border border-[var(--border)] rounded-full px-4 py-2.5 w-full max-w-md shadow-sm">
                <SearchIcon className="w-4 h-4 text-[var(--text-dim)] flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search deliveries, routes or orders..."
                  className="w-full ml-2.5 bg-transparent outline-none text-[13px] text-[var(--text)] placeholder-[var(--text-dim)]"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                aria-label="Search"
                className="sm:hidden w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)]"
              >
                <SearchIcon className="w-[18px] h-[18px]" />
              </button>

              <ThemeToggle />

              <button
                aria-label="Notifications"
                className="relative w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-fg)] transition-colors"
              >
                <BellIcon className="w-[18px] h-[18px]" />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[var(--highlight)] rounded-full ring-2 ring-[var(--surface)]" />
              </button>

              <div className="hidden sm:block w-px h-7 bg-[var(--border-strong)] mx-1" />

              <button className="hidden sm:flex items-center gap-2 pl-1 pr-3 py-1 rounded-full hover:bg-[var(--surface-2)] transition-colors">
                <span className="w-9 h-9 rounded-full bg-[var(--brand)] flex items-center justify-center text-[var(--brand-fg)] text-[12px] font-bold">
                  JK
                </span>
                <span className="hidden md:block text-left">
                  <span className="block text-[12.5px] font-bold text-[var(--text)] leading-none">
                    James Kariuki
                  </span>
                  <span className="block text-[11px] text-[var(--text-dim)] leading-none mt-1">
                    Driver
                  </span>
                </span>
                <ChevronDownIcon className="hidden md:block w-3 h-3 text-[var(--text-dim)]" />
              </button>
            </div>
          </div>
        </header>

        <main className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <Outlet />
        </main>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..800;1,9..144,300..600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .font-display { font-family: 'Fraunces', Georgia, serif; font-variation-settings: 'SOFT' 0, 'WONK' 0; }
        .font-body    { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; }
        ::-webkit-scrollbar { height: 6px; width: 6px; }
        ::-webkit-scrollbar-thumb { background: var(--border-strong); border-radius: 99px; }
        ::-webkit-scrollbar-track { background: transparent; }
      `}</style>
    </div>
  );
};

export default DeliveryDashboard;