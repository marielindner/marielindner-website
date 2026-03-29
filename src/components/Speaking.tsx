import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "../i18n";

export default function Speaking() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-charcoal py-24 md:py-32">
      <div className="section-container grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] xl:gap-20">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.34em] text-gold-champagne">{t.audience.eyebrow}</span>
            <h2 className="heading-serif mb-8 text-4xl leading-tight text-balance md:text-5xl">
              {t.audience.title} <span className="text-gold-champagne">{t.audience.highlight}</span>
            </h2>
            <p className="mb-8 text-base font-light leading-relaxed text-steel md:text-lg">{t.audience.intro}</p>

            <div className="overflow-hidden rounded-[1.75rem] border border-gold-champagne/12">
              <img src="/images/rotes-jacket-marie1.webp" alt="Marie Lindner portrait in red blazer" className="h-[520px] w-full object-cover" loading="lazy" />
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10"
          >
            <div className="mb-5 text-[10px] font-bold uppercase tracking-[0.34em] text-gold-champagne">{t.audience.companiesTitle}</div>
            <div className="grid gap-4">
              {t.audience.companies.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-gold-champagne/10 bg-obsidian/55 px-4 py-4">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold-champagne" />
                  <span className="text-sm font-light leading-relaxed text-pearl/90 md:text-[15px]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="glass-card p-8 md:p-10"
          >
            <h3 className="mb-4 text-2xl font-serif italic text-pearl">{t.audience.shortTitle}</h3>
            <p className="text-sm font-light leading-relaxed text-steel/90 md:text-[15px]">{t.audience.shortText}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
