import { motion } from "motion/react";
import { ArrowUpRight, BriefcaseBusiness, CheckCircle2, FolderKanban } from "lucide-react";
import { useLanguage } from "../i18n";

export default function ConsultingProjects() {
  const { t } = useLanguage();

  return (
    <section id="value" className="relative overflow-hidden bg-charcoal py-24 md:py-32">
      <div className="section-container grid items-start gap-14 lg:grid-cols-[1.02fr_0.98fr] xl:gap-20">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.34em] text-gold-champagne">
            {t.value.eyebrow}
          </span>

          <h2 className="heading-serif mb-7 text-4xl leading-tight text-balance md:text-6xl">
            {t.value.title} <span className="text-gold-champagne">{t.value.highlight}</span>
          </h2>

          <p className="mb-8 max-w-2xl text-base font-light leading-relaxed text-steel/90 md:text-lg">
            {t.value.intro}
          </p>

          <div className="glass-card p-8 md:p-10">
            <div className="mb-5 text-[10px] font-bold uppercase tracking-[0.34em] text-gold-champagne">
              {t.value.gainsTitle}
            </div>

            <div className="grid gap-4">
              {t.value.gains.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-gold-champagne/10 bg-obsidian/55 px-4 py-4"
                >
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold-champagne" />
                  <span className="text-sm font-light leading-relaxed text-pearl/90 md:text-[15px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid gap-6"
        >
          {/* ✅ NEUES BILD (KEIN WEISSES KLEID) */}
          <div className="overflow-hidden rounded-[2rem] border border-gold-champagne/12 bg-obsidian/60">
            <img
              src="/images/rotes-jacket-marie1.webp"
              alt="Marie Lindner portrait"
              className="h-[420px] w-full object-cover object-[center_18%]"
              loading="lazy"
            />
          </div>

          <div className="glass-card p-8 md:p-10">
            <div className="mb-4 flex items-center gap-3 text-gold-champagne">
              <FolderKanban size={18} />
              <div className="text-[10px] font-bold uppercase tracking-[0.34em]">
                {t.value.projectTitle}
              </div>
            </div>

            <p className="text-sm font-light leading-relaxed text-steel/90 md:text-[15px]">
              {t.value.projectText}
            </p>
          </div>

          <div className="glass-card p-8 md:p-10">
            <div className="mb-4 flex items-center gap-3 text-gold-champagne">
              <BriefcaseBusiness size={18} />
              <div className="text-[10px] font-bold uppercase tracking-[0.34em]">
                {t.value.businessTitle}
              </div>
            </div>

            <p className="mb-6 text-sm font-light leading-relaxed text-steel/90 md:text-[15px]">
              {t.value.businessText}
            </p>

            <div className="border-t border-gold-champagne/10 pt-6">
              <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.34em] text-gold-champagne">
                {t.value.objectiveTitle}
              </div>
              <p className="mb-6 text-sm font-light leading-relaxed text-steel/90 md:text-[15px]">
                {t.value.objectiveText}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.24em] text-gold-champagne"
              >
                {t.contact.submit} <ArrowUpRight size={14} className="ml-2" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}