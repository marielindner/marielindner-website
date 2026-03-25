import { motion } from "motion/react";
import { ArrowRight, BriefcaseBusiness, MessageCircleMore, Mountain, Users } from "lucide-react";
import { useLanguage } from "../i18n";

const icons = [MessageCircleMore, Users, BriefcaseBusiness, Mountain];

export default function Coaching() {
  const { t } = useLanguage();

  return (
    <section id="coaching" className="relative overflow-hidden bg-obsidian py-24 md:py-32">
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold-champagne/10 to-transparent" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-gold-champagne/6 blur-[120px]" />

      <div className="section-container">
        <div className="mb-16 grid items-start gap-14 lg:grid-cols-[0.88fr_1.12fr] xl:gap-20">
          <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.34em] text-gold-champagne">
              {t.coaching.eyebrow}
            </span>

            <h2 className="heading-serif mb-8 text-4xl leading-tight text-balance md:text-6xl">
              {t.coaching.title} <span className="text-gold-champagne">{t.coaching.titleHighlight}</span>
            </h2>

            <p className="mb-7 text-base font-light leading-relaxed text-steel md:text-lg">{t.coaching.intro}</p>

            <p className="mb-10 font-light leading-relaxed text-steel/90">{t.coaching.text}</p>

            <a href="#contact" className="btn-primary group">
              {t.coaching.cta}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-gold-champagne/12">
              <img
                src="/images/beige-bluse-marie.webp"
                alt="Marie Lindner executive portrait"
                className="h-[520px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {t.coaching.offers.map((offer, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={offer.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="group rounded-[1.75rem] border border-gold-champagne/12 bg-charcoal p-8 transition-all duration-500 hover:border-gold-champagne/30"
                >
                  <div className="mb-6 text-gold-champagne">
                    <Icon size={30} strokeWidth={1.2} />
                  </div>

                  <h3 className="mb-3 text-2xl font-serif italic text-pearl">{offer.title}</h3>
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-gold-champagne">
                    {offer.subtitle}
                  </p>
                  <p className="text-sm font-light leading-relaxed text-steel/90 md:text-[15px]">{offer.text}</p>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="rounded-[1.75rem] border border-gold-champagne/12 bg-obsidian/70 p-8 md:col-span-2 md:p-10"
            >
              <div className="flex flex-col justify-between gap-6 md:flex-row">
                <div className="max-w-2xl">
                  <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.34em] text-gold-champagne">
                    {t.coaching.coreFocusEyebrow}
                  </div>
                  <h3 className="mb-5 text-3xl font-serif italic text-pearl md:text-4xl">{t.coaching.coreFocusTitle}</h3>
                  <p className="font-light leading-relaxed text-steel/90">{t.coaching.coreFocusText}</p>
                </div>

                <div className="rounded-2xl border border-gold-champagne/12 bg-charcoal/70 p-6 md:min-w-[220px]">
                  <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-steel/70">
                    {t.coaching.typicalClients}
                  </div>
                  <ul className="space-y-3">
                    {t.coaching.clientList.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm font-light text-pearl/90">
                        <div className="h-1.5 w-1.5 rounded-full bg-gold-champagne" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
