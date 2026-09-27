const GROUPS = [
  { emoji: "🚚", name: "Nairobi Drivers",       members: "1,240", topic: "City routes" },
  { emoji: "🛣️", name: "Long-Haul Deliverers",   members: "780",   topic: "Inter-county" },
  { emoji: "🧊", name: "Cold-Chain Specialists", members: "420",   topic: "Perishables" },
  { emoji: "💰", name: "Earnings & Payouts",      members: "1,890", topic: "Finance" },
  { emoji: "🛠️", name: "Vehicle Maintenance",    members: "650",   topic: "Repairs" },
  { emoji: "🆕", name: "New Drivers Welcome",     members: "340",   topic: "Onboarding" },
];

const DeliveryCommunity = () => (
  <div className="font-body">
    <div className="mb-6">
      <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">
        Delivery Community
      </h1>
      <p className="text-[13.5px] text-[var(--text-muted)] mt-1">
        Connect with other drivers across Kenya
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {GROUPS.map((g) => (
        <button
          key={g.name}
          className="text-left bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-5 hover:border-[var(--border-strong)] hover:-translate-y-0.5 transition-all"
        >
          <div className="flex items-start justify-between mb-4">
            <span className="w-12 h-12 rounded-2xl bg-[var(--accent-soft)] flex items-center justify-center text-2xl">
              {g.emoji}
            </span>
            <span className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--highlight-fg)] bg-[var(--highlight-soft)] px-2.5 py-1 rounded-full">
              {g.topic}
            </span>
          </div>
          <p className="font-display font-bold text-[15px] text-[var(--text)] leading-tight">{g.name}</p>
          <p className="text-[12px] text-[var(--text-dim)] mt-2">{g.members} members</p>
        </button>
      ))}
    </div>
  </div>
);

export default DeliveryCommunity;