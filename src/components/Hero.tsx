import { motion } from "motion/react";
import { ArrowRight, Globe2, Plane, Users } from "lucide-react";
import { useLanguage } from "../i18n";

const icons = [Globe2, Users, Plane];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden pt-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute right-[-8rem] top-[-8rem] h-[34rem] w-[34rem] rounded-full bg-gold-champagne/12 blur-[160px]" />
        <div className="absolute bottom-[-10rem] left-[-8rem] h-[30rem] w-[30rem] rounded-full bg-gold-champagne/8 blur-[160px]" />
      </div>

      <div className="section-container relative z-10 grid min-h-[calc(100vh-6rem)] items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] xl:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-xl py-8 lg:py-0"
        >
          <div className="mb-7 flex items-center gap-4">
            <div className="rounded-2xl border border-gold-champagne/20 bg-obsidian/50 px-4 py-3 shadow-lg shadow-gold-champagne/10 backdrop-blur-sm md:px-5 md:py-4">
              <img
                src="/images/logo-ml-consulting.webp"
                alt="Marie Lindner Consulting"
                className="h-12 w-auto object-contain md:h-14 xl:h-16"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-gold-champagne/60 to-transparent" />
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-champagne/20 bg-gold-champagne/8 px-4 py-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold-champagne">
              {t.hero.badge}
            </span>
          </div>

          <h1 className="heading-serif mb-7 text-4xl leading-[1.02] text-balance md:text-6xl xl:text-7xl">
            {t.hero.title}
            <br />
            <span className="text-gold-champagne">{t.hero.highlight}</span>
          </h1>

          <p className="mb-8 max-w-xl text-base font-light leading-relaxed text-steel/90 md:text-xl">
            {t.hero.intro}
          </p>
          <p className="mb-10 max-w-xl text-sm leading-relaxed text-pearl/80 md:text-base">
            {t.hero.supporting}
          </p>

          <div className="mb-12 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="btn-primary group">
              {t.hero.primaryCta}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#services" className="btn-secondary">
              {t.hero.secondaryCta}
            </a>
          </div>

          <div className="grid gap-4 border-t border-gold-champagne/12 pt-7 sm:grid-cols-3">
            {t.hero.cards.map((card, index) => {
              const Icon = icons[index];

              return (
                <div
                  key={card.title}
                  className="rounded-2xl border border-gold-champagne/12 bg-charcoal/50 p-4"
                >
                  <div className="mb-3 flex items-center gap-2 text-gold-champagne">
                    <Icon size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em]">
                      {card.title}
                    </span>
                  </div>
                  <p className="text-sm font-light leading-relaxed text-steel/90">
                    {card.text}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
          className="relative flex flex-col lg:block"
        >
          <div className="absolute -right-6 top-10 hidden h-28 w-28 rounded-full border border-gold-champagne/18 bg-obsidian/60 backdrop-blur-sm lg:block" />

          <div className="relative overflow-hidden rounded-[2rem] border border-gold-champagne/15 bg-charcoal shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
            <div className="relative aspect-[4/4.9] sm:aspect-[4/5]">
              <img
                src="/images/rotes-jacket-marie2.webp"
                alt="Marie Lindner executive portrait"
                className="h-full w-full object-cover object-[58%_18%] sm:object-[center_20%] lg:object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/45 via-transparent to-transparent" />
            </div>

            <div className="absolute left-4 top-4 sm:left-6 sm:top-6 lg:hidden">
              <div className="rounded-2xl border border-gold-champagne/15 bg-obsidian/65 px-4 py-3 backdrop-blur-sm">
                <img
                  src="/images/logo-ml-consulting.webp"
                  alt="Marie Lindner Consulting"
                  className="h-10 w-auto object-contain"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          <div className="relative mt-6 px-2 lg:absolute lg:bottom-6 lg:left-6 lg:right-6 lg:mt-0 lg:px-0">
            <div className="rounded-[1.5rem] border border-gold-champagne/15 bg-obsidian/60 p-5 backdrop-blur-sm lg:max-w-[22rem]">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-champagne">
                Marie Lindner Consulting
              </div>
              <p className="mt-3 text-sm leading-relaxed text-pearl/90">
                {t.hero.supporting}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}