const GUIDES = [
  { emoji: "📦", title: "Safe handling of perishables", desc: "Best practices for cold-chain transport of fruits and vegetables.", read: "6 min" },
  { emoji: "🗺️", title: "Nairobi traffic routes",        desc: "Time-saving alternates during peak hours on major corridors.",     read: "4 min" },
  { emoji: "💵", title: "Maximizing earnings",           desc: "Tips on batching deliveries and reducing idle time between trips.", read: "5 min" },
  { emoji: "🛡️", title: "Delivery safety basics",        desc: "Staying safe on long-haul and evening trips across counties.",       read: "7 min" },
  { emoji: "📱", title: "Using the driver app",          desc: "Complete walkthrough of pickup, tracking and daily payouts.",         read: "3 min" },
  { emoji: "🤝", title: "Customer service",              desc: "Handling difficult deliveries with professionalism and calm.",        read: "5 min" },
];

const DeliveryGuides = () => (
  <div className="font-body">
    <div className="mb-6">
      <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">
        Delivery Guides
      </h1>
      <p className="text-[13.5px] text-[var(--text-muted)] mt-1">
        Learn how to deliver more, faster and safer
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {GUIDES.map((g) => (
        <button
          key={g.title}
          className="text-left bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 hover:border-[var(--border-strong)] hover:-translate-y-0.5 transition-all"
        >
          <div className="flex items-start justify-between mb-4">
            <span className="w-12 h-12 rounded-2xl bg-[var(--accent-soft)] flex items-center justify-center text-2xl">
              {g.emoji}
            </span>
            <span className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--text-dim)] bg-[var(--surface-2)] px-2 py-1 rounded-full border border-[var(--border)]">
              {g.read}
            </span>
          </div>
          <p className="font-display font-bold text-[15px] text-[var(--text)] leading-tight">{g.title}</p>
          <p className="text-[12.5px] text-[var(--text-muted)] mt-2 leading-relaxed">{g.desc}</p>
        </button>
      ))}
    </div>
  </div>
);

export default DeliveryGuides;