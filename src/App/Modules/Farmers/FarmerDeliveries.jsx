import { useMemo, useState } from "react";

// ======================== Icons ========================
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
const TruckIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="6" width="14" height="11" rx="1.5" />
    <path d="M15 10h4l3 3v4h-7z" />
    <circle cx="6" cy="19" r="1.6" /><circle cx="17.5" cy="19" r="1.6" />
  </svg>
);
const MapPinIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const ClockIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
  </svg>
);
const PackageIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="m7.5 4.27 9 5.15" />
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
  </svg>
);

// ======================== Mock data ========================
const DELIVERIES = [
  {
    id: "AGS-3102",
    product: "Hass Avocado",
    qty: "120 kg",
    emoji: "🥑",
    buyer: "Nairobi Grocers Ltd",
    buyerPhone: "+254 712 345 678",
    rider: "James Kariuki",
    riderPhone: "+254 720 111 222",
    drop: "Westlands Market, Nairobi",
    eta: "Today, 10:30 AM",
    distance: "12.4 km",
    status: "In Transit",
    statusColor: "bg-[var(--highlight-soft)] text-[var(--highlight-fg)]",
    payout: 14400,
    assignedAt: "8:00 AM",
  },
  {
    id: "AGS-3098",
    product: "Fresh Sukuma Wiki",
    qty: "12 bunches",
    emoji: "🥬",
    buyer: "Wanjiku Kamau",
    buyerPhone: "+254 720 111 222",
    rider: "Peter Mwangi",
    riderPhone: "+254 733 444 555",
    drop: "Limuru, Kiambu",
    eta: "Today, 4:00 PM",
    distance: "6.8 km",
    status: "Awaiting pickup",
    statusColor: "bg-[var(--surface-3)] text-[var(--text-muted)]",
    payout: 480,
    assignedAt: "12:15 PM",
  },
  {
    id: "AGS-3105",
    product: "Dry Maize",
    qty: "500 kg",
    emoji: "🌽",
    buyer: "Kenya Feeds Distributors",
    buyerPhone: "+254 733 444 555",
    rider: "—",
    riderPhone: "—",
    drop: "Industrial Area, Nairobi",
    eta: "Unassigned",
    distance: "22.1 km",
    status: "Awaiting rider",
    statusColor: "bg-[var(--highlight-soft)] text-[var(--highlight-fg)]",
    payout: 22500,
    assignedAt: "—",
  },
  {
    id: "AGS-3107",
    product: "Red Tomatoes",
    qty: "30 kg",
    emoji: "🍅",
    buyer: "Grace Njeri",
    buyerPhone: "+254 701 987 654",
    rider: "James Kariuki",
    riderPhone: "+254 720 111 222",
    drop: "Karen, Nairobi",
    eta: "Tomorrow, 9:00 AM",
    distance: "14.2 km",
    status: "Scheduled",
    statusColor: "bg-[var(--accent-soft)] text-[var(--accent-fg)]",
    payout: 2550,
    assignedAt: "5:30 PM",
  },
];

const TABS = [
  { id: "all",            label: "All" },
  { id: "Awaiting rider", label: "Unassigned" },
  { id: "Awaiting pickup", label: "Awaiting pickup" },
  { id: "In Transit",     label: "In Transit" },
  { id: "Scheduled",      label: "Scheduled" },
];

