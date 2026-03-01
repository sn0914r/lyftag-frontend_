import styled from "@emotion/styled";

export const CardRow = styled.a`
  display: flex;
  align-items: center;
  gap: calc(var(--spacing) * 2);
  padding: calc(var(--spacing) * 2) calc(var(--spacing) * 2.5);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  text-decoration: none;
  transition: var(--transition-medium);
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--primary);
    transform: translateX(6px);
  }
`;

export const IconCircle = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--gradient-cta);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--text-white);
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const CardLabel = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--text-muted);
`;

export const CardValue = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-white);
`;
