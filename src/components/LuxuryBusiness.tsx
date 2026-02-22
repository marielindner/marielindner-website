import { motion } from "motion/react";
import { Sparkles, Layout, BarChart3, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Luxury Experience Design",
    description:
      "Curate high-end client journeys that feel effortless — built on deliberate touchpoints, emotional resonance, and uncompromising standards.",
  },
  {
    icon: Layout,
    title: "Premium Brand Strategy",
    description:
      "Position your brand with clarity and restraint. From identity to narrative, every detail aligns with the expectations of premium clientele.",
  },
  {
    icon: BarChart3,
    title: "Operational Luxury",
    description:
      "Luxury is delivered backstage. We build the operating systems that make the frontstage experience flawless — consistently, at scale.",
  },
];

export default function LuxuryBusiness() {
  return (
    <section id="luxury" className="py-24 md:py-32 relative overflow-hidden">
      {/* subtle gold haze */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-champagne/8 rounded-full blur-[140px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold-champagne/8 rounded-full blur-[140px]" />

      <div className="section-container relative z-10">
        {/* Intro row */}
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-[10px] uppercase tracking-[0.34em] text-gold-champagne font-bold mb-4 block">
              Luxury Operations & Strategy
            </span>

            <h2 className="text-4xl md:text-6xl heading-serif mb-7 leading-tight text-balance">
              Curating <span className="text-gold-champagne italic">excellence</span> —
              <br className="hidden md:block" /> with disciplined execution.
            </h2>

            <p className="text-steel/90 font-light leading-relaxed mb-9 text-base md:text-lg max-w-xl">
              Luxury is never accidental. It is the outcome of precision, restraint, and a leadership culture that
              protects standards under pressure. Marie helps premium organizations align aesthetics with operations —
              so the experience remains flawless, every time.
            </p>

            {/* service shorthand row */}
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-pearl/90 font-bold"
                >
                  <service.icon size={14} className="text-gold-champagne" />
                  <span>{service.title}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a href="#contact" className="btn-secondary inline-flex items-center">
                Request Portfolio
                <ArrowRight size={14} className="ml-2" />
              </a>
            </div>
          </motion.div>

          {/* Image / case card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.975 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-gold-champagne/15 bg-charcoal">
              <div className="aspect-[16/10] md:aspect-video relative">
                <img
                  src="/luxury-marie.jpg"
                  alt="Marie Lindner — Luxury Strategy"
                  className="absolute inset-0 w-full h-full object-cover opacity-85"
                />
                {/* premium overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/25 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(176,141,87,0.16),rgba(7,7,7,0)_55%)]" />
              </div>

              {/* caption */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[10px] uppercase tracking-widest text-gold-champagne font-bold mb-2">
                  Selected Work (available upon request)
                </div>
                <h3 className="text-2xl md:text-3xl font-serif italic text-pearl">
                  The Art of Operational Restraint
                </h3>
                <p className="mt-3 text-sm text-steel/90 max-w-xl font-light leading-relaxed">
                  Premium experiences require invisible systems: consistency, cadence, quality control, and leadership
                  discipline — engineered to protect standards at scale.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
              className="p-8 rounded-2xl border border-gold-champagne/12 bg-obsidian/40 hover:bg-obsidian/55 transition-all duration-500"
            >
              <div className="mb-6 text-gold-champagne">
                <service.icon size={34} strokeWidth={1} />
              </div>

              <h3 className="text-xl font-serif italic text-pearl mb-4">
                {service.title}
              </h3>

              <p className="text-sm text-steel/90 font-light leading-relaxed mb-6">
                {service.description}
              </p>

              <a
                href="#contact"
                className="text-[10px] uppercase tracking-widest text-gold-champagne font-bold inline-flex items-center group"
              >
                Inquire
                <ArrowRight
                  size={12}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Exclusive note */}
        <div className="mt-20 md:mt-24 pt-12 border-t border-gold-champagne/12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <h3 className="text-3xl font-serif italic text-pearl mb-4">
                Selected Work
              </h3>
              <p className="text-steel/90 font-light max-w-2xl leading-relaxed">
                Due to the exclusive nature of luxury partnerships, detailed case studies and references are shared
                selectively. Portfolio materials are available upon direct request for qualified inquiries.
              </p>
            </div>
            <a href="#contact" className="btn-primary">
              Request Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}