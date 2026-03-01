import Hero from "../sections/Hero";
import FeaturesSection from "../sections/FeaturesSection";
import HowItWorksSection from "../sections/HowItWorksSection";
import PricingSection from "../sections/PricingSection";
import GetInTouchSection from "../sections/GetInTouchSection";
import ReferAndEarnSection from "../sections/ReferAndEarnSection";
import Header from "../../../shared/components/Header";

function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <GetInTouchSection />
      <ReferAndEarnSection />
    </>
  );
}

export default LandingPage;
