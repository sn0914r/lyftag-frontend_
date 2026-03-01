import { Globe, Mail, Hash } from "lucide-react";
import GetInTouchCard from "../components/GetInTouchCard";
import {
  Section,
  InnerCard,
  Left,
  Eyebrow,
  Headline,
  Tagline,
  Hashtag,
  Right,
} from "./GetInTouchSection.styles";

const CONTACT_ITEMS = [
  {
    label: "Website",
    display: "www.LYFTAG.in",
    href: "http://www.LYFTAG.in",
    icon: <Globe size={20} strokeWidth={1.8} />,
  },
  {
    label: "Email",
    display: "info@lyftag.in",
    href: "mailto:info@lyftag.in",
    icon: <Mail size={20} strokeWidth={1.8} />,
  },
  {
    label: "Hashtag",
    display: "#BeTheSafeOne",
    icon: <Hash size={20} strokeWidth={1.8} />,
  },
];

function GetInTouchSection() {
  return (
    <Section id="contact" aria-labelledby="contact-title">
      <div className="container">
        <InnerCard>
          {/* ── Left: headline ── */}
          <Left>
            <Eyebrow>Contact Us</Eyebrow>
            <Headline id="contact-title">Get In Touch</Headline>
            <Tagline>
              Together, let&apos;s make India safer — with Grace.
            </Tagline>
            <Hashtag>#BeTheSafeOne</Hashtag>
          </Left>

          {/* ── Right: contact rows ── */}
          <Right>
            {CONTACT_ITEMS.map(({ label, display, href, icon }) => (
              <GetInTouchCard
                key={label}
                label={label}
                display={display}
                href={href}
                icon={icon}
              />
            ))}
          </Right>
        </InnerCard>
      </div>
    </Section>
  );
}

export default GetInTouchSection;
