import { Outlet } from "react-router-dom";
import {
  Wrapper,
  LeftPanel,
  FormBox,
  RightPanel,
  BrandContent,
  BrandLogo,
  BrandTagline,
  BrandDivider,
  BrandDesc,
  BrandFeatures,
  BrandFeatureItem,
} from "./AuthLayout.styles";

import { QrCode, Heart, Car, LayoutDashboard } from "lucide-react";

const BRAND_FEATURES = [
  {
    icon: <QrCode size={15} strokeWidth={1.8} />,
    text: "Instant QR-based emergency access",
  },
  {
    icon: <Heart size={15} strokeWidth={1.8} />,
    text: "Health ID for first responders",
  },
  {
    icon: <Car size={15} strokeWidth={1.8} />,
    text: "Vehicle & document vault",
  },
  {
    icon: <LayoutDashboard size={15} strokeWidth={1.8} />,
    text: "Cloud dashboard — one tap away",
  },
];

function AuthLayout() {
  return (
    <Wrapper>
      {/* ── Left: form (Outlet) ── */}
      <LeftPanel>
        <FormBox>
          <Outlet />
        </FormBox>
      </LeftPanel>

      {/* ── Right: brand panel ── */}
      <RightPanel>
        <BrandContent>
          <BrandLogo>LYF TAG</BrandLogo>
          <BrandTagline>Scan · Connect · Save Lives</BrandTagline>
          <BrandDivider />
          <BrandDesc>
            India's elite smart identity &amp; emergency response platform. Your
            safety companion — always on, always with you.
          </BrandDesc>
          <BrandFeatures>
            {BRAND_FEATURES.map(({ icon, text }) => (
              <BrandFeatureItem key={text}>
                {icon} {text}
              </BrandFeatureItem>
            ))}
          </BrandFeatures>
        </BrandContent>
      </RightPanel>
    </Wrapper>
  );
}

export default AuthLayout;
