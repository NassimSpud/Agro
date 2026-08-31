import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "../Authentication/Login/Login";

// ======================== Icons ========================
const BrandIcon = () => (
  <svg className="w-6 h-6 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c-4-1-7-5-7-10a10 10 0 0 1 10-10c1 5 0 9-3 12-1.5 1.5-3.5 2.2-5.5 2.3" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const BellIcon = () => (
  <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.9 1.9 0 0 0 3.4 0" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 12 2 2 4-4" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-5 h-5 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 4 5v6c0 5.5 3.4 9.7 8 11 4.6-1.3 8-5.5 8-11V5z" />
  </svg>
);

const TruckIcon = () => (
  <svg className="w-5 h-5 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="6" width="14" height="11" rx="1" />
    <path d="M15 10h4l3 3v4h-7z" />
    <circle cx="6" cy="19" r="1.6" />
    <circle cx="17.5" cy="19" r="1.6" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-5 h-5 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="3" />
    <path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2" />
    <path d="M17 3.5a3 3 0 0 1 0 7" />
    <path d="M22 21v-2a5 5 0 0 0-3-4.5" />
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
    { name: "Farm Tools", emoji: "🛠" },
    { name: "Seeds", emoji: "🌱" },
    { name: "More", emoji: "⋯" },
  ];

  const features = [
    { icon: <CheckIcon />, title: "Quality Products", description: "Farm fresh & certified" },
    { icon: <ShieldIcon />, title: "Secure Payments", description: "100% protected" },
    { icon: <TruckIcon />, title: "Fast Delivery", description: "Across Kenya" },
    { icon: <UsersIcon />, title: "Trusted Community", description: "Join 10,000+ farmers" },
  ];

  const handleGetStarted = () => {
    navigate("/auth");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="font-body text-gray-900 min-h-screen bg-[#F7F7F4]">
      {/* ========== Header / Navigation ========== */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 sm:h-19">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-2">
              <BrandIcon />
              <span className="font-display font-bold text-lg text-green-900">AgriSoko</span>
            </Link>

            {/* Desktop nav links */}
            <ul className="hidden lg:flex items-center gap-8">
              {["Explore", "Market", "Community", "Services", "About Us"].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to="#"
                    className={`text-sm font-medium flex items-center gap-1 ${
                      item === "Explore" ? "text-green-700 font-bold" : "text-gray-700 hover:text-green-700"
                    }`}
                  >
                    {item}
                    {item === "Services" && <ChevronDownIcon />}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right side: search, bell, and one auth button */}
            <div className="flex items-center gap-4">
              <button className="relative w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200">
                <SearchIcon />
              </button>
              <button className="relative w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200">
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                <BellIcon />
              </button>
              {/* Single Login / Sign Up button */}
              <button
                onClick={() => navigate("/auth")}
                className="inline-flex items-center px-5 py-2 rounded-full bg-green-700 text-white font-semibold text-sm hover:bg-green-800 transition-colors"
              >
                Login
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* ========== Hero Section ========== */}
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.5), rgba(0,0,0,0)), url('/images/agriland.jpg')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-10 lg:p-12 max-w-4xl">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Kenya's Agriculture Marketplace 🌱
            </h1>
            <p className="mt-4 text-gray-200 text-base sm:text-lg leading-relaxed">
              Buy and sell farm products, connect with farmers, get expert advice and grow together.
            </p>

            {/* Search bar */}
            <form onSubmit={handleSearch} className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-full p-1.5 shadow-md max-w-xl">
              <div className="flex items-center px-4 py-2">
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Search for products, categories or sellers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full ml-3 bg-transparent outline-none text-gray-800 placeholder-gray-500 text-sm"
                />
              </div>
              <button type="submit" className="mt-2 sm:mt-0 sm:ml-2 bg-green-700 hover:bg-green-800 text-white font-bold text-sm px-8 py-3 rounded-full transition-colors">
                Search
              </button>
            </form>

            {/* Get Started Button */}
            <button
              onClick={handleGetStarted}
              className="mt-6 inline-flex items-center gap-2 bg-green-600/30 border border-green-300 text-white rounded-md px-6 py-3 font-semibold hover:bg-green-600/60 transition-colors"
            >
              Get Started
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ========== Category Pills ========== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold whitespace-nowrap transition-colors ${
                activeCategory === cat.name
                  ? "bg-green-700 border-green-700 text-white"
                  : "bg-white border-gray-300 text-gray-600 hover:border-green-700 hover:text-green-700"
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* ========== Features Grid ========== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-5 flex gap-4 items-start hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
                <p className="text-xs text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap');
        .font-display { font-family: 'Poppins', system-ui, sans-serif; }
        .font-body { font-family: 'Inter', system-ui, sans-serif; }
      `}</style>
    </div>
  );
};

export default LandingPage;