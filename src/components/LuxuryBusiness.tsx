import { motion } from 'motion/react';
import { Sparkles, Layout, BarChart3, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: "Luxury Experience Design",
    description: "Curating high-end customer journeys that transcend the transactional. We design touchpoints that evoke emotion and build lifelong brand loyalty."
  },
  {
    icon: Layout,
    title: "Premium Brand Strategy",
    description: "Positioning your brand in the ultra-high-net-worth space. From visual identity to tone of voice, we ensure absolute alignment with luxury standards."
  },
  {
    icon: BarChart3,
    title: "Operational Luxury",
    description: "The 'invisible' systems that make luxury possible. We optimize the back-end operations to ensure the front-end experience is flawless."
  }
];

export default function LuxuryBusiness() {
  return (
    <section id="luxury" className="py-24 md:py-32 relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold-champagne font-bold mb-4 block">
              Luxury Operations & Strategy
            </span>
            <h2 className="text-4xl md:text-6xl heading-serif mb-8">
              Curating <span className="text-gold-champagne italic">Excellence.</span>
            </h2>
            <p className="text-steel font-light leading-relaxed mb-8 text-lg">
              Luxury is not an accident; it is the result of meticulous operational discipline and strategic restraint. Marie helps premium brands bridge the gap between high-level aesthetics and ground-level execution.
            </p>
            <div className="flex flex-wrap gap-4">
              {services.map((service) => (
                <div key={service.title} className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-pearl font-bold">
                  <service.icon size={14} className="text-gold-champagne" />
                  <span>{service.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video bg-charcoal border border-gold-champagne/10 relative overflow-hidden group">
              <img
                src="https://picsum.photos/seed/luxury/1200/800"
                alt="Luxury Experience"
                className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <div className="text-[10px] uppercase tracking-widest text-gold-champagne font-bold mb-2">Case Study Placeholder</div>
                <h3 className="text-2xl font-serif italic text-pearl">The Art of Operational Restraint</h3>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 border border-gold-champagne/10 hover:bg-charcoal/30 transition-all duration-500"
            >
              <div className="mb-6 text-gold-champagne">
                <service.icon size={32} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-serif italic text-pearl mb-4">{service.title}</h3>
              <p className="text-sm text-steel font-light leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="text-[10px] uppercase tracking-widest text-gold-champagne font-bold flex items-center group">
                Learn More <ArrowRight size={12} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Selected Work Placeholder */}
        <div className="mt-24 pt-12 border-t border-gold-champagne/10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <h3 className="text-3xl font-serif italic text-pearl mb-4">Selected Work</h3>
              <p className="text-steel font-light max-w-md">
                Due to the exclusive nature of our luxury partnerships, detailed case studies are available upon direct request for qualified inquiries.
              </p>
            </div>
            <a href="#contact" className="btn-secondary">
              Request Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
