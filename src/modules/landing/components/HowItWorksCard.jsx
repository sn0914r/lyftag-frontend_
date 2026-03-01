import {
  CardWrapper,
  StepBadge,
  IconBox,
  CardTitle,
  CardDescription,
} from "./HowItWorksCard.styles";

/**
 * HowItWorksCard
 * Props: step {number}, icon {ReactNode}, title {string}, description {string}
 */
function HowItWorksCard({ step, icon, title, description }) {
  return (
    <CardWrapper>
      <StepBadge>{step}</StepBadge>
      <IconBox className="hiw-icon-box">{icon}</IconBox>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardWrapper>
  );
}

export default HowItWorksCard;
