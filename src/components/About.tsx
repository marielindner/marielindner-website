import { motion } from "motion/react";
import { Globe2, Plane, ShieldCheck } from "lucide-react";

const highlights = [
  "Founder & CEO of Marie Lindner Consulting",
  "Commercial Pilot License (CPL) — Australia",
  "High-Reliability Leadership & Team Dynamics",
  "Operational excellence: Flight Ops & airport turnaround",
  "Luxury brand strategy, execution & client experience discipline",
  "International background — fluent English & German",
  "Budgeting, cost control & performance reporting",
  "Strategic facilitation for C-level leaders & founders",
];

const altitudeSteps = [
  {
    name: "A — AUDIT",
    desc: "A precise assessment of your current operating model, risks, and decision velocity.",
  },
  {
    name: "L — LINE UP",
    desc: "Align leadership identity, strategic objectives, and non-negotiable priorities.",
  },
  {
    name: "T — THRUST",
    desc: "Execute with momentum: clear cadence, accountable ownership, measurable outcomes.",
  },
  {
    name: "I — INSTRUMENT",
    desc: "Install the systems that keep you on course through complexity and change.",
  },
  {
    name: "T — TERMINATE",
    desc: "Close the gap between intention and reality — decisions implemented, not discussed.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-charcoal py-24 md:py-32 relative overflow-hidden">
      {/* Decorative flight path (subtle) */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-[0.06] pointer-events-none"
        viewBox="0 0 1200 1200"
        aria-hidden="true"
      >
        <path
          d="M0,620 C240,540 340,520 520,610 C700,700 820,690 1200,560"
          fill="none"
          stroke="#B08D57"
          strokeWidth="1.2"
          strokeDasharray="10 10"
        />
      </svg>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-start">
          {/* LEFT: Copy + Image */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-[10px] uppercase tracking-[0.34em] text-gold-champagne font-bold mb-4 block">
              About Marie Lindner
            </span>

            <h2 className="text-4xl md:text-5xl heading-serif mb-7 leading-tight text-balance">
              Where <span className="text-gold-champagne">precision</span> meets{" "}
              <span className="text-gold-champagne">presence</span>.
            </h2>

            <div className="space-y-6 text-steel/90 font-light leading-relaxed text-base md:text-lg max-w-2xl">
              <p>
                Marie Lindner is an executive strategist and facilitator with a commercial aviation background. She works
                with leaders who operate in high-stakes environments — where clarity, discipline and decision quality are
                non-negotiable.
              </p>
              <p>
                Her experience spans operational leadership (flight ops and airport turnaround), strategic execution, and
                premium brand discipline. The result is a rare blend: calm authority under pressure — and structured
                delivery when it matters most.
              </p>
              <p>
                Based in Germany and trained in Australia, Marie brings an international perspective to leadership,
                communication and performance — designed for C-level, founders, and premium organizations.
              </p>
            </div>

            {/* Image card */}
            <div className="mt-10">
              <div className="relative overflow-hidden rounded-2xl border border-gold-champagne/15 bg-obsidian/40">
                <img
                  src="/about-marie.jpg"
                  alt="Marie Lindner — executive portrait"
                  className="w-full h-[420px] md:h-[520px] object-cover"
                />
                {/* overlay for premium feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
                {/* subtle gold vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(176,141,87,0.18),rgba(7,7,7,0)_55%)]" />

                {/* micro-badge */}
                <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-xl border border-gold-champagne/20 bg-obsidian/50 backdrop-blur-sm px-4 py-3">
                    <Plane size={18} className="text-gold-champagne" />
                    <span className="text-pearl text-sm font-medium">Commercial Pilot License (CPL)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-xl border border-gold-champagne/20 bg-obsidian/50 backdrop-blur-sm px-4 py-3">
                    <Globe2 size={18} className="text-gold-champagne" />
                    <span className="text-pearl text-sm font-medium">International Executive Work</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Highlights + Framework */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            className="bg-obsidian/95 p-8 md:p-12 border border-gold-champagne/20 rounded-2xl relative overflow-hidden"
          >
            {/* subtle runway line */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-gold-champagne/10 rounded-full blur-[120px]" />
            <div className="absolute -bottom-28 -left-28 w-72 h-72 bg-gold-champagne/10 rounded-full blur-[120px]" />

            <h3 className="text-2xl font-serif italic text-pearl mb-8">
              Professional Highlights
            </h3>

            <ul className="space-y-4 mb-12">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <ShieldCheck
                    size={18}
                    className="text-gold-champagne mt-1 shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm md:text-[15px] text-steel/90 font-medium leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-gold-champagne/12">
              <div className="flex items-center justify-between gap-6 mb-6">
                <h4 className="text-[10px] uppercase tracking-[0.42em] text-gold-champagne font-bold">
                  The ALTITUDE Framework™
                </h4>
                <div className="h-px flex-1 bg-gradient-to-r from-gold-champagne/30 to-transparent" />
              </div>

              <div className="space-y-6">
                {altitudeSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l border-gold-champagne/20"
                  >
                    <div className="absolute left-[-5px] top-1 w-2 h-2 bg-gold-champagne rounded-full" />
                    <div className="text-xs md:text-sm font-serif italic text-pearl mb-1">
                      {step.name}
                    </div>
                    <p className="text-[11px] md:text-[12px] text-steel/85 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* small closing statement */}
              <p className="mt-8 text-sm text-pearl/80 font-light leading-relaxed">
                Built for leaders who value calm execution, disciplined decisions, and premium standards — even under
                pressure.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}