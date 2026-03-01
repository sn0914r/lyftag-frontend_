import styled from "@emotion/styled";

export const CardArticle = styled.article`
  background: var(--surface);
  border-radius: var(--radius-lg);
  padding: calc(var(--spacing) * 5);
  border: 1.5px solid var(--border-color);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 3);
  transition: var(--transition-medium);
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
  }
`;

export const PopularBadge = styled.div`
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--gradient-cta);
  color: var(--text-white);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  padding: 4px 18px;
  border-radius: 20px;
  box-shadow: var(--shadow-cta);
  white-space: nowrap;
`;

export const CardHeader = styled.div`
  text-align: center;
`;

export const PlanName = styled.h3`
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: calc(var(--spacing) * 1.5);
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2px;
`;

export const Currency = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  background: var(--gradient-logo);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-top: 6px;
`;

export const Amount = styled.span`
  font-size: 3.2rem;
  font-weight: 900;
  letter-spacing: -2px;
  background: var(--gradient-logo);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
`;

export const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 1.5);
  flex: 1;
`;

export const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: calc(var(--spacing) * 1.5);
  font-size: 0.92rem;
  color: var(--text-dark);
  font-weight: 500;

  &::before {
    content: "✓";
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    background: var(--gradient-cta);
    color: var(--text-white);
    border-radius: 50%;
    font-size: 0.65rem;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const GetStartedBtn = styled.button`
  width: 100%;
  padding: calc(var(--spacing) * 1.8) calc(var(--spacing) * 3);
  background: ${({ popular }) =>
    popular ? "var(--gradient-cta)" : "transparent"};
  color: ${({ popular }) => (popular ? "var(--text-white)" : "var(--accent)")};
  border: 2px solid
    ${({ popular }) => (popular ? "transparent" : "var(--accent)")};
  border-radius: var(--radius);
  font-size: 1rem;
  font-weight: 700;
  font-family: var(--font-family);
  cursor: pointer;
  transition: var(--transition-medium);
  box-shadow: ${({ popular }) => (popular ? "var(--shadow-cta)" : "none")};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ popular }) =>
      popular ? "var(--shadow-cta-hover)" : "0 4px 16px rgba(124,58,237,0.2)"};
    background: ${({ popular }) =>
      popular ? "var(--gradient-cta)" : "var(--accent)"};
    color: var(--text-white);
    border-color: transparent;
  }
`;
