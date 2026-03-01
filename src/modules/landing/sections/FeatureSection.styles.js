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
  margin-bottom: calc(var(--spacing) * 6);
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: calc(var(--spacing) * 4);
`;
