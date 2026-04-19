import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "../i18n";

export default function Coaching() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative overflow-hidden bg-obsidian py-24 md:py-32">
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-gold-champagne/6 blur-[120px]" />

      <div className="section-container relative z-10 grid items-start gap-14 lg:grid-cols-[0.88fr_1.12fr] xl:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.34em] text-gold-champagne">
            {t.services.eyebrow}
          </span>

          <h2 className="heading-serif mb-8 text-4xl leading-tight text-balance md:text-6xl">
            {t.services.title} <span className="text-gold-champagne">{t.services.highlight}</span>
          </h2>

          <p className="mb-7 text-base font-light leading-relaxed text-steel md:text-lg">
            {t.services.intro}
          </p>

          <div className="overflow-hidden rounded-[2rem] border border-gold-champagne/15 bg-charcoal/65">
            <img
              src="/images/rotes-jacket-marie1.webp"
              alt="Marie Lindner portrait"
              className="h-[520px] w-full object-cover object-[center_18%]"
              loading="lazy"
            />
          </div>
        </motion.div>

        <div className="grid gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10"
          >
            <div className="mb-5 text-[10px] font-bold uppercase tracking-[0.34em] text-gold-champagne">
              {t.services.serviceTitle}
            </div>

            <div className="grid gap-4">
              {t.services.focusItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-gold-champagne/10 bg-obsidian/55 px-4 py-4"
                >
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold-champagne" />
                  <span className="text-sm font-light leading-relaxed text-pearl/90 md:text-[15px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="glass-card p-8 md:p-10"
          >
            <h3 className="mb-4 text-2xl font-serif italic text-pearl">{t.services.focusTitle}</h3>
            <p className="text-sm font-light leading-relaxed text-steel/90 md:text-[15px]">
              {t.hero.supporting}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}