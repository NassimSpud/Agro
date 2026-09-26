import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "./Header/Cart/StoreContext";

// ======================== Icons ========================
const SearchIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
  </svg>
);
const CartIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);
const CartPlusIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    <path d="M12 9v6M9 12h6" />
  </svg>
);
const CheckIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const StarIcon = ({ className = "w-3 h-3" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const MapPinIcon = ({ className = "w-3 h-3" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const ChevronDownIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const EmptyBoxIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
  </svg>
);

// ======================== Constants ========================
const CATEGORIES = [
  "All Products", "Fruits", "Vegetables", "Grains & Cereals",
  "Livestock", "Dairy", "Fertilizers", "Farm Tools", "Seeds", "Others",
];

const SORTS = [
  { id: "popular", label: "Most popular" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Highest rated" },
];

const KES = (n) => `KES ${n.toLocaleString()}`;

// ======================== Product Card ========================
const ProductCard = ({ product, onAdd, inCart, qtyInCart }) => (
  <article className="group bg-[var(--surface)] border border-[var(--border)] rounded-3xl overflow-hidden hover:shadow-[0_20px_45px_-25px_rgba(20,60,35,0.35)] hover:-translate-y-0.5 hover:border-[var(--border-strong)] transition-all duration-300 flex flex-col">
    <div className="relative aspect-square bg-[var(--surface-2)] border-b border-[var(--border)] flex items-center justify-center overflow-hidden">
      <span className="text-[60px] group-hover:scale-110 transition-transform duration-500">
        {product.image}
      </span>
      {product.tag && (
        <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-[var(--highlight)] text-[var(--highlight-fg)] px-2.5 py-1 rounded-full">
          {product.tag}
        </span>
      )}
      {inCart && (
        <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-[10.5px] font-bold bg-[var(--accent)] text-[var(--brand-fg)] px-2 py-1 rounded-full">
          <CheckIcon className="w-3 h-3" />
          {qtyInCart} in cart
        </span>
      )}
    </div>

    <div className="p-4 flex-1 flex flex-col">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-display font-bold text-[14px] text-[var(--text)] leading-snug line-clamp-1">
          {product.name}
        </h3>
        <span className="flex items-center gap-0.5 text-[11.5px] font-bold text-[var(--highlight-fg)] flex-shrink-0">
          <StarIcon className="w-3 h-3 text-[var(--highlight)]" />
          {product.rating}
        </span>
      </div>

      <p className="text-[11.5px] text-[var(--text-dim)] truncate">{product.seller}</p>

      <div className="flex items-center gap-1 text-[11px] text-[var(--text-dim)] mt-1">
        <MapPinIcon className="w-3 h-3" />
        {product.location}
      </div>

      <div className="flex items-end justify-between gap-3 mt-4 pt-4 border-t border-[var(--border)]">
        <div>
          <p className="font-display font-bold text-[16px] text-[var(--text)] leading-none">
            KES {product.price}
          </p>
          <p className="text-[11px] text-[var(--text-dim)] mt-1">per {product.unit}</p>
        </div>
        <button
          onClick={() => onAdd(product._id)}
          aria-label={`Add ${product.name} to cart`}
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-sm ${
            inCart
              ? "bg-[var(--accent)] text-[var(--brand-fg)]"
              : "bg-[var(--brand)] text-[var(--brand-fg)] hover:opacity-90"
          }`}
        >
          {inCart ? <CheckIcon className="w-4 h-4" /> : <CartPlusIcon className="w-4 h-4" />}
        </button>
      </div>
    </div>
  </article>
);

// ======================== Component ========================
const MarketPlace = () => {
  const navigate = useNavigate();
  const { products, loading, addToCart, cartItems, getCartCount, getCartTotal } = useStore();

  const [activeCategory, setActiveCategory] = useState("All Products");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("popular");
  const [sortOpen, setSortOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = products.filter((p) => {
      const matchCategory = activeCategory === "All Products" || p.category === activeCategory;
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.seller.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });

    switch (sort) {
      case "price-asc":  list = [...list].sort((a, b) => a.price - b.price); break;
      case "price-desc": list = [...list].sort((a, b) => b.price - a.price); break;
      case "rating":     list = [...list].sort((a, b) => b.rating - a.rating); break;
      default:           list = [...list].sort((a, b) => b.rating - a.rating);
    }
    return list;
  }, [products, activeCategory, query, sort]);

  const cartCount = getCartCount();
  const cartTotal = getCartTotal();
  const activeSortLabel = SORTS.find((s) => s.id === sort)?.label ?? "Most popular";

  return (
    <div className="font-body pb-24">
      {/* ===== Header row ===== */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">
            Marketplace
          </h1>
          <p className="text-[13.5px] text-[var(--text-muted)] mt-1">
            Fresh produce from verified Kenyan farmers
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          <div className="flex items-center bg-[var(--surface)] border border-[var(--border)] rounded-full px-4 py-2.5 flex-1 sm:flex-initial sm:min-w-[240px]">
            <SearchIcon className="w-4 h-4 text-[var(--text-dim)] flex-shrink-0" />
            <input
              type="text"
              placeholder="Search products or sellers..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full ml-2.5 bg-transparent outline-none text-[13px] text-[var(--text)] placeholder-[var(--text-dim)]"
            />
          </div>

          <div className="relative">
            <button
              onClick={() => setSortOpen((v) => !v)}
              className="inline-flex items-center gap-2 bg-[var(--surface)] border border-[var(--border)] rounded-full px-4 py-2.5 text-[12.5px] font-semibold text-[var(--text)] hover:border-[var(--border-strong)] transition-colors"
            >
              {activeSortLabel}
              <ChevronDownIcon className={`w-3.5 h-3.5 text-[var(--text-dim)] transition-transform ${sortOpen ? "rotate-180" : ""}`} />
            </button>

            {sortOpen && (
              <>
                <div className="fixed inset-0 z-20" onClick={() => setSortOpen(false)} />
                <div className="absolute right-0 top-full mt-2 w-56 bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-[0_20px_45px_-20px_rgba(20,60,35,0.35)] overflow-hidden z-30 py-1.5">
                  {SORTS.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => { setSort(s.id); setSortOpen(false); }}
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
      </div>

      {/* ===== Category pills ===== */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-5">
        {CATEGORIES.map((cat) => {
          const active = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-[12.5px] font-semibold whitespace-nowrap transition-all ${
                active
                  ? "bg-[var(--brand)] text-[var(--brand-fg)]"
                  : "bg-[var(--surface)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border-strong)]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* ===== Result count ===== */}
      <p className="text-[12.5px] text-[var(--text-dim)] mb-4">
        Showing <span className="font-bold text-[var(--text)]">{filtered.length}</span>{" "}
        {filtered.length === 1 ? "product" : "products"}
        {activeCategory !== "All Products" && <> in <span className="font-bold text-[var(--text)]">{activeCategory}</span></>}
      </p>

      {/* ===== Grid ===== */}
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl overflow-hidden animate-pulse">
              <div className="aspect-square bg-[var(--surface-2)]" />
              <div className="p-4 space-y-2">
                <div className="h-3 bg-[var(--surface-2)] rounded w-3/4" />
                <div className="h-3 bg-[var(--surface-2)] rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-10 sm:p-16 text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-[var(--text-dim)] mb-5">
            <EmptyBoxIcon className="w-7 h-7" />
          </div>
          <h2 className="font-display text-lg font-bold text-[var(--text)]">No products found</h2>
          <p className="text-[13px] text-[var(--text-muted)] mt-2 max-w-sm mx-auto">
            Try a different category or search term.
          </p>
          <button
            onClick={() => { setQuery(""); setActiveCategory("All Products"); }}
            className="mt-6 inline-flex items-center gap-2 bg-[var(--brand)] text-[var(--brand-fg)] font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onAdd={addToCart}
              inCart={Boolean(cartItems[product._id])}
              qtyInCart={cartItems[product._id] || 0}
            />
          ))}
        </div>
      )}

      {/* ===== Floating cart bar (with items) ===== */}
      {cartCount > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:left-auto lg:right-8 lg:translate-x-0">
          <button
            onClick={() => navigate("/buyerdashboard/cart")}
            className="group flex items-center gap-3 bg-[var(--brand)] text-[var(--brand-fg)] pl-5 pr-2 py-2 rounded-full shadow-[0_20px_45px_-15px_rgba(20,60,35,0.6)] hover:opacity-95 transition-opacity"
          >
            <span className="relative flex items-center justify-center w-7 h-7">
              <CartIcon className="w-[18px] h-[18px]" />
              <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-[var(--highlight)] text-[var(--highlight-fg)] text-[10px] font-bold flex items-center justify-center ring-2 ring-[var(--brand)]">
                {cartCount}
              </span>
            </span>
            <span className="text-left">
              <span className="block text-[10.5px] uppercase tracking-wider opacity-70 font-bold leading-none">
                {cartCount} {cartCount === 1 ? "item" : "items"}
              </span>
              <span className="block text-[13.5px] font-bold leading-tight mt-1">
                {KES(cartTotal)}
              </span>
            </span>
            <span className="w-9 h-9 rounded-full bg-[var(--highlight)] text-[var(--highlight-fg)] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRightIcon className="w-4 h-4" />
            </span>
          </button>
        </div>
      )}

      {/* ===== Empty-cart helper link ===== */}
      {cartCount === 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:left-auto lg:right-8 lg:translate-x-0">
          <Link
            to="/buyerdashboard/cart"
            className="flex items-center gap-2 bg-[var(--surface)] border border-[var(--border)] text-[var(--text-muted)] pl-4 pr-3 py-2.5 rounded-full shadow-lg hover:border-[var(--border-strong)] hover:text-[var(--text)] transition-colors text-[12.5px] font-semibold"
          >
            <CartIcon className="w-[16px] h-[16px]" />
            View cart
          </Link>
        </div>
      )}
    </div>
  );
};

export default MarketPlace;