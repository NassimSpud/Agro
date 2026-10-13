import ServicePage from "./ServicePage";

const Advisory = () => (
  <ServicePage
    eyebrow="Service 04"
    title="Farm advisory from real agronomists"
    subtitle="Practical guidance on planting, pest control, soil health, and post-harvest handling — tailored to your county and crop."
    hero={{ emoji: "🌱" }}
    features={[
      { icon: "👩🏾‍🔬", title: "Certified agronomists", desc: "Talk to professionals who've worked Kenyan farms for a decade or more." },
      { icon: "📞", title: "Free advice hotline",      desc: "Call or WhatsApp our team — no charge, no limit on questions." },
      { icon: "📚", title: "Crop-specific guides",     desc: "Detailed playbooks for maize, dairy, horticulture, and livestock." },
      { icon: "🐛", title: "Pest & disease library",   desc: "Identify problems with photos and get immediate treatment advice." },
      { icon: "🌤️", title: "Weather alerts",           desc: "County-level forecasts so you can plan planting and harvesting." },
      { icon: "💧", title: "Soil & water tips",        desc: "Conserve water, improve soil health, and reduce input costs." },
    ]}
    steps={[
      { title: "Describe your issue", desc: "Share your crop, location, and what you're seeing via the app." },
      { title: "Get matched",         desc: "An agronomist specializing in your area responds within 2 hours." },
      { title: "Follow the plan",     desc: "Receive a step-by-step action plan you can start the same day." },
      { title: "Track results",       desc: "Log follow-ups. Adjust the plan based on real outcomes." },
    ]}
    cta={{
      label: "Talk to an agronomist",
      subtext: "Free advice for every AgriSoko member. No premium tier, no hidden costs.",
      to: "/auth",
    }}
  />
);

export default Advisory;