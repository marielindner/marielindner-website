import { motion } from 'motion/react';
import { ArrowRight, Plane, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Motifs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gold-champagne/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-gold-champagne/5 rounded-full blur-[120px]" />
        
        {/* Runway Lines */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-64 bg-gradient-to-t from-gold-champagne/40 to-transparent" />
        <div className="absolute bottom-0 left-[48%] -translate-x-1/2 w-px h-48 bg-gradient-to-t from-gold-champagne/20 to-transparent" />
        <div className="absolute bottom-0 left-[52%] -translate-x-1/2 w-px h-48 bg-gradient-to-t from-gold-champagne/20 to-transparent" />
      </div>

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-px w-8 bg-gold-champagne" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold-champagne font-bold">
              Aviation Precision • Executive Authority
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl heading-serif mb-8 leading-[1.1] text-balance">
            Precision in <span className="text-gold-champagne">Command.</span><br />
            Clarity in <span className="text-gold-champagne">Strategy.</span>
          </h1>

          <p className="text-lg md:text-xl text-steel mb-12 max-w-xl leading-relaxed font-light">
            Merging the high-stakes discipline of a commercial pilot with the strategic foresight of a global business consultant. I help high-performance women and executive teams navigate complexity with absolute presence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#speaking" className="btn-primary group">
              Book a Keynote
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#coaching" className="btn-secondary">
              Executive Coaching
            </a>
          </div>

          {/* Trust Markers */}
          <div className="pt-8 border-t border-gold-champagne/10">
            <p className="text-[10px] uppercase tracking-widest text-steel/60 mb-6 font-semibold">
              Trusted by High-Stakes Leaders
            </p>
            <div className="flex flex-wrap gap-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center space-x-2">
                <ShieldCheck size={20} />
                <span className="font-serif text-sm">Aviation Elite</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap size={20} />
                <span className="font-serif text-sm">Global Strategy</span>
              </div>
              <div className="flex items-center space-x-2">
                <Plane size={20} />
                <span className="font-serif text-sm">High-Performance</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
            <img
              src="https://picsum.photos/seed/marie-lindner/800/1000"
              alt="Marie Lindner"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
            
            {/* Decorative Elements */}
            <div className="absolute top-8 right-8 border border-gold-champagne/30 p-4 backdrop-blur-sm">
              <div className="text-gold-champagne text-xs tracking-widest uppercase mb-1">Status</div>
              <div className="text-pearl text-lg font-serif italic">Clear for Takeoff</div>
            </div>
          </div>
          
          {/* Floating Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute -bottom-8 -left-8 bg-charcoal border border-gold-champagne/20 p-8 shadow-2xl max-w-xs"
          >
            <div className="text-gold-champagne mb-4">
              <Plane size={32} strokeWidth={1} />
            </div>
            <p className="text-sm text-pearl font-light leading-relaxed italic">
              "In the cockpit, clarity isn't a luxury—it's a survival requirement. I bring that same non-negotiable precision to your boardroom."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
