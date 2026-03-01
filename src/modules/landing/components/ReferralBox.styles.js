import styled from "@emotion/styled";

export const BoxWrapper = styled.div`
  background: var(--surface);
  border-radius: var(--radius-lg);
  padding: calc(var(--spacing) * 5);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border-color);
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 3);
`;

export const LinkRow = styled.div`
  display: flex;
  gap: calc(var(--spacing) * 1.5);

  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

export const LinkInput = styled.input`
  flex: 1;
  padding: calc(var(--spacing) * 1.5) calc(var(--spacing) * 2);
  border: 1.5px solid var(--border-color);
  border-radius: var(--radius);
  font-size: 0.92rem;
  font-family: var(--font-family);
  color: var(--text-dark);
  background: var(--light-bg);
  outline: none;
  cursor: default;

  &:focus {
    border-color: var(--primary);
  }
`;

export const ActionBtn = styled.button`
  padding: calc(var(--spacing) * 1.5) calc(var(--spacing) * 3);
  background: var(--gradient-cta);
  color: var(--text-white);
  border: none;
  border-radius: var(--radius);
  font-size: 0.95rem;
  font-weight: 700;
  font-family: var(--font-family);
  cursor: pointer;
  white-space: nowrap;
  box-shadow: var(--shadow-cta);
  transition: var(--transition-medium);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-cta-hover);
  }
`;

export const Note = styled.p`
  font-size: 0.9rem;
  color: var(--text-muted);
  text-align: center;
`;

/* ── Logged-in extras ── */
export const StatsRow = styled.div`
  display: flex;
  gap: calc(var(--spacing) * 5);
  justify-content: center;
  flex-wrap: wrap;
  padding-top: calc(var(--spacing) * 2);
  border-top: 1px dashed var(--border-color);
`;

export const Stat = styled.div`
  text-align: center;
`;

export const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 900;
  background: var(--gradient-cta);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
`;

export const StatLabel = styled.div`
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-top: calc(var(--spacing) * 0.5);
  font-weight: 500;
`;

export const DashboardBtn = styled.button`
  display: flex;
  align-items: center;
  gap: calc(var(--spacing) * 1);
  margin: 0 auto;
  padding: calc(var(--spacing) * 1.5) calc(var(--spacing) * 3);
  background: transparent;
  border: 1.5px solid var(--accent);
  color: var(--accent);
  border-radius: var(--radius);
  font-size: 0.95rem;
  font-weight: 700;
  font-family: var(--font-family);
  cursor: pointer;
  transition: var(--transition-medium);

  &:hover {
    background: var(--accent);
    color: var(--text-white);
  }
`;
