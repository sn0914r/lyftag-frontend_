import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  BoxWrapper,
  LinkRow,
  LinkInput,
  ActionBtn,
  Note,
  StatsRow,
  Stat,
  StatNumber,
  StatLabel,
  DashboardBtn,
} from "./ReferralBox.styles";

/**
 * ReferralBox
 * Props:
 *   isLoggedIn   {boolean}
 *   referralLink {string}  — user's unique referral link (when logged in)
 *   earnings     {number}  — total earnings in ₹
 *   totalRefs    {number}  — total successful referrals
 */
function ReferralBox({
  isLoggedIn = false,
  referralLink = "",
  earnings = 0,
  totalRefs = 0,
}) {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback */
    }
  }, [referralLink]);

  if (!isLoggedIn) {
    return (
      <BoxWrapper>
        <LinkRow>
          <LinkInput
            type="text"
            value="Sign up to get your unique referral link!"
            readOnly
          />
          <ActionBtn onClick={() => navigate("/auth/signup")}>
            Sign Up Now
          </ActionBtn>
        </LinkRow>
        <Note>Create an account to start earning!</Note>
      </BoxWrapper>
    );
  }

  return (
    <BoxWrapper>
      <LinkRow>
        <LinkInput type="text" value={referralLink} readOnly />
        <ActionBtn onClick={handleCopy}>
          {copied ? "✓ Copied!" : "Copy Link"}
        </ActionBtn>
      </LinkRow>

      <Note>Share your link and start earning today!</Note>

      <StatsRow>
        <Stat>
          <StatNumber>₹{earnings}</StatNumber>
          <StatLabel>Total Earnings</StatLabel>
        </Stat>
        <Stat>
          <StatNumber>{totalRefs}</StatNumber>
          <StatLabel>Total Referrals</StatLabel>
        </Stat>
      </StatsRow>

      <DashboardBtn onClick={() => navigate("/referral")}>
        📊 View Full Dashboard
      </DashboardBtn>
    </BoxWrapper>
  );
}

export default ReferralBox;
