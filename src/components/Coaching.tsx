import { motion } from 'motion/react';
import { UserCheck, ShieldAlert, Settings, ArrowRight } from 'lucide-react';

const offers = [
  {
    icon: ShieldAlert,
    title: "Executive Clarity Sprint",
    duration: "2–4 Weeks",
    for: "Senior Executives & Founders facing immediate strategic crossroads or high-stakes transitions.",
    changes: "Moves you from overwhelm and ambiguity to absolute operational and strategic certainty.",
    deliverables: [
      "Strategic 'Flight Path' Audit",
      "2x Intensive Strategy Sessions",
      "Immediate Action Protocol",
      "Decision Framework Implementation"
    ],
    outcomes: "Immediate clarity on high-priority decisions and a 90-day execution roadmap."
  },
  {
    icon: UserCheck,
    title: "C-Level Performance Partnership",
    duration: "3–6 Months",
    for: "Established C-Suite leaders looking to refine their command presence and team culture.",
    changes: "Elevates your leadership identity from 'manager' to 'authoritative presence'.",
    deliverables: [
      "Bi-weekly Private Coaching",
      "Leadership Presence Assessment",
      "Team Communication Protocols",
      "Unlimited Voxer/Email Support"
    ],
    outcomes: "Measurable increase in team trust, operational efficiency, and personal leadership authority."
  },
  {
    icon: Settings,
    title: "Founder Operating System",
    duration: "Ongoing",
    for: "High-growth founders who need a strategic sparring partner to scale without losing control.",
    changes: "Builds the internal systems and personal discipline required to lead a scaling organization.",
    deliverables: [
      "Monthly Strategic Review",
      "Operational Excellence Framework",
      "Stakeholder Management Strategy",
      "Quarterly On-site Intensive"
    ],
    outcomes: "A sustainable leadership model that allows the founder to work ON the business, not just IN it."
  }
];

export default function Coaching() {
  return (
    <section id="coaching" className="bg-obsidian py-24 md:py-32 relative overflow-hidden">
      {/* Decorative Altitude Lines */}
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold-champagne/10 to-transparent" />
      <div className="absolute right-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold-champagne/5 to-transparent" />
      
      <div className="section-container">
        <div className="grid lg:grid-cols-3 gap-16 mb-20">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold-champagne font-bold mb-4 block">
                Executive Coaching
              </span>
              <h2 className="text-4xl md:text-5xl heading-serif mb-8 leading-tight">
                Private Advisory for <span className="text-gold-champagne">High-Responsibility</span> Roles.
              </h2>
              <p className="text-steel font-light leading-relaxed mb-8">
                Coaching at this level isn't about 'motivation'. It's about precision, perspective, and the courage to make the right call when it matters most. Marie acts as your strategic co-pilot, ensuring your leadership remains steady through every turbulence.
              </p>
              <a href="#contact" className="btn-primary group">
                Request a Private Call
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-charcoal border border-gold-champagne/10 hover:border-gold-champagne/30 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="text-gold-champagne">
                      <offer.icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-serif italic text-pearl">{offer.title}</h3>
                  </div>
                  <div className="px-4 py-1 border border-gold-champagne/20 rounded-full text-[10px] uppercase tracking-widest text-gold-champagne font-bold">
                    {offer.duration}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="mb-6">
                      <h4 className="text-[10px] uppercase tracking-widest text-steel font-bold mb-2">Who it's for</h4>
                      <p className="text-sm text-pearl font-light leading-relaxed">{offer.for}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-[10px] uppercase tracking-widest text-steel font-bold mb-2">The Transformation</h4>
                      <p className="text-sm text-pearl font-light leading-relaxed">{offer.changes}</p>
                    </div>
                  </div>
                  
                  <div className="bg-obsidian/50 p-6 border-l-2 border-gold-champagne/30">
                    <h4 className="text-[10px] uppercase tracking-widest text-steel font-bold mb-4">Key Deliverables</h4>
                    <ul className="space-y-3">
                      {offer.deliverables.map((item) => (
                        <li key={item} className="text-xs text-steel flex items-center space-x-2">
                          <div className="w-1 h-1 bg-gold-champagne rounded-full" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-4 border-t border-gold-champagne/10">
                      <h4 className="text-[10px] uppercase tracking-widest text-gold-champagne font-bold mb-1">Primary Outcome</h4>
                      <p className="text-xs text-pearl italic">{offer.outcomes}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
