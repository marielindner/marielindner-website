import { motion } from "motion/react";
import { ArrowUpRight, Globe2, Quote } from "lucide-react";
import { useLanguage } from "../i18n";

export default function SocialProof() {
  const { t } = useLanguage();

  return (
    <section id="references" className="relative overflow-hidden py-24 md:py-32">
      <div className="section-container">
        <div className="mb-14 grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.34em] text-gold-champagne">
                {t.socialProof.eyebrow}
              </span>

              <h2 className="heading-serif mb-7 text-4xl leading-tight text-balance md:text-6xl">
                {t.socialProof.title} <span className="text-gold-champagne">{t.socialProof.titleHighlight}</span>
              </h2>

              <p className="text-base font-light leading-relaxed text-steel/90 md:text-lg">{t.socialProof.intro}</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[2rem] border border-gold-champagne/12"
          >
            <img
              src="/images/hero-marie.webp"
              alt="Marie Lindner portrait"
              className="h-[420px] w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          {t.socialProof.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.quote}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative rounded-[1.75rem] border border-gold-champagne/10 bg-charcoal/35 p-8 md:p-10"
            >
              <Quote size={40} className="absolute right-6 top-6 text-gold-champagne/15" />
              <p className="relative z-10 mb-8 text-sm font-light italic leading-relaxed text-pearl/92 md:text-[15px]">
                “{testimonial.quote}”
              </p>
              <div className="border-t border-gold-champagne/10 pt-6">
                <div className="text-xl font-serif italic text-gold-champagne">{testimonial.author}</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-steel">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.a
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href="https://lnkd.in/dX-EtYpw"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[1.75rem] border border-gold-champagne/12 bg-charcoal/40 p-8 transition-all duration-300 hover:border-gold-champagne/30"
          >
            <div className="mb-4 flex items-center gap-3 text-gold-champagne">
              <Globe2 size={18} />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em]">{t.socialProof.featuredInterview}</span>
            </div>
            <h3 className="mb-4 text-2xl font-serif italic text-pearl transition-colors group-hover:text-gold-champagne">
              {t.socialProof.featuredInterviewTitle}
            </h3>
            <p className="mb-5 font-light leading-relaxed text-steel/90">{t.socialProof.featuredInterviewText}</p>
            <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.22em] text-gold-champagne">
              {t.socialProof.featuredInterviewCta} <ArrowUpRight size={14} className="ml-2" />
            </span>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            href="https://redivory.org/marie-lidner-a-self-made-leader"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[1.75rem] border border-gold-champagne/12 bg-charcoal/40 p-8 transition-all duration-300 hover:border-gold-champagne/30"
          >
            <div className="mb-4 flex items-center gap-3 text-gold-champagne">
              <Globe2 size={18} />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em]">{t.socialProof.editorialFeature}</span>
            </div>
            <h3 className="mb-4 text-2xl font-serif italic text-pearl transition-colors group-hover:text-gold-champagne">
              {t.socialProof.editorialFeatureTitle}
            </h3>
            <p className="mb-5 font-light leading-relaxed text-steel/90">{t.socialProof.editorialFeatureText}</p>
            <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.22em] text-gold-champagne">
              {t.socialProof.editorialFeatureCta} <ArrowUpRight size={14} className="ml-2" />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
