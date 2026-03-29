import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { useLanguage } from "../i18n";

export default function Differentiator() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-charcoal py-24 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-gold-champagne/8 blur-[120px]" />
        <div className="absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-gold-champagne/8 blur-[120px]" />
      </div>

      <div className="section-container relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.34em] text-gold-champagne">
            {t.aviation.eyebrow}
          </span>
          <h2 className="heading-serif mb-7 text-4xl leading-tight text-balance md:text-6xl">
            {t.aviation.title} <span className="text-gold-champagne">{t.aviation.highlight}</span>
          </h2>
          <p className="max-w-3xl text-base font-light leading-relaxed text-steel/90 md:text-lg">{t.aviation.text}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card relative overflow-hidden p-8 md:p-10"
        >
          <Quote size={44} className="absolute right-6 top-6 text-gold-champagne/15" />
          <div className="mb-6 overflow-hidden rounded-[1.5rem] border border-gold-champagne/12">
            <img src="/images/cockpit-marie.webp" alt="Marie Lindner in cockpit" className="h-[260px] w-full object-cover" loading="lazy" />
          </div>
          <p className="heading-serif text-3xl leading-tight text-pearl md:text-4xl">“{t.aviation.quote}”</p>
        </motion.div>
      </div>
    </section>
  );
}
