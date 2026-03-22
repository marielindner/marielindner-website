import { motion } from "motion/react";
import { ArrowUpRight, Quote, Globe2 } from "lucide-react";

const testimonials = [
  {
    quote:
      "Marie Lindner consistently demonstrates exceptional professionalism in all her endeavors. She communicates clearly and effectively, showing a high level of articulation and education. Her intelligence and insight are evident, making her a standout in any professional setting. Marie is always eager to assist others and actively seeks out positive solutions. Her decision-making reflects maturity, and she thoughtfully processes information before taking action. This careful consideration ensures that her choices are well-informed and balanced. Marie approaches every situation with a friendly and upbeat demeanor. Her attitude fosters a collaborative and supportive environment, making her a pleasure to work with. Based on her professionalism, insight, and positive approach, I highly recommend Ms. Lindner for any project she wishes to pursue. She would be an asset to any team or initiative.",
    author: "Douglas Alexander",
    role: "Alexander Hospitality / Alexander by Design / New York",
  },
  {
    quote:
      "Marie Lindner embodies the rare combination of strategic discipline, leadership presence, and intellectual clarity that defines true executive authority in today’s complex world.",
    author: "Nina Vélez-Troya Anquela",
    role: "President & CEO, Founder of NVT Exquisite Business Club",
  },
];

export default function SocialProof() {
  return (
    <section id="references" className="py-24 md:py-32 bg-obsidian relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-champagne/6 rounded-full blur-[120px]" />

      <div className="section-container">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 xl:gap-20 items-start mb-16">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-[10px] uppercase tracking-[0.34em] text-gold-champagne font-bold mb-4 block">
                References & Features
              </span>
              <h2 className="text-4xl md:text-5xl heading-serif mb-8">
                Credibility built through <span className="text-gold-champagne">real words and real work.</span>
              </h2>
              <p className="text-steel font-light leading-relaxed text-base md:text-lg max-w-2xl">
                The positioning is deliberate: no inflated claims, no borrowed prestige. Just a clear profile, selected
                references and a body of work that connects leadership, coaching, communication and international
                perspective.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[2rem] overflow-hidden border border-gold-champagne/12"
          >
            <img
              src="/images/hero-marie.webp"
              alt="Marie Lindner portrait"
              className="w-full h-[420px] object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-8 md:p-10 bg-charcoal/35 border border-gold-champagne/10 relative rounded-[1.75rem]"
            >
              <Quote size={40} className="text-gold-champagne/15 absolute top-6 right-6" />
              <p className="text-pearl/92 font-light italic leading-relaxed mb-8 relative z-10 text-sm md:text-[15px]">
                “{t.quote}”
              </p>
              <div className="pt-6 border-t border-gold-champagne/10">
                <div className="text-gold-champagne font-serif italic text-xl">{t.author}</div>
                <div className="text-[10px] uppercase tracking-widest text-steel font-bold mt-1">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.a
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href="https://lnkd.in/dX-EtYpw"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[1.75rem] border border-gold-champagne/12 bg-charcoal/40 p-8 hover:border-gold-champagne/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 text-gold-champagne mb-4">
              <Globe2 size={18} />
              <span className="text-[10px] uppercase tracking-[0.28em] font-bold">Featured Interview</span>
            </div>
            <h3 className="text-2xl font-serif italic text-pearl mb-4 group-hover:text-gold-champagne transition-colors">
              Interview with Nina Vélez-Troya Anquela
            </h3>
            <p className="text-steel/90 font-light leading-relaxed mb-5">
              Direct link to the published interview feature referenced by Marie.
            </p>
            <span className="inline-flex items-center text-[10px] uppercase tracking-[0.22em] text-gold-champagne font-bold">
              Open Feature <ArrowUpRight size={14} className="ml-2" />
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
            className="group rounded-[1.75rem] border border-gold-champagne/12 bg-charcoal/40 p-8 hover:border-gold-champagne/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 text-gold-champagne mb-4">
              <Globe2 size={18} />
              <span className="text-[10px] uppercase tracking-[0.28em] font-bold">Editorial Feature</span>
            </div>
            <h3 className="text-2xl font-serif italic text-pearl mb-4 group-hover:text-gold-champagne transition-colors">
              Marie Lindner — A Self-Made Leader
            </h3>
            <p className="text-steel/90 font-light leading-relaxed mb-5">
              External article spotlighting Marie’s story, perspective and leadership journey.
            </p>
            <span className="inline-flex items-center text-[10px] uppercase tracking-[0.22em] text-gold-champagne font-bold">
              Read Article <ArrowUpRight size={14} className="ml-2" />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}