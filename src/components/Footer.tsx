import { Link } from 'react-router-dom';
import { Linkedin, Instagram, MessageSquare } from 'lucide-react';

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
                Consulting
              </span>
            </Link>
            <p className="text-xs text-steel leading-relaxed font-light">
              Premium consulting and keynote speaking for high-performance leaders, merging aviation precision with executive authority.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold-champagne font-bold mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-xs text-steel hover:text-pearl transition-colors">Home</a></li>
              <li><a href="#speaking" className="text-xs text-steel hover:text-pearl transition-colors">Speaking</a></li>
              <li><a href="#coaching" className="text-xs text-steel hover:text-pearl transition-colors">Executive Coaching</a></li>
              <li><a href="#luxury" className="text-xs text-steel hover:text-pearl transition-colors">Luxury Business</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold-champagne font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-xs text-steel hover:text-pearl transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-xs text-steel hover:text-pearl transition-colors">Imprint</a></li>
              <li><a href="#" className="text-xs text-steel hover:text-pearl transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold-champagne font-bold mb-6">Connect</h4>
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
            © {currentYear} Marie Lindner Consulting. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-2">
            <div className="w-1 h-1 bg-gold-champagne rounded-full" />
            <span className="text-[8px] uppercase tracking-[0.4em] text-steel/40">Clear for Takeoff</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
