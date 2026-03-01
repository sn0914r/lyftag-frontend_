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
  margin-bottom: calc(var(--spacing) * 2);
`;

export const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.05rem;
  color: var(--text-muted);
  margin-bottom: calc(var(--spacing) * 8);
`;

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: calc(var(--spacing) * 4);
  position: relative;

  /* Connector line between cards (desktop only) */
  &::before {
    content: "";
    position: absolute;
    top: 28px; /* center of the StepBadge */
    left: calc(12.5%);
    right: calc(12.5%);
    height: 2px;
    background: var(--gradient-cta);
    opacity: 0.25;
    z-index: 0;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);

    &::before {
      display: none;
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
