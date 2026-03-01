import styled from "@emotion/styled";

export const Section = styled.section`
  padding: calc(var(--spacing) * 10) 0;
  background: var(--surface);
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 900;
  letter-spacing: -0.5px;
  color: var(--text-dark);
  text-align: center;
  margin-bottom: calc(var(--spacing) * 1.5);
`;

export const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.05rem;
  color: var(--text-muted);
  margin-bottom: calc(var(--spacing) * 6);
  line-height: 1.7;
`;

export const Highlight = styled.span`
  background: var(--gradient-cta);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
`;

export const CTACard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: calc(var(--spacing) * 2.5);
  padding: calc(var(--spacing) * 5) calc(var(--spacing) * 4);
  background: var(--gradient-surface-cta);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  color: var(--accent);
`;

export const CTAText = styled.p`
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
  max-width: 400px;
  margin: 0;
  font-weight: 500;
`;

export const CTAButton = styled.button`
  background: var(--gradient-cta);
  color: var(--text-white);
  border: none;
  padding: calc(var(--spacing) * 1.5) calc(var(--spacing) * 4);
  border-radius: var(--radius);
  font-size: 0.95rem;
  font-weight: 700;
  font-family: var(--font-family);
  cursor: pointer;
  box-shadow: var(--shadow-cta);
  transition: var(--transition-base);

  &:hover {
    box-shadow: var(--shadow-cta-hover);
    transform: translateY(-1px);
  }

  &:active {
    box-shadow: var(--shadow-cta-active);
    transform: translateY(0);
  }
`;
