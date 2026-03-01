import {
  CardWrapper,
  CardIcon,
  CardTitle,
  CardDescription,
} from "./FeatureCard.style";

/**
 * FeatureCard
 * Props: icon {ReactNode} — Lucide icon element, title {string}, description {string}
 */
function FeatureCard({ icon, title, description }) {
  return (
    <CardWrapper>
      <CardIcon className="card-icon">{icon}</CardIcon>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardWrapper>
  );
}

export default FeatureCard;
