import React from "react";
import { NavLink, Outlet } from "react-router-dom";

// ======================== Icons ========================
const BrandIcon = () => (
  <svg className="icon-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c-4-1-7-5-7-10a10 10 0 0 1 10-10c1 5 0 9-3 12-1.5 1.5-3.5 2.2-5.5 2.3" />
  </svg>
);

const MarketIcon = () => (
  <svg className="icon-nav" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l1-5h16l1 5"/><path d="M3 9v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9"/><path d="M3 9h18"/><path d="M9 21v-6h6v6"/>
  </svg>
);

const OrdersIcon = () => (
  <svg className="icon-nav" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

const TrackingIcon = () => (
  <svg className="icon-nav" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);

const FavoritesIcon = () => (
  <svg className="icon-nav" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"/>
  </svg>
);

const CategoriesIcon = () => (
  <svg className="icon-nav" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
  </svg>
);

const GuidesIcon = () => (
  <svg className="icon-nav" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);

const MessagesIcon = () => (
  <svg className="icon-nav" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4A8.5 8.5 0 1 1 21 11.5z"/>
  </svg>
);

const CommunityIcon = () => (
  <svg className="icon-nav" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="7" r="3"/><path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2"/><path d="M17 3.5a3 3 0 0 1 0 7"/><path d="M22 21v-2a5 5 0 0 0-3-4.5"/>
  </svg>
);

const OrderHistoryIcon = () => (
  <svg className="icon-nav" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const CartIcon = () => (
  <svg className="icon-nav" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);

const NearbyShopIcon = () => (
  <svg className="icon-nav" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const SettingsIcon = () => (
  <svg className="icon-nav" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"/><path d="M19.4 15a7.97 7.97 0 0 0 0-6l2-1.5-2-3.4-2.3.9a8 8 0 0 0-5.2-3L11.5 0h-4l-.4 2a8 8 0 0 0-5.2 3l-2.3-.9-2 3.4L-.4 9a8 8 0 0 0 0 6"/>
  </svg>
);

const LogoutIcon = () => (
  <svg className="icon-nav" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>
  </svg>
);

// ======================== Main Dashboard ========================
const BuyerDashboard = () => {
  const navItems = [
    { name: "Marketplace", icon: <MarketIcon />, to: "marketplace" },
    { name: "Orders", icon: <OrdersIcon />, to: "orders" },
    { name: "Tracking", icon: <TrackingIcon />, to: "tracking" },
    { name: "Favorites", icon: <FavoritesIcon />, to: "favorites" },
    { name: "Categories", icon: <CategoriesIcon />, to: "categories" },
    { name: "Guides", icon: <GuidesIcon />, to: "guides" },
    { name: "Messages", icon: <MessagesIcon />, to: "messages" },
    { name: "Community", icon: <CommunityIcon />, to: "community" },
    { name: "Order History", icon: <OrderHistoryIcon />, to: "orderhistory" },
    { name: "Cart", icon: <CartIcon />, to: "cart" },
    { name: "Nearby Shop", icon: <NearbyShopIcon />, to: "nearbyshop" },
    { name: "Settings", icon: <SettingsIcon />, to: "settings" },
  ];

  return (
    <div className="dashboard-container">
      {/* ========== Sidebar ========== */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <BrandIcon />
          <span>AgriSoko Buyer</span>
        </div>
        <div className="sidebar-user">
          <div className="avatar" />
          <div>
            <div className="user-name">John Doe</div>
            <div className="user-role">Buyer</div>
          </div>
        </div>
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
          <NavLink to="/" className="nav-item logout">
            <LogoutIcon />
            Logout
          </NavLink>
        </nav>
      </aside>

      {/* ========== Main Content ========== */}
      <main className="main-content">
        {/* Nested routes render here */}
        <Outlet />
      </main>

      {/* ========== Custom CSS ========== */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap');

        :root {
          --green-950: #0A1D10;
          --green-900: #123321;
          --green-800: #15452C;
          --green-700: #1D5C3A;
          --green-600: #2F7A4D;
          --green-500: #42A167;
          --green-100: #E7F3EA;
          --green-50: #F3F9F4;
          --gold: #F0A93B;
          --bg: #F7F7F4;
          --card: #FFFFFF;
          --ink: #1B1F1C;
          --ink-soft: #586158;
          --ink-mute: #8A938A;
          --border: #E4E7E1;
          --radius-sm: 8px;
          --radius-md: 14px;
          --radius-lg: 24px;
          --shadow-sm: 0 1px 2px rgba(15,35,20,.06);
          --shadow-md: 0 8px 24px rgba(15,35,20,.10);
          --font-display: 'Poppins', system-ui, -apple-system, sans-serif;
          --font-body: 'Inter', system-ui, -apple-system, sans-serif;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: var(--font-body);
          color: var(--ink);
          background: var(--bg);
        }

        /* Dashboard Layout */
        .dashboard-container {
          display: grid;
          grid-template-columns: 230px 1fr;
          min-height: 100vh;
          font-family: var(--font-body);
          color: var(--ink);
          background: var(--bg);
        }

        /* Sidebar */
        .sidebar {
          background: var(--green-900);
          color: #fff;
          padding: 16px;
          display: flex;
          flex-direction: column;
        }

        .sidebar-brand {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 8px 20px;
        }

        .sidebar-brand span {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 16px;
          color: #fff;
        }

        .icon-brand {
          width: 20px;
          height: 20px;
          color: #8FE3A8;
        }

        .sidebar-user {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px;
          border-radius: var(--radius-sm);
          background: rgba(255,255,255,0.1);
          margin-bottom: 16px;
        }

        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8FE3A8, var(--green-700));
          flex-shrink: 0;
        }

        .user-name {
          font-size: 14px;
          font-weight: 700;
        }

        .user-role {
          font-size: 12px;
          color: rgba(255,255,255,0.7);
        }

        .sidebar-nav {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: var(--radius-sm);
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          margin-bottom: 2px;
          transition: background 0.2s, color 0.2s;
        }

        .nav-item:hover {
          background: rgba(255,255,255,0.1);
          color: #fff;
        }

        .nav-item.active {
          background: var(--green-700);
          color: #fff;
          font-weight: 700;
        }

        .nav-item.logout {
          margin-top: 16px;
        }

        .icon-nav {
          width: 16px;
          height: 16px;
        }

        /* Main Content */
        .main-content {
          padding: 28px;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .dashboard-container {
            grid-template-columns: 1fr;
          }
          .sidebar {
            display: none; /* Hide sidebar on small screens */
          }
        }
      `}</style>
    </div>
  );
};

export default BuyerDashboard;