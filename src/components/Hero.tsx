import { motion } from "motion/react";
import { ArrowRight, Globe2, MessageSquare, Plane, Sparkles } from "lucide-react";
import { useLanguage } from "../i18n";

export default function Hero() {
  const { t } = useLanguage();
  const cards = [MessageSquare, Globe2, Plane];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 h-[36rem] w-[36rem] rounded-full bg-gold-champagne/8 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[30rem] w-[30rem] rounded-full bg-gold-champagne/6 blur-[140px]" />
        <div className="absolute left-0 right-0 top-28 h-px bg-gradient-to-r from-transparent via-gold-champagne/15 to-transparent" />
      </div>

      <div className="section-container relative z-10 grid min-h-[calc(100vh-6rem)] items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] xl:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-xl py-8 lg:py-0"
        >
          <div className="mb-7 flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-gold-champagne/20 bg-obsidian/40 px-3 py-2 shadow-lg shadow-gold-champagne/10 backdrop-blur-sm">
                <img
                  src="/images/logo-ml-consulting.webp"
                  alt="Marie Lindner Consulting"
                  className="h-8 w-auto object-contain md:h-9"
                  loading="eager"
                  decoding="async"
                />
              </div>

              <div className="hidden leading-tight sm:block">
                <div className="text-base font-serif italic text-pearl md:text-lg">Marie Lindner</div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-steel/70">Coaching</div>
              </div>
            </div>

            <div className="h-px flex-1 bg-gradient-to-r from-gold-champagne/60 to-transparent" />
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-champagne/20 bg-gold-champagne/8 px-4 py-2">
            <Sparkles size={14} className="text-gold-champagne" />
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold-champagne">{t.hero.badge}</span>
          </div>

          <h1 className="heading-serif mb-7 text-4xl leading-[1.04] text-balance md:text-6xl xl:text-7xl">
            {t.hero.titleLine1}
            <br />
            <span className="text-gold-champagne">{t.hero.titleHighlight}</span>
          </h1>

          <p className="mb-8 max-w-xl text-base font-light leading-relaxed text-steel/90 md:text-xl">{t.hero.intro}</p>

          <p className="mb-10 max-w-xl text-sm leading-relaxed text-pearl/80 md:text-base">{t.hero.supporting}</p>

          <div className="mb-12 flex flex-col gap-4 sm:flex-row">
            <a href="#coaching" className="btn-primary group">
              {t.hero.primaryCta}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a href="#contact" className="btn-secondary">
              {t.hero.secondaryCta}
            </a>
          </div>

          <div className="grid gap-4 border-t border-gold-champagne/12 pt-7 sm:grid-cols-3">
            {t.hero.cards.map((card, index) => {
              const Icon = cards[index];
              return (
                <div key={card.title} className="rounded-2xl border border-gold-champagne/12 bg-charcoal/50 p-4">
                  <div className="mb-3 flex items-center gap-2 text-gold-champagne">
                    <Icon size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em]">{card.title}</span>
                  </div>
                  <p className="text-sm font-light leading-relaxed text-steel/90">{card.text}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-gold-champagne/15 bg-charcoal">
            <div className="relative aspect-[4/5]">
              <img
                src="/images/rotes-jacket-marie2.webp"
                alt="Marie Lindner portrait"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}