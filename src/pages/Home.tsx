import Hero from "../components/Hero";
import Differentiator from "../components/Differentiator";
import Coaching from "../components/Coaching";
import ConsultingProjects from "../components/ConsultingProjects";
import SignatureGallery from "../components/SignatureGallery";
import About from "../components/About";
import Speaking from "../components/Speaking";
import SocialProof from "../components/SocialProof";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Differentiator />
      <Coaching />
      <ConsultingProjects />
      <SignatureGallery />
      <About />
      <Speaking />
      <SocialProof />
      <ContactForm />
    </>
  );
}
