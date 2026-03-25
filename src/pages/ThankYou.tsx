import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, Instagram, Linkedin, Mail, MessageSquare } from "lucide-react";
import { useLanguage } from "../i18n";

export default function ThankYou() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-obsidian py-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-champagne/5 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-gold-champagne/20 bg-charcoal p-12 shadow-2xl md:p-16"
        >
          <div className="mb-8 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold-champagne/30 bg-gold-champagne/10">
              <CheckCircle2 size={40} className="text-gold-champagne" />
            </div>
          </div>

          <h1 className="heading-serif mb-6 text-4xl md:text-5xl">
            {t.thankYou.title} <span className="text-gold-champagne">{t.thankYou.titleHighlight}</span>
          </h1>

          <p className="mb-12 text-lg font-light leading-relaxed text-steel">{t.thankYou.text}</p>

          <div className="mb-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-gold-champagne/10 bg-obsidian/50 p-6 text-left">
              <h3 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-gold-champagne">
                {t.thankYou.nextSteps}
              </h3>
              <ul className="space-y-3">
                {t.thankYou.nextStepsList.map((step) => (
                  <li key={step} className="flex items-center space-x-2 text-xs text-steel">
                    <div className="h-1 w-1 rounded-full bg-gold-champagne" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gold-champagne/10 bg-obsidian/50 p-6 text-left">
              <h3 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-gold-champagne">
                {t.thankYou.directContact}
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:marielindnerconsulting@gmail.com"
                  className="flex items-center gap-2 text-xs text-steel transition-colors hover:text-pearl"
                >
                  <Mail size={14} className="text-gold-champagne" />
                  <span>marielindnerconsulting@gmail.com</span>
                </a>

                <a
                  href="https://wa.me/491723933412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-steel transition-colors hover:text-pearl"
                >
                  <MessageSquare size={14} className="text-gold-champagne" />
                  <span>WhatsApp: +49 172 3933412</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-8">
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/marie-lindner-11247a12b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-steel transition-colors hover:text-gold-champagne"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://wa.me/491723933412"
                target="_blank"
                rel="noopener noreferrer"
                className="text-steel transition-colors hover:text-gold-champagne"
              >
                <MessageSquare size={20} />
              </a>
              <a
                href="https://www.instagram.com/marielindnerconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="text-steel transition-colors hover:text-gold-champagne"
              >
                <Instagram size={20} />
              </a>
            </div>

            <Link
              to="/"
              className="group inline-flex items-center text-xs font-bold uppercase tracking-widest text-pearl transition-colors hover:text-gold-champagne"
            >
              <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
              {t.thankYou.backHome}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
