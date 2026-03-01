import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;

  &:hover .hiw-icon-box {
    background: var(--gradient-cta);
    border-color: transparent;
    box-shadow: var(--shadow-cta);
    color: var(--text-white);
  }
`;

export const StepBadge = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--gradient-cta);
  color: var(--text-white);
  font-size: 1.3rem;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: calc(var(--spacing) * 2);
  box-shadow: var(--shadow-cta);
  flex-shrink: 0;
`;

export const IconBox = styled.div`
  width: 72px;
  height: 72px;
  border-radius: var(--radius-lg);
  background: var(--surface);
  border: 1.5px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: calc(var(--spacing) * 2.5);
  box-shadow: var(--shadow);
  color: var(--accent);
  transition: var(--transition-medium);
`;

export const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: calc(var(--spacing) * 1);
  letter-spacing: -0.3px;
`;

export const CardDescription = styled.p`
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.7;
  max-width: 200px;
`;
