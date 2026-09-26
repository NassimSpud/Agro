import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

// ======================== Icons ========================
const SearchIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
  </svg>
);

const StarIcon = ({ className = "w-3 h-3" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const CartPlusIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    <path d="M12 9v6M9 12h6" />
  </svg>
);

const HeartIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z" />
  </svg>
);

const MapPinIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const ChevronDownIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const GridIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
);

// ======================== Data ========================
const FRUITS = [
  { id: "f1", name: "Hass Avocado",       price: 120, unit: "kg",     emoji: "🥑", seller: "Kiambu Fresh Farms",     rating: 4.9, location: "Kiambu",     tag: "Top Rated",   stock: 240 },
  { id: "f2", name: "Sweet Bananas",      price: 60,  unit: "bunch",  emoji: "🍌", seller: "Meru Banana Growers",    rating: 4.7, location: "Meru",       tag: null,          stock: 180 },
  { id: "f3", name: "Ripe Mangoes",       price: 90,  unit: "kg",     emoji: "🥭", seller: "Kilifi Tropical Farm",   rating: 4.8, location: "Kilifi",     tag: "Seasonal",    stock: 150 },
  { id: "f4", name: "Red Apples",         price: 180, unit: "kg",     emoji: "🍎", seller: "Nyandarua Highlands",    rating: 4.6, location: "Nyandarua",  tag: null,          stock: 95 },
  { id: "f5", name: "Passion Fruit",      price: 140, unit: "kg",     emoji: "🍈", seller: "Kisii Fruit Collective", rating: 4.9, location: "Kisii",      tag: "Fresh Today", stock: 120 },
  { id: "f6", name: "Sweet Pineapple",    price: 100, unit: "piece",  emoji: "🍍", seller: "Thika Pineapple Hub",    rating: 4.7, location: "Thika",      tag: null,          stock: 200 },
  { id: "f7", name: "Watermelon",         price: 250, unit: "piece",  emoji: "🍉", seller: "Garissa Farms",          rating: 4.5, location: "Garissa",    tag: "Bulk Deal",   stock: 80 },
  { id: "f8", name: "Strawberries",       price: 380, unit: "punnet", emoji: "🍓", seller: "Limuru Berry Farm",      rating: 4.9, location: "Limuru",     tag: "Premium",     stock: 42 },
  { id: "f9", name: "Oranges",            price: 110, unit: "kg",     emoji: "🍊", seller: "Machakos Citrus",        rating: 4.6, location: "Machakos",   tag: null,          stock: 260 },
  { id: "f10", name: "Purple Grapes",     price: 420, unit: "kg",     emoji: "🍇", seller: "Naivasha Vineyards",     rating: 4.8, location: "Naivasha",   tag: "Premium",     stock: 35 },
  { id: "f11", name: "Lemon",             price: 80,  unit: "kg",     emoji: "🍋", seller: "Taita Hills Farm",       rating: 4.5, location: "Taita",      tag: null,          stock: 175 },
  { id: "f12", name: "Papaya",            price: 70,  unit: "piece",  emoji: "🫐", seller: "Malindi Tropical",       rating: 4.4, location: "Malindi",    tag: null,          stock: 130 },
];

const SORTS = [
  { id: "popular", label: "Most popular" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Highest rated" },
];

// ======================== Product Card ========================
const ProductCard = ({ item, onAdd, onFav, navigate }) => (
  <article className="group bg-[var(--surface)] border border-[var(--border)] rounded-3xl overflow-hidden hover:shadow-[0_20px_45px_-25px_rgba(20,60,35,0.35)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col">
    {/* Image / emoji tile */}
    <div className="relative aspect-square bg-[var(--surface-2)] border-b border-[var(--border)] flex items-center justify-center overflow-hidden">
      <span className="text-[64px] sm:text-[72px] group-hover:scale-110 transition-transform duration-500">
        {item.emoji}
      </span>

      {/* Tag */}
      {item.tag && (
        <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-[var(--highlight)] text-[var(--highlight-fg)] px-2.5 py-1 rounded-full">
          {item.tag}
        </span>
      )}

      {/* Favorite */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onFav?.(item.id);
        }}
        aria-label="Add to favorites"
        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[var(--surface)]/90 backdrop-blur border border-[var(--border)] flex items-center justify-center text-[var(--text-dim)] hover:text-[var(--danger)] transition-colors"
      >
        <HeartIcon className="w-3.5 h-3.5" />
      </button>
    </div>

    {/* Body */}
    <div className="p-4 flex-1 flex flex-col">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-display font-bold text-[14px] text-[var(--text)] leading-snug line-clamp-1">
          {item.name}
        </h3>
        <span className="flex items-center gap-0.5 text-[11.5px] font-bold text-[var(--highlight-fg)] flex-shrink-0">
          <StarIcon className="w-3 h-3 text-[var(--highlight)]" />
          {item.rating}
        </span>
      </div>

      <p className="text-[11.5px] text-[var(--text-dim)] truncate">{item.seller}</p>

      <div className="flex items-center gap-1 text-[11px] text-[var(--text-dim)] mt-1">
        <MapPinIcon className="w-3 h-3" />
        {item.location}
      </div>

      {/* Price + add */}
      <div className="flex items-end justify-between gap-3 mt-4 pt-4 border-t border-[var(--border)]">
        <div>
          <p className="font-display font-bold text-[16px] text-[var(--text)] leading-none">
            KES {item.price}
          </p>
          <p className="text-[11px] text-[var(--text-dim)] mt-1">per {item.unit}</p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAdd?.(item.id);
          }}
          className="w-9 h-9 rounded-full bg-[var(--brand)] text-[var(--brand-fg)] flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
          aria-label={`Add ${item.name} to cart`}
        >
          <CartPlusIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  </article>
);

