const MapPinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const NavigationIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 11 19-9-9 19-2-8-8-2z" />
  </svg>
);
const ClockIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
  </svg>
);
const TruckIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="6" width="14" height="11" rx="1.5" />
    <path d="M15 10h4l3 3v4h-7z" />
    <circle cx="6" cy="19" r="1.6" /><circle cx="17.5" cy="19" r="1.6" />
  </svg>
);

const STOPS = [
  { order: 1, type: "pickup",  name: "Kiambu Fresh Farms", address: "Kiambu Town, Kiambu County", items: "120 kg Hass Avocado",         eta: "8:15 AM",  done: true },
  { order: 2, type: "dropoff", name: "Westlands Market",   address: "Westlands, Nairobi",         items: "Delivery to Nairobi Grocers", eta: "10:30 AM", done: false, current: true },
  { order: 3, type: "pickup",  name: "Limuru Family Farm", address: "Limuru, Kiambu County",      items: "12 bunches Sukuma Wiki",      eta: "11:45 AM", done: false },
  { order: 4, type: "dropoff", name: "Kikuyu Town",        address: "Kikuyu, Kiambu County",      items: "Delivery to Wanjiku Kamau",   eta: "12:30 PM", done: false },
  { order: 5, type: "dropoff", name: "Industrial Area",    address: "Nairobi",                    items: "Delivery to Kenya Feeds",     eta: "2:15 PM",  done: false },
];

const RoutesPage = () => {
  const totalDistance = 48.6;
  const totalTime = "3h 20m";

  return (
    <div className="font-body">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">
            Today's Route
          </h1>
          <p className="text-[13.5px] text-[var(--text-muted)] mt-1">
            {STOPS.length} stops · {totalDistance} km · {totalTime} estimated
          </p>
        </div>

        <div className="flex gap-2">
          <button className="inline-flex items-center gap-2 bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] text-[13px] font-semibold px-4 py-2.5 rounded-full hover:border-[var(--border-strong)] transition-colors">
            Optimize order
          </button>
          <button className="inline-flex items-center gap-2 bg-[var(--brand)] text-[var(--brand-fg)] text-[13px] font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity">
            <NavigationIcon />
            Start Route
          </button>
        </div>
      </div>

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Distance", value: `${totalDistance} km`, icon: <MapPinIcon /> },
          { label: "Duration", value: totalTime,             icon: <ClockIcon /> },
          { label: "Stops",    value: String(STOPS.length),  icon: <TruckIcon /> },
          { label: "Pay",      value: "KES 3,880",           icon: "💵" },
        ].map((s) => (
          <div key={s.label} className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-5">
            <span className="w-10 h-10 rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-fg)] flex items-center justify-center mb-3">
              {s.icon}
            </span>
            <p className="font-display text-lg font-bold text-[var(--text)] tracking-tight">{s.value}</p>
            <p className="text-[12px] text-[var(--text-muted)] mt-0.5">{s.label}</p>
          </div>
        ))}
      </section>

      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-5 sm:p-6">
        <h2 className="font-display text-lg font-bold text-[var(--text)] tracking-tight mb-5">
          Stop Sequence
        </h2>

        <div className="space-y-1">
          {STOPS.map((s, i) => (
            <div key={s.order} className="flex gap-4">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-[13px] transition-all ${
                  s.current
                    ? "bg-[var(--highlight)] text-[var(--highlight-fg)] ring-4 ring-[var(--highlight-soft)]"
                    : s.done
                    ? "bg-[var(--accent)] text-[var(--brand-fg)]"
                    : "bg-[var(--surface-2)] text-[var(--text-dim)] border border-[var(--border)]"
                }`}>
                  {s.order}
                </div>
                {i < STOPS.length - 1 && (
                  <div className="w-px flex-1 my-1.5 bg-[var(--border)] relative overflow-hidden">
                    {s.done && <div className="absolute inset-x-0 top-0 h-full bg-[var(--accent)]" />}
                  </div>
                )}
              </div>

              <div className={`flex-1 pb-5 min-w-0 ${s.current ? "bg-[var(--highlight-soft)] -mx-3 px-3 py-3 rounded-2xl" : ""}`}>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        s.type === "pickup"
                          ? "bg-[var(--accent-soft)] text-[var(--accent-fg)]"
                          : "bg-[var(--highlight-soft)] text-[var(--highlight-fg)]"
                      }`}>
                        {s.type === "pickup" ? "Pickup" : "Dropoff"}
                      </span>
                      {s.current && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--highlight-fg)]">
                          Next Stop
                        </span>
                      )}
                    </div>
                    <p className="text-[14px] font-semibold text-[var(--text)] mt-1.5 leading-tight">{s.name}</p>
                    <p className="text-[12px] text-[var(--text-dim)] mt-0.5">{s.address}</p>
                    <p className="text-[12px] text-[var(--text-muted)] mt-1">{s.items}</p>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <p className="text-[12.5px] font-bold text-[var(--text)]">{s.eta}</p>
                    <button className="mt-1.5 text-[11px] font-semibold text-[var(--accent-fg)] hover:underline">
                      Navigate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoutesPage;