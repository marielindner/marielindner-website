import { motion } from "motion/react";
import { Compass, ShieldCheck, Sparkles } from "lucide-react";
import { useLanguage } from "../i18n";

const icons = [Compass, Sparkles, ShieldCheck];

export default function Differentiator() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-charcoal py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-gold-champagne/8 blur-[120px]" />
        <div className="absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-gold-champagne/8 blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.34em] text-gold-champagne">
            {t.differentiator.eyebrow}
          </span>
          <h2 className="heading-serif mb-7 text-4xl leading-tight text-balance md:text-6xl">
            {t.differentiator.title} <span className="text-gold-champagne">{t.differentiator.titleHighlight}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-steel/90 md:text-lg">
            {t.differentiator.intro}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.differentiator.pillars.map((pillar, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[1.75rem] border border-gold-champagne/12 bg-obsidian/55 p-8"
              >
                <div className="mb-5 text-gold-champagne">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 text-2xl font-serif italic text-pearl">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-steel/90 md:text-[15px]">{pillar.text}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mx-auto mt-10 max-w-4xl rounded-[1.75rem] border border-gold-champagne/12 bg-obsidian/40 p-8 text-center"
        >
          <p className="text-base font-light leading-relaxed text-pearl/90 md:text-lg">{t.differentiator.closing}</p>
        </motion.div>
      </div>
    </section>
  );
}
