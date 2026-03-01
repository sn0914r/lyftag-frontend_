import { useNavigate } from "react-router-dom";
import {
  PageWrapper,
  PageContainer,
  BackBtn,
  PageHeader,
  PageTitle,
  PageSubtitle,
  PolicyContent,
  PolicySection,
  SectionHeading,
  SectionParagraph,
  SectionList,
  SectionListItem,
  ContactBox,
  ContactLine,
} from "./PrivacyAndPolicy.styles";

const SECTIONS = [
  {
    heading: "Information We Collect",
    type: "list",
    items: [
      "Full legal name for identity verification",
      "Active email address for digital tag delivery",
      "Emergency contact phone number",
      "Payment details (processed securely via Cashfree)",
      "Medical or vehicle information required for our services",
    ],
  },
  {
    heading: "How We Use Your Information",
    type: "list",
    items: [
      "To process premium activations and payments",
      "To provide and improve our smart identity services",
      "To communicate critical security updates and support",
    ],
  },
  {
    heading: "Payment Security",
    type: "paragraph",
    text: "Security is our priority. All payments are securely processed through trusted payment gateways. Lyftag does not store your card numbers, UPI PINs, or sensitive banking credentials on our servers.",
  },
];

function PrivacyAndPolicy() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <PageContainer>
        <BackBtn onClick={() => navigate("/")}>← Back to Home</BackBtn>

        <PageHeader>
          <PageTitle>Privacy Policy</PageTitle>
          <PageSubtitle>
            At <strong>Lyftag</strong>, we respect your privacy and are
            committed to protecting your personal information. This policy
            outlines how we handle your data within our elite safety ecosystem.
          </PageSubtitle>
        </PageHeader>

        <PolicyContent>
          {SECTIONS.map(({ heading, type, items, text }) => (
            <PolicySection key={heading}>
              <SectionHeading>{heading}</SectionHeading>
              {type === "list" ? (
                <SectionList>
                  {items.map((item) => (
                    <SectionListItem key={item}>{item}</SectionListItem>
                  ))}
                </SectionList>
              ) : (
                <SectionParagraph>{text}</SectionParagraph>
              )}
            </PolicySection>
          ))}

          {/* ── Contact Support ── */}
          <ContactBox>
            <SectionHeading>Contact Support</SectionHeading>
            <ContactLine>
              <strong>Email:</strong>{" "}
              <a href="mailto:lyftag1794@gmail.com">lyftag1794@gmail.com</a>
            </ContactLine>
            <ContactLine>
              <strong>Phone:</strong>{" "}
              <a href="tel:+919581026463">+91 95810 26463</a>
            </ContactLine>
          </ContactBox>
        </PolicyContent>
      </PageContainer>
    </PageWrapper>
  );
}

export default PrivacyAndPolicy;
