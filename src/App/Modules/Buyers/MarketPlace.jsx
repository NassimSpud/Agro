import { useState } from "react";

// Icons
const SearchIcon = () => (
  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const CartIcon = () => (
  <svg className="w-4 h-4 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-3 h-3 text-yellow-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.5 5.5 21l2-7.5L2 9h7z" /></svg>
);

const MarketPlace = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");

  const categories = [
    "All Products", "Fruits", "Vegetables", "Grains & Cereals",
    "Livestock", "Dairy", "Fertilizers", "Farm Tools", "Seeds", "Others"
  ];

  const products = [
    { id: 1, name: "Avocados", price: "KSh 150 / kg", location: "Nakuru County", rating: 4.8, reviews: 108, bg: "linear-gradient(160deg,#7CB342,#33691E)" },
    { id: 2, name: "Maize Grains", price: "KSh 80 / kg", location: "Uasin Gishu", rating: 4.6, reviews: 95, bg: "linear-gradient(160deg,#D9B26A,#A9762F)" },
    { id: 3, name: "Sukuma Wiki", price: "KSh 40 / bunch", location: "Nairobi", rating: 4.7, reviews: 88, bg: "linear-gradient(160deg,#66BB6A,#2E7D32)" },
    { id: 4, name: "Eggs (Tray)", price: "KSh 350", location: "Kiambu County", rating: 4.8, reviews: 80, bg: "linear-gradient(160deg,#FFE082,#F2C14E)" },
    { id: 5, name: "Tomatoes", price: "KSh 70 / kg", location: "Kirinyaga", rating: 4.5, reviews: 61, bg: "linear-gradient(160deg,#EF5350,#B71C1C)" },
    { id: 6, name: "Irish Potatoes", price: "KSh 60 / kg", location: "Nyandarua", rating: 4.6, reviews: 72, bg: "linear-gradient(160deg,#D7B98E,#9A7148)" },
    { id: 7, name: "Miraa (Khat)", price: "KSh 120 / kg", location: "Meru", rating: 4.4, reviews: 39, bg: "linear-gradient(160deg,#8BC34A,#33691E)" },
    { id: 8, name: "Dairy Milk (1L)", price: "KSh 80 / litre", location: "Nakuru", rating: 4.7, reviews: 54, bg: "linear-gradient(160deg,#F5F5F5,#CFD8DC)" },
  ];

  return (
    <div className="grid grid-cols-[200px_1fr] gap-6">
      {/* Sidebar */}
      <aside className="bg-white border border-gray-200 rounded-xl p-4 h-fit">
        <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">Categories</h3>
        <ul className="space-y-1">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setActiveCategory(cat)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
                  activeCategory === cat
                    ? "bg-green-100 text-green-800 font-bold"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <div>
        {/* Toolbar */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <h1 className="font-display text-2xl font-bold">All Products</h1>
          <div className="flex gap-2 flex-wrap">
            <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-3 py-2 min-w-[200px]">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search products..."
                className="outline-none text-sm flex-1 bg-transparent"
              />
            </div>
            <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-600">
              <LocationIcon />
              Location
              <ChevronDownIcon />
            </button>
            <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-600">
              Sort by
              <ChevronDownIcon />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-28 relative" style={{ background: product.bg }}>
                <button className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-lg shadow flex items-center justify-center">
                  <CartIcon />
                </button>
              </div>
              <div className="p-3">
                <div className="font-bold text-sm">{product.name}</div>
                <div className="text-green-700 font-bold text-sm">{product.price}</div>
                <div className="text-gray-500 text-xs">{product.location}</div>
                <div className="flex items-center gap-1 mt-1 text-xs text-gray-600">
                  <StarIcon />
                  {product.rating} ({product.reviews})
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;