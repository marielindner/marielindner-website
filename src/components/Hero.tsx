import { motion } from "motion/react";
import { ArrowRight, Plane, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden">
      {/* Mobile/Tablet Cinematic Background */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-marie.jpg')" }}
        />
        {/* Premium overlays */}
        <div className="absolute inset-0 bg-obsidian/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/70 to-obsidian" />
        {/* Subtle gold glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold-champagne/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-gold-champagne/10 rounded-full blur-[120px]" />
      </div>

      {/* Desktop Background Motifs */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <div className="absolute top-1/4 -right-24 w-[32rem] h-[32rem] bg-gold-champagne/6 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -left-24 w-[32rem] h-[32rem] bg-gold-champagne/6 rounded-full blur-[140px]" />

        {/* Runway Lines */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-72 bg-gradient-to-t from-gold-champagne/40 to-transparent" />
        <div className="absolute bottom-0 left-[48%] -translate-x-1/2 w-px h-56 bg-gradient-to-t from-gold-champagne/20 to-transparent" />
        <div className="absolute bottom-0 left-[52%] -translate-x-1/2 w-px h-56 bg-gradient-to-t from-gold-champagne/20 to-transparent" />

        {/* Horizon line */}
        <div className="absolute top-28 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-champagne/15 to-transparent" />
      </div>

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-14 xl:gap-20 items-center min-h-[calc(100vh-5rem)]">
        {/* LEFT: Copy */}
        <motion.div
          initial={{ opacity: 0, x: -26 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="py-8 lg:py-0"
        >
          {/* HERO SIGNATURE (Logo + Line) */}
          <div className="mb-7 flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-gold-champagne/20 bg-obsidian/40 backdrop-blur-sm px-3 py-2 shadow-lg shadow-gold-champagne/10">
                <img
                  src="/logo-ml-consulting.jpg"
                  alt="Marie Lindner Consulting"
                  className="h-8 md:h-9 w-auto object-contain"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="hidden sm:block leading-tight">
                <div className="text-pearl font-serif italic text-base md:text-lg">
                  Marie Lindner
                </div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-steel/70">
                  Consulting UG
                </div>
              </div>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-gold-champagne/60 to-transparent" />
          </div>

          {/* Eyebrow */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-px w-8 bg-gold-champagne" />
            <span className="text-[10px] uppercase tracking-[0.42em] text-gold-champagne font-bold">
              Aviation Precision • Executive Authority • Luxury Discipline
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl heading-serif mb-7 leading-[1.06] text-balance">
            Lead with <span className="text-gold-champagne">Presence</span>.
            <br />
            Execute with <span className="text-gold-champagne">Precision</span>.
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-xl text-steel/90 mb-10 max-w-xl leading-relaxed font-light">
            From the cockpit to the boardroom — Marie Lindner helps C-level leaders, founders and premium brands cut
            through complexity, align strategy, and deliver decisive outcomes with calm authority.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#speaking" className="btn-primary group">
              Book a Keynote
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#coaching" className="btn-secondary">
              Executive Coaching
            </a>
          </div>

          {/* Trust markers */}
          <div className="pt-7 border-t border-gold-champagne/12">
            <p className="text-[10px] uppercase tracking-widest text-steel/60 mb-5 font-semibold">
              Trusted by High-Stakes Leaders
            </p>
            <div className="flex flex-wrap gap-7 items-center opacity-55 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center space-x-2">
                <ShieldCheck size={20} />
                <span className="font-serif text-sm">High-Reliability Leadership</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap size={20} />
                <span className="font-serif text-sm">Strategic Execution</span>
              </div>
              <div className="flex items-center space-x-2">
                <Plane size={20} />
                <span className="font-serif text-sm">Aviation Discipline</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Visual (Desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.965 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="aspect-[4/5] relative overflow-hidden rounded-2xl border border-gold-champagne/15">
            <img
              src="/hero-marie.jpg"
              alt="Marie Lindner — Executive Leadership"
              className="object-cover w-full h-full"
            />
            {/* Premium overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/25 to-transparent opacity-80" />
            {/* Subtle gold vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(176,141,87,0.18),rgba(7,7,7,0)_55%)]" />

            {/* Status badge */}
            <div className="absolute top-8 right-8 border border-gold-champagne/30 p-4 backdrop-blur-sm bg-obsidian/35">
              <div className="text-gold-champagne text-[11px] tracking-[0.28em] uppercase mb-1">Status</div>
              <div className="text-pearl text-lg font-serif italic">Clear for Takeoff</div>
            </div>

            {/* Logo Seal (subtle, premium) */}
            <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-obsidian/35 backdrop-blur-sm border border-gold-champagne/20 rounded-xl px-4 py-3">
              <img
                src="/logo-ml-consulting.jpg"
                alt="Marie Lindner Consulting"
                className="h-9 w-auto object-contain opacity-95"
                loading="eager"
                decoding="async"
              />
              <div className="hidden xl:block">
                <div className="text-[10px] uppercase tracking-[0.32em] text-gold-champagne font-bold">
                  Marie Lindner Consulting UG
                </div>
              </div>
            </div>
          </div>

          {/* Floating quote card */}
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.7, ease: "easeOut" }}
            className="absolute -bottom-8 -left-8 bg-charcoal/95 border border-gold-champagne/20 p-8 shadow-2xl max-w-sm rounded-xl"
          >
            <div className="text-gold-champagne mb-4">
              <Plane size={34} strokeWidth={1} />
            </div>
            <p className="text-sm text-pearl/90 font-light leading-relaxed italic">
              “In aviation, clarity isn’t optional — it’s operational. I bring that same non-negotiable precision to your
              leadership decisions.”
            </p>
          </motion.div>
        </motion.div>

        {/* Tablet-only inline image */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative lg:hidden mt-6"
        >
          <div className="mx-auto max-w-md rounded-2xl overflow-hidden border border-gold-champagne/15 bg-obsidian/30 backdrop-blur-sm">
            <div className="relative aspect-[4/5]">
              <img
                src="/hero-marie.jpg"
                alt="Marie Lindner — Executive Leadership"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/35 to-transparent opacity-85" />

              {/* Mobile Logo Seal on image */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 bg-obsidian/40 backdrop-blur-sm border border-gold-champagne/20 rounded-xl px-4 py-3">
                <img
                  src="/logo-ml-consulting.jpg"
                  alt="Marie Lindner Consulting"
                  className="h-8 w-auto object-contain"
                  loading="eager"
                  decoding="async"
                />
                <div className="text-[10px] uppercase tracking-[0.28em] text-gold-champagne font-bold">
                  Consulting UG
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}