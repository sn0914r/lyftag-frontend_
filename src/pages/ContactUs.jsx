import { useNavigate } from "react-router-dom";
import {
  PageWrapper,
  PageContainer,
  BackBtn,
  PageHeader,
  PageTitle,
  PageSubtitle,
  ContactGrid,
  ContactCard,
  ContactCardTitle,
  ContactCardLink,
  InfoSection,
  InfoItem,
  InfoLabel,
  InfoValue,
} from "./ContactUs.styles";

const CONTACT_CARDS = [
  {
    title: "Email",
    display: "lyftag1794@gmail.com",
    href: "mailto:lyftag1794@gmail.com",
  },
  {
    title: "Phone",
    display: "+91 9581026463",
    href: "tel:+919581026463",
  },
];

const BUSINESS_INFO = [
  {
    label: "Merchant Legal Entity Name",
    value: "SANJAY KUMAR JUTTUGA",
  },
  {
    label: "Registered Address",
    value:
      "6-38-2/2, L V Nagar, Near Drivers Colony, VTC Gajuwaka, Visakhapatnam, Andhra Pradesh – 530026, India",
  },
  {
    label: "Operational Address",
    value:
      "6-38-2/2, L V Nagar, Near Drivers Colony, VTC Gajuwaka, Visakhapatnam, Andhra Pradesh – 530026, India",
  },
  { label: "Telephone Number", value: "+91 9581026463" },
  { label: "E-Mail ID", value: "lyftag1794@gmail.com" },
];

function ContactUs() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <PageContainer>
        <BackBtn onClick={() => navigate("/")}>← Back to Home</BackBtn>

        <PageHeader>
          <PageTitle>Contact Us</PageTitle>
          <PageSubtitle>
            For any queries, support, or payment related concerns, please reach
            out to us.
          </PageSubtitle>
        </PageHeader>

        {/* ── Quick Contact Cards ── */}
        <ContactGrid>
          {CONTACT_CARDS.map(({ title, display, href }) => (
            <ContactCard key={title}>
              <ContactCardTitle>{title}</ContactCardTitle>
              <ContactCardLink href={href}>{display}</ContactCardLink>
            </ContactCard>
          ))}
        </ContactGrid>

        {/* ── Business Info ── */}
        <InfoSection>
          {BUSINESS_INFO.map(({ label, value }) => (
            <InfoItem key={label}>
              <InfoLabel>{label}</InfoLabel>
              <InfoValue>{value}</InfoValue>
            </InfoItem>
          ))}
        </InfoSection>
      </PageContainer>
    </PageWrapper>
  );
}

export default ContactUs;
