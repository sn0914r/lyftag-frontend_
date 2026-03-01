import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const floatOrb = keyframes`
  0%   { transform: translate(0, 0); }
  100% { transform: translate(20px, -20px); }
`;

const gradientShift = keyframes`
  0%   { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(20deg); }
`;

/* ── Wrapper ── */
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

/* ──────────────── LEFT PANEL (form / Outlet) ──────────────── */
export const LeftPanel = styled.div`
  width: 50%;
  background: var(--text-white);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: calc(var(--spacing) * 7);
  position: relative;
  overflow: hidden;

  /* Subtle decorative orbs */
  &::before {
    content: "";
    position: absolute;
    top: -120px;
    right: -120px;
    width: 300px;
    height: 300px;
    background: radial-gradient(
      circle,
      rgba(14, 165, 233, 0.06),
      transparent 70%
    );
    border-radius: 50%;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 260px;
    height: 260px;
    background: radial-gradient(
      circle,
      rgba(124, 58, 237, 0.05),
      transparent 70%
    );
    border-radius: 50%;
    pointer-events: none;
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: calc(var(--spacing) * 5) calc(var(--spacing) * 4);
  }

  @media (max-width: 600px) {
    padding: calc(var(--spacing) * 4) calc(var(--spacing) * 3);
  }
`;

export const FormBox = styled.div`
  width: 100%;
  max-width: 400px;
  position: relative;
  z-index: 1;
`;

/* ──────────────── RIGHT PANEL (brand) ──────────────── */
export const RightPanel = styled.div`
  width: 50%;
  background: linear-gradient(135deg, #0f1419 0%, #1a1a2e 40%, #16213e 100%);
  color: var(--text-white);
  padding: calc(var(--spacing) * 8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  /* Floating orb — top-right */
  &::before {
    content: "";
    position: absolute;
    top: 10%;
    right: -80px;
    width: 350px;
    height: 350px;
    background: radial-gradient(
      circle,
      rgba(124, 58, 237, 0.2),
      transparent 65%
    );
    border-radius: 50%;
    pointer-events: none;
    animation: ${floatOrb} 6s ease-in-out infinite alternate;
  }

  /* Floating orb — bottom-left */
  &::after {
    content: "";
    position: absolute;
    bottom: 5%;
    left: -60px;
    width: 280px;
    height: 280px;
    background: radial-gradient(
      circle,
      rgba(14, 165, 233, 0.15),
      transparent 65%
    );
    border-radius: 50%;
    pointer-events: none;
    animation: ${floatOrb} 8s ease-in-out infinite alternate-reverse;
  }

  @media (max-width: 900px) {
    display: none; /* hidden on mobile */
  }
`;

export const BrandContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 380px;
`;

export const BrandLogo = styled.div`
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: -1px;
  margin-bottom: calc(var(--spacing) * 1.5);
  background: var(--gradient-logo);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${gradientShift} 4s ease-in-out infinite alternate;
`;

export const BrandTagline = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  opacity: 0.9;
  margin-bottom: calc(var(--spacing) * 3.5);
  letter-spacing: 1px;
`;

export const BrandDivider = styled.div`
  width: 60px;
  height: 3px;
  background: var(--gradient-cta);
  border-radius: 3px;
  margin: 0 auto calc(var(--spacing) * 3.5);
`;

export const BrandDesc = styled.p`
  font-size: 0.95rem;
  opacity: 0.65;
  line-height: 1.8;
  margin-bottom: calc(var(--spacing) * 4.5);
  font-weight: 300;
`;

export const BrandFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 1.5);
`;

export const BrandFeatureItem = styled.li`
  font-size: 0.88rem;
  opacity: 0.75;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(var(--spacing) * 1);
`;
