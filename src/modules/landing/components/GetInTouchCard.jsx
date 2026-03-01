import {
  CardRow,
  IconCircle,
  CardText,
  CardLabel,
  CardValue,
} from "./GetInTouchCard.styles";

/**
 * GetInTouchCard
 * Props:
 *   label   {string}    — e.g. "Email"
 *   display {string}    — text to show
 *   href    {string}    — optional link
 *   icon    {ReactNode} — Lucide icon
 */
function GetInTouchCard({ label, display, href, icon }) {
  return (
    <CardRow
      href={href || undefined}
      as={href ? "a" : "div"}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
    >
      <IconCircle>{icon}</IconCircle>
      <CardText>
        <CardLabel>{label}</CardLabel>
        <CardValue>{display}</CardValue>
      </CardText>
    </CardRow>
  );
}

export default GetInTouchCard;
