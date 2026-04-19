import { motion } from "motion/react";

export default function ExperienceTimeline() {
  return (
    <section className="relative overflow-hidden bg-obsidian py-24 md:py-32">
      <div className="section-container grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="glass-card overflow-hidden">
            <img
              src="/images/rotes-jacket-marie2.webp"
              alt="Marie Lindner executive portrait"
              className="h-[520px] w-full object-cover object-[center_18%]"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-10"
        >
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.34em] text-gold-champagne">
            International Story
          </div>
          <h3 className="heading-serif mb-6 text-3xl text-pearl md:text-5xl">
            Dresden. Melbourne. Sydney. Business.
          </h3>
          <div className="space-y-4 text-sm font-light leading-relaxed text-steel/90 md:text-[15px]">
            <p>
              Persönliche Auslands- und Aviation-Erfahrung treffen hier auf unternehmerische Praxis und
              interkulturelle Beratung.
            </p>
            <p>
              Die Seite baut diese Geschichte bewusst emotional auf: nicht als Lifestyle, sondern als
              glaubwürdige Verbindung von Haltung, Erfahrung und praktischer Relevanz im internationalen
              Geschäft.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}