import { motion } from "motion/react";
import { useLanguage } from "../i18n";

const images = [
  {
    src: "/images/about-marie.webp",
    alt: "Marie Lindner portrait",
    width: 1067,
    height: 1600,
  },
  {
    src: "/images/beige-bluse-marie.webp",
    alt: "Marie Lindner in beige blouse",
    width: 1365,
    height: 2048,
  },
  {
    src: "/images/rotes-jacket-marie1.webp",
    alt: "Marie Lindner red blazer portrait",
    width: 1365,
    height: 2048,
  },
  {
    src: "/images/luxury-marie.webp",
    alt: "Marie Lindner professional portrait",
    width: 1200,
    height: 1600,
  },
  {
    src: "/images/hero-marie.webp",
    alt: "Marie Lindner leadership portrait",
    width: 1600,
    height: 1067,
  },
  {
    src: "/images/rotes-jacket-marie2.webp",
    alt: "Marie Lindner in red blazer",
    width: 2048,
    height: 1365,
  },
];

export default function SignatureGallery() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-24">
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
          <h2 className="heading-serif mb-6 text-3xl md:text-5xl">{t.gallery.title}</h2>

          <p className="text-lg font-light leading-relaxed text-steel/90">{t.gallery.text}</p>
        </motion.div>

        <div className="columns-1 space-y-8 gap-8 [column-fill:balance] sm:columns-2 xl:columns-3">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.04 }}
              viewport={{ once: true, margin: "-60px" }}
              className="break-inside-avoid"
            >
              <div className="overflow-hidden rounded-3xl border border-gold-champagne/15 bg-charcoal/85 shadow-xl transition-shadow duration-500 hover:shadow-2xl">
                <div className="w-full bg-obsidian/40" style={{ aspectRatio: `${img.width} / ${img.height}` }}>
                  <img src={img.src} alt={img.alt} className="h-full w-full object-cover" loading="lazy" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
