import { Link } from "react-router-dom";

// ======================== Icons ========================
const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const SearchIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

// ======================== Data ========================
const categories = [
  {
    name: "Fruits",
    emoji: "🍎",
    to: "fruits",
    count: 142,
    desc: "Avocados, bananas, mangoes & more",
    available: true,
  },
  {
    name: "Vegetables",
    emoji: "🥬",
    to: "vegetables",
    count: 98,
    desc: "Kale, tomatoes, onions & leafy greens",
    available: true,
  },
  {
    name: "Dairy Products",
    emoji: "🥛",
    to: "dairy",
    count: 64,
    desc: "Fresh milk, cheese, yoghurt & butter",
    available: true,
  },
  {
    name: "Grains & Cereals",
    emoji: "🌾",
    count: 87,
    desc: "Maize, wheat, rice & sorghum",
    available: false,
  },
  {
    name: "Livestock",
    emoji: "🐄",
    count: 41,
    desc: "Cattle, goats, sheep & poultry",
    available: false,
  },
  {
    name: "Seeds & Seedlings",
    emoji: "🌱",
    count: 116,
    desc: "Certified hybrid seeds & seedlings",
    available: false,
  },
  {
    name: "Farm Tools",
    emoji: "🛠️",
    count: 73,
    desc: "Jembes, sprayers & irrigation kits",
    available: false,
  },
  {
    name: "Fertilizers",
    emoji: "🧪",
    count: 52,
    desc: "Organic & inorganic farm inputs",
    available: false,
  },
];

// ======================== Component ========================
const Categories = () => {
  return (
    <div className="font-body">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">
            Browse Categories
          </h1>
          <p className="text-[13.5px] text-[var(--text-muted)] mt-1">
            Discover fresh produce across our marketplace
          </p>
        </div>

        {/* Search */}
        <div className="flex items-center bg-[var(--surface)] border border-[var(--border)] rounded-full px-4 py-2.5 w-full sm:w-72">
          <SearchIcon className="w-4 h-4 text-[var(--text-dim)] flex-shrink-0" />
          <input
            type="text"
            placeholder="Search categories..."
            className="w-full ml-2.5 bg-transparent outline-none text-[13px] text-[var(--text)] placeholder-[var(--text-dim)]"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => {
          const CardInner = (
            <>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-2xl transition-transform group-hover:scale-110">
                  {cat.emoji}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-dim)] bg-[var(--surface-2)] px-2.5 py-1 rounded-full border border-[var(--border)]">
                  {cat.count} items
                </span>
              </div>

              <p className="font-display font-bold text-[15.5px] text-[var(--text)] leading-snug">
                {cat.name}
              </p>
              <p className="text-[12.5px] text-[var(--text-dim)] mt-1 leading-relaxed">
                {cat.desc}
              </p>

              <div className="flex items-center justify-between mt-5 pt-4 border-t border-[var(--border)]">
                <span
                  className={`text-[12px] font-semibold ${
                    cat.available ? "text-[var(--accent-fg)]" : "text-[var(--text-dim)]"
                  }`}
                >
                  {cat.available ? "Available now" : "Coming soon"}
                </span>
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    cat.available
                      ? "bg-[var(--accent-soft)] text-[var(--accent-fg)] group-hover:bg-[var(--brand)] group-hover:text-[var(--brand-fg)]"
                      : "bg-[var(--surface-2)] text-[var(--text-dim)]"
                  }`}
                >
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </span>
              </div>
            </>
          );

          // Available categories link to their sub-route; the rest are inert previews
          if (cat.available) {
            return (
              <Link
                key={cat.name}
                to={cat.to}
                className="group relative bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-5 hover:shadow-[0_20px_45px_-25px_rgba(20,60,35,0.35)] hover:-translate-y-0.5 hover:border-[var(--border-strong)] transition-all duration-300"
              >
                {CardInner}
              </Link>
            );
          }

          return (
            <div
              key={cat.name}
              className="group relative bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-5 opacity-70 cursor-not-allowed"
            >
              {CardInner}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;