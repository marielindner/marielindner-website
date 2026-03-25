import { motion } from "motion/react";
import Hero from "../components/Hero";
import SignatureGallery from "../components/SignatureGallery";
import Differentiator from "../components/Differentiator";
import Coaching from "../components/Coaching";
import ConsultingProjects from "../components/ConsultingProjects";
import Speaking from "../components/Speaking";
import About from "../components/About";
import ExperienceTimeline from "../components/ExperienceTimeline";
import SocialProof from "../components/SocialProof";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Hero />
      <SignatureGallery />
      <Differentiator />
      <Coaching />
      <ConsultingProjects />
      <Speaking />
      <About />
      <ExperienceTimeline />
      <SocialProof />
      <ContactForm />
    </motion.div>
  );
}
