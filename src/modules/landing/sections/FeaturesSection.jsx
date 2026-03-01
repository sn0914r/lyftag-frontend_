import {
  BellRing,
  HeartPulse,
  Car,
  ShieldAlert,
  KeyRound,
  LayoutDashboard,
  ScanLine,
} from "lucide-react";
import FeatureCard from "../components/FeatureCard";
import { Section, SectionTitle, FeaturesGrid } from "./FeatureSection.styles";

const FEATURES = [
  {
    icon: <BellRing size={28} strokeWidth={1.6} />,
    title: "Instant SOS",
    description:
      "SMS + WhatsApp alerts to 5 emergency contacts with GPS location sharing.",
  },
  {
    icon: <HeartPulse size={28} strokeWidth={1.6} />,
    title: "Health ID",
    description:
      "Medical information instantly available for emergency responders.",
  },
  {
    icon: <Car size={28} strokeWidth={1.6} />,
    title: "Vehicle Mode",
    description: "Owner and document information accessible via scan.",
  },
  {
    icon: <ShieldAlert size={28} strokeWidth={1.6} />,
    title: "Lost & Theft Mode",
    description: "Mark your vehicle or belongings as stolen instantly.",
  },
  {
    icon: <KeyRound size={28} strokeWidth={1.6} />,
    title: "Blockchain Vault",
    description: "Secure storage of license and RC documents.",
  },
  {
    icon: <LayoutDashboard size={28} strokeWidth={1.6} />,
    title: "Cloud Dashboard",
    description: "Manage all your safety tags from one place.",
  },
  {
    icon: <ScanLine size={28} strokeWidth={1.6} />,
    title: "No App Needed",
    description: "Works with any smartphone — just scan and connect.",
  },
];

function FeaturesSection() {
  return (
    <Section id="features" aria-labelledby="features-title">
      <div className="container">
        <SectionTitle id="features-title">Core Features</SectionTitle>
        <FeaturesGrid>
          {FEATURES.map(({ icon, title, description }) => (
            <FeatureCard
              key={title}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </FeaturesGrid>
      </div>
    </Section>
  );
}

export default FeaturesSection;
