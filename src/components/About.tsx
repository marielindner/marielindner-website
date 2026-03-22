import { motion } from "motion/react";
import { Globe2, Plane, ShieldCheck, BriefcaseBusiness } from "lucide-react";

const highlights = [
  "Founder & Managing Director of Marie Lindner Consulting UG",
  "Entrepreneurial experience through startup build-up, management and leadership responsibility",
  "Commercial Pilot License (CPL) and aviation training in Australia",
  "Leadership, communication and decision-making under pressure",
  "Professional coaching training with leadership focus",
  "International background with English and German fluency",
  "Strong network across entrepreneurs, executives and business communities",
  "Structured, high-trust work with leaders in transition and responsibility-heavy roles",
];

export default function About() {
  return (
    <section id="about" className="bg-obsidian py-24 md:py-32 relative overflow-hidden">
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none"
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
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-14 xl:gap-20 items-start">
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
              Entrepreneurial experience.
              <br />
              <span className="text-gold-champagne">Human clarity.</span>
            </h2>

            <div className="space-y-6 text-steel/90 font-light leading-relaxed text-base md:text-lg max-w-2xl">
              <p>
                Marie Lindner combines practical entrepreneurial experience with leadership responsibility, structured
                coaching work and an aviation background that shaped her standards early on.
              </p>
              <p>
                As part of building and helping lead a startup, she gained hands-on experience in management,
                organization, strategic thinking, execution and communication. That work created a deep understanding
                of how leaders actually operate under pressure — and where they often need clarity most.
              </p>
              <p>
                Today, she supports entrepreneurs, executives and ambitious individuals who want stronger decision
                quality, greater self-leadership, clearer communication and more grounded effectiveness.
              </p>
            </div>

            <div className="mt-10">
              <div className="relative overflow-hidden rounded-[2rem] border border-gold-champagne/15 bg-charcoal/40">
                <img
                  src="/images/about-marie.webp"
                  alt="Marie Lindner portrait"
                  className="w-full h-[520px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-xl border border-gold-champagne/20 bg-obsidian/50 backdrop-blur-sm px-4 py-3">
                    <Plane size={18} className="text-gold-champagne" />
                    <span className="text-pearl text-sm font-medium">Commercial Pilot License (CPL)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-xl border border-gold-champagne/20 bg-obsidian/50 backdrop-blur-sm px-4 py-3">
                    <Globe2 size={18} className="text-gold-champagne" />
                    <span className="text-pearl text-sm font-medium">International Perspective</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            className="bg-charcoal/95 p-8 md:p-12 border border-gold-champagne/20 rounded-[2rem] relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-gold-champagne/10 rounded-full blur-[120px]" />
            <div className="absolute -bottom-28 -left-28 w-72 h-72 bg-gold-champagne/10 rounded-full blur-[120px]" />

            <div className="flex items-center gap-3 mb-8">
              <BriefcaseBusiness size={20} className="text-gold-champagne" />
              <h3 className="text-2xl font-serif italic text-pearl">Professional Highlights</h3>
            </div>

            <ul className="space-y-4 mb-12">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <ShieldCheck
                    size={18}
                    className="text-gold-champagne mt-1 shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm md:text-[15px] text-steel/90 font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-gold-champagne/12 space-y-5">
              <div>
                <div className="text-[10px] uppercase tracking-[0.34em] text-gold-champagne font-bold mb-2">
                  Coaching Foundation
                </div>
                <p className="text-sm md:text-[15px] text-steel/90 leading-relaxed font-light">
                  Marie’s work is informed by leadership-focused coaching training, communication psychology, personal
                  development and resilience-oriented methods — always combined with real-world business perspective.
                </p>
              </div>

              <div>
                <div className="text-[10px] uppercase tracking-[0.34em] text-gold-champagne font-bold mb-2">
                  Why clients work with her
                </div>
                <p className="text-sm md:text-[15px] text-steel/90 leading-relaxed font-light">
                  Because the combination is unusual: professional credibility, calm authority, entrepreneurial
                  understanding and a way of working that is both structured and deeply human.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}