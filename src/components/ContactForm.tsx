import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Send, Loader2, Linkedin, Instagram, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'Speaking',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    navigate('/thank-you');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
              Whether you are looking to book a keynote, inquire about private advisory, or discuss a luxury brand partnership, please use the form below. Marie personally reviews all high-level inquiries.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="h-px w-12 bg-gold-champagne" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-gold-champagne font-bold">Connect Directly</span>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/marie-lindner-11247a12b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-6 py-3 border border-gold-champagne/20 hover:border-gold-champagne hover:bg-gold-champagne/5 transition-all duration-300 group"
                >
                  <Linkedin size={18} className="text-gold-champagne group-hover:scale-110 transition-transform" />
                  <span className="text-xs uppercase tracking-widest font-bold">LinkedIn</span>
                </a>
                <a
                  href="https://wa.me/491723933412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-6 py-3 border border-gold-champagne/20 hover:border-gold-champagne hover:bg-gold-champagne/5 transition-all duration-300 group"
                >
                  <MessageSquare size={18} className="text-gold-champagne group-hover:scale-110 transition-transform" />
                  <span className="text-xs uppercase tracking-widest font-bold">WhatsApp</span>
                </a>
                <a
                  href="https://www.instagram.com/marielindnerconsulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-6 py-3 border border-gold-champagne/20 hover:border-gold-champagne hover:bg-gold-champagne/5 transition-all duration-300 group"
                >
                  <Instagram size={18} className="text-gold-champagne group-hover:scale-110 transition-transform" />
                  <span className="text-xs uppercase tracking-widest font-bold">Instagram</span>
                </a>
              </div>
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
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-steel font-bold">Full Name</label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-charcoal border border-gold-champagne/10 px-4 py-3 text-pearl focus:outline-none focus:border-gold-champagne transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-steel font-bold">Email Address</label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-charcoal border border-gold-champagne/10 px-4 py-3 text-pearl focus:outline-none focus:border-gold-champagne transition-colors"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-[10px] uppercase tracking-widest text-steel font-bold">Company / Organization</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-charcoal border border-gold-champagne/10 px-4 py-3 text-pearl focus:outline-none focus:border-gold-champagne transition-colors"
                    placeholder="Enter organization"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="interest" className="text-[10px] uppercase tracking-widest text-steel font-bold">Primary Interest</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full bg-charcoal border border-gold-champagne/10 px-4 py-3 text-pearl focus:outline-none focus:border-gold-champagne transition-colors appearance-none cursor-pointer"
                  >
                    <option value="Speaking">Keynote Speaking</option>
                    <option value="Coaching">Executive Coaching</option>
                    <option value="Luxury">Luxury Strategy</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-steel font-bold">Message</label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-charcoal border border-gold-champagne/10 px-4 py-3 text-pearl focus:outline-none focus:border-gold-champagne transition-colors resize-none"
                  placeholder="How can Marie assist your mission?"
                />
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="btn-primary w-full py-5 group"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin mr-2" size={18} />
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
