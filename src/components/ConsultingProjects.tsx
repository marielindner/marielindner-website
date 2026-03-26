import { motion } from "motion/react";
import { ArrowRight, FolderKanban, Globe2, ShieldCheck, Users2 } from "lucide-react";
import { useLanguage } from "../i18n";

const icons = [FolderKanban, Globe2, Users2];

export default function ConsultingProjects() {
  const { t } = useLanguage();

  return (
    <section id="consulting" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold-champagne/8 blur-[140px]" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gold-champagne/8 blur-[140px]" />

      <div className="section-container relative z-10">
        <div className="mb-16 grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] xl:gap-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.34em] text-gold-champagne">
              {t.consulting.eyebrow}
            </span>

            <h2 className="heading-serif mb-7 text-4xl leading-tight text-balance md:text-6xl">
              {t.consulting.titleLine1}
              <br className="hidden md:block" />
              <span className="text-gold-champagne">{t.consulting.titleHighlight}</span>
            </h2>

            <p className="mb-7 max-w-2xl text-base font-light leading-relaxed text-steel/90 md:text-lg">
              {t.consulting.intro}
            </p>

            <div className="mb-8 max-w-2xl rounded-2xl border border-gold-champagne/15 bg-charcoal/70 p-6">
              <div className="mb-3 flex items-center gap-3 text-gold-champagne">
                <ShieldCheck size={18} />
                <span className="text-[10px] font-bold uppercase tracking-[0.28em]">{t.consulting.currentEngagement}</span>
              </div>
              <p className="text-sm font-light leading-relaxed text-pearl/90 md:text-[15px]">
                {t.consulting.currentEngagementText}
              </p>
            </div>

            <a href="#contact" className="btn-secondary inline-flex items-center">
              {t.consulting.cta}
              <ArrowRight size={14} className="ml-2" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[2rem] border border-gold-champagne/12"
          >
            <img
              src="/images/luxury-marie.webp"
              alt="Marie Lindner consulting portrait"
              className="h-[620px] w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.consulting.areas.map((area, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[1.75rem] border border-gold-champagne/12 bg-charcoal/60 p-8"
              >
                <div className="mb-5 text-gold-champagne">
                  <Icon size={30} strokeWidth={1.3} />
                </div>
                <h3 className="mb-4 text-2xl font-serif italic text-pearl">{area.title}</h3>
                <p className="text-sm font-light leading-relaxed text-steel/90 md:text-[15px]">{area.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}