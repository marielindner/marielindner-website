import { motion } from "motion/react";
import { BriefcaseBusiness, Globe2, Plane, ShieldCheck } from "lucide-react";
import { useLanguage } from "../i18n";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative overflow-hidden bg-obsidian py-24 md:py-32">
      <svg
        className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-[0.05]"
        viewBox="0 0 1200 1200"
        aria-hidden="true"
      >
        <path
          d="M0,620 C240,540 340,520 520,610 C700,700 820,690 1200,560"
          fill="none"
          stroke="#B08D57"
          strokeWidth="1.2"
          strokeDasharray="10 10"
        />
      </svg>

      <div className="section-container relative z-10">
        <div className="grid items-start gap-14 lg:grid-cols-[0.95fr_1.05fr] xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.34em] text-gold-champagne">
              {t.about.eyebrow}
            </span>

            <h2 className="heading-serif mb-7 text-4xl leading-tight text-balance md:text-5xl">
              {t.about.titleLine1}
              <br />
              <span className="text-gold-champagne">{t.about.titleHighlight}</span>
            </h2>

            <div className="max-w-2xl space-y-6 text-base font-light leading-relaxed text-steel/90 md:text-lg">
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10">
              <div className="relative overflow-hidden rounded-[2rem] border border-gold-champagne/15 bg-charcoal/40">
                <img
                  src="/images/about-marie.webp"
                  alt="Marie Lindner portrait"
                  className="h-[520px] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="inline-flex items-center gap-2 rounded-xl border border-gold-champagne/20 bg-obsidian/50 px-4 py-3 backdrop-blur-sm">
                    <Plane size={18} className="text-gold-champagne" />
                    <span className="text-sm font-medium text-pearl">{t.about.pilotLabel}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-xl border border-gold-champagne/20 bg-obsidian/50 px-4 py-3 backdrop-blur-sm">
                    <Globe2 size={18} className="text-gold-champagne" />
                    <span className="text-sm font-medium text-pearl">{t.about.perspectiveLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            className="relative overflow-hidden rounded-[2rem] border border-gold-champagne/20 bg-charcoal/95 p-8 md:p-12"
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-champagne/10 blur-[120px]" />
            <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-gold-champagne/10 blur-[120px]" />

            <div className="mb-8 flex items-center gap-3">
              <BriefcaseBusiness size={20} className="text-gold-champagne" />
              <h3 className="text-2xl font-serif italic text-pearl">{t.about.highlightsTitle}</h3>
            </div>

            <ul className="mb-12 space-y-4">
              {t.about.highlights.map((item) => (
                <li key={item} className="group flex items-start gap-3">
                  <ShieldCheck
                    size={18}
                    className="mt-1 shrink-0 text-gold-champagne transition-transform group-hover:scale-110"
                  />
                  <span className="text-sm font-medium leading-relaxed text-steel/90 md:text-[15px]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-5 border-t border-gold-champagne/12 pt-8">
              <div>
                <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.34em] text-gold-champagne">
                  {t.about.foundationTitle}
                </div>
                <p className="text-sm font-light leading-relaxed text-steel/90 md:text-[15px]">
                  {t.about.foundationText}
                </p>
              </div>

              <div>
                <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.34em] text-gold-champagne">
                  {t.about.whyTitle}
                </div>
                <p className="text-sm font-light leading-relaxed text-steel/90 md:text-[15px]">{t.about.whyText}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
