import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Send, Loader2, Linkedin, Instagram, MessageSquare } from "lucide-react";

const TO_EMAIL = "Marielindnerconsulting@gmail.com";

export default function ContactForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "Speaking",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setIsSubmitting(true);

    const subject = `Inquiry — ${formData.interest} | ${formData.name}`;

    const body = `
Full Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "-"}

Primary Interest: ${formData.interest}

Message:
${formData.message}

---
Sent via marie-lindner.com
    `;

    const mailtoLink = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/thank-you");
    }, 400);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-charcoal">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold-champagne font-bold mb-4 block">
              Contact & Inquiries
            </span>

            <h2 className="text-4xl md:text-6xl heading-serif mb-8">
              Initiate <span className="text-gold-champagne italic">Communication.</span>
            </h2>

            <p className="text-steel font-light leading-relaxed mb-12 text-lg">
              Keynotes. Executive advisory. Luxury partnerships.
              Marie personally reviews strategic inquiries.
            </p>

            {/* Social */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/marie-lindner-11247a12b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-6 py-3 border border-gold-champagne/20 hover:border-gold-champagne hover:bg-gold-champagne/5 transition-all duration-300 group"
              >
                <Linkedin size={18} className="text-gold-champagne" />
                <span className="text-xs uppercase tracking-widest font-bold">
                  LinkedIn
                </span>
              </a>

              <a
                href="https://wa.me/491723933412"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-6 py-3 border border-gold-champagne/20 hover:border-gold-champagne hover:bg-gold-champagne/5 transition-all duration-300 group"
              >
                <MessageSquare size={18} className="text-gold-champagne" />
                <span className="text-xs uppercase tracking-widest font-bold">
                  WhatsApp
                </span>
              </a>

              <a
                href="https://www.instagram.com/marielindnerconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-6 py-3 border border-gold-champagne/20 hover:border-gold-champagne hover:bg-gold-champagne/5 transition-all duration-300 group"
              >
                <Instagram size={18} className="text-gold-champagne" />
                <span className="text-xs uppercase tracking-widest font-bold">
                  Instagram
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-obsidian p-8 md:p-12 border border-gold-champagne/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="input-field"
                />

                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.name@company.com"
                  className="input-field"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company / Organization (optional)"
                  className="input-field"
                />

                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="input-field cursor-pointer"
                >
                  <option value="Speaking">Keynote Speaking</option>
                  <option value="Coaching">Executive Coaching</option>
                  <option value="Luxury">Luxury Strategy</option>
                  <option value="Other">Other Inquiry</option>
                </select>
              </div>

              <textarea
                required
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="How can Marie support your mission?"
                className="input-field resize-none"
              />

              <button
                disabled={isSubmitting}
                type="submit"
                className="btn-primary w-full py-5 group flex justify-center items-center"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : (
                  <>
                    Send Inquiry
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}