import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { CheckCircle2, ArrowLeft, Linkedin, Instagram, MessageSquare, Mail } from "lucide-react";

export default function ThankYou() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-obsidian py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-champagne/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-2xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-charcoal border border-gold-champagne/20 p-12 md:p-16 shadow-2xl rounded-[2rem]"
        >
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gold-champagne/10 rounded-full flex items-center justify-center border border-gold-champagne/30">
              <CheckCircle2 size={40} className="text-gold-champagne" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl heading-serif mb-6">
            Message <span className="text-gold-champagne italic">received.</span>
          </h1>

          <p className="text-steel font-light leading-relaxed mb-12 text-lg">
            Thank you for reaching out. Marie personally reviews inquiries. You can expect a response within 24–48
            hours.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="text-left p-6 bg-obsidian/50 border border-gold-champagne/10 rounded-2xl">
              <h3 className="text-[10px] uppercase tracking-widest text-gold-champagne font-bold mb-4">Next Steps</h3>
              <ul className="space-y-3">
                <li className="text-xs text-steel flex items-center space-x-2">
                  <div className="w-1 h-1 bg-gold-champagne rounded-full" />
                  <span>Review of your inquiry</span>
                </li>
                <li className="text-xs text-steel flex items-center space-x-2">
                  <div className="w-1 h-1 bg-gold-champagne rounded-full" />
                  <span>Assessment of fit and priorities</span>
                </li>
                <li className="text-xs text-steel flex items-center space-x-2">
                  <div className="w-1 h-1 bg-gold-champagne rounded-full" />
                  <span>Reply with suggested next step</span>
                </li>
              </ul>
            </div>

            <div className="text-left p-6 bg-obsidian/50 border border-gold-champagne/10 rounded-2xl">
              <h3 className="text-[10px] uppercase tracking-widest text-gold-champagne font-bold mb-4">Direct Contact</h3>
              <div className="space-y-3">
                <a
                  href="mailto:marielindnerconsulting@gmail.com"
                  className="flex items-center gap-2 text-xs text-steel hover:text-pearl transition-colors"
                >
                  <Mail size={14} className="text-gold-champagne" />
                  <span>marielindnerconsulting@gmail.com</span>
                </a>

                <a
                  href="https://wa.me/491723933412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-steel hover:text-pearl transition-colors"
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
                className="text-steel hover:text-gold-champagne transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://wa.me/491723933412"
                target="_blank"
                rel="noopener noreferrer"
                className="text-steel hover:text-gold-champagne transition-colors"
              >
                <MessageSquare size={20} />
              </a>
              <a
                href="https://www.instagram.com/marielindnerconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="text-steel hover:text-gold-champagne transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>

            <Link
              to="/"
              className="inline-flex items-center text-xs uppercase tracking-widest text-pearl hover:text-gold-champagne transition-colors font-bold group"
            >
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}