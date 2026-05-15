import Hero from "../components/Hero";
import Differentiator from "../components/Differentiator";
import Coaching from "../components/Coaching";
import ConsultingProjects from "../components/ConsultingProjects";
import SignatureGallery from "../components/SignatureGallery";
import About from "../components/About";
import Speaking from "../components/Speaking";
import SocialProof from "../components/SocialProof";
import ContactForm from "../components/ContactForm";
import ExecutiveSummary from "../components/ExecutiveSummary";

export default function Home() {
  return (
    <>
      <Hero />
      <ExecutiveSummary />
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
