import ServicePage from "./ServicePage";

const Marketplace = () => (
  <ServicePage
    eyebrow="Service 01"
    title="Buy and sell farm produce with zero middlemen"
    subtitle="A fair, transparent marketplace connecting Kenyan farmers directly to buyers nationwide. Set your own prices, reach thousands of customers, and get paid securely."
    hero={{ emoji: "🛒" }}
    features={[
      { icon: "💰", title: "You set the price",     desc: "No hidden commissions or mandatory markups. Farmers keep the value they create." },
      { icon: "🎯", title: "Targeted buyers",       desc: "Reach supermarkets, restaurants, exporters, and individual consumers." },
      { icon: "📸", title: "Rich product listings", desc: "Photos, grades, quantities, and real-time availability — all in one place." },
      { icon: "🔔", title: "Instant order alerts",  desc: "Get notified the moment a buyer places an order or sends a message." },
      { icon: "📊", title: "Sales insights",        desc: "Track what's selling, to whom, and at what price with weekly reports." },
      { icon: "🌍", title: "Nationwide reach",      desc: "Buyers in all 47 counties can find and order your produce." },
    ]}
    steps={[
      { title: "Create a listing", desc: "Add a photo, quantity, grade, and your asking price in under two minutes." },
      { title: "Get discovered",   desc: "Buyers search, filter, and message you directly through the platform." },
      { title: "Agree on terms",   desc: "Confirm quantity, delivery date, and any logistics arrangements." },
      { title: "Get paid",         desc: "Payment is released from escrow the moment delivery is confirmed." },
    ]}
    cta={{
      label: "Start selling today",
      subtext: "Free to list. No monthly fees. You only pay a small service fee on completed sales.",
      to: "/auth",
    }}
  />
);

export default Marketplace;