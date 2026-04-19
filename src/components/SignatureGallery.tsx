import { motion } from "motion/react";
import { useLanguage } from "../i18n";

const items = [
  {
    src: "/images/rotes-jacket-marie2.webp",
    alt: "Marie Lindner portrait",
    className: "md:col-span-7",
  },
  {
    src: "/images/flugzeug-marie.webp",
    alt: "Marie Lindner with aircraft",
    className: "md:col-span-5",
  },
  // ❌ about-marie.webp entfernt
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
      <div className="section-container">
        <motion.div className="mb-16 max-w-3xl">
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.34em] text-gold-champagne">
            {t.gallery.eyebrow}
          </span>
          <h2 className="heading-serif mb-6 text-3xl md:text-5xl">
            {t.gallery.title} <span className="text-gold-champagne">{t.gallery.highlight}</span>
          </h2>
          <p className="text-lg font-light leading-relaxed text-steel/90">
            {t.gallery.intro}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-12">
          {items.map((item) => (
            <div
              key={item.src}
              className={`${item.className} overflow-hidden rounded-[2rem] border border-gold-champagne/12 bg-charcoal/85`}
            >
              <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}