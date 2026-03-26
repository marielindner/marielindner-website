import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ChevronRight, Menu, X } from "lucide-react";
import { useLanguage, type Language } from "../i18n";

function LanguageToggle({ mobile = false }: { mobile?: boolean }) {
  const { language, setLanguage, t } = useLanguage();

  const baseClass = mobile
    ? "language-toggle w-full justify-center"
    : "language-toggle hidden md:inline-flex";

  const getButtonClass = (value: Language) =>
    `language-toggle-button ${
      language === value
        ? "bg-gold-champagne text-obsidian shadow-lg"
        : "text-steel hover:text-pearl"
    }`;

  return (
    <div className={baseClass} aria-label={t.nav.languageLabel}>
      <button type="button" onClick={() => setLanguage("de")} className={getButtonClass("de")}>
        DE
      </button>
      <button type="button" onClick={() => setLanguage("en")} className={getButtonClass("en")}>
        EN
      </button>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { t } = useLanguage();

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
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-gold-champagne/10 bg-obsidian/88 py-3 md:py-4 backdrop-blur-md"
          : "bg-transparent py-5 md:py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <Link
          to="/"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              handleLogoClick();
            }
          }}
          className="group flex items-center gap-3"
          aria-label={t.nav.brandAriaLabel}
        >
          <img
            src="/images/logo-ml-consulting.webp"
            alt="Marie Lindner Coaching"
            className="h-10 w-auto object-contain md:h-11"
            loading="eager"
            decoding="async"
          />

          <div className="hidden leading-tight sm:block">
            <div className="text-base font-serif italic text-pearl transition-colors group-hover:text-gold-champagne md:text-lg">
              Marie Lindner
            </div>
            <div className="text-[10px] uppercase tracking-[0.32em] text-steel/70">Coaching</div>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <div className="flex items-center gap-7">
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-steel transition-colors hover:text-pearl"
              >
                {link.name}
              </a>
            ))}
          </div>

          <LanguageToggle />
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageToggle />

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-gold-champagne/15 bg-obsidian/55 p-3 text-pearl backdrop-blur-sm transition-colors hover:text-gold-champagne"
            aria-label={t.nav.menuLabel}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="border-t border-gold-champagne/10 bg-obsidian/96 px-6 pb-8 pt-6 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-6">
              <LanguageToggle mobile />

              <div className="grid gap-2">
                {t.nav.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="group flex items-center justify-between rounded-2xl border border-gold-champagne/10 bg-charcoal/40 px-5 py-4 text-sm text-pearl transition-colors hover:border-gold-champagne/25 hover:text-gold-champagne"
                  >
                    <span className="uppercase tracking-[0.18em]">{link.name}</span>
                    <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}