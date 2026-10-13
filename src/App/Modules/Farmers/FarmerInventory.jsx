import { useMemo, useState } from "react";

const SearchIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
  </svg>
);
const AlertIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z" />
    <path d="M12 9v4M12 17h.01" />
  </svg>
);

const INVENTORY = [
  { id: "i1", name: "Hass Avocado",    emoji: "🥑", category: "Fruits",     stock: 240, threshold: 50, unit: "kg" },
  { id: "i2", name: "Red Tomatoes",    emoji: "🍅", category: "Vegetables", stock: 18,  threshold: 30, unit: "kg" },
  { id: "i3", name: "Fresh Milk",      emoji: "🥛", category: "Dairy",      stock: 40,  threshold: 20, unit: "litres" },
  { id: "i4", name: "Sukuma Wiki",     emoji: "🥬", category: "Vegetables", stock: 320, threshold: 100, unit: "bunches" },
  { id: "i5", name: "Dry Maize",       emoji: "🌽", category: "Grains",     stock: 500, threshold: 100, unit: "kg" },
  { id: "i6", name: "Sweet Bananas",   emoji: "🍌", category: "Fruits",     stock: 8,   threshold: 25,  unit: "bunches" },
  { id: "i7", name: "Farm Eggs",       emoji: "🥚", category: "Dairy",      stock: 45,  threshold: 20,  unit: "trays" },
  { id: "i8", name: "Passion Fruit",   emoji: "🍈", category: "Fruits",     stock: 120, threshold: 40,  unit: "kg" },
];

const FarmerInventory = () => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return INVENTORY;
    return INVENTORY.filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }, [search]);

  const lowStockItems = INVENTORY.filter((i) => i.stock < i.threshold);
  const totalValue = INVENTORY.reduce((sum, i) => sum + i.stock, 0);

  const getState = (stock, threshold) => {
    if (stock === 0) return { label: "Out", color: "bg-[var(--danger-soft)] text-[var(--danger)]", pct: 0 };
    if (stock < threshold) return { label: "Low", color: "bg-[var(--highlight-soft)] text-[var(--highlight-fg)]", pct: Math.min(100, (stock / threshold) * 100) };
    return { label: "Healthy", color: "bg-[var(--accent-soft)] text-[var(--accent-fg)]", pct: Math.min(100, (stock / (threshold * 3)) * 100) };
  };

  return (
    <div className="font-body">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">Inventory</h1>
          <p className="text-[13.5px] text-[var(--text-muted)] mt-1">Track stock levels across all your listings</p>
        </div>

        <div className="flex items-center bg-[var(--surface)] border border-[var(--border)] rounded-full px-4 py-2.5 w-full sm:w-72">
          <SearchIcon className="w-4 h-4 text-[var(--text-dim)] flex-shrink-0" />
          <input
            type="text"
            placeholder="Search inventory..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full ml-2.5 bg-transparent outline-none text-[13px] text-[var(--text)] placeholder-[var(--text-dim)]"
          />
        </div>
      </div>

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total SKUs",   value: String(INVENTORY.length), accent: "bg-[var(--accent-soft)] text-[var(--accent-fg)]",     emoji: "📦" },
          { label: "Low Stock",    value: String(lowStockItems.length), accent: "bg-[var(--highlight-soft)] text-[var(--highlight-fg)]", emoji: "⚠️" },
          { label: "Total Units",  value: totalValue.toLocaleString(),  accent: "bg-[var(--accent-soft)] text-[var(--accent-fg)]",     emoji: "📊" },
          { label: "Restock Soon", value: "2",                          accent: "bg-[var(--danger-soft)] text-[var(--danger)]",          emoji: "🔔" },
        ].map((c) => (
          <div key={c.label} className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-5">
            <div className={`w-11 h-11 rounded-2xl ${c.accent} flex items-center justify-center text-lg mb-3`}>
              {c.emoji}
            </div>
            <p className="font-display text-xl font-bold text-[var(--text)] tracking-tight">{c.value}</p>
            <p className="text-[12px] text-[var(--text-muted)] mt-1 font-medium">{c.label}</p>
          </div>
        ))}
      </section>

      {lowStockItems.length > 0 && (
        <div className="mb-6 bg-[var(--highlight-soft)] border border-[var(--highlight)]/30 rounded-3xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
          <span className="w-11 h-11 rounded-2xl bg-[var(--highlight)]/20 text-[var(--highlight-fg)] flex items-center justify-center flex-shrink-0">
            <AlertIcon className="w-5 h-5" />
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-[13.5px] font-bold text-[var(--text)]">
              {lowStockItems.length} {lowStockItems.length === 1 ? "product is" : "products are"} running low
            </p>
            <p className="text-[12.5px] text-[var(--text-muted)] mt-0.5 leading-relaxed">
              {lowStockItems.map((i) => i.name).join(", ")} — restock to avoid missing orders.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 bg-[var(--brand)] text-[var(--brand-fg)] text-[12.5px] font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity self-start sm:self-auto">
            Restock all
          </button>
        </div>
      )}

      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl overflow-hidden">
        {filtered.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-[13px] text-[var(--text-muted)]">No inventory matches your search.</p>
          </div>
        ) : (
          filtered.map((p, i) => {
            const st = getState(p.stock, p.threshold);
            return (
              <div
                key={p.id}
                className={`grid grid-cols-1 md:grid-cols-[1fr_180px_140px] gap-4 px-5 py-4 items-center hover:bg-[var(--surface-2)] transition-colors ${
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

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-[13px] font-bold text-[var(--text)]">
                      {p.stock} <span className="text-[11px] font-medium text-[var(--text-dim)]">{p.unit}</span>
                    </p>
                    <p className="text-[10.5px] text-[var(--text-dim)]">min {p.threshold}</p>
                  </div>
                  <div className="w-full h-1.5 bg-[var(--surface-2)] rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all ${p.stock < p.threshold ? "bg-[var(--highlight)]" : "bg-[var(--accent)]"}`} style={{ width: `${st.pct}%` }} />
                  </div>
                </div>

                <div className="flex items-center md:justify-end gap-2">
                  <span className={`inline-flex px-2.5 py-1 rounded-full text-[11px] font-bold ${st.color}`}>
                    {st.label}
                  </span>
                  <button className="text-[12px] font-semibold text-[var(--accent-fg)] hover:underline px-2">
                    Restock
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

export default FarmerInventory;