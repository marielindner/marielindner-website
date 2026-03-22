import { motion } from "motion/react";
import { ArrowRight, Users, BriefcaseBusiness, Mountain, MessageCircleMore } from "lucide-react";

const offers = [
  {
    icon: MessageCircleMore,
    title: "1:1 Coaching",
    subtitle: "Individual support for leaders and decision-makers",
    text:
      "Highly focused coaching for leadership clarity, decision-making, role definition, communication and personal effectiveness — online or in person.",
  },
  {
    icon: Users,
    title: "Group Programs",
    subtitle: "Development in a small-group environment",
    text:
      "Curated small-group formats designed for reflection, growth and exchange around resilience, confidence, self-leadership and executive presence.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Workshops & Seminars",
    subtitle: "Targeted sessions for teams, networks and organizations",
    text:
      "Compact, high-value workshop formats on leadership, communication, mental strength and change — ideal for companies, communities and events.",
  },
  {
    icon: Mountain,
    title: "Exclusive Retreats",
    subtitle: "Immersive development formats in Europe",
    text:
      "Selected retreat concepts for deeper transformation and strategic clarity in inspiring settings such as Mallorca or Lake Constance.",
  },
];

export default function Coaching() {
  return (
    <section id="coaching" className="bg-obsidian py-24 md:py-32 relative overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold-champagne/10 to-transparent" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-gold-champagne/6 rounded-full blur-[120px]" />

      <div className="section-container">
        <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-14 xl:gap-20 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] uppercase tracking-[0.34em] text-gold-champagne font-bold mb-4 block">
              Coaching & Mentoring
            </span>

            <h2 className="text-4xl md:text-6xl heading-serif mb-8 leading-tight text-balance">
              Support for people carrying <span className="text-gold-champagne">real responsibility.</span>
            </h2>

            <p className="text-steel font-light leading-relaxed mb-7 text-base md:text-lg">
              Marie works with entrepreneurs, executives and ambitious individuals in moments that require clarity,
              resilience, strong communication and grounded decisions.
            </p>

            <p className="text-steel/90 font-light leading-relaxed mb-10">
              Her approach combines entrepreneurial experience, leadership reality and professional coaching methods.
              The work is structured, personal and outcome-oriented — designed to create clarity, confidence and
              sustainable development.
            </p>

            <a href="#contact" className="btn-primary group">
              Request Coaching Details
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="mt-10 rounded-[1.75rem] overflow-hidden border border-gold-champagne/12">
              <img
                src="/images/beige-bluse-marie.webp"
                alt="Marie Lindner executive portrait"
                className="w-full h-[520px] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group p-8 rounded-[1.75rem] bg-charcoal border border-gold-champagne/12 hover:border-gold-champagne/30 transition-all duration-500"
              >
                <div className="mb-6 text-gold-champagne">
                  <offer.icon size={30} strokeWidth={1.2} />
                </div>

                <h3 className="text-2xl font-serif italic text-pearl mb-3">{offer.title}</h3>
                <p className="text-[10px] uppercase tracking-[0.24em] text-gold-champagne font-bold mb-4">
                  {offer.subtitle}
                </p>
                <p className="text-sm md:text-[15px] text-steel/90 font-light leading-relaxed">{offer.text}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="md:col-span-2 rounded-[1.75rem] border border-gold-champagne/12 bg-obsidian/70 p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="text-[10px] uppercase tracking-[0.34em] text-gold-champagne font-bold mb-4">
                    Core Focus
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif italic text-pearl mb-5">
                    Leadership, decisions and sustainable change.
                  </h3>
                  <p className="text-steel/90 font-light leading-relaxed">
                    Whether the challenge is executive pressure, a strategic transition, a communication issue, or the
                    need for stronger self-leadership, the work centers on one thing: helping people move forward with
                    clarity and integrity.
                  </p>
                </div>

                <div className="md:min-w-[220px] rounded-2xl border border-gold-champagne/12 bg-charcoal/70 p-6">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-steel/70 font-bold mb-3">
                    Typical Clients
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Entrepreneurs",
                      "Executives",
                      "Managers",
                      "Founders",
                      "Ambitious individuals in transition",
                    ].map((item) => (
                      <li key={item} className="text-sm text-pearl/90 font-light flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-champagne" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}