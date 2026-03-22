import { motion } from "motion/react";

type Experience = {
  period: string;
  title: string;
  description: string;
};

const experiences: Experience[] = [
  {
    period: "Entrepreneurial Foundation",
    title: "Startup build-up, operational responsibility and leadership practice",
    description:
      "Marie was deeply involved in building and helping lead a startup environment, gaining practical experience across management, organization, strategic planning, communication and execution.",
  },
  {
    period: "Coaching Development",
    title: "Professional coaching direction with leadership focus",
    description:
      "Alongside entrepreneurial work, she deepened her coaching expertise in leadership, communication, resilience and personal development — shaping the methodical side of her work today.",
  },
  {
    period: "Aviation Background",
    title: "Commercial pilot training in Australia",
    description:
      "Her Diploma in Applied Science – Aviation and Commercial Pilot License required concentration, responsibility, procedural discipline and decision certainty under pressure.",
  },
  {
    period: "Today",
    title: "Coaching, mentoring and selected international consulting work",
    description:
      "Today, Marie supports entrepreneurs, executives and ambitious individuals through coaching and mentoring, while also contributing to selected project-based international assignments.",
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-champagne/8 rounded-full blur-[140px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold-champagne/8 rounded-full blur-[140px]" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto mb-16 md:mb-20 text-center">
          <span className="text-[10px] uppercase tracking-[0.42em] text-gold-champagne font-bold block mb-4">
            Professional Story
          </span>

          <h2 className="text-4xl md:text-6xl heading-serif leading-tight text-balance">
            A path built through <span className="text-gold-champagne italic">responsibility, growth and range</span>.
          </h2>

          <p className="mt-6 text-steel/90 font-light leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
            Marie’s work today stands on several foundations: entrepreneurial practice, leadership responsibility,
            coaching development and an aviation background that shaped her standards for clarity, discipline and sound
            judgment.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-8 md:gap-10">
          {experiences.map((item, index) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
              className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-10 items-start rounded-[1.75rem] border border-gold-champagne/12 bg-obsidian/50 p-8 md:p-10"
            >
              <div>
                <div className="text-gold-champagne text-xs uppercase tracking-[0.24em] font-semibold">
                  {item.period}
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-serif italic text-pearl mb-4">{item.title}</h3>
                <p className="text-sm md:text-[15px] text-steel/90 font-light leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}