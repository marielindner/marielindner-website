import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "../i18n";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="why-marie" className="relative overflow-hidden bg-obsidian py-24 md:py-32">
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold-champagne/8 blur-[140px]" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gold-champagne/8 blur-[140px]" />

      <div className="section-container relative z-10">
        <div className="mb-16 max-w-4xl">
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.34em] text-gold-champagne">{t.whyMarie.eyebrow}</span>
          <h2 className="heading-serif mb-7 text-4xl leading-tight text-balance md:text-6xl">
            {t.whyMarie.title} <span className="text-gold-champagne">{t.whyMarie.highlight}</span>
          </h2>
          <p className="text-base font-light leading-relaxed text-steel/90 md:text-lg">{t.whyMarie.intro}</p>
        </div>

        <div className="mb-14 grid gap-6 lg:grid-cols-2">
          {t.whyMarie.blocks.map((block, index) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-8 md:p-10"
            >
              <h3 className="mb-5 text-2xl font-serif italic text-pearl">{block.title}</h3>
              <div className="space-y-4 text-sm font-light leading-relaxed text-steel/90 md:text-[15px]">
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {block.bullets && (
                <div className="mt-6 grid gap-3">
                  {block.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3 rounded-2xl border border-gold-champagne/10 bg-obsidian/55 px-4 py-4">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold-champagne" />
                      <span className="text-sm font-light leading-relaxed text-pearl/90">{bullet}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="overflow-hidden rounded-[2rem] border border-gold-champagne/15 bg-charcoal/70"
        >
          <div className="grid items-stretch gap-0 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="p-8 md:p-10 lg:p-12">
              <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.34em] text-gold-champagne">Aviation Story</div>
              <p className="heading-serif mb-6 text-3xl leading-tight text-pearl md:text-5xl">{t.aviation.quote}</p>
              <p className="text-sm font-light leading-relaxed text-steel/90 md:text-[15px]">{t.aviation.text}</p>
            </div>

            <div className="grid gap-px border-t border-gold-champagne/12 bg-gold-champagne/12 lg:border-l lg:border-t-0">
              <div className="relative min-h-[320px] overflow-hidden bg-obsidian/60">
                <img src="/images/cockpit-marie.webp" alt="Marie Lindner in cockpit" className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 via-transparent to-transparent" />
              </div>
              <div className="relative min-h-[260px] overflow-hidden bg-obsidian/60">
                <img src="/images/flugzeug-marie.webp" alt="Marie Lindner with aircraft" className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/45 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
