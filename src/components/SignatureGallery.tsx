import { motion } from "motion/react";
import { useLanguage } from "../i18n";

const items = [
  {
    src: "/images/hero-marie.webp",
    alt: "Marie Lindner seated portrait",
    className: "md:col-span-7",
  },
  {
    src: "/images/flugzeug-marie.webp",
    alt: "Marie Lindner with aircraft",
    className: "md:col-span-5",
  },
  {
    src: "/images/about-marie.webp",
    alt: "Marie Lindner smiling portrait",
    className: "md:col-span-4",
  },
  {
    src: "/images/rotes-jacket-marie1.webp",
    alt: "Marie Lindner in red blazer",
    className: "md:col-span-4",
  },
  {
    src: "/images/cockpit-marie.webp",
    alt: "Marie Lindner in cockpit",
    className: "md:col-span-4",
  },
];

export default function SignatureGallery() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gold-champagne/8 blur-[160px]" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.34em] text-gold-champagne">{t.gallery.eyebrow}</span>
          <h2 className="heading-serif mb-6 text-3xl md:text-5xl">
            {t.gallery.title} <span className="text-gold-champagne">{t.gallery.highlight}</span>
          </h2>
          <p className="text-lg font-light leading-relaxed text-steel/90">{t.gallery.intro}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-12">
          {items.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-60px" }}
              className={`${item.className} overflow-hidden rounded-[2rem] border border-gold-champagne/12 bg-charcoal/85`}
            >
              <img src={item.src} alt={item.alt} className="h-full w-full object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {t.gallery.items.map((item) => (
            <div key={item.title} className="glass-card p-6 md:p-7">
              <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-gold-champagne">{item.title}</div>
              <p className="text-sm font-light leading-relaxed text-steel/90">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
