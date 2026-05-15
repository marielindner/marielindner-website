import { motion } from "motion/react";
import { ArrowUpRight, Globe2, BriefcaseBusiness, BadgeCheck } from "lucide-react";
import { useLanguage } from "../i18n";

const icons = [Globe2, BriefcaseBusiness, BadgeCheck];

export default function ExecutiveSummary() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-8 md:py-14">
      <div className="section-container pt-0 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card overflow-hidden border border-gold-champagne/15"
        >
          <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="mb-5 inline-flex rounded-full border border-gold-champagne/20 bg-gold-champagne/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-gold-champagne">
                {t.executiveSummary.eyebrow}
              </span>

              <h2 className="heading-serif mb-6 text-3xl leading-tight md:text-5xl">
                {t.executiveSummary.title}
                <span className="text-gold-champagne"> {t.executiveSummary.highlight}</span>
              </h2>

              <p className="mb-8 max-w-2xl text-base leading-relaxed text-steel/90 md:text-lg">
                {t.executiveSummary.text}
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="/portfolio-marie-lindner.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group"
                >
                  {t.executiveSummary.cta}
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {t.executiveSummary.items.map((item, index) => {
                const Icon = icons[index];

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-gold-champagne/12 bg-charcoal/50 p-6"
                  >
                    <div className="mb-4 flex items-center gap-3 text-gold-champagne">
                      <Icon size={18} />
                      <span className="text-xs font-bold uppercase tracking-[0.22em]">
                        {item.title}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed text-steel/90 md:text-base">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}