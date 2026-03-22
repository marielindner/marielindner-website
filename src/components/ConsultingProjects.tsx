import { motion } from "motion/react";
import { Globe2, ArrowRight, FolderKanban, Users2, ShieldCheck } from "lucide-react";

const consultingAreas = [
  {
    icon: FolderKanban,
    title: "Project-Based Consulting",
    description:
      "Marie contributes to selected consulting assignments where structure, coordination, communication and disciplined delivery are essential.",
  },
  {
    icon: Globe2,
    title: "International Scope",
    description:
      "Her consulting work is positioned internationally and undertaken on a project basis, with discretion and clarity around scope and responsibilities.",
  },
  {
    icon: Users2,
    title: "Executive Collaboration",
    description:
      "She supports founders, leadership teams and stakeholders in aligning priorities, improving execution and moving projects forward with confidence.",
  },
];

export default function ConsultingProjects() {
  return (
    <section id="consulting" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-champagne/8 rounded-full blur-[140px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold-champagne/8 rounded-full blur-[140px]" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-14 xl:gap-20 items-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-[10px] uppercase tracking-[0.34em] text-gold-champagne font-bold mb-4 block">
              Consulting
            </span>

            <h2 className="text-4xl md:text-6xl heading-serif mb-7 leading-tight text-balance">
              Selected international work —
              <br className="hidden md:block" />
              <span className="text-gold-champagne italic">project-based and precise.</span>
            </h2>

            <p className="text-steel/90 font-light leading-relaxed mb-7 text-base md:text-lg max-w-2xl">
              In addition to coaching and mentoring, Marie Lindner takes on selected consulting assignments with an
              international orientation. This work is positioned clearly as project-based, confidential and execution
              focused.
            </p>

            <div className="rounded-2xl border border-gold-champagne/15 bg-charcoal/70 p-6 mb-8 max-w-2xl">
              <div className="flex items-center gap-3 text-gold-champagne mb-3">
                <ShieldCheck size={18} />
                <span className="text-[10px] uppercase tracking-[0.28em] font-bold">
                  Current Engagement
                </span>
              </div>
              <p className="text-sm md:text-[15px] text-pearl/90 font-light leading-relaxed">
                Marie is currently involved in an international IT project. Details remain confidential, but the work
                reflects the kind of high-responsibility, cross-functional, international assignments she selectively
                supports.
              </p>
            </div>

            <a href="#contact" className="btn-secondary inline-flex items-center">
              Inquire About Consulting
              <ArrowRight size={14} className="ml-2" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.975 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-gold-champagne/15 bg-charcoal">
              <div className="aspect-[4/5] relative">
                <img
                  src="/images/luxury-marie.webp"
                  alt="Marie Lindner in premium setting"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/25 to-transparent" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-gold-champagne/15 bg-obsidian/45 backdrop-blur-sm p-5">
                <div className="text-[10px] uppercase tracking-[0.28em] text-gold-champagne font-bold mb-2">
                  Consulting Positioning
                </div>
                <p className="text-sm text-pearl/90 font-light leading-relaxed">
                  International, selective and project-based — built for organizations that value discretion, structure
                  and mature collaboration.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {consultingAreas.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
              className="p-8 rounded-2xl border border-gold-champagne/12 bg-obsidian/40 hover:bg-obsidian/55 transition-all duration-500"
            >
              <div className="mb-6 text-gold-champagne">
                <item.icon size={34} strokeWidth={1.1} />
              </div>

              <h3 className="text-xl font-serif italic text-pearl mb-4">{item.title}</h3>
              <p className="text-sm text-steel/90 font-light leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}