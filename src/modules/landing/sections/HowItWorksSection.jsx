import { ShoppingBag, UserCheck, Tag, ScanLine } from "lucide-react";
import HowItWorksCard from "../components/HowItWorksCard";
import {
  Section,
  SectionTitle,
  SectionSubtitle,
  StepsGrid,
} from "./HowItWorksSection.styles";

const STEPS = [
  {
    icon: <ShoppingBag size={30} strokeWidth={1.6} />,
    title: "Order Your Tag",
    description:
      "Choose a plan and get your personalised LYF TAG delivered digitally.",
  },
  {
    icon: <UserCheck size={30} strokeWidth={1.6} />,
    title: "Set Up Profile",
    description:
      "Add your emergency contacts, health info, and vehicle details in minutes.",
  },
  {
    icon: <Tag size={30} strokeWidth={1.6} />,
    title: "Attach Your Tag",
    description: "Place the QR tag on your vehicle, keychain, bag, or wear it.",
  },
  {
    icon: <ScanLine size={30} strokeWidth={1.6} />,
    title: "Scan & Connect",
    description:
      "Anyone with a smartphone can scan to instantly reach your emergency contacts.",
  },
];

function HowItWorksSection() {
  return (
    <Section id="how-it-works" aria-labelledby="how-it-works-title">
      <div className="container">
        <SectionTitle id="how-it-works-title">How It Works</SectionTitle>
        <SectionSubtitle>
          Get protected in 4 simple steps — no technical knowledge required.
        </SectionSubtitle>
        <StepsGrid>
          {STEPS.map(({ icon, title, description }, i) => (
            <HowItWorksCard
              key={title}
              step={i + 1}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </StepsGrid>
      </div>
    </Section>
  );
}

export default HowItWorksSection;
