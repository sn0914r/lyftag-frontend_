import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Copy,
  MessageCircle,
  Mail,
  Twitter,
  Send,
  CheckCircle2,
  AlertCircle,
  Wallet,
  Banknote,
  Link2,
  Users,
  Target,
} from "lucide-react";
import { useReferralInfo } from "../referrals.hooks";
import {
  PageWrapper,
  Header,
  BackLink,
  Title,
  Subtitle,
  Highlight,
  SectionBlock,
  SectionTitle,
  StatsRow,
  StatLabel,
  StatValue,
  WithdrawBtn,
  ReferBox,
  ReferInput,
  CopyBtn,
  ShareGrid,
  ShareBtn,
  InfoBox,
  HistoryList,
  HistoryItem,
  HistoryDetails,
  HistoryName,
  HistoryDate,
  HistoryMeta,
  HistoryAmount,
  EmptyState,
  EmptyIcon,
  CenterTitle,
  StepsGrid,
  StepItem,
  StepNum,
} from "./ReferralPage.styles";

export default function ReferralPage() {
  const { data: response, isLoading } = useReferralInfo();
  const [toast, setToast] = useState(null);

  // API returns { success, message, data: { referralDetails, referralTransactions } }
  const referralDetails = response?.data?.referralDetails || {};
  const transactions = response?.data?.referralTransactions || [];

  // Derive referral code from first transaction's referredBy
  const referralCode = transactions[0]?.referredBy || "";
  const referralLink = referralCode
    ? `${window.location.origin}/auth/signup?ref=${referralCode}`
    : "Loading your link...";

  // Use backend-provided stats
  const totalEarnings = referralDetails.totalReferralEarnings || 0;
  const availableBalance = referralDetails.availableReferralBalanceAmount || 0;
  const totalReferrals = referralDetails.totalReferralsCount || 0;

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleCopy = async () => {
    if (!referralCode) return;
    try {
      await navigator.clipboard.writeText(referralLink);
      showToast("Link copied to clipboard!");
    } catch (err) {
      showToast("Failed to copy", "error");
    }
  };

  const handleShare = (platform) => {
    if (!referralCode) return;
    const msg = `Join LYF TAG and get smart safety technology! Sign up with my referral link: ${referralLink}`;

    const urls = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(msg)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(
        referralLink,
      )}&text=${encodeURIComponent("Join LYF TAG — Smart Safety Technology!")}`,
      email: `mailto:?subject=${encodeURIComponent(
        "Join LYF TAG!",
      )}&body=${encodeURIComponent(msg)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        msg,
      )}`,
    };

    if (urls[platform]) {
      window.open(urls[platform], "_blank");
    }
  };

  const formatDate = (ts) => {
    if (!ts) return "";
    return new Date(ts).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <PageWrapper>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-11 col-sm-11 col-md-9 col-lg-7">
            <Header>
              <BackLink as={Link} to="/profile">
                <ArrowLeft size={16} strokeWidth={2.5} /> Back to Profile
              </BackLink>
              <Title>Refer & Earn</Title>
              <Subtitle>
                Earn <Highlight>₹50</Highlight> for every friend who joins LYF
                TAG.
              </Subtitle>
            </Header>

            {/* ── 1. The Share Section ── */}
            <SectionBlock>
              <SectionTitle>
                <Link2 size={16} /> Your Referral Link
              </SectionTitle>
              <ReferBox>
                <ReferInput type="text" readOnly value={referralLink} />
                <CopyBtn onClick={handleCopy} disabled={!referralCode}>
                  <Copy size={20} />
                </CopyBtn>
              </ReferBox>

              <ShareGrid>
                <ShareBtn onClick={() => handleShare("whatsapp")}>
                  <MessageCircle size={18} color="#25D366" /> WhatsApp
                </ShareBtn>
                <ShareBtn onClick={() => handleShare("telegram")}>
                  <Send size={18} color="#0088cc" /> Telegram
                </ShareBtn>
                <ShareBtn onClick={() => handleShare("twitter")}>
                  <Twitter size={18} color="#1DA1F2" /> Twitter
                </ShareBtn>
                <ShareBtn onClick={() => handleShare("email")}>
                  <Mail size={18} color="#EA4335" /> Email
                </ShareBtn>
              </ShareGrid>

              <InfoBox>
                <p>
                  Pro Tip: Users who share on groups see 3x higher success! 🚀
                </p>
              </InfoBox>
            </SectionBlock>

            {/* ── 2. Earnings & Stats Section ── */}
            <SectionBlock>
              <SectionTitle>
                <Wallet size={16} /> Earnings Overview
              </SectionTitle>
              <StatsRow>
                <StatLabel>Available Balance</StatLabel>
                <StatValue>
                  ₹{availableBalance.toLocaleString("en-IN")}
                </StatValue>
              </StatsRow>
              <StatsRow>
                <StatLabel>Total Earnings</StatLabel>
                <StatValue>₹{totalEarnings.toLocaleString("en-IN")}</StatValue>
              </StatsRow>
              <StatsRow>
                <StatLabel>Total Referrals</StatLabel>
                <StatValue>{totalReferrals}</StatValue>
              </StatsRow>

              <WithdrawBtn
                disabled={availableBalance < 500}
                onClick={() => showToast("Minimum withdrawal is ₹500", "error")}
              >
                <Banknote
                  size={18}
                  strokeWidth={2.5}
                  style={{ marginRight: 8, verticalAlign: "-3px" }}
                />
                Request Withdrawal
              </WithdrawBtn>
            </SectionBlock>

            {/* ── 3. How It Works ── */}
            <SectionBlock>
              <CenterTitle>How It Works</CenterTitle>
              <StepsGrid>
                <StepItem>
                  <StepNum>1</StepNum>
                  <h3>Invite</h3>
                  <p>Share your link with friends.</p>
                </StepItem>
                <StepItem>
                  <StepNum>2</StepNum>
                  <h3>Join</h3>
                  <p>They sign up and purchase.</p>
                </StepItem>
                <StepItem>
                  <StepNum>3</StepNum>
                  <h3>Reward</h3>
                  <p>Get ₹50 in your wallet.</p>
                </StepItem>
                <StepItem>
                  <StepNum>4</StepNum>
                  <h3>Payout</h3>
                  <p>Transfer to bank at ₹500.</p>
                </StepItem>
              </StepsGrid>
            </SectionBlock>

            {/* ── 4. Referral History ── */}
            <SectionBlock>
              <SectionTitle>
                <Users size={16} /> Recent Referrals
              </SectionTitle>
              <HistoryList>
                {isLoading ? (
                  <EmptyState>Fetching data...</EmptyState>
                ) : transactions.length > 0 ? (
                  transactions.map((tx, idx) => (
                    <HistoryItem key={tx.orderId || idx}>
                      <HistoryDetails>
                        <HistoryName>
                          {tx.orderId || `Referral #${idx + 1}`}
                        </HistoryName>
                        <HistoryDate>{formatDate(tx.createdAt)}</HistoryDate>
                        <HistoryMeta>
                          Referred by: {tx.referredBy || "—"}
                        </HistoryMeta>
                      </HistoryDetails>
                      <HistoryAmount>+₹{tx.rewardAmount || 0}</HistoryAmount>
                    </HistoryItem>
                  ))
                ) : (
                  <EmptyState>
                    <EmptyIcon>
                      <Target size={40} strokeWidth={1} />
                    </EmptyIcon>
                    <p>No referrals yet. Start sharing to earn!</p>
                  </EmptyState>
                )}
              </HistoryList>
            </SectionBlock>
          </div>
        </div>
      </div>

      {/* ── Toast Notification ── */}
      {toast && (
        <div
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            background: "var(--surface)",
            padding: "16px 24px",
            borderRadius: "var(--radius)",
            boxShadow: "var(--shadow-lg)",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            zIndex: 1000,
            borderLeft: `4px solid ${toast.type === "success" ? "var(--primary)" : "var(--secondary)"}`,
            animation: "slideIn 0.3s ease",
          }}
        >
          {toast.type === "success" ? (
            <CheckCircle2 color="var(--primary)" size={20} />
          ) : (
            <AlertCircle color="var(--secondary)" size={20} />
          )}
          <span style={{ fontWeight: 600, color: "var(--text-dark)" }}>
            {toast.msg}
          </span>
        </div>
      )}

      {/* Animation Styles */}
      <style>
        {`
          @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
        `}
      </style>
    </PageWrapper>
  );
}
