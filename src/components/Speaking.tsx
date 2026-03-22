import { motion } from "motion/react";
import { CheckCircle2, ArrowUpRight, Mic2 } from "lucide-react";

const keynotes = [
  {
    title: "Leadership Under Pressure",
    subtitle: "Decision quality, calm communication and responsible action",
    outcomes: [
      "How leaders regain clarity when complexity increases",
      "Decision-making under pressure without losing composure",
      "What aviation discipline teaches about leadership responsibility",
    ],
  },
  {
    title: "Executive Presence & Communication",
    subtitle: "Confidence, clarity and authentic authority",
    outcomes: [
      "How leaders strengthen presence without forcing it",
      "Structured communication in sensitive situations",
      "Building trust through clarity, calm and consistency",
    ],
  },
  {
    title: "Change, Resilience & Self-Leadership",
    subtitle: "Navigating transition with structure and focus",
    outcomes: [
      "Maintaining direction in uncertain phases",
      "Strengthening resilience and internal stability",
      "Turning reflection into concrete next steps",
    ],
  },
];

export default function Speaking() {
  return (
    <section id="speaking" className="py-24 md:py-32 relative bg-charcoal">
      <div className="section-container">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 xl:gap-20 items-start mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] uppercase tracking-[0.34em] text-gold-champagne font-bold mb-4 block">
                Speaking
              </span>

              <h2 className="text-4xl md:text-5xl heading-serif mb-8 leading-tight text-balance">
                Keynotes that combine <span className="text-gold-champagne">substance</span> and presence.
              </h2>

              <p className="text-steel font-light leading-relaxed mb-8 text-base md:text-lg">
                Speaking is part of Marie’s work — especially where leadership, responsibility, communication and
                decision-making meet. Her sessions are thoughtful, clear and grounded in real-world experience.
              </p>

              <div className="rounded-[1.75rem] overflow-hidden border border-gold-champagne/12">
                <img
                  src="/images/hero-marie.webp"
                  alt="Marie Lindner portrait"
                  className="w-full h-[480px] object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>

          <div className="grid gap-6">
            {keynotes.map((keynote, index) => (
              <motion.div
                key={keynote.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group p-8 bg-obsidian/55 border border-gold-champagne/10 hover:border-gold-champagne/35 transition-all duration-500 rounded-[1.75rem]"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-gold-champagne mt-1">
                    <Mic2 size={24} strokeWidth={1.4} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif italic text-pearl mb-2 group-hover:text-gold-champagne transition-colors">
                      {keynote.title}
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest text-gold-champagne font-bold">
                      {keynote.subtitle}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {keynote.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start space-x-3">
                      <CheckCircle2 size={16} className="text-gold-champagne mt-0.5 shrink-0" />
                      <p className="text-xs md:text-sm text-steel leading-relaxed">{outcome}</p>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] text-pearl group-hover:text-gold-champagne transition-colors font-bold"
                >
                  Inquire for Speaking <ArrowUpRight size={14} className="ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}