import ServicePage from "./ServicePage";

const Verification = () => (
  <ServicePage
    eyebrow="Service 06"
    title="Every seller is verified and trusted"
    subtitle="We verify national ID, farm location, and produce quality before any seller goes live. Buy with confidence — every time."
    hero={{ emoji: "📍" }}
    features={[
      { icon: "🪪", title: "National ID check",       desc: "Every seller's identity is confirmed against official Kenyan records." },
      { icon: "📷", title: "Farm photo verification", desc: "Real photos of the actual farm — no stock imagery, no fake listings." },
      { icon: "✅", title: "Quality grading",          desc: "Produce graded on standard scales so buyers know exactly what they're getting." },
      { icon: "⭐", title: "Community ratings",        desc: "Buyers rate every transaction — poor sellers get flagged fast." },
      { icon: "🔍", title: "Fraud monitoring",        desc: "Real-time alerts for suspicious activity and duplicate listings." },
      { icon: "🛡️", title: "Buyer protection",        desc: "Full refund if goods don't match the listing — no arguments, no stress." },
    ]}
    steps={[
      { title: "Seller signs up",     desc: "Basic account created with phone number and email." },
      { title: "Verification begins", desc: "ID, phone, and farm location are verified within 48 hours." },
      { title: "Quality review",      desc: "First listing goes through a quality check before it's public." },
      { title: "Verified badge",      desc: "Sellers earn a public badge that shows buyers they're trustworthy." },
    ]}
    cta={{
      label: "Browse verified sellers",
      subtext: "All listings on the marketplace come from verified sellers — no exceptions.",
      to: "/market",
    }}
  />
);

export default Verification;