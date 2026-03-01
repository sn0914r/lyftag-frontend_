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
  margin-bottom: calc(var(--spacing) * 6);
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

export const PageMeta = styled.p`
  font-size: 0.9rem;
  color: var(--text-muted);
  font-weight: 500;
`;

export const PolicySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 3);
`;

export const PolicyParagraph = styled.p`
  font-size: 1rem;
  color: var(--text-dark);
  line-height: 1.8;
  font-weight: 400;

  &:first-of-type {
    font-size: 1.05rem;
    font-weight: 500;
    color: var(--text-dark);
  }
`;
