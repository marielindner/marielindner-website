import { motion } from 'motion/react';
import { Compass, Target, Shield, Globe } from 'lucide-react';

const differentiators = [
  {
    icon: Compass,
    title: "Aviation Discipline",
    description: "Holding a Commercial Pilot License (CPL) from Australia, Marie applies flight-deck protocols to business strategy—ensuring every move is calculated and every risk is mitigated."
  },
  {
    icon: Target,
    title: "Precision Execution",
    description: "From airport turnaround processes to C-level reporting, her background in operational leadership means she doesn't just plan; she executes with surgical accuracy."
  },
  {
    icon: Shield,
    title: "Decision Under Pressure",
    description: "Trained to lead in high-stakes environments where hesitation is not an option. She facilitates clarity when the stakes are at their highest."
  },
  {
    icon: Globe,
    title: "International Presence",
    description: "Based in Germany with deep roots in Australia, she bridges cultures and markets, offering a truly global perspective on high-performance leadership."
  }
];

export default function Differentiator() {
  return (
    <section className="bg-charcoal relative py-24 md:py-32 overflow-hidden">
      {/* Horizon Line Motif */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-champagne/20 to-transparent" />
      
      <div className="section-container">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold-champagne font-bold mb-4 block">
                The Differentiator
              </span>
              <h2 className="text-4xl md:text-5xl heading-serif mb-8 leading-tight">
                From the Flight Deck to the <span className="text-gold-champagne">Boardroom.</span>
              </h2>
              <p className="text-steel font-light leading-relaxed mb-8">
                The transition from a Commercial Pilot to a Business Strategist isn't just a career change—it's the evolution of a high-performance identity. Marie Lindner brings the uncompromising standards of aviation to the world of executive consulting.
              </p>
              <div className="aviation-line mb-8" />
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-serif italic text-gold-champagne">CPL</div>
                <div className="text-[10px] uppercase tracking-widest text-steel leading-tight">
                  Commercial Pilot License<br />Australia
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 border border-gold-champagne/10 hover:border-gold-champagne/30 transition-all duration-500 group"
              >
                <div className="mb-6 text-gold-champagne group-hover:scale-110 transition-transform duration-500">
                  <item.icon size={32} strokeWidth={1} />
                </div>
                <h3 className="text-xl font-serif italic mb-4 text-pearl">
                  {item.title}
                </h3>
                <p className="text-sm text-steel font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
