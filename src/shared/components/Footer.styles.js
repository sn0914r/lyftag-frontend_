import styled from "@emotion/styled";

export const FooterRoot = styled.footer`
  background: var(--dark-bg);
  color: var(--text-white);
  padding: calc(var(--spacing) * 6) 5% calc(var(--spacing) * 3);
  padding-top: calc(var(--spacing) * 6);
`;

export const FooterInner = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: calc(var(--spacing) * 5);
  margin-bottom: calc(var(--spacing) * 5);

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

/* ── Brand column ── */
export const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 1.5);
`;

export const FooterLogo = styled.span`
  font-size: 1.6rem;
  font-weight: 900;
  letter-spacing: -0.5px;
  background: var(--gradient-logo);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const FooterTagline = styled.p`
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.7;
  max-width: 280px;
`;

/* ── Link columns ── */
export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 2);
`;

export const FooterSectionTitle = styled.h4`
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--text-muted);
`;

export const FooterLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 1.2);
`;

export const FooterLink = styled.a`
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.65);
  transition: var(--transition-fast);

  &:hover {
    color: var(--text-white);
    padding-left: 4px;
  }
`;

/* ── Bottom bar ── */
export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: calc(var(--spacing) * 3);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.85rem;
  color: var(--text-muted);
  flex-wrap: wrap;
  gap: calc(var(--spacing) * 1);
`;

export const FooterBottomTagline = styled.span`
  font-weight: 600;
  background: var(--gradient-cta);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