// ======================== Component ========================
const FarmerDeliveries = () => {
  const [tab, setTab] = useState("all");
  const [search, setSearch] = useState("");

  const counts = useMemo(() => {
    const c = { all: DELIVERIES.length };
    DELIVERIES.forEach((d) => {
      c[d.status] = (c[d.status] || 0) + 1;
    });
    return c;
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return DELIVERIES.filter((d) => {
      const matchTab = tab === "all" || d.status === tab;
      const matchSearch =
        !q ||
        d.id.toLowerCase().includes(q) ||
        d.product.toLowerCase().includes(q) ||
        d.buyer.toLowerCase().includes(q) ||
        d.rider.toLowerCase().includes(q);
      return matchTab && matchSearch;
    });
  }, [tab, search]);

  return (
    <div className="font-body">
      {/* ===== Header ===== */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">
            Active Deliveries
          </h1>
          <p className="text-[13.5px] text-[var(--text-muted)] mt-1">
            Track your outgoing shipments and their assigned riders
          </p>
        </div>

        <div className="flex items-center bg-[var(--surface)] border border-[var(--border)] rounded-full px-4 py-2.5 w-full sm:w-72">
          <SearchIcon className="w-4 h-4 text-[var(--text-dim)] flex-shrink-0" />
          <input
            type="text"
            placeholder="Search by order, buyer or rider..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full ml-2.5 bg-transparent outline-none text-[13px] text-[var(--text)] placeholder-[var(--text-dim)]"
          />
        </div>
      </div>

      {/* ===== Filter tabs ===== */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-5">
        {TABS.map((t) => {
          const active = tab === t.id;
          const count = counts[t.id] || 0;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12.5px] font-semibold whitespace-nowrap transition-all ${
                active
                  ? "bg-[var(--brand)] text-[var(--brand-fg)]"
                  : "bg-[var(--surface)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border-strong)]"
              }`}
            >
              {t.label}
              <span
                className={`min-w-[20px] h-5 px-1.5 rounded-full text-[10.5px] font-bold flex items-center justify-center ${
                  active
                    ? "bg-[var(--highlight)] text-[var(--highlight-fg)]"
                    : "bg-[var(--surface-2)] text-[var(--text-dim)]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ===== Delivery list ===== */}
      {filtered.length === 0 ? (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-10 sm:p-16 text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-[var(--text-dim)] mb-5">
            <PackageIcon className="w-7 h-7" />
          </div>
          <h2 className="font-display text-lg font-bold text-[var(--text)]">
            No deliveries match your filters
          </h2>
          <p className="text-[13px] text-[var(--text-muted)] mt-2">
            Try a different status tab or search term.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((d) => (
            <article
              key={d.id}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl overflow-hidden hover:border-[var(--border-strong)] transition-colors"
            >
              {/* Header row */}
              <header className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-[var(--border)] bg-[var(--surface-2)]">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-xl flex-shrink-0">
                    {d.emoji}
                  </span>
                  <div>
                    <p className="font-display font-bold text-[14px] text-[var(--text)] tracking-tight">
                      {d.product} · {d.qty}
                    </p>
                    <p className="text-[11.5px] text-[var(--text-dim)] mt-0.5">
                      #{d.id} · Assigned {d.assignedAt}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <p className="font-display font-bold text-[14px] text-[var(--accent-fg)]">
                    KES {d.payout.toLocaleString()}
                  </p>
                  <span
                    className={`px-3 py-1 rounded-full text-[11.5px] font-bold ${d.statusColor}`}
                  >
                    {d.status}
                  </span>
                </div>
              </header>

              {/* Route strip */}
              <div className="grid sm:grid-cols-2 gap-4 px-5 py-4">
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[var(--accent-soft)] text-[var(--accent-fg)] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">
                    TO
                  </span>
                  <div className="min-w-0">
                    <p className="text-[12.5px] font-semibold text-[var(--text)] leading-snug">
                      {d.drop}
                    </p>
                    <p className="text-[11px] text-[var(--text-dim)] mt-0.5">
                      {d.buyer} · {d.buyerPhone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[var(--highlight-soft)] text-[var(--highlight-fg)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TruckIcon className="w-3.5 h-3.5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[12.5px] font-semibold text-[var(--text)] leading-snug">
                      {d.rider === "—" ? "Not yet assigned" : d.rider}
                    </p>
                    <p className="text-[11px] text-[var(--text-dim)] mt-0.5">
                      {d.rider === "—" ? "Waiting for AgriSoko to assign a rider" : `Rider · ${d.riderPhone}`}
                    </p>
                  </div>

                  {d.rider !== "—" && (
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <button
                        aria-label="Call rider"
                        className="w-8 h-8 rounded-full bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-fg)] hover:border-[var(--border-strong)] transition-colors"
                      >
                        <PhoneIcon />
                      </button>
                      <button
                        aria-label="Message rider"
                        className="w-8 h-8 rounded-full bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-fg)] hover:border-[var(--border-strong)] transition-colors"
                      >
                        <MessageIcon />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* ETA + distance strip */}
              <div className="flex items-center gap-4 px-5 pb-4 text-[12px] text-[var(--text-muted)]">
                <span className="inline-flex items-center gap-1.5">
                  <ClockIcon className="w-3.5 h-3.5 text-[var(--text-dim)]" />
                  {d.eta}
                </span>
                <span className="text-[var(--text-dim)]">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPinIcon className="w-3.5 h-3.5 text-[var(--text-dim)]" />
                  {d.distance}
                </span>
              </div>

              {/* Footer actions */}
              <footer className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-t border-[var(--border)] bg-[var(--surface-2)]">
                <div className="text-[11.5px] text-[var(--text-dim)]">
                  {d.status === "Awaiting rider" && "AgriSoko is finding a rider for this order"}
                  {d.status === "Awaiting pickup" && "Rider has been assigned — pickup pending"}
                  {d.status === "In Transit" && "Currently on the way to the buyer"}
                  {d.status === "Scheduled" && "Pickup scheduled for tomorrow morning"}
                </div>

                <div className="flex items-center gap-2">
                  {d.status === "Awaiting rider" ? (
                    <button className="inline-flex items-center gap-1.5 bg-[var(--brand)] text-[var(--brand-fg)] text-[12.5px] font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
                      <TruckIcon className="w-3.5 h-3.5" />
                      Request rider
                    </button>
                  ) : (
                    <button className="inline-flex items-center gap-1.5 bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] text-[12.5px] font-semibold px-4 py-2 rounded-full hover:bg-[var(--surface-3)] transition-colors">
                      <MapPinIcon className="w-3.5 h-3.5" />
                      Track live
                    </button>
                  )}
                  <button className="text-[12.5px] font-semibold text-[var(--accent-fg)] hover:underline px-3">
                    View details
                  </button>
                </div>
              </footer>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default FarmerDeliveries;