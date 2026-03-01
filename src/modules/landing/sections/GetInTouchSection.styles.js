import styled from "@emotion/styled";

export const Section = styled.section`
  padding: calc(var(--spacing) * 10) 0;
  background: var(--light-bg);
`;

export const InnerCard = styled.div`
  background: var(--dark-bg);
  border-radius: calc(var(--radius-lg) * 1.5);
  padding: calc(var(--spacing) * 7) calc(var(--spacing) * 6);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: calc(var(--spacing) * 6);
  align-items: center;
  position: relative;
  overflow: hidden;

  /* top-left glow */
  &::before {
    content: "";
    position: absolute;
    top: -60px;
    left: -60px;
    width: 300px;
    height: 300px;
    background: radial-gradient(
      circle,
      rgba(14, 165, 233, 0.15),
      transparent 70%
    );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: calc(var(--spacing) * 5) calc(var(--spacing) * 4);
    text-align: center;
  }
`;

/* ── Left: headline ── */
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 2);
`;

export const Eyebrow = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--primary);
`;

export const Headline = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 900;
  color: var(--text-white);
  letter-spacing: -0.5px;
  line-height: 1.2;
`;

export const Tagline = styled.p`
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.7;
`;

export const Hashtag = styled.div`
  font-size: 1.4rem;
  font-weight: 900;
  background: var(--gradient-cta);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
`;

/* ── Right: contact links ── */
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 2);
`;
