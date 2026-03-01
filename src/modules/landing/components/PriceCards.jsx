import {
  CardArticle,
  PopularBadge,
  CardHeader,
  PlanName,
  PriceRow,
  Currency,
  Amount,
  FeatureList,
  Feature,
  GetStartedBtn,
} from "./PriceCards.styles";

/**
 * PriceCard
 * Props:
 *   plan        {string}   — plan name
 *   price       {string}   — numeric price e.g. "999"
 *   features    {string[]} — list of feature strings
 *   popular     {boolean}  — show Popular badge and gradient CTA
 *   onGetStarted{Function} — called when CTA is clicked
 */
function PriceCard({ plan, price, features, popular = false, onGetStarted }) {
  return (
    <CardArticle>
      {popular && <PopularBadge>Most Popular</PopularBadge>}

      <CardHeader>
        <PlanName>{plan}</PlanName>
        <PriceRow>
          <Currency>₹</Currency>
          <Amount>{price}</Amount>
        </PriceRow>
      </CardHeader>

      <FeatureList>
        {features.map((f) => (
          <Feature key={f}>{f}</Feature>
        ))}
      </FeatureList>

      <GetStartedBtn popular={popular ? 1 : 0} onClick={onGetStarted}>
        Get Started
      </GetStartedBtn>
    </CardArticle>
  );
}

export default PriceCard;
