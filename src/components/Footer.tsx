import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, MessageSquare, Phone } from "lucide-react";
import { useLanguage } from "../i18n";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-gold-champagne/10 bg-obsidian py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="group mb-6 flex flex-col" onClick={() => window.scrollTo(0, 0)}>
              <span className="text-3xl tracking-tighter text-pearl transition-colors group-hover:text-gold-champagne font-serif">
                ML<span className="text-gold-champagne">.</span>
              </span>
              <span className="-mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-steel">
                Consulting UG
              </span>
            </Link>

            <p className="text-xs font-light leading-relaxed text-steel">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-gold-champagne">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-4">
              {t.nav.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-xs text-steel transition-colors hover:text-pearl">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-gold-champagne">
              {t.footer.company}
            </h4>
            <div className="space-y-4 text-xs font-light leading-relaxed text-steel">
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
            <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-gold-champagne">
              {t.footer.connect}
            </h4>

            <div className="mb-6 space-y-4">
              <a
                href="mailto:marielindnerconsulting@gmail.com"
                className="flex items-center gap-3 text-xs text-steel transition-colors hover:text-pearl"
              >
                <Mail size={14} className="text-gold-champagne" />
                <span>marielindnerconsulting@gmail.com</span>
              </a>

              <a
                href="tel:+491723933412"
                className="flex items-center gap-3 text-xs text-steel transition-colors hover:text-pearl"
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
                className="border border-gold-champagne/20 p-2 text-gold-champagne transition-all duration-300 hover:bg-gold-champagne hover:text-obsidian"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://wa.me/491723933412"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gold-champagne/20 p-2 text-gold-champagne transition-all duration-300 hover:bg-gold-champagne hover:text-obsidian"
              >
                <MessageSquare size={18} />
              </a>
              <a
                href="https://www.instagram.com/marielindnerconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gold-champagne/20 p-2 text-gold-champagne transition-all duration-300 hover:bg-gold-champagne hover:text-obsidian"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-gold-champagne/5 pt-8 md:flex-row">
          <p className="text-[10px] uppercase tracking-widest text-steel/60">
            {t.footer.rights.replace("{year}", String(currentYear))}
          </p>

          <div className="flex items-center space-x-2">
            <div className="h-1 w-1 rounded-full bg-gold-champagne" />
            <span className="text-[8px] uppercase tracking-[0.4em] text-steel/40">{t.footer.values}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
