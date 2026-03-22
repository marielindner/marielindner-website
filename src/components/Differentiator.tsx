import { motion } from "motion/react";
import { Compass, Shield, Plane } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Clarity in complexity",
    description:
      "Marie works with leaders who need more than motivation. Her strength is helping people structure complexity, think clearly and move decisively.",
  },
  {
    icon: Shield,
    title: "Calm under pressure",
    description:
      "From operational leadership to entrepreneurial responsibility, her work is grounded in composure, responsibility and well-judged action.",
  },
  {
    icon: Plane,
    title: "Aviation-grade discipline",
    description:
      "Commercial pilot training in Australia shaped her standards: preparation, situational awareness, discipline and accountability.",
  },
];

export default function Differentiator() {
  return (
    <section className="bg-charcoal relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-champagne/20 to-transparent" />

      <div className="section-container">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-14 xl:gap-20 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <span className="text-[10px] uppercase tracking-[0.34em] text-gold-champagne font-bold mb-4 block">
                The Differentiator
              </span>

              <h2 className="text-4xl md:text-5xl heading-serif mb-8 leading-tight">
                From the cockpit
                <br />
                to the <span className="text-gold-champagne">executive table.</span>
              </h2>

              <p className="text-steel font-light leading-relaxed mb-8 text-base md:text-lg">
                Marie Lindner combines entrepreneurial experience, leadership responsibility, coaching expertise and a
                commercial aviation background. That combination is rare — and it shapes how she supports clients:
                clear, thoughtful, composed and practical.
              </p>

              <div className="aviation-line mb-8" />

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="rounded-2xl overflow-hidden border border-gold-champagne/12">
                  <img
                    src="/images/cockpit-marie.webp"
                    alt="Marie Lindner in cockpit"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-gold-champagne/12">
                  <img
                    src="/images/flugzeug-marie.webp"
                    alt="Marie Lindner standing on aircraft"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-1 gap-6">
            {pillars.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="p-8 rounded-2xl border border-gold-champagne/12 bg-obsidian/55"
              >
                <div className="mb-6 text-gold-champagne">
                  <item.icon size={30} strokeWidth={1.2} />
                </div>
                <h3 className="text-2xl font-serif italic mb-4 text-pearl">{item.title}</h3>
                <p className="text-sm md:text-[15px] text-steel font-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}