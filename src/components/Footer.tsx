import { Link } from "react-router-dom";
import { Linkedin, Instagram, MessageSquare, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-obsidian border-t border-gold-champagne/10 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="group flex flex-col mb-6" onClick={() => window.scrollTo(0, 0)}>
              <span className="text-3xl font-serif tracking-tighter text-pearl group-hover:text-gold-champagne transition-colors">
                ML<span className="text-gold-champagne">.</span>
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-steel font-medium -mt-1">
                Consulting UG
              </span>
            </Link>

            <p className="text-xs text-steel leading-relaxed font-light">
              Coaching, mentoring, speaking and selected project-based international consulting.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold-champagne font-bold mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-xs text-steel hover:text-pearl transition-colors">Home</a></li>
              <li><a href="#coaching" className="text-xs text-steel hover:text-pearl transition-colors">Coaching & Mentoring</a></li>
              <li><a href="#consulting" className="text-xs text-steel hover:text-pearl transition-colors">Consulting</a></li>
              <li><a href="#speaking" className="text-xs text-steel hover:text-pearl transition-colors">Speaking</a></li>
              <li><a href="#references" className="text-xs text-steel hover:text-pearl transition-colors">References</a></li>
              <li><a href="#contact" className="text-xs text-steel hover:text-pearl transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold-champagne font-bold mb-6">Company</h4>
            <div className="space-y-4 text-xs text-steel font-light leading-relaxed">
              <p>
                Marie Lindner Consulting UG (haftungsbeschränkt)
                <br />
                Trebeweg 11
                <br />
                01324 Dresden
                <br />
                Germany
              </p>
              <p>Amtsgericht Dresden, HRB 47411</p>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold-champagne font-bold mb-6">Connect</h4>

            <div className="space-y-4 mb-6">
              <a
                href="mailto:marielindnerconsulting@gmail.com"
                className="flex items-center gap-3 text-xs text-steel hover:text-pearl transition-colors"
              >
                <Mail size={14} className="text-gold-champagne" />
                <span>marielindnerconsulting@gmail.com</span>
              </a>

              <a
                href="tel:+491723933412"
                className="flex items-center gap-3 text-xs text-steel hover:text-pearl transition-colors"
              >
                <Phone size={14} className="text-gold-champagne" />
                <span>+49 172 3933412</span>
              </a>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/marie-lindner-11247a12b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gold-champagne/20 text-gold-champagne hover:bg-gold-champagne hover:text-obsidian transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://wa.me/491723933412"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gold-champagne/20 text-gold-champagne hover:bg-gold-champagne hover:text-obsidian transition-all duration-300"
              >
                <MessageSquare size={18} />
              </a>
              <a
                href="https://www.instagram.com/marielindnerconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gold-champagne/20 text-gold-champagne hover:bg-gold-champagne hover:text-obsidian transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gold-champagne/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-steel/60">
            © {currentYear} Marie Lindner Consulting UG. All Rights Reserved.
          </p>

          <div className="flex items-center space-x-2">
            <div className="w-1 h-1 bg-gold-champagne rounded-full" />
            <span className="text-[8px] uppercase tracking-[0.4em] text-steel/40">
              Clarity • Presence • Discipline
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}