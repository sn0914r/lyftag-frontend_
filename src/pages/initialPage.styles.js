import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;
  background: var(--dark-bg);
  gap: calc(var(--spacing-unit) * 5);
  animation: ${fadeIn} 0.6s ease-out;
`;

export const Brand = styled.h1`
  font-family: var(--font-family);
  font-weight: 800;
  font-size: 2.8rem;
  letter-spacing: -0.5px;
  background: var(--gradient-logo);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
`;

export const Spinner = styled.div`
  width: 28px;
  height: 28px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export const LoadingText = styled.p`
  font-family: var(--font-family);
  font-size: 0.85rem;
  font-weight: 400;
  color: var(--text-muted);
  margin: 0;
  animation: ${pulse} 1.8s ease-in-out infinite;
`;
