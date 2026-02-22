import { motion } from "motion/react";
import { Plane } from "lucide-react";

type Experience = {
  period: string;
  role: string;
  organization: string;
  bullets: string[];
};

const experiences: Experience[] = [
  {
    period: "2020 — Present",
    role: "Founder & Managing Director",
    organization: "Marie Lindner Consulting UG",
    bullets: [
      "Built and structured a startup consulting business from inception — bringing clarity into digital and organizational unstructured environments.",
      "Transformed complexity into scalable systems, decision frameworks and execution cadence.",
      "Developed executive methodologies integrating aviation-grade decision logic and discipline.",
      "Open to selected strategic business opportunities and executive partnerships.",
    ],
  },
  {
    period: "Aviation Career",
    role: "Commercial Pilot (CPL)",
    organization: "Australia — High-Reliability Operations",
    bullets: [
      "Obtained Commercial Pilot License (CPL) in Australia under strict regulatory and safety standards.",
      "Trained in risk mitigation, procedural discipline and real-time decision-making under pressure.",
      "Translates cockpit precision into leadership clarity and operational strategy.",
    ],
  },
  {
    period: "International Foundation",
    role: "12 Years International Experience",
    organization: "Australia",
    bullets: [
      "International exposure shaping executive presence, resilience and cross-cultural communication.",
      "Built a strong foundation in structured operations, performance accountability and business discipline.",
    ],
  },
];

export default function ExperienceTimeline() {
  // We place “stops” along the route (top/middle/bottom). This visually connects to each card.
  const stopPositions = ["12%", "50%", "88%"];

  return (
    <section id="experience" className="py-24 md:py-32 bg-obsidian relative overflow-hidden">
      {/* subtle gold haze */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-champagne/8 rounded-full blur-[140px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold-champagne/8 rounded-full blur-[140px]" />

      <div className="section-container relative z-10">
        {/* EXECUTIVE SUMMARY */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-20">
          <span className="text-[10px] uppercase tracking-[0.42em] text-gold-champagne font-bold block mb-4">
            Executive Summary
          </span>

          <h2 className="text-4xl md:text-6xl heading-serif leading-tight text-balance">
            Aviation-grade discipline — applied to{" "}
            <span className="text-gold-champagne italic">modern business execution</span>.
          </h2>

          <p className="mt-6 text-steel/90 font-light leading-relaxed text-base md:text-lg">
            Commercially trained pilot with a strong aviation foundation and four years of building and structuring a
            startup consulting business inside digitally unstructured environments. Speaker engagements are a natural
            by-product of the work — the core focus is strategic clarity, disciplined execution, and premium standards.
            Open to selected strategic business opportunities.
          </p>
        </div>

        {/* TIMELINE WRAPPER */}
        <div className="relative max-w-5xl mx-auto">
          {/* FLIGHT ROUTE (DESKTOP ONLY) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {/* Centered SVG route */}
            <svg
              className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[120px] opacity-70"
              viewBox="0 0 120 1200"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* Route path (animated draw) */}
              <motion.path
                d="M60 40 C60 200, 60 260, 60 400 C60 540, 60 660, 60 800 C60 940, 60 1020, 60 1160"
                fill="none"
                stroke="#B08D57"
                strokeWidth="2"
                strokeDasharray="10 10"
                initial={{ pathLength: 0, opacity: 0.2 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />

              {/* Stops (dots) */}
              {[140, 600, 1060].map((y, idx) => (
                <g key={idx}>
                  <circle cx="60" cy={y} r="7" fill="#B08D57" opacity="0.95" />
                  <circle cx="60" cy={y} r="14" fill="#B08D57" opacity="0.10" />
                </g>
              ))}
            </svg>

            {/* Animated “plane” traveling along the route */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: "12%" }}
              animate={{ top: ["12%", "50%", "88%"] }}
            >
              <motion.div
                transition={{ duration: 1.8, ease: "easeInOut" }}
                whileInView={{ y: [0, 0] }} // keeps motion/react happy; main movement is 'top' above
              >
                <div className="p-2 rounded-full border border-gold-champagne/30 bg-obsidian/60 backdrop-blur-sm shadow-lg shadow-gold-champagne/20">
                  <Plane size={18} className="text-gold-champagne" strokeWidth={1.5} />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* EXPERIENCE CARDS */}
          <div className="space-y-16 md:space-y-20 lg:space-y-24">
            {experiences.map((exp, index) => {
              const flip = index % 2 !== 0; // alternate sides on desktop
              const stopTop = stopPositions[index] ?? "50%";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                  className="relative grid lg:grid-cols-2 gap-10 lg:gap-14 items-start"
                >
                  {/* LEFT COLUMN (period) */}
                  <div className={`${flip ? "lg:order-2 lg:text-left" : "lg:text-right"} pt-1`}>
                    <div className="text-gold-champagne text-xs uppercase tracking-widest font-semibold">
                      {exp.period}
                    </div>
                  </div>

                  {/* RIGHT COLUMN (card) */}
                  <div className={`${flip ? "lg:order-1" : ""} relative`}>
                    {/* Connector from route to card (desktop only) */}
                    <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0">
                      {/* invisible column for alignment */}
                    </div>

                    {/* Small “dock” line from center route to card */}
                    <div
                      className={`hidden lg:block absolute top-6 h-px bg-gradient-to-r from-gold-champagne/60 to-transparent ${
                        flip ? "right-full w-20" : "left-[-80px] w-20"
                      }`}
                      style={{ opacity: 0.55 }}
                    />

                    {/* Stop dot aligned with this card (overlayed, as extra clarity) */}
                    <div
                      className={`hidden lg:block absolute w-3 h-3 bg-gold-champagne rounded-full shadow-lg shadow-gold-champagne/30 ${
                        flip ? "right-[calc(100%+72px)]" : "left-[-72px]"
                      }`}
                      style={{ top: "22px" }}
                      aria-hidden="true"
                    />

                    <div className="bg-charcoal border border-gold-champagne/20 rounded-2xl p-8 md:p-10 hover:border-gold-champagne/45 transition-all duration-500">
                      <h3 className="text-2xl md:text-3xl font-serif italic text-pearl mb-2">
                        {exp.role}
                      </h3>
                      <div className="text-sm uppercase tracking-widest text-steel/90 mb-6">
                        {exp.organization}
                      </div>

                      <ul className="space-y-3">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="text-sm md:text-[15px] text-steel/90 font-light leading-relaxed">
                            • {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile hint (optional) */}
          <div className="mt-10 lg:hidden text-center text-[10px] uppercase tracking-[0.34em] text-steel/50">
            Timeline optimized for desktop flight-path view
          </div>
        </div>
      </div>
    </section>
  );
}