import { Link } from "react-router-dom";

const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const CATEGORIES = [
  { name: "Fruits",       emoji: "🍎", listings: 4, sold: 342, desc: "Avocado, bananas, mangoes and more" },
  { name: "Vegetables",   emoji: "🥬", listings: 3, sold: 218, desc: "Tomatoes, sukuma wiki, onions" },
  { name: "Grains",       emoji: "🌾", listings: 2, sold: 156, desc: "Maize, wheat, rice, sorghum" },
  { name: "Dairy",        emoji: "🥛", listings: 3, sold: 189, desc: "Fresh milk, cheese, yoghurt, eggs" },
  { name: "Livestock",    emoji: "🐄", listings: 0, sold: 0,   desc: "Cattle, goats, sheep, poultry" },
  { name: "Seeds",        emoji: "🌱", listings: 0, sold: 0,   desc: "Certified hybrid seeds, seedlings" },
  { name: "Fertilizers",  emoji: "🧪", listings: 0, sold: 0,   desc: "Organic and inorganic inputs" },
  { name: "Farm Tools",   emoji: "🛠️", listings: 0, sold: 0,   desc: "Jembes, sprayers, irrigation kits" },
];

const FarmerCategories = () => {
  return (
    <div className="font-body">
      <div className="mb-6">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">
          Categories
        </h1>
        <p className="text-[13.5px] text-[var(--text-muted)] mt-1">
          The categories your farm sells in
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CATEGORIES.map((cat) => {
          const active = cat.listings > 0;
          return (
            <div
              key={cat.name}
              className={`group relative bg-[var(--surface)] border rounded-3xl p-5 transition-all ${
                active
                  ? "border-[var(--border)] hover:border-[var(--border-strong)] hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-25px_rgba(20,60,35,0.3)]"
                  : "border-[var(--border)] opacity-60"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="w-14 h-14 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {cat.emoji}
                </span>
                <div className="text-right">
                  <p className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--text-dim)]">
                    {cat.listings} listings
                  </p>
                  {active && (
                    <p className="text-[11px] font-semibold text-[var(--accent-fg)] mt-1">
                      {cat.sold} sold
                    </p>
                  )}
                </div>
              </div>

              <p className="font-display font-bold text-[15.5px] text-[var(--text)] leading-snug">
                {cat.name}
              </p>
              <p className="text-[12.5px] text-[var(--text-muted)] mt-1.5 leading-relaxed">
                {cat.desc}
              </p>

              <div className="flex items-center justify-between mt-5 pt-4 border-t border-[var(--border)]">
                <span className={`text-[12px] font-semibold ${active ? "text-[var(--accent-fg)]" : "text-[var(--text-dim)]"}`}>
                  {active ? "Active" : "Not selling"}
                </span>
                <Link
                  to="/farmerdashboard/products"
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    active
                      ? "bg-[var(--accent-soft)] text-[var(--accent-fg)] group-hover:bg-[var(--brand)] group-hover:text-[var(--brand-fg)]"
                      : "bg-[var(--surface-2)] text-[var(--text-dim)]"
                  }`}
                >
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FarmerCategories;