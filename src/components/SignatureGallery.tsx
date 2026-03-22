import { motion } from "motion/react";

const images = [
  {
    src: "/images/beige-bluse-marie.webp",
    alt: "Marie Lindner in beige blouse",
    label: "Executive Presence",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/cockpit-marie.webp",
    alt: "Marie Lindner in cockpit",
    label: "Aviation Background",
    className: "md:col-span-2",
  },
  {
    src: "/images/flugzeug-marie.webp",
    alt: "Marie Lindner with aircraft",
    label: "Commercial Pilot License",
    className: "md:col-span-2",
  },
  {
    src: "/images/hero-marie.webp",
    alt: "Marie Lindner portrait in lounge",
    label: "International Profile",
    className: "md:col-span-2",
  },
  {
    src: "/images/luxury-marie.webp",
    alt: "Marie Lindner seated in luxury setting",
    label: "Premium Client Work",
    className: "md:col-span-2",
  },
  {
    src: "/images/about-marie.webp",
    alt: "Marie Lindner seated portrait",
    label: "Coaching & Mentoring",
    className: "md:col-span-2",
  },
  {
    src: "/images/rotes-jacket-marie1.webp",
    alt: "Marie Lindner in red blouse",
    label: "Confident Communication",
    className: "md:col-span-2",
  },
  {
    src: "/images/rotes-jacket-marie2.webp",
    alt: "Marie Lindner in red blazer",
    label: "Leadership with Clarity",
    className: "md:col-span-2",
  },
];

export default function SignatureGallery() {
  return (
    <section className="py-12 md:py-20 bg-obsidian relative overflow-hidden">
      <div className="section-container pt-0 md:pt-0">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.34em] text-gold-champagne font-bold block mb-4">
              Visual Signature
            </span>
            <h2 className="text-3xl md:text-5xl heading-serif leading-tight text-balance">
              A leadership profile shaped by <span className="text-gold-champagne">business, aviation</span> and
              international perspective.
            </h2>
          </div>

          <p className="max-w-xl text-steel/85 font-light leading-relaxed text-sm md:text-base">
            This visual language matters: professional, composed, approachable and unmistakably high-standard. It
            reflects the way Marie works with clients across coaching, mentoring and selected consulting assignments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5 auto-rows-[220px] md:auto-rows-[180px]">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.04, duration: 0.5, ease: "easeOut" }}
              className={`group relative overflow-hidden rounded-[1.5rem] border border-gold-champagne/12 bg-charcoal ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/5 to-transparent" />
              <div className="absolute left-4 right-4 bottom-4">
                <div className="inline-flex rounded-full border border-gold-champagne/20 bg-obsidian/45 backdrop-blur-sm px-3 py-1.5">
                  <span className="text-[10px] uppercase tracking-[0.24em] text-gold-champagne font-bold">
                    {image.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}