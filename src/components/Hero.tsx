import { motion } from "motion/react";
import { ArrowRight, Globe2, MessageSquare, Plane, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[36rem] h-[36rem] bg-gold-champagne/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-gold-champagne/6 rounded-full blur-[140px]" />
        <div className="absolute top-28 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-champagne/15 to-transparent" />
      </div>

      <div className="section-container relative z-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 xl:gap-20 items-center min-h-[calc(100vh-6rem)]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="py-8 lg:py-0 max-w-xl"
        >
          <div className="mb-7 flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-gold-champagne/20 bg-obsidian/40 backdrop-blur-sm px-3 py-2 shadow-lg shadow-gold-champagne/10">
                <img
                  src="/images/logo-ml-consulting.webp"
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

          <div className="inline-flex items-center gap-2 rounded-full border border-gold-champagne/20 bg-gold-champagne/8 px-4 py-2 mb-6">
            <Sparkles size={14} className="text-gold-champagne" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-gold-champagne font-bold">
              Coaching • Mentoring • International Project Consulting
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl xl:text-7xl heading-serif leading-[1.04] text-balance mb-7">
            Clarity for leaders.
            <br />
            <span className="text-gold-champagne">Confidence in motion.</span>
          </h1>

          <p className="text-base md:text-xl text-steel/90 mb-8 max-w-xl leading-relaxed font-light">
            Marie Lindner supports entrepreneurs, executives and ambitious decision-makers in navigating complexity,
            strengthening leadership capability and creating real, sustainable change.
          </p>

          <p className="text-sm md:text-base text-pearl/80 leading-relaxed max-w-xl mb-10">
            Alongside her coaching and mentoring work, she contributes to selected international consulting assignments
            and is currently involved in an international IT project. Her aviation background remains a defining
            strength: calm judgment, structure under pressure and disciplined execution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#coaching" className="btn-primary group">
              Explore Coaching
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a href="#contact" className="btn-secondary">
              Request a Conversation
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 pt-7 border-t border-gold-champagne/12">
            <div className="rounded-2xl border border-gold-champagne/12 bg-charcoal/50 p-4">
              <div className="flex items-center gap-2 text-gold-champagne mb-3">
                <MessageSquare size={16} />
                <span className="text-[10px] uppercase tracking-[0.24em] font-bold">Coaching</span>
              </div>
              <p className="text-sm text-steel/90 font-light leading-relaxed">
                1:1 coaching, mentoring, small-group development and executive sparring.
              </p>
            </div>

            <div className="rounded-2xl border border-gold-champagne/12 bg-charcoal/50 p-4">
              <div className="flex items-center gap-2 text-gold-champagne mb-3">
                <Globe2 size={16} />
                <span className="text-[10px] uppercase tracking-[0.24em] font-bold">Consulting</span>
              </div>
              <p className="text-sm text-steel/90 font-light leading-relaxed">
                Project-based international work focused on clarity, coordination and execution.
              </p>
            </div>

            <div className="rounded-2xl border border-gold-champagne/12 bg-charcoal/50 p-4">
              <div className="flex items-center gap-2 text-gold-champagne mb-3">
                <Plane size={16} />
                <span className="text-[10px] uppercase tracking-[0.24em] font-bold">Aviation</span>
              </div>
              <p className="text-sm text-steel/90 font-light leading-relaxed">
                Commercial pilot training informs her discipline, precision and decision-making style.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-gold-champagne/15 bg-charcoal">
            <div className="relative aspect-[4/5]">
              <img
                src="/images/rotes-jacket-marie2.webp"
                alt="Marie Lindner in red blazer"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/15 to-transparent opacity-75" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(176,141,87,0.12),rgba(7,7,7,0)_55%)]" />

              <div className="absolute top-6 left-6 rounded-full border border-gold-champagne/30 bg-obsidian/45 backdrop-blur-sm px-4 py-2">
                <span className="text-[10px] uppercase tracking-[0.28em] text-gold-champagne font-bold">
                  Dresden • Germany
                </span>
              </div>

              <div className="absolute bottom-6 left-6 max-w-[22rem] rounded-2xl border border-gold-champagne/18 bg-obsidian/50 backdrop-blur-md p-5 md:p-6">
                <div className="text-[10px] uppercase tracking-[0.28em] text-gold-champagne font-bold mb-2">
                  Founder & Managing Director
                </div>
                <p className="text-sm md:text-base text-pearl/90 font-light leading-relaxed">
                  Coaching and mentoring for leaders who want structured thinking, clear decisions and authentic
                  presence.
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.7, ease: "easeOut" }}
            className="hidden xl:block absolute -bottom-12 -right-14 w-40 rounded-2xl overflow-hidden border border-gold-champagne/15 shadow-2xl"
          >
            <img
              src="/images/rotes-jacket-marie1.webp"
              alt="Marie Lindner portrait in red blouse"
              className="w-full h-72 object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}