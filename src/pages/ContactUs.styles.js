import styled from "@emotion/styled";

export const PageWrapper = styled.main`
  min-height: 100vh;
  background: var(--light-bg);
  padding: calc(var(--spacing) * 4) 0 calc(var(--spacing) * 10);
`;

export const PageContainer = styled.div`
  max-width: 820px;
  margin: 0 auto;
  padding: 0 calc(var(--spacing) * 3);
`;

export const BackBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: calc(var(--spacing) * 0.75);
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-muted);
  padding: calc(var(--spacing) * 0.75) 0;
  margin-bottom: calc(var(--spacing) * 3);
  transition: var(--transition-fast);

  &:hover {
    color: var(--accent);
    transform: translateX(-3px);
  }
`;

export const PageHeader = styled.div`
  margin-bottom: calc(var(--spacing) * 5);
  padding-bottom: calc(var(--spacing) * 4);
  border-bottom: 1px solid var(--border-color);
`;

export const PageTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-weight: 900;
  letter-spacing: -1px;
  background: var(--gradient-logo);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: calc(var(--spacing) * 1.5);
`;

export const PageSubtitle = styled.p`
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.7;
`;

/* ── Contact Cards (Email + Phone) ── */
export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: calc(var(--spacing) * 3);
  margin-bottom: calc(var(--spacing) * 5);
`;

export const ContactCard = styled.div`
  background: var(--surface);
  border-radius: var(--radius-lg);
  padding: calc(var(--spacing) * 4);
  box-shadow: var(--shadow);
  border: 1px solid var(--border-color);
  transition: var(--transition-medium);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`;

export const ContactCardTitle = styled.h3`
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--text-muted);
  margin-bottom: calc(var(--spacing) * 1.5);
`;

export const ContactCardLink = styled.a`
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--primary);
  text-decoration: none;
  transition: var(--transition-fast);

  &:hover {
    color: var(--accent);
    text-decoration: underline;
  }
`;

/* ── Business Info Table ── */
export const InfoSection = styled.div`
  background: var(--surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  border: 1px solid var(--border-color);
  overflow: hidden;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 0.5);
  padding: calc(var(--spacing) * 2.5) calc(var(--spacing) * 3);
  border-bottom: 1px dashed var(--border-color);

  &:last-child {
    border-bottom: none;
  }

  @media (min-width: 560px) {
    flex-direction: row;
    align-items: baseline;
    gap: calc(var(--spacing) * 3);
  }
`;

export const InfoLabel = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--text-muted);
  flex-shrink: 0;
  min-width: 200px;
`;

export const InfoValue = styled.span`
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-dark);
  line-height: 1.6;
`;
