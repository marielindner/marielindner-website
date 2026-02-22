import { motion } from 'motion/react';
import { Award, Briefcase, Globe2, Plane, ShieldCheck, Zap } from 'lucide-react';

const highlights = [
  "Founder & CEO of Marie Lindner Consulting",
  "Commercial Pilot License (CPL) - Australia",
  "Expert in High-Reliability Team Dynamics",
  "Operational Leadership in Flight Ops & Airport Turnaround",
  "Specialist in Luxury Brand Strategy & Execution",
  "Fluent in English & German (International Background)",
  "Proven track record in Budgeting & Cost Control",
  "Strategic Facilitator for C-Level Executives"
];

const altitudeSteps = [
  {
    name: "A - AUDIT",
    desc: "A comprehensive scan of your current operational altitude and strategic heading."
  },
  {
    name: "L - LINE UP",
    desc: "Aligning your leadership identity with the mission-critical objectives of the organization."
  },
  {
    name: "T - THRUST",
    desc: "Executing with precision and power to overcome inertia and achieve strategic lift."
  },
  {
    name: "I - INSTRUMENT",
    desc: "Implementing the data-driven systems required to maintain course through turbulence."
  },
  {
    name: "T - TERMINATE",
    desc: "Closing the gap between vision and reality with absolute operational finality."
  }
];

export default function About() {
  return (
    <section id="about" className="bg-charcoal py-24 md:py-32 relative overflow-hidden">
      {/* Decorative Flight Path */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" viewBox="0 0 1000 1000">
        <path d="M0,500 Q250,400 500,500 T1000,500" fill="none" stroke="#B08D57" strokeWidth="1" strokeDasharray="10,10" />
      </svg>

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold-champagne font-bold mb-4 block">
              About Marie Lindner
            </span>
            <h2 className="text-4xl md:text-5xl heading-serif mb-8 leading-tight">
              The Intersection of <span className="text-gold-champagne">Precision</span> and <span className="text-gold-champagne">Power.</span>
            </h2>
            <div className="space-y-6 text-steel font-light leading-relaxed text-lg">
              <p>
                Marie Lindner is a strategist, facilitator, and commercial pilot who helps high-performance leaders navigate the complexities of modern business with the same discipline required in the cockpit.
              </p>
              <p>
                With a background in operational leadership—ranging from flight operations to airport turnaround processes—she understands that excellence is not a feeling, but a series of meticulously executed protocols.
              </p>
              <p>
                Based in Germany and trained in Australia, Marie brings a truly international perspective to her work, bridging the gap between technical operational excellence and high-level strategic foresight.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-obsidian border border-gold-champagne/20 rounded-lg text-gold-champagne">
                  <Plane size={24} strokeWidth={1} />
                </div>
                <div>
                  <div className="text-xl font-serif italic text-pearl">CPL</div>
                  <div className="text-[8px] uppercase tracking-widest text-steel">Pilot License</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-obsidian border border-gold-champagne/20 rounded-lg text-gold-champagne">
                  <Globe2 size={24} strokeWidth={1} />
                </div>
                <div>
                  <div className="text-xl font-serif italic text-pearl">Global</div>
                  <div className="text-[8px] uppercase tracking-widest text-steel">Presence</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-obsidian p-8 md:p-12 border border-gold-champagne/20 relative"
          >
            <h3 className="text-2xl font-serif italic text-pearl mb-8">Professional Highlights</h3>
            <ul className="space-y-4 mb-12">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start space-x-3 group">
                  <ShieldCheck size={18} className="text-gold-champagne mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-steel font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-gold-champagne/10">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold-champagne font-bold mb-6">
                The ALTITUDE Framework™
              </h4>
              <div className="space-y-6">
                {altitudeSteps.map((step, index) => (
                  <div key={index} className="relative pl-8 border-l border-gold-champagne/20">
                    <div className="absolute left-[-5px] top-0 w-2 h-2 bg-gold-champagne rounded-full" />
                    <div className="text-xs font-serif italic text-pearl mb-1">{step.name}</div>
                    <p className="text-[10px] text-steel leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
