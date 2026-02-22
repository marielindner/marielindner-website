import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Speaking', href: '#speaking' },
  { name: 'Executive Coaching', href: '#coaching' },
  { name: 'Luxury Business', href: '#luxury' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (isHome && href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-obsidian/90 backdrop-blur-md py-4 border-b border-gold-champagne/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="group flex flex-col" onClick={() => window.scrollTo(0, 0)}>
          <span className="text-2xl font-serif tracking-tighter text-pearl group-hover:text-gold-champagne transition-colors">
            ML<span className="text-gold-champagne">.</span>
          </span>
          <span className="text-[8px] tracking-[0.3em] uppercase text-steel font-medium -mt-1">
            Consulting
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  handleNavClick(link.href);
                }
              }}
              className="text-xs uppercase tracking-widest text-steel hover:text-gold-champagne transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                handleNavClick('#contact');
              }
            }}
            className="btn-primary py-2.5 px-6 text-[10px]"
          >
            Book Marie
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-pearl p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[73px] bg-obsidian z-40 lg:hidden flex flex-col p-8 space-y-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (isHome) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  } else {
                    setIsOpen(false);
                  }
                }}
                className="text-2xl font-serif text-pearl flex justify-between items-center border-b border-gold-champagne/10 pb-4"
              >
                {link.name}
                <ChevronRight size={20} className="text-gold-champagne" />
              </a>
            ))}
            <div className="pt-8">
              <a
                href="#contact"
                onClick={(e) => {
                  if (isHome) {
                    e.preventDefault();
                    handleNavClick('#contact');
                  } else {
                    setIsOpen(false);
                  }
                }}
                className="btn-primary w-full"
              >
                Book Marie
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
