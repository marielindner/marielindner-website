import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Instagram, Linkedin, Loader2, Mail, MessageSquare, Phone, Send } from "lucide-react";
import { useLanguage } from "../i18n";

const TO_EMAIL = "marielindnerconsulting@gmail.com";

export default function ContactForm() {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: t.contact.options.coaching,
    message: "",
  });

  React.useEffect(() => {
    setFormData((prev) => ({ ...prev, interest: t.contact.options.coaching }));
  }, [language, t.contact.options.coaching]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    const subject = `${t.contact.mailSubjectPrefix} — ${formData.interest} | ${formData.name}`;

    const body = `
${t.contact.mailBody.fullName}: ${formData.name}
${t.contact.mailBody.email}: ${formData.email}
${t.contact.mailBody.company}: ${formData.company || "-"}

${t.contact.mailBody.primaryInterest}: ${formData.interest}

${t.contact.mailBody.message}:
${formData.message}

---
${t.contact.mailBody.sentVia}
    `;

    const mailtoLink = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/thank-you");
    }, 400);
  };

  return (
    <section id="contact" className="relative bg-charcoal py-24 md:py-32">
      <div className="section-container">
        <div className="grid items-start gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.34em] text-gold-champagne">
              {t.contact.eyebrow}
            </span>

            <h2 className="heading-serif mb-8 text-4xl text-balance md:text-6xl">
              {t.contact.title} <span className="text-gold-champagne">{t.contact.titleHighlight}</span>
            </h2>

            <p className="mb-10 max-w-xl text-lg font-light leading-relaxed text-steel">{t.contact.intro}</p>

            <div className="mb-10 space-y-4">
              <a
                href="mailto:marielindnerconsulting@gmail.com"
                className="flex items-center gap-3 text-pearl transition-colors hover:text-gold-champagne"
              >
                <Mail size={18} className="text-gold-champagne" />
                <span className="text-sm">marielindnerconsulting@gmail.com</span>
              </a>

              <a
                href="tel:+491723933412"
                className="flex items-center gap-3 text-pearl transition-colors hover:text-gold-champagne"
              >
                <Phone size={18} className="text-gold-champagne" />
                <span className="text-sm">+49 172 3933412</span>
              </a>
            </div>

            <div className="flex space-x-5">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-gold-champagne/20 bg-obsidian p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.contact.placeholders.name}
                  className="input-field"
                />

                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.contact.placeholders.email}
                  className="input-field"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t.contact.placeholders.company}
                  className="input-field"
                />

                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="input-field cursor-pointer"
                >
                  <option value={t.contact.options.coaching}>{t.contact.options.coaching}</option>
                  <option value={t.contact.options.consulting}>{t.contact.options.consulting}</option>
                  <option value={t.contact.options.speaking}>{t.contact.options.speaking}</option>
                  <option value={t.contact.options.workshop}>{t.contact.options.workshop}</option>
                  <option value={t.contact.options.other}>{t.contact.options.other}</option>
                </select>
              </div>

              <textarea
                required
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder={t.contact.placeholders.message}
                className="input-field resize-none"
              />

              <button disabled={isSubmitting} type="submit" className="btn-primary group flex w-full items-center justify-center py-5">
                {isSubmitting ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : (
                  <>
                    {t.contact.submit}
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </button>

              <p className="text-xs font-light leading-relaxed text-steel/70">{t.contact.helper}</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
