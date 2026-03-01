import { useNavigate } from "react-router-dom";
import { Gift } from "lucide-react";
import {
  Section,
  SectionTitle,
  SectionSubtitle,
  Highlight,
  CTACard,
  CTAText,
  CTAButton,
} from "./ReferAndEarnSection.styles";

/*
// ── Old implementation ──
import ReferralBox from "../components/ReferralBox";

function ReferAndEarnSection({
  isLoggedIn = false,
  referralLink = "",
  earnings = 0,
  totalRefs = 0,
}) {
  return (
    <Section id="referral" aria-labelledby="referral-title">
      <div className="container">
        <SectionTitle id="referral-title">Refer &amp; Earn</SectionTitle>
        <SectionSubtitle>
          Invite friends and earn <Highlight>₹50</Highlight> for every
          successful referral!
        </SectionSubtitle>

        <ReferralBox
          isLoggedIn={isLoggedIn}
          referralLink={referralLink}
          earnings={earnings}
          totalRefs={totalRefs}
        />
      </div>
    </Section>
  );
}
*/

function ReferAndEarnSection() {
  const navigate = useNavigate();

  return (
    <Section id="referral" aria-labelledby="referral-title">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-11 col-md-8 col-lg-6">
            <SectionTitle id="referral-title">Refer &amp; Earn</SectionTitle>
            <SectionSubtitle>
              Share LYF TAG with your friends and earn{" "}
              <Highlight>₹50</Highlight> for every successful referral. Track
              your earnings, invite more, and withdraw once you hit ₹500!
            </SectionSubtitle>

            <CTACard>
              <Gift size={32} strokeWidth={1.5} />
              <CTAText>
                Invite friends, earn rewards, and help them stay safe with LYF
                TAG.
              </CTAText>
              <CTAButton onClick={() => navigate("/referrals")}>
                Start Referring →
              </CTAButton>
            </CTACard>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ReferAndEarnSection;
