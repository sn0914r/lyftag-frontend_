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
} from "./ShippingPolicy.styles";

const SECTIONS = [
  {
    heading: "Delivery Method",
    type: "list",
    items: [
      "Digital access via secure dashboard",
      "Email communication for service activation",
      "Instant QR-based downloadable assets",
    ],
  },
  {
    heading: "Activation Timeline",
    type: "paragraph",
    text: "All services are activated within 24–48 hours after successful payment confirmation.",
  },
  {
    heading: "No Physical Shipping",
    type: "paragraph",
    text: "Lyftag does not offer courier shipping, paper documentation via post, or Cash-on-Delivery (COD) services. All deliverables are managed digitally.",
  },
];

function ShippingPolicy() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <PageContainer>
        <BackBtn onClick={() => navigate("/")}>← Back to Home</BackBtn>

        <PageHeader>
          <PageTitle>Shipping &amp; Delivery Policy</PageTitle>
          <PageSubtitle>
            Lyftag operates as a digital service platform. We do not provide
            physical shipping or courier-based deliveries.
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

          <ContactBox>
            <SectionHeading>Need Help?</SectionHeading>
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

export default ShippingPolicy;
