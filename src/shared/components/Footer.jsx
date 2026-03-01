import { useNavigate } from "react-router-dom";
import {
  FooterRoot,
  FooterInner,
  FooterBrand,
  FooterLogo,
  FooterTagline,
  FooterSection,
  FooterSectionTitle,
  FooterLinks,
  FooterLink,
  FooterBottom,
  FooterBottomTagline,
} from "./Footer.styles";

const SUPPORT_LINKS = [
  { label: "Contact Us", to: "/contact" },
  { label: "Shipping Policy", to: "/shipping-policy" },
  { label: "Refund & Cancellation", to: "/refund-policy" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
];

function Footer() {
  const navigate = useNavigate();

  const handleNav = (e, to) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <FooterRoot>
      <FooterInner>
        {/* ── Brand ── */}
        <FooterBrand>
          <FooterLogo>LYF TAG</FooterLogo>
          <FooterTagline>
            Empowering India with smart digital identity and emergency response
            technology. Safety, simplified.
          </FooterTagline>
        </FooterBrand>

        {/* ── Support ── */}
        <FooterSection>
          <FooterSectionTitle>Support</FooterSectionTitle>
          <FooterLinks>
            {SUPPORT_LINKS.map(({ label, to }) => (
              <li key={to}>
                <FooterLink href={to} onClick={(e) => handleNav(e, to)}>
                  {label}
                </FooterLink>
              </li>
            ))}
          </FooterLinks>
        </FooterSection>

        {/* ── Legal ── */}
        <FooterSection>
          <FooterSectionTitle>Legal</FooterSectionTitle>
          <FooterLinks>
            {LEGAL_LINKS.map(({ label, to }) => (
              <li key={to}>
                <FooterLink href={to} onClick={(e) => handleNav(e, to)}>
                  {label}
                </FooterLink>
              </li>
            ))}
          </FooterLinks>
        </FooterSection>
      </FooterInner>

      {/* ── Bottom bar ── */}
      <FooterBottom>
        <span>© {new Date().getFullYear()} LYF TAG. All rights reserved.</span>
        <FooterBottomTagline>Scan • Connect • Save Lives</FooterBottomTagline>
      </FooterBottom>
    </FooterRoot>
  );
}

export default Footer;
