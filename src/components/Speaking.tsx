import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2, Mic2 } from "lucide-react";
import { useLanguage } from "../i18n";

export default function Speaking() {
  const { t } = useLanguage();

  return (
    <section id="speaking" className="relative bg-charcoal py-24 md:py-32">
      <div className="section-container">
        <div className="mb-16 grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] xl:gap-20">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.34em] text-gold-champagne">
                {t.speaking.eyebrow}
              </span>

              <h2 className="heading-serif mb-8 text-4xl leading-tight text-balance md:text-5xl">
                {t.speaking.title} <span className="text-gold-champagne">{t.speaking.titleHighlight}</span>
              </h2>

              <p className="mb-8 text-base font-light leading-relaxed text-steel md:text-lg">{t.speaking.intro}</p>

              <div className="overflow-hidden rounded-[1.75rem] border border-gold-champagne/12">
                <img
                  src="/images/hero-marie.webp"
                  alt="Marie Lindner portrait"
                  className="h-[480px] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>

          <div className="grid gap-6">
            {t.speaking.keynotes.map((keynote, index) => (
              <motion.div
                key={keynote.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-[1.75rem] border border-gold-champagne/10 bg-obsidian/55 p-8 transition-all duration-500 hover:border-gold-champagne/35"
              >
                <div className="mb-6 flex items-start gap-4">
                  <div className="mt-1 text-gold-champagne">
                    <Mic2 size={24} strokeWidth={1.4} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-2xl font-serif italic text-pearl transition-colors group-hover:text-gold-champagne">
                      {keynote.title}
                    </h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gold-champagne">
                      {keynote.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mb-6 space-y-4">
                  {keynote.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start space-x-3">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold-champagne" />
                      <p className="text-xs leading-relaxed text-steel md:text-sm">{outcome}</p>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-pearl transition-colors group-hover:text-gold-champagne"
                >
                  {t.speaking.cta} <ArrowUpRight size={14} className="ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
