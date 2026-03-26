import { motion } from "motion/react";
import { BriefcaseBusiness, CheckCircle2, Globe2, Plane, ShieldCheck } from "lucide-react";
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
          className="mt-14 overflow-hidden rounded-[2rem] border border-gold-champagne/15 bg-charcoal/70"
        >
          <div className="grid items-stretch gap-0 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="p-8 md:p-10 lg:p-12">
              <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.34em] text-gold-champagne">
                {t.about.aviationStoryEyebrow}
              </div>

              <h3 className="heading-serif mb-6 text-3xl leading-tight text-balance md:text-5xl">
                {t.about.aviationStoryTitle} <span className="text-gold-champagne">{t.about.aviationStoryTitleHighlight}</span>
              </h3>

              <div className="space-y-5 text-sm font-light leading-relaxed text-steel/90 md:text-[15px]">
                {t.about.aviationStoryParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {t.about.aviationStoryPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-gold-champagne/12 bg-obsidian/55 px-4 py-4"
                  >
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold-champagne" />
                    <span className="text-xs font-medium leading-relaxed text-pearl/90 md:text-sm">{point}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 max-w-3xl text-sm font-light leading-relaxed text-pearl/88 md:text-[15px]">
                {t.about.aviationStoryClosing}
              </p>
            </div>

            <div className="grid gap-px border-t border-gold-champagne/12 bg-gold-champagne/12 lg:border-l lg:border-t-0">
              <div className="relative min-h-[320px] overflow-hidden bg-obsidian/60">
                <img
                  src="/images/cockpit-marie.webp"
                  alt="Marie Lindner in cockpit"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 via-transparent to-transparent" />
              </div>
              <div className="relative min-h-[260px] overflow-hidden bg-obsidian/60">
                <img
                  src="/images/flugzeug-marie.webp"
                  alt="Marie Lindner with aircraft"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/45 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
