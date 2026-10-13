import ServicePage from "./ServicePage";

const Logistics = () => (
  <ServicePage
    eyebrow="Service 02"
    title="Nationwide cold-chain delivery"
    subtitle="From farm to doorstep — our logistics network covers all 47 counties with temperature-controlled vehicles for perishables."
    hero={{ emoji: "🚚" }}
    features={[
      { icon: "❄️", title: "Cold-chain fleet",   desc: "Refrigerated trucks keep dairy, meat, and greens fresh through delivery." },
      { icon: "🗺️", title: "Real-time tracking", desc: "Buyers and sellers see live location updates from pickup to drop-off." },
      { icon: "📦", title: "Safe packaging",     desc: "Reusable crates and food-grade wrapping protect every order." },
      { icon: "⏱️", title: "Same-day dispatch",  desc: "Orders placed before noon ship out same day across most routes." },
      { icon: "🌾", title: "Bulk-friendly",      desc: "From 5kg sacks to full truckloads, we scale with your volume." },
      { icon: "🛡️", title: "Insured transit",    desc: "Every shipment covered against damage or loss during transport." },
    ]}
    steps={[
      { title: "Order confirmed",  desc: "Once an order is placed, our logistics team is automatically notified." },
      { title: "Pickup scheduled", desc: "A driver arrives at the farm within 24 hours to collect the goods." },
      { title: "In transit",       desc: "Track your delivery live. Temperature and route data are logged." },
      { title: "Delivered safely", desc: "Buyer confirms receipt, and the payment is released from escrow." },
    ]}
    cta={{
      label: "Browse marketplace",
      subtext: "Every order on AgriSoko is eligible for our delivery network — no extra setup needed.",
      to: "/marketplace",
    }}
  />
);

export default Logistics;