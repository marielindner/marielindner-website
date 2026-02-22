import { motion } from 'motion/react';
import { Download, CheckCircle2, ArrowUpRight } from 'lucide-react';

const keynotes = [
  {
    title: "Leadership Under Pressure",
    subtitle: "Aviation Decision-Making for Executives",
    outcomes: [
      "Master the 'Aviate, Navigate, Communicate' framework for business crisis.",
      "Reduce decision fatigue through cockpit-inspired protocols.",
      "Build psychological safety in high-stakes teams."
    ]
  },
  {
    title: "Precision & Presence",
    subtitle: "How High Performers Lead",
    outcomes: [
      "Develop a 'Command Presence' that commands respect without force.",
      "Align operational precision with visionary leadership.",
      "The art of the 'Pre-Flight' briefing for strategic success."
    ]
  },
  {
    title: "Women in High-Stakes Leadership",
    subtitle: "Navigating the Glass Ceiling at Mach 1",
    outcomes: [
      "Leveraging unique strengths in male-dominated high-performance fields.",
      "Strategies for absolute clarity and confidence in the boardroom.",
      "Building a legacy of excellence and authority."
    ]
  },
  {
    title: "High-Reliability Teams",
    subtitle: "Operational Excellence & Zero-Error Culture",
    outcomes: [
      "Implementing Crew Resource Management (CRM) in corporate structures.",
      "Eliminating silos through standardized communication.",
      "Transforming mistakes into institutional intelligence."
    ]
  },
  {
    title: "The Clarity Advantage",
    subtitle: "Strategy, Focus, Execution",
    outcomes: [
      "Cutting through the noise to find the 'True North' of your strategy.",
      "The discipline of focus in an era of hyper-distraction.",
      "Bridging the gap between high-level vision and ground-level execution."
    ]
  },
  {
    title: "Luxury-Level Client Experience",
    subtitle: "Brand Discipline for Premium Markets",
    outcomes: [
      "Curating experiences that transcend the transactional.",
      "The operational excellence behind world-class luxury brands.",
      "Maintaining brand integrity through meticulous detail."
    ]
  }
];

export default function Speaking() {
  return (
    <section id="speaking" className="py-24 md:py-32 relative">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold-champagne font-bold mb-4 block">
              Keynotes & Speaking
            </span>
            <h2 className="text-4xl md:text-6xl heading-serif mb-8">
              Command the Stage. <span className="text-gold-champagne">Inspire the Mission.</span>
            </h2>
            <p className="text-steel font-light leading-relaxed">
              Marie delivers high-impact keynotes that merge the thrill of aviation with the cold reality of business strategy. Her sessions are designed for leaders who demand more than inspiration—they demand actionable precision.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {keynotes.map((keynote, index) => (
            <motion.div
              key={keynote.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-charcoal/50 border border-gold-champagne/10 hover:border-gold-champagne/40 transition-all duration-500 flex flex-col h-full"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-serif italic text-pearl mb-2 group-hover:text-gold-champagne transition-colors">
                  {keynote.title}
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-gold-champagne font-bold">
                  {keynote.subtitle}
                </p>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                {keynote.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-start space-x-3">
                    <CheckCircle2 size={16} className="text-gold-champagne mt-0.5 shrink-0" />
                    <p className="text-xs text-steel leading-relaxed">{outcome}</p>
                  </div>
                ))}
              </div>

              <a href="#contact" className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] text-pearl group-hover:text-gold-champagne transition-colors font-bold">
                Inquire for Speaking <ArrowUpRight size={14} className="ml-2" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Speaker Kit Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-charcoal to-obsidian border border-gold-champagne/20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-champagne/5 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <div className="relative z-10">
            <h3 className="text-3xl font-serif italic text-pearl mb-4">Ready to Book Marie?</h3>
            <p className="text-steel font-light max-w-md">
              Download the comprehensive Speaker Kit including bio, headshots, and technical requirements for your event.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <button className="btn-primary group">
              <Download className="mr-2 w-4 h-4" />
              Download Speaker Kit
            </button>
            <a href="#contact" className="btn-secondary">
              Check Availability
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
