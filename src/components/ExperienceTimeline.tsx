import { motion } from "motion/react";
import { useLanguage } from "../i18n";

export default function ExperienceTimeline() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-charcoal py-24 md:py-32">
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold-champagne/8 blur-[140px]" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gold-champagne/8 blur-[140px]" />

      <div className="section-container relative z-10">
        <div className="mx-auto mb-16 max-w-4xl text-center md:mb-20">
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.42em] text-gold-champagne">
            {t.timeline.eyebrow}
          </span>

          <h2 className="heading-serif text-4xl leading-tight text-balance md:text-6xl">
            {t.timeline.title} <span className="text-gold-champagne">{t.timeline.titleHighlight}</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base font-light leading-relaxed text-steel/90 md:text-lg">
            {t.timeline.intro}
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:gap-10">
          {t.timeline.items.map((item, index) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
              className="grid items-start gap-6 rounded-[1.75rem] border border-gold-champagne/12 bg-obsidian/50 p-8 md:grid-cols-[200px_1fr] md:gap-10 md:p-10"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-champagne">{item.period}</div>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-serif italic text-pearl md:text-3xl">{item.title}</h3>
                <p className="text-sm font-light leading-relaxed text-steel/90 md:text-[15px]">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
