import { useState } from "react";

// ======================== Icons ========================
const BrandIcon = () => (
  <svg className="w-5 h-5 text-[#8FE3A8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c-4-1-7-5-7-10a10 10 0 0 1 10-10c1 5 0 9-3 12-1.5 1.5-3.5 2.2-5.5 2.3" />
  </svg>
);

const DashboardIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>
  </svg>
);

const UsersIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="7" r="3" /><path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2"/><path d="M17 3.5a3 3 0 0 1 0 7"/><path d="M22 21v-2a5 5 0 0 0-3-4.5"/>
  </svg>
);

const MarketIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l1-5h16l1 5"/><path d="M3 9v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9"/><path d="M3 9h18"/><path d="M9 21v-6h6v6"/>
  </svg>
);

const OrdersIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

const PaymentsIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

const BellIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/>
  </svg>
);

const BroadcastIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
  </svg>
);

const BusinessIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 21h18M5 21V7l7-4 7 4v14"/><path d="M9 9h1M14 9h1M9 13h1M14 13h1M9 17h1M14 17h1"/>
  </svg>
);

const ReportsIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
  </svg>
);

const MessagesIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4A8.5 8.5 0 1 1 21 11.5z"/>
  </svg>
);

const KnowledgeIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"/><path d="M19.4 15a7.97 7.97 0 0 0 0-6l2-1.5-2-3.4-2.3.9a8 8 0 0 0-5.2-3L11.5 0h-4l-.4 2a8 8 0 0 0-5.2 3l-2.3-.9-2 3.4L-.4 9a8 8 0 0 0 0 6"/>
  </svg>
);

const ToolsIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14.7 6.3a5 5 0 0 0-6.9 6.9L3 18l3 3 4.8-4.8a5 5 0 0 0 6.9-6.9L14 12l-3-3z"/>
  </svg>
);

const LogoutIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>
  </svg>
);

// ======================== Component ========================
const AdminDashboard = () => {
  const [activeNav, setActiveNav] = useState("Dashboard");

  const navItems = [
    { name: "Dashboard", icon: <DashboardIcon /> },
    { name: "User Management", icon: <UsersIcon /> },
    { name: "Market", icon: <MarketIcon /> },
    { name: "Orders", icon: <OrdersIcon /> },
    { name: "Payments", icon: <PaymentsIcon /> },
    { name: "Notifications", icon: <BellIcon /> },
    { name: "Broadcasts", icon: <BroadcastIcon /> },
    { name: "Business", icon: <BusinessIcon /> },
    { name: "Reports", icon: <ReportsIcon /> },
    { name: "Messages", icon: <MessagesIcon /> },
    { name: "Knowledge Base", icon: <KnowledgeIcon /> },
    { name: "Settings", icon: <SettingsIcon /> },
    { name: "Tools", icon: <ToolsIcon /> },
  ];

  const stats = [
    { label: "Total Users", value: "1,245", change: "+12% this month", positive: true },
    { label: "Total Sellers", value: "342", change: "+8% this month", positive: true },
    { label: "Total Buyers", value: "890", change: "+15% this month", positive: true },
    { label: "Total Revenue", value: "KSh 1.2M", change: "+20% this month", positive: true },
  ];

  const recentUsers = [
    { name: "Maina Wanjiku", role: "Buyer", joined: "2 hours ago" },
    { name: "Green World Farm", role: "Seller", joined: "5 hours ago" },
    { name: "Agro Supplies Ltd", role: "Supplier", joined: "1 day ago" },
  ];

  const chartData = {
    polyline: "0,90 40,85 80,60 120,70 160,40 200,50 240,20 300,30",
    area: "0,90 40,85 80,60 120,70 160,40 200,50 240,20 300,30 300,130 0,130",
  };

  return (
    <div className="font-body text-gray-900 min-h-screen bg-[#F7F7F4] grid grid-cols-[230px_1fr]">
      {/* ========== Sidebar ========== */}
      <aside className="bg-green-900 text-white p-4 flex flex-col">
        {/* Brand */}
        <div className="flex items-center gap-2 px-2 pb-5">
          <BrandIcon />
          <span className="font-display font-bold text-base">AgriSoko Admin</span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white/10 mb-4">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#8FE3A8] to-green-700 flex-shrink-0" />
          <div>
            <div className="text-sm font-bold">Admin User</div>
            <div className="text-xs text-green-200/70">Administrator</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              onClick={() => setActiveNav(item.name)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium mb-0.5 transition-colors ${
                activeNav === item.name
                  ? "bg-green-700 text-white font-bold"
                  : "text-green-100/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.icon}
              {item.name}
            </a>
          ))}
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-green-100/80 hover:bg-white/10 hover:text-white mt-4"
          >
            <LogoutIcon />
            Logout
          </a>
        </nav>
      </aside>

      {/* ========== Main Content ========== */}
      <main className="p-7">
        <h1 className="font-display text-2xl font-bold mb-5">Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-4">
              <div className="text-xs text-gray-500 font-semibold mb-2">{stat.label}</div>
              <div className="font-display text-2xl font-bold mb-1.5">{stat.value}</div>
              <div className={`text-xs font-semibold ${stat.positive ? "text-green-700" : "text-gray-500"}`}>
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Recent Users */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-display text-base font-bold">Recent Users</h3>
              <span className="text-xs text-gray-500">Last 24 hours</span>
            </div>
            {recentUsers.map((user, idx) => (
              <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0 text-sm">
                <div>
                  <div className="font-bold">{user.name}</div>
                  <div className="text-gray-500 text-xs">{user.role}</div>
                </div>
                <span className="text-xs text-gray-500">{user.joined}</span>
              </div>
            ))}
            <button className="w-full mt-4 py-2.5 border border-green-700 bg-white text-green-700 font-bold rounded-lg text-sm hover:bg-green-50 transition-colors">
              View All Users
            </button>
          </div>

          {/* Platform Growth Chart */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-display text-base font-bold">Platform Growth</h3>
              <span className="text-xs text-gray-500">This Month</span>
            </div>
            <div className="h-[150px]">
              <svg viewBox="0 0 300 130" preserveAspectRatio="none" className="w-full h-full">
                <polyline
                  points={chartData.polyline}
                  fill="none"
                  stroke="#2F7A4D"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polygon
                  points={chartData.area}
                  fill="#2F7A4D"
                  opacity="0.08"
                />
              </svg>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>1 May</span>
              <span>10 May</span>
              <span>20 May</span>
              <span>31 May</span>
            </div>
          </div>
        </div>
      </main>

      {/* Font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap');
        .font-display { font-family: 'Poppins', system-ui, sans-serif; }
        .font-body { font-family: 'Inter', system-ui, sans-serif; }
      `}</style>
    </div>
  );
};

export default AdminDashboard;