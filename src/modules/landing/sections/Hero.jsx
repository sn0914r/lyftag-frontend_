import { useNavigate } from "react-router-dom";
import {
  HeroSection,
  HeroContent,
  HeroBrand,
  HeroTitle,
  HeroSubtitle,
  HeroCta,
  PrimaryBtn,
  SecondaryBtn,
  HeroStats,
  Stat,
  StatNumber,
  StatLabel,
} from "./Hero.styles";

const STATS = [
  { number: "1.5L+", label: "Road Deaths / Year" },
  { number: "80%", label: "Delay Reduction" },
  { number: "5L+", label: "Target Users 2026" },
];

function Hero() {
  const navigate = useNavigate();

  return (
    <HeroSection id="home" aria-labelledby="hero-title">
      <div className="container">
        <HeroContent>
          <HeroBrand>LYF TAG</HeroBrand>
          <HeroTitle id="hero-title">
            Scan. Connect. <br /> Save Lives.
          </HeroTitle>
          <HeroSubtitle>
            A high-speed emergency response network for vehicle owners. Get
            instant medical assistance and notify family when every second
            counts.
          </HeroSubtitle>

          <HeroCta>
            <PrimaryBtn onClick={() => navigate("/#packages")}>
              Get Started
            </PrimaryBtn>
            <SecondaryBtn onClick={() => navigate("/#features")}>
              Learn More
            </SecondaryBtn>
          </HeroCta>

          <HeroStats>
            {STATS.map(({ number, label }) => (
              <Stat key={label}>
                <StatNumber>{number}</StatNumber>
                <StatLabel>{label}</StatLabel>
              </Stat>
            ))}
          </HeroStats>
        </HeroContent>
      </div>
    </HeroSection>
  );
}

export default Hero;
