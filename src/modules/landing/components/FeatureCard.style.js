import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  background: var(--surface);
  padding: calc(var(--spacing) * 4);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  text-align: center;
  transition: var(--transition-medium);
  border: 1px solid var(--border-color);
  cursor: default;

  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
    border-color: transparent;
  }

  &:hover .card-icon {
    background: var(--gradient-cta);
  }

  &:hover .card-icon svg {
    color: var(--text-white);
  }
`;

export const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto calc(var(--spacing) * 2.5);
  border-radius: var(--radius-lg);
  background: var(--gradient-surface-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition-medium);

  svg {
    color: var(--accent);
    transition: var(--transition-medium);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: calc(var(--spacing) * 1);
  letter-spacing: -0.3px;
`;

export const CardDescription = styled.p`
  font-size: 0.92rem;
  color: var(--text-muted);
  line-height: 1.7;
`;
