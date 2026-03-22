import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Coaching & Mentoring", href: "#coaching" },
  { name: "Consulting", href: "#consulting" },
  { name: "Speaking", href: "#speaking" },
  { name: "About", href: "#about" },
  { name: "References", href: "#references" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);

    if (isHome && href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleLogoClick = () => {
    setIsOpen(false);

    if (isHome) {
      const el = document.querySelector("#home");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-obsidian/88 backdrop-blur-md py-3 md:py-4 border-b border-gold-champagne/10"
          : "bg-transparent py-5 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link
          to="/"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              handleLogoClick();
            }
          }}
          className="group flex items-center gap-3"
          aria-label="Marie Lindner Consulting"
        >
          <img
            src="/images/logo-ml-consulting.webp"
            alt="Marie Lindner Consulting"
            className="h-10 md:h-11 w-auto object-contain"
            loading="eager"
            decoding="async"
          />

          <div className="hidden sm:block leading-tight">
            <div className="text-pearl font-serif italic text-base md:text-lg group-hover:text-gold-champagne transition-colors">
              Marie Lindner
            </div>
            <div className="text-[10px] uppercase tracking-[0.32em] text-steel/70">
              Consulting UG
            </div>
          </div>
        </Link>

        <div className="hidden xl:flex items-center space-x-7">
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
              className="text-[11px] uppercase tracking-[0.22em] text-steel hover:text-gold-champagne transition-colors"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                handleNavClick("#contact");
              }
            }}
            className="btn-primary py-3 px-6 text-[10px]"
          >
            Book Intro Call
          </a>
        </div>

        <button
          className="xl:hidden text-pearl p-2"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 top-[78px] md:top-[84px] bg-obsidian z-40 xl:hidden flex flex-col p-8 space-y-6"
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
                    handleNavClick("#contact");
                  } else {
                    setIsOpen(false);
                  }
                }}
                className="btn-primary w-full"
              >
                Book Intro Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}