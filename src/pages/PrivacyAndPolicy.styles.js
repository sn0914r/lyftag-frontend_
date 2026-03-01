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

  strong {
    color: var(--text-dark);
    font-weight: 700;
  }
`;

/* ── Content sections ── */
export const PolicyContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 4);
`;

export const PolicySection = styled.div`
  background: var(--surface);
  border-radius: var(--radius-lg);
  padding: calc(var(--spacing) * 4);
  box-shadow: var(--shadow);
  border: 1px solid var(--border-color);
`;

export const SectionHeading = styled.h2`
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--accent);
  margin-bottom: calc(var(--spacing) * 2.5);
  letter-spacing: -0.3px;
`;

export const SectionParagraph = styled.p`
  font-size: 0.97rem;
  color: var(--text-dark);
  line-height: 1.8;
`;

export const SectionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 1.5);
`;

export const SectionListItem = styled.li`
  font-size: 0.97rem;
  color: var(--text-dark);
  line-height: 1.7;
  padding-left: calc(var(--spacing) * 3);
  position: relative;

  &::before {
    content: "✓";
    position: absolute;
    left: 0;
    font-size: 0.8rem;
    font-weight: 800;
    color: var(--primary);
  }
`;

/* ── Contact box (highlighted) ── */
export const ContactBox = styled(PolicySection)`
  background: var(--gradient-surface-primary);
  border-color: var(--primary);
`;

export const ContactLine = styled.p`
  font-size: 0.97rem;
  color: var(--text-dark);
  line-height: 2;

  strong {
    font-weight: 700;
    color: var(--accent);
  }

  a {
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;
