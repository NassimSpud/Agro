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

const ProductsIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
  </svg>
);

const OrdersIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

const InventoryIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);

const DeliveryIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z"/><circle cx="5" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>
  </svg>
);

const PaymentsIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

const HistoryIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
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

const CategoriesIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
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
const FarmersDashBoard = () => {
  const [activeNav, setActiveNav] = useState("Dashboard");

  const navItems = [
    { name: "Dashboard", icon: <DashboardIcon /> },
    { name: "Products", icon: <ProductsIcon /> },
    { name: "Orders", icon: <OrdersIcon /> },
    { name: "Inventory", icon: <InventoryIcon /> },
    { name: "Deliveries", icon: <DeliveryIcon /> },
    { name: "Payments", icon: <PaymentsIcon /> },
    { name: "Delivery History", icon: <HistoryIcon /> },
    { name: "Tracking", icon: <TrackingIcon /> },
    { name: "Messages", icon: <MessagesIcon /> },
    { name: "Categories", icon: <CategoriesIcon /> },
    { name: "Guides", icon: <GuidesIcon /> },
    { name: "FAQ", icon: <FAQIcon /> },
    { name: "Community", icon: <CommunityIcon /> },
    { name: "Settings", icon: <SettingsIcon /> },
  ];

  const stats = [
    { label: "Total Sales", value: "KSh 24,500", change: "+10% this month", positive: true },
    { label: "Total Orders", value: "45", change: "+5% this month", positive: true },
    { label: "Active Products", value: "12", change: "3 low stock", positive: false },
    { label: "Total Views", value: "1,870", change: "+18% this month", positive: true },
  ];

  const recentOrders = [
    { id: "Order #F201", detail: "Tomatoes - 50kg", amount: "KSh 2,500", status: "Shipped" },
    { id: "Order #F202", detail: "Maize - 100kg", amount: "KSh 4,000", status: "Processing" },
    { id: "Order #F203", detail: "Cabbage - 30kg", amount: "KSh 900", status: "Delivered" },
  ];

  return (
    <div className="font-body text-gray-900 min-h-screen bg-[#F7F7F4] grid grid-cols-[230px_1fr]">
      <aside className="bg-green-900 text-white p-4 flex flex-col">
        <div className="flex items-center gap-2 px-2 pb-5">
          <BrandIcon />
          <span className="font-display font-bold text-base">AgriSoko Farmer</span>
        </div>
        <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white/10 mb-4">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#8FE3A8] to-green-700 flex-shrink-0" />
          <div>
            <div className="text-sm font-bold">Green Acres Farm</div>
            <div className="text-xs text-green-200/70">Farmer</div>
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
              <h3 className="font-display text-base font-bold">Recent Orders</h3>
            </div>
            {recentOrders.map((order, idx) => (
              <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0 text-sm">
                <div>
                  <div className="font-bold">{order.id}</div>
                  <div className="text-gray-500 text-xs">{order.detail}</div>
                </div>
                <div className="text-sm font-medium">{order.amount}</div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  order.status === "Delivered" ? "bg-green-100 text-green-700" :
                  order.status === "Processing" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"
                }`}>
                  {order.status}
                </span>
              </div>
            ))}
            <button className="w-full mt-4 py-2.5 border border-green-700 bg-white text-green-700 font-bold rounded-lg text-sm hover:bg-green-50 transition-colors">
              View All Orders
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-display text-base font-bold">Sales Overview</h3>
              <span className="text-xs text-gray-500">This Month</span>
            </div>
            <div className="h-[150px]">
              <svg viewBox="0 0 300 130" preserveAspectRatio="none" className="w-full h-full">
                <polyline points="0,100 40,90 80,75 120,80 160,55 200,60 240,35 300,25" fill="none" stroke="#2F7A4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <polygon points="0,100 40,90 80,75 120,80 160,55 200,60 240,35 300,25 300,130 0,130" fill="#2F7A4D" opacity="0.08"/>
              </svg>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>1 May</span><span>10 May</span><span>20 May</span><span>31 May</span>
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

export default FarmersDashBoard;