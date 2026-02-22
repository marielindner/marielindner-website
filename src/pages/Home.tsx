import { motion } from 'motion/react';
import Hero from '../components/Hero';
import Differentiator from '../components/Differentiator';
import Speaking from '../components/Speaking';
import Coaching from '../components/Coaching';
import LuxuryBusiness from '../components/LuxuryBusiness';
import About from '../components/About';
import SocialProof from '../components/SocialProof';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Differentiator />
      <Speaking />
      <Coaching />
      <LuxuryBusiness />
      <About />
      <SocialProof />
      <ContactForm />
    </motion.div>
  );
}
