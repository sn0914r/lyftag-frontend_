import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

/* ── Animations ── */
const gradientText = keyframes`
  0%   { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(20deg); }
`;

const floatUp = keyframes`
  0%   { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

/* ── Hero Wrapper ── */
export const HeroSection = styled.section`
  padding: calc(var(--spacing) * 20) 0 calc(var(--spacing) * 8);
  background: url("https://uploads.onecompiler.io/43xbzkg75/442jh5355/hero%20cooper.webp")
    no-repeat center / cover;
  margin-top: calc(var(--spacing) * 8);
  position: relative;
  overflow: hidden;

  /* Radial gradient overlays */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        circle at 20% 50%,
        rgba(31, 162, 255, 0.18),
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 80%,
        rgba(124, 58, 237, 0.18),
        transparent 50%
      ),
      rgba(0, 0, 0, 0.45);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: calc(var(--spacing) * 16) 0 calc(var(--spacing) * 6);
    margin-top: calc(var(--spacing) * 7);
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  animation: ${floatUp} 0.8s ease both;
`;

/* ── Title ── */
export const HeroBrand = styled.p`
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--text-white);
  margin-bottom: calc(var(--spacing) * 2);
  opacity: 0.8;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 900;
  letter-spacing: -2px;
  background: var(--gradient-logo);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: calc(var(--spacing) * 3);
  line-height: 1.1;
  animation: ${gradientText} 3s ease-in-out infinite alternate;
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(1.1rem, 3vw, 1.4rem);
  color: var(--text-white);
  font-weight: 500;
  line-height: 1.5;
  margin: 0 auto calc(var(--spacing) * 5);
  max-width: 600px;
  opacity: 0.95;
`;

/* ── CTA Buttons ── */
export const HeroCta = styled.div`
  display: flex;
  gap: calc(var(--spacing) * 2);
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: calc(var(--spacing) * 8);
`;

export const PrimaryBtn = styled.button`
  padding: calc(var(--spacing) * 1.5) calc(var(--spacing) * 3);
  font-size: 0.95rem;
  font-weight: 700;
  border-radius: var(--radius);
  cursor: pointer;
  border: none;
  font-family: var(--font-family);
  background: var(--gradient-cta);
  color: var(--text-white);
  box-shadow: var(--shadow-cta);
  transition: var(--transition-medium);

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-cta-hover);
  }

  &:active {
    transform: translateY(0);
    box-shadow: var(--shadow-cta-active);
  }
`;

export const SecondaryBtn = styled.button`
  padding: calc(var(--spacing) * 1.5) calc(var(--spacing) * 3);
  font-size: 0.95rem;
  font-weight: 700;
  border-radius: var(--radius);
  cursor: pointer;
  font-family: var(--font-family);
  background: transparent;
  color: var(--text-white);
  border: 2px solid var(--text-white);
  transition: var(--transition-medium);

  &:hover {
    background: var(--text-white);
    color: var(--text-dark);
    transform: translateY(-3px);
  }
`;

/* ── Stats ── */
export const HeroStats = styled.div`
  display: flex;
  justify-content: center;
  gap: calc(var(--spacing) * 6);
  flex-wrap: wrap;
`;

export const Stat = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 0.5);
  min-width: 120px;
`;

export const StatNumber = styled.div`
  font-size: 2.8rem;
  font-weight: 900;
  background: var(--gradient-logo);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
`;

export const StatLabel = styled.div`
  font-size: 0.85rem;
  color: var(--text-white);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  opacity: 0.9;
`;
