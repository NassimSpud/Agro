const GROUPS = [
  { emoji: "🐄", name: "Dairy Farmers Kenya",    members: "2,340", topic: "Livestock",  desc: "Milk pricing, feed, breeding and herd health." },
  { emoji: "🌾", name: "Maize Growers Network",  members: "1,890", topic: "Grains",     desc: "Planting, pest control and market rates." },
  { emoji: "🍅", name: "Horticulture Hub",       members: "1,220", topic: "Vegetables", desc: "Greenhouse tips, export standards and buyers." },
  { emoji: "🥑", name: "Avocado Exporters",      members: "870",   topic: "Fruits",     desc: "Global markets, certifications and logistics." },
  { emoji: "🌱", name: "Organic Farming Circle", members: "640",   topic: "Organic",    desc: "Certification, composting and natural pest control." },
  { emoji: "🐔", name: "Poultry Keepers",        members: "1,050", topic: "Livestock",  desc: "Broilers, layers, feeds and disease prevention." },
  { emoji: "💧", name: "Irrigation Innovators",  members: "520",   topic: "Water",      desc: "Drip systems, water harvesting and storage." },
  { emoji: "📊", name: "Farm Business Hub",      members: "780",   topic: "Finance",    desc: "Pricing, records, loans and profitability." },
  { emoji: "🌤️", name: "Climate-Smart Farming",  members: "430",   topic: "Climate",    desc: "Drought resilience and conservation agriculture." },
];

const FarmerCommunity = () => (
  <div className="font-body">
    <div className="mb-6">
      <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">
        Farmer Community
      </h1>
      <p className="text-[13.5px] text-[var(--text-muted)] mt-1">
        Connect with farmers across Kenya who grow what you grow
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
          <p className="text-[12.5px] text-[var(--text-muted)] mt-2 leading-relaxed">{g.desc}</p>
          <p className="text-[11.5px] text-[var(--text-dim)] mt-3 pt-3 border-t border-[var(--border)]">
            {g.members} members
          </p>
        </button>
      ))}
    </div>
  </div>
);

export default FarmerCommunity;