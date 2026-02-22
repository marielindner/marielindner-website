import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Marie's ability to cut through strategic noise is unparalleled. Her aviation background brings a level of discipline to our leadership team that we simply couldn't find elsewhere.",
    author: "CEO, Global Logistics Firm",
    role: "Strategic Advisory Client"
  },
  {
    quote: "The 'Leadership Under Pressure' keynote was the highlight of our executive retreat. Actionable, precise, and incredibly powerful. Marie commands the room with absolute authority.",
    author: "VP of Operations",
    role: "Fortune 500 Tech Company"
  },
  {
    quote: "Working with Marie on our luxury brand strategy transformed how we view our operations. She showed us that luxury isn't just an aesthetic—it's an operational commitment.",
    author: "Founder",
    role: "European Luxury Boutique"
  }
];

export default function SocialProof() {
  return (
    <section className="py-24 md:py-32 bg-obsidian relative">
      <div className="section-container">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold-champagne font-bold mb-4 block">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl heading-serif mb-8">
              Trusted by <span className="text-gold-champagne">Elite Leaders.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-charcoal/30 border border-gold-champagne/10 relative group"
            >
              <Quote size={40} className="text-gold-champagne/10 absolute top-6 right-6 group-hover:text-gold-champagne/20 transition-colors" />
              <p className="text-pearl font-light italic leading-relaxed mb-8 relative z-10">
                "{t.quote}"
              </p>
              <div className="pt-6 border-t border-gold-champagne/10">
                <div className="text-gold-champagne font-serif italic text-lg">{t.author}</div>
                <div className="text-[10px] uppercase tracking-widest text-steel font-bold">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured In Strip */}
        <div className="mt-24 pt-12 border-t border-gold-champagne/10 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-steel/60 mb-12 font-bold">
            As Featured In & Trusted By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale">
            {/* Placeholders for logos */}
            <div className="text-2xl font-serif italic tracking-tighter">FORBES</div>
            <div className="text-2xl font-serif italic tracking-tighter">HBR</div>
            <div className="text-2xl font-serif italic tracking-tighter">VOGUE</div>
            <div className="text-2xl font-serif italic tracking-tighter">WIRED</div>
            <div className="text-2xl font-serif italic tracking-tighter">MONOCLE</div>
          </div>
        </div>
      </div>
    </section>
  );
}
