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
  line-height: 1.8;
`;

export const PolicyCard = styled.div`
  background: var(--surface);
  border-radius: var(--radius-lg);
  padding: calc(var(--spacing) * 4);
  box-shadow: var(--shadow);
  border: 1px solid var(--border-color);
`;

export const PolicyList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  counter-reset: refund-counter;
`;

export const PolicyListItem = styled.li`
  font-size: 0.97rem;
  color: var(--text-dark);
  line-height: 1.8;
  padding: calc(var(--spacing) * 2.5) 0 calc(var(--spacing) * 2.5)
    calc(var(--spacing) * 5);
  border-bottom: 1px dashed var(--border-color);
  position: relative;
  counter-increment: refund-counter;

  &:last-child {
    border-bottom: none;
  }

  &::before {
    content: counter(refund-counter);
    position: absolute;
    left: 0;
    top: calc(var(--spacing) * 2.5);
    width: 28px;
    height: 28px;
    background: var(--gradient-accent);
    color: var(--text-white);
    font-size: 0.75rem;
    font-weight: 800;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  strong {
    color: var(--secondary);
    font-weight: 700;
  }
`;
