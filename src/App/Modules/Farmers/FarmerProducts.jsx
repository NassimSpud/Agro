import { useMemo, useState } from "react";

const SearchIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
  </svg>
);
const PlusIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
);
const EditIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);
const TrashIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
  </svg>
);

const PRODUCTS = [
  { id: "p1", name: "Hass Avocado",    price: 120,  unit: "kg",     stock: 240, category: "Fruits",     emoji: "🥑", active: true },
  { id: "p2", name: "Red Tomatoes",    price: 85,   unit: "kg",     stock: 18,  category: "Vegetables", emoji: "🍅", active: true },
  { id: "p3", name: "Fresh Milk",      price: 60,   unit: "litre",  stock: 40,  category: "Dairy",      emoji: "🥛", active: true },
  { id: "p4", name: "Sukuma Wiki",     price: 40,   unit: "bunch",  stock: 320, category: "Vegetables", emoji: "🥬", active: true },
  { id: "p5", name: "Dry Maize",       price: 45,   unit: "kg",     stock: 500, category: "Grains",     emoji: "🌽", active: true },
  { id: "p6", name: "Sweet Bananas",   price: 60,   unit: "bunch",  stock: 8,   category: "Fruits",     emoji: "🍌", active: false },
  { id: "p7", name: "Farm Eggs",       price: 350,  unit: "tray",   stock: 45,  category: "Dairy",      emoji: "🥚", active: true },
  { id: "p8", name: "Passion Fruit",   price: 140,  unit: "kg",     stock: 120, category: "Fruits",     emoji: "🍈", active: true },
];

const TABS = ["All", "Fruits", "Vegetables", "Dairy", "Grains"];

const FarmerProducts = () => {
  const [tab, setTab] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchTab = tab === "All" || p.category === tab;
      const matchSearch = !q || p.name.toLowerCase().includes(q);
      return matchTab && matchSearch;
    });
  }, [tab, search]);

  const stockState = (stock) => {
    if (stock === 0)  return { label: "Out",     color: "bg-[var(--danger-soft)] text-[var(--danger)]" };
    if (stock < 20)   return { label: "Low",     color: "bg-[var(--highlight-soft)] text-[var(--highlight-fg)]" };
    return { label: "In stock", color: "bg-[var(--accent-soft)] text-[var(--accent-fg)]" };
  };

  return (
    <div className="font-body">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">My Products</h1>
          <p className="text-[13.5px] text-[var(--text-muted)] mt-1">Manage your farm listings and pricing</p>
        </div>

        <div className="flex gap-2 flex-wrap">
          <div className="flex items-center bg-[var(--surface)] border border-[var(--border)] rounded-full px-4 py-2.5 flex-1 sm:flex-initial sm:min-w-[220px]">
            <SearchIcon className="w-4 h-4 text-[var(--text-dim)] flex-shrink-0" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full ml-2.5 bg-transparent outline-none text-[13px] text-[var(--text)] placeholder-[var(--text-dim)]"
            />
          </div>
          <button className="inline-flex items-center gap-2 bg-[var(--brand)] text-[var(--brand-fg)] text-[13px] font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity">
            <PlusIcon />
            Add Product
          </button>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-3 mb-5">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-full text-[12.5px] font-semibold whitespace-nowrap transition-all ${
              tab === t
                ? "bg-[var(--brand)] text-[var(--brand-fg)]"
                : "bg-[var(--surface)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border-strong)]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl overflow-hidden">
        <div className="hidden md:grid grid-cols-[1fr_120px_120px_140px_100px] gap-4 px-5 py-3 border-b border-[var(--border)] bg-[var(--surface-2)] text-[11px] font-bold uppercase tracking-wider text-[var(--text-dim)]">
          <span>Product</span>
          <span>Price</span>
          <span>Stock</span>
          <span>Status</span>
          <span className="text-right">Actions</span>
        </div>

        {filtered.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-[13px] text-[var(--text-muted)]">No products match your filters.</p>
          </div>
        ) : (
          filtered.map((p, i) => {
            const st = stockState(p.stock);
            return (
              <div
                key={p.id}
                className={`grid grid-cols-1 md:grid-cols-[1fr_120px_120px_140px_100px] gap-4 px-5 py-4 items-center hover:bg-[var(--surface-2)] transition-colors ${
                  i < filtered.length - 1 ? "border-b border-[var(--border)]" : ""
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-11 h-11 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-xl flex-shrink-0">
                    {p.emoji}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13.5px] font-semibold text-[var(--text)] truncate">{p.name}</p>
                    <p className="text-[11.5px] text-[var(--text-dim)] mt-0.5">{p.category}</p>
                  </div>
                </div>

                <div className="flex md:block items-center gap-2">
                  <span className="md:hidden text-[11px] font-bold uppercase tracking-wider text-[var(--text-dim)]">Price:</span>
                  <p className="text-[13px] font-bold text-[var(--text)]">
                    KES {p.price}
                    <span className="text-[10.5px] font-medium text-[var(--text-dim)]"> /{p.unit}</span>
                  </p>
                </div>

                <div className="flex md:block items-center gap-2">
                  <span className="md:hidden text-[11px] font-bold uppercase tracking-wider text-[var(--text-dim)]">Stock:</span>
                  <p className="text-[13px] font-semibold text-[var(--text)]">
                    {p.stock}
                    <span className="text-[10.5px] font-medium text-[var(--text-dim)]"> {p.unit}</span>
                  </p>
                </div>

                <div className="flex md:block items-center gap-2">
                  <span className="md:hidden text-[11px] font-bold uppercase tracking-wider text-[var(--text-dim)]">Status:</span>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-[11px] font-bold ${st.color}`}>
                      {st.label}
                    </span>
                    {!p.active && (
                      <span className="inline-flex px-2.5 py-1 rounded-full text-[11px] font-bold bg-[var(--surface-3)] text-[var(--text-muted)]">
                        Hidden
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center md:justify-end gap-2">
                  <button aria-label="Edit" className="w-9 h-9 rounded-full bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-fg)] hover:border-[var(--border-strong)] transition-colors">
                    <EditIcon />
                  </button>
                  <button aria-label="Delete" className="w-9 h-9 rounded-full bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--danger)] hover:border-[var(--danger)]/30 transition-colors">
                    <TrashIcon />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default FarmerProducts;