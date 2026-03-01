import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";
import PriceCard from "../components/PriceCards";
import { usePaymentCheckout } from "../../payments/payment.hooks";
import {
  Section,
  SectionTitle,
  SectionSubtitle,
  CardsGrid,
} from "./PricingSection.styles";

const PLANS = [
  {
    plan: "BASIC",
    price: "99",
    popular: false,
    features: [
      "QR Code Access",
      "One-Tap SOS",
      "5 Emergency Contacts",
      "GPS Location Sharing",
      "Insurance Claims (₹3L – ₹5L)",
    ],
  },
  {
    plan: "TEST",
    price: "1",
    popular: true,
    features: [
      "Everything in Basic",
      "Cloud Dashboard",
      "Blood Donors Network",
      "Health ID Storage",
      "Blockchain Vault",
      "Insurance Claims (₹8L – ₹10L)",
    ],
  },
];

function PricingSection() {
  const navigate = useNavigate();
  const { mutate: checkout, isPending } = usePaymentCheckout();
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleGetStarted = (planId) => {
    // Basic plan identifier logic (e.g. "Basic Tag" -> "basic"

    console.log("Plan ID", planId)

    checkout(planId, {
      onSuccess: (data) => {
        if (data.status === "success") {
          showToast("Payment Successful! Welcome to LYF TAG.", "success");
          // Redirect to profile or success page after brief delay
          setTimeout(() => navigate("/profile"), 2000);
        }
      },
      onError: (error) => {
        showToast(
          error.message || "Checkout failed. Please try again.",
          "error",
        );
      },
    });
  };

  return (
    <Section id="packages" aria-labelledby="pricing-title">
      <div className="container">
        <SectionTitle id="pricing-title">Pricing</SectionTitle>
        <SectionSubtitle>
          Simple, transparent pricing. No hidden charges.
        </SectionSubtitle>
        <CardsGrid>
          {PLANS.map(({ plan, price, popular, features }) => (
            <PriceCard
              key={plan}
              plan={plan}
              price={price}
              popular={popular}
              features={features}
              onGetStarted={() => handleGetStarted(plan)}
            />
          ))}
        </CardsGrid>
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
            <XCircle color="var(--secondary)" size={20} />
          )}
          <span style={{ fontWeight: 600, color: "var(--text-dark)" }}>
            {toast.msg}
          </span>
        </div>
      )}

      {/* ── Global Loading State ── */}
      {isPending && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(4px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
            gap: "16px",
          }}
        >
          <Loader2 className="spinner" size={40} color="var(--primary)" />
          <span style={{ fontWeight: 700, color: "var(--text-dark)" }}>
            Initializing Secure Checkout...
          </span>
        </div>
      )}

      <style>
        {`
          @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          .spinner {
            animation: rotate 1s linear infinite;
          }
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </Section>
  );
}

export default PricingSection;