// ======================== Component ========================
const Fruits = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("popular");
  const [maxPrice, setMaxPrice] = useState(500);
  const [showSortMenu, setShowSortMenu] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = FRUITS.filter((f) => {
      const matchSearch = !q || f.name.toLowerCase().includes(q) || f.seller.toLowerCase().includes(q);
      const matchPrice = f.price <= maxPrice;
      return matchSearch && matchPrice;
    });

    switch (sort) {
      case "price-asc":  list = [...list].sort((a, b) => a.price - b.price); break;
      case "price-desc": list = [...list].sort((a, b) => b.price - a.price); break;
      case "rating":     list = [...list].sort((a, b) => b.rating - a.rating); break;
      default:           list = [...list].sort((a, b) => b.rating - a.rating);
    }
    return list;
  }, [query, sort, maxPrice]);

  const activeSortLabel = SORTS.find((s) => s.id === sort)?.label ?? "Most popular";

  const handleAdd = (id) => {
    console.log("Add to cart:", id);
    // wire to StoreContext later: addToCart(id)
  };
  const handleFav = (id) => console.log("Favorite:", id);

  return (
    <div className="font-body">
      {/* ===== Hero banner ===== */}
      <div className="relative overflow-hidden rounded-3xl bg-[var(--brand)] px-6 sm:px-8 py-7 sm:py-9 mb-6">
        <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-[var(--highlight)] opacity-10 blur-3xl" />
        <div className="absolute -bottom-16 -left-10 w-52 h-52 rounded-full bg-[var(--accent)] opacity-10 blur-3xl" />

        <div className="relative flex items-center justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.15em] text-[var(--highlight)] mb-2">
              <span className="w-5 h-px bg-[var(--highlight)]/50" />
              Category
            </span>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--brand-fg)] tracking-tight">
              Fresh Fruits 🍎
            </h1>
            <p className="text-[13px] text-[var(--brand-fg)]/70 mt-1.5 max-w-md leading-relaxed">
              {FRUITS.length} fresh listings from verified Kenyan farms. Harvested daily, delivered nationwide.
            </p>
          </div>

          <div className="hidden sm:flex items-center justify-center w-24 h-24 rounded-3xl bg-[var(--brand-fg)]/8 border border-[var(--brand-fg)]/10 text-5xl">
            🍎
          </div>
        </div>
      </div>

      {/* ===== Toolbar ===== */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-6">
        {/* Search */}
        <div className="flex items-center bg-[var(--surface)] border border-[var(--border)] rounded-full px-4 py-2.5 flex-1 max-w-md">
          <SearchIcon className="w-4 h-4 text-[var(--text-dim)] flex-shrink-0" />
          <input
            type="text"
            placeholder="Search fruits or sellers..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full ml-2.5 bg-transparent outline-none text-[13px] text-[var(--text)] placeholder-[var(--text-dim)]"
          />
        </div>

        {/* Price slider */}
        <div className="flex items-center gap-3 bg-[var(--surface)] border border-[var(--border)] rounded-full px-4 py-2.5">
          <span className="text-[12px] font-semibold text-[var(--text-muted)] whitespace-nowrap">
            Max price
          </span>
          <input
            type="range"
            min={50}
            max={500}
            step={10}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-28 accent-[var(--brand)]"
          />
          <span className="text-[12px] font-bold text-[var(--text)] whitespace-nowrap min-w-[60px] text-right">
            KES {maxPrice}
          </span>
        </div>

        {/* Sort dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowSortMenu((v) => !v)}
            className="w-full lg:w-auto inline-flex items-center justify-between gap-2 bg-[var(--surface)] border border-[var(--border)] rounded-full px-4 py-2.5 text-[12.5px] font-semibold text-[var(--text)] hover:border-[var(--border-strong)] transition-colors"
          >
            <span className="flex items-center gap-2">
              <GridIcon className="w-3.5 h-3.5 text-[var(--text-dim)]" />
              {activeSortLabel}
            </span>
            <ChevronDownIcon className={`w-3.5 h-3.5 text-[var(--text-dim)] transition-transform ${showSortMenu ? "rotate-180" : ""}`} />
          </button>

          {showSortMenu && (
            <>
              <div className="fixed inset-0 z-20" onClick={() => setShowSortMenu(false)} />
              <div className="absolute right-0 top-full mt-2 w-56 bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-[0_20px_45px_-20px_rgba(20,60,35,0.35)] overflow-hidden z-30 py-1.5">
                {SORTS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setSort(s.id); setShowSortMenu(false); }}
                    className={`w-full text-left px-4 py-2.5 text-[13px] transition-colors ${
                      sort === s.id
                        ? "bg-[var(--accent-soft)] text-[var(--accent-fg)] font-semibold"
                        : "text-[var(--text-muted)] hover:bg-[var(--surface-2)] hover:text-[var(--text)]"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* ===== Result count ===== */}
      <p className="text-[12.5px] text-[var(--text-dim)] mb-4">
        Showing <span className="font-bold text-[var(--text)]">{filtered.length}</span> of {FRUITS.length} fruits
      </p>

      {/* ===== Grid ===== */}
      {filtered.length === 0 ? (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-10 sm:p-16 text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-3xl mb-5">
            🔍
          </div>
          <h2 className="font-display text-lg font-bold text-[var(--text)]">No fruits match your filters</h2>
          <p className="text-[13px] text-[var(--text-muted)] mt-2">
            Try adjusting your search or price range.
          </p>
          <button
            onClick={() => { setQuery(""); setMaxPrice(500); }}
            className="mt-6 inline-flex items-center gap-2 bg-[var(--brand)] text-[var(--brand-fg)] font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              onAdd={handleAdd}
              onFav={handleFav}
              navigate={navigate}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Fruits;