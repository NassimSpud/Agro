import { useMemo, useState } from "react";

const SearchIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
  </svg>
);
const PhoneIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2C9.6 22 2 14.4 2 6a2 2 0 0 1 2-2z" />
  </svg>
);
const MessageIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 1 1 9-8.4z" />
  </svg>
);
const TruckIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="6" width="14" height="11" rx="1.5" />
    <path d="M15 10h4l3 3v4h-7z" />
    <circle cx="6" cy="19" r="1.6" /><circle cx="17.5" cy="19" r="1.6" />
  </svg>
);

const DELIVERIES = [
  { id: "AGS-3095", product: "Dry Maize", qty: "500 kg", emoji: "🌽", buyer: "Kenya Feeds Distributors", rider: "James Kariuki", riderPhone: "+254 712 345 678", drop: "Industrial Area, Nairobi", eta: "Today, 2:15 PM", status: "In Transit", statusColor: "bg-[var(--highlight-soft)] text-[var(--highlight-fg)]" },
  { id: "AGS-3098", product: "Sukuma Wiki", qty: "12 bunches", emoji: "🥬", buyer: "Wanjiku Kamau", rider: "Peter Mwangi", riderPhone: "+254 720 111 222", drop: "Limuru, Kiambu", eta: "Today, 4:00 PM", status: "Awaiting pickup", statusColor: "bg-[var(--surface-3)] text-[var(--text-muted)]" },
  { id: "AGS-3102", product: "Hass Avocado", qty: "120 kg", emoji: "🥑", buyer: "Nairobi Grocers Ltd", rider: "—", riderPhone: "—", drop: "Westlands, Nairobi", eta: "Unassigned", status: "Awaiting rider", statusColor: "bg-[var(--highlight-soft)] text-[var(--highlight-fg)]" },
];

const FarmerDeliveries = () => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return DELIVERIES;
    return DELIVERIES.filter((d) => d.id.toLowerCase().includes(q) || d.product.toLowerCase().includes(q) || d.buyer.toLowerCase().includes(q));
  }, [search]);

  return (
    <div className="font-body">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">Active Deliveries</h1>
          <p className="text-[13.5px] text-[var(--text-muted)] mt-1">Track your outgoing shipments</p>
        </div>

        <div className="flex items-center bg-[var(--surface)] border border-[var(--border)] rounded-full px-4 py-2.5 w-full sm:w-72">
          <SearchIcon className="w-4 h-4 text-[var(--text-dim)] flex-shrink-0" />
          <input
            type="text"
            placeholder="Search deliveries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full ml-2.5 bg-transparent outline-none text-[13px] text-[var(--text)] placeholder-[var(--text-dim)]"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-12 text-center">
          <p className="text-[13px] text-[var(--text-muted)]">No deliveries match your search.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((d) => (
            <article key={d.id} className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-5 hover:border-[var(--border-strong)] transition-colors">
              <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-[var(--border)]">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-xl flex-shrink-0">
                    {d.emoji}
                  </span>
                  <div>
                    <p className="font-display font-bold text-[14.5px] text-[var(--text)] tracking-tight">
                      {d.product} · {d.qty}
                    </p>
                    <p className="text-[11.5px] text-[var(--text-dim)] mt-0.5">#{d.id} · {d.buyer}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-[11.5px] font-bold ${d.statusColor}`}>
                  {d.status}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 py-4">
                <div>
                  <p className="text-[10.5px] uppercase tracking-wider text-[var(--text-dim)] font-bold mb-1.5">Assigned rider</p>
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-[var(--accent-soft)] text-[var(--accent-fg)] flex items-center justify-center text-[12px] font-bold flex-shrink-0">
                      {d.rider !== "—" ? d.rider.split(" ").map((n) => n[0]).join("") : "?"}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold text-[var(--text)] truncate">{d.rider}</p>
                      <p className="text-[11px] text-[var(--text-dim)]">{d.riderPhone}</p>
                    </div>
                    {d.rider !== "—" && (
                      <div className="flex items-center gap-1.5 ml-auto">
                        <button aria-label="Call" className="w-8 h-8 rounded-full bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-fg)]">
                          <PhoneIcon />
                        </button>
                        <button aria-label="Message" className="w-8 h-8 rounded-full bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-fg)]">
                          <MessageIcon />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-[10.5px] uppercase tracking-wider text-[var(--text-dim)] font-bold mb-1.5">Drop-off</p>
                  <p className="text-[13px] font-semibold text-[var(--text)]">{d.drop}</p>
                  <p className="text-[11.5px] text-[var(--text-dim)] mt-0.5">ETA {d.eta}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-2 pt-4 border-t border-[var(--border)]">
                {d.status === "Awaiting rider" ? (
                  <button className="inline-flex items-center gap-1.5 bg-[var(--brand)] text-[var(--brand-fg)] text-[12.5px] font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
                    <TruckIcon className="w-3.5 h-3.5" />
                    Assign rider
                  </button>
                ) : (
                  <button className="inline-flex items-center gap-1.5 bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text)] text-[12.5px] font-semibold px-4 py-2 rounded-full hover:bg-[var(--surface-3)] transition-colors">
                    Track live
                  </button>
                )}
                <button className="text-[12.5px] font-semibold text-[var(--accent-fg)] hover:underline px-3">
                  View details
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default FarmerDeliveries;