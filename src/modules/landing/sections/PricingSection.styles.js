import styled from "@emotion/styled";

export const Section = styled.section`
  padding: calc(var(--spacing) * 10) 0;
  background: var(--light-bg);
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

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 420px));
  gap: calc(var(--spacing) * 5);
  justify-content: center;
  align-items: start;
`;
