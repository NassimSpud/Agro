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

const ActiveDeliveriesIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z"/><circle cx="5" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>
  </svg>
);

const HistoryIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const RoutesIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M18 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/><path d="M6 13v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"/>
  </svg>
);

const TrackingIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);

const MessagesIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4A8.5 8.5 0 1 1 21 11.5z"/>
  </svg>
);

const GuidesIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);

const FAQIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

const ToolsIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14.7 6.3a5 5 0 0 0-6.9 6.9L3 18l3 3 4.8-4.8a5 5 0 0 0 6.9-6.9L14 12l-3-3z"/>
  </svg>
);

const CommunityIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="7" r="3"/><path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2"/><path d="M17 3.5a3 3 0 0 1 0 7"/><path d="M22 21v-2a5 5 0 0 0-3-4.5"/>
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"/><path d="M19.4 15a7.97 7.97 0 0 0 0-6l2-1.5-2-3.4-2.3.9a8 8 0 0 0-5.2-3L11.5 0h-4l-.4 2a8 8 0 0 0-5.2 3l-2.3-.9-2 3.4L-.4 9a8 8 0 0 0 0 6"/>
  </svg>
);

const LogoutIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>
  </svg>
);

// ======================== Component ========================
const DeliveryDashboard = () => {
  const [activeNav, setActiveNav] = useState("Dashboard");

  const navItems = [
    { name: "Dashboard", icon: <DashboardIcon /> },
    { name: "Active Deliveries", icon: <ActiveDeliveriesIcon /> },
    { name: "Delivery History", icon: <HistoryIcon /> },
    { name: "Routes", icon: <RoutesIcon /> },
    { name: "Tracking", icon: <TrackingIcon /> },
    { name: "Messages", icon: <MessagesIcon /> },
    { name: "Guides", icon: <GuidesIcon /> },
    { name: "FAQ", icon: <FAQIcon /> },
    { name: "Tools & Resources", icon: <ToolsIcon /> },
    { name: "Community", icon: <CommunityIcon /> },
    { name: "Settings", icon: <SettingsIcon /> },
  ];

  const stats = [
    { label: "Active Deliveries", value: "6", change: "2 due today", positive: true },
    { label: "Completed Today", value: "12", change: "All on time", positive: true },
    { label: "Earnings Today", value: "KSh 1,200", change: "+8% vs yesterday", positive: true },
    { label: "Rating", value: "4.9", change: "Based on 234 reviews", positive: false },
  ];

  const activeOrders = [
    { id: "D-101", pickup: "Nairobi", dropoff: "Kiambu", time: "10:30 AM", status: "In Transit" },
    { id: "D-102", pickup: "Nakuru", dropoff: "Eldoret", time: "1:15 PM", status: "Pending Pickup" },
    { id: "D-103", pickup: "Thika", dropoff: "Murang'a", time: "3:00 PM", status: "Scheduled" },
  ];

  return (
    <div className="font-body text-gray-900 min-h-screen bg-[#F7F7F4] grid grid-cols-[230px_1fr]">
      <aside className="bg-green-900 text-white p-4 flex flex-col">
        <div className="flex items-center gap-2 px-2 pb-5">
          <BrandIcon />
          <span className="font-display font-bold text-base">AgriSoko Delivery</span>
        </div>
        <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white/10 mb-4">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#8FE3A8] to-green-700 flex-shrink-0" />
          <div>
            <div className="text-sm font-bold">Speed Logistics</div>
            <div className="text-xs text-green-200/70">Delivery Partner</div>
          </div>
        </div>
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
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-green-100/80 hover:bg-white/10 hover:text-white mt-4">
            <LogoutIcon />
            Logout
          </a>
        </nav>
      </aside>

      <main className="p-7">
        <h1 className="font-display text-2xl font-bold mb-5">Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-4">
              <div className="text-xs text-gray-500 font-semibold mb-2">{stat.label}</div>
              <div className="font-display text-2xl font-bold mb-1.5">{stat.value}</div>
              <div className={`text-xs font-semibold ${stat.positive ? "text-green-700" : "text-gray-500"}`}>{stat.change}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white border border-gray-200 rounded-2xl p-5">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-display text-base font-bold">Active Deliveries</h3>
            </div>
            {activeOrders.map((order, idx) => (
              <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0 text-sm">
                <div>
                  <div className="font-bold">{order.id}</div>
                  <div className="text-gray-500 text-xs">{order.pickup} → {order.dropoff}</div>
                </div>
                <div className="text-sm font-medium">{order.time}</div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">{order.status}</span>
              </div>
            ))}
            <button className="w-full mt-4 py-2.5 border border-green-700 bg-white text-green-700 font-bold rounded-lg text-sm hover:bg-green-50 transition-colors">
              View All Deliveries
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-display text-base font-bold">Earnings Trend</h3>
              <span className="text-xs text-gray-500">This Week</span>
            </div>
            <div className="h-[150px]">
              <svg viewBox="0 0 300 130" preserveAspectRatio="none" className="w-full h-full">
                <polyline
                  points="0,110 40,95 80,85 120,70 160,55 200,60 240,35 300,20"
                  fill="none"
                  stroke="#2F7A4D"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polygon
                  points="0,110 40,95 80,85 120,70 160,55 200,60 240,35 300,20 300,130 0,130"
                  fill="#2F7A4D"
                  opacity="0.08"
                />
              </svg>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap');
        .font-display { font-family: 'Poppins', system-ui, sans-serif; }
        .font-body { font-family: 'Inter', system-ui, sans-serif; }
      `}</style>
    </div>
  );
};

export default DeliveryDashboard;