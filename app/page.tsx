import Header from "@/components/header";
import Footer from "@/components/footer";
import AIHero from "@/components/sections/ai-hero";
import HowItWorks from "@/components/sections/how-it-works";
import FeatureGrid from "@/components/sections/feature-grid";
import SocialProof from "@/components/sections/social-proof";
import Pricing from "@/components/sections/pricing";
import ContactSection from "@/components/sections/contact-section";
import FinalCTA from "@/components/sections/final-cta";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <AIHero />
        <HowItWorks />
        <FeatureGrid />
        <SocialProof />
        <Pricing />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
