import { HeaderMinimal } from "@/components/header-minimal";
import { AnimatedHero } from "@/components/animated-hero";
import { ServicesSection } from "@/components/services-section";
import { ProcessSection } from "@/components/process-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { FooterMinimal } from "@/components/footer-minimal";

export default function HomePage() {
  return (
    <main>
      <HeaderMinimal />
      <AnimatedHero />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
      <FooterMinimal />
    </main>
  );
}
