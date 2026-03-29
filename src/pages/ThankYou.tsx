import { Link } from "react-router-dom";
import { CheckCircle2, Mail, MessageSquare } from "lucide-react";
import { useLanguage } from "../i18n";

export default function ThankYou() {
  const { t } = useLanguage();

  return (
    <section className="section-container flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-3xl rounded-[2rem] border border-gold-champagne/15 bg-charcoal/55 p-8 text-center md:p-12">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold-champagne text-obsidian">
          <CheckCircle2 size={28} />
        </div>
        <h1 className="heading-serif mb-4 text-4xl md:text-6xl">
          {t.thankYou.title} <span className="text-gold-champagne">{t.thankYou.highlight}</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base font-light leading-relaxed text-steel md:text-lg">{t.thankYou.text}</p>

        <div className="mb-8 rounded-[1.5rem] border border-gold-champagne/10 bg-obsidian/50 p-6 text-left">
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.34em] text-gold-champagne">{t.thankYou.nextSteps}</div>
          <div className="grid gap-3">
            {t.thankYou.nextStepsList.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-pearl/90">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold-champagne" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="mailto:marielindnerconsulting@gmail.com" className="btn-secondary">
            <Mail className="mr-2 h-4 w-4" />
            {t.thankYou.directContact}
          </a>
          <a href="https://wa.me/491723933412" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <MessageSquare className="mr-2 h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <Link to="/" className="btn-primary">
          {t.thankYou.backHome}
        </Link>
      </div>
    </section>
  );
}
