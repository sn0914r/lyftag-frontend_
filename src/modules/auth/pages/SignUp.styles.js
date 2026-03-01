import styled from "@emotion/styled";

/* ── Re-export everything from Login.styles so SignUp can share them ── */
export {
  Title,
  Subtitle,
  Label,
  Input,
  PasswordWrapper,
  PasswordInput,
  EyeBtn,
  SubmitBtn,
  OrDivider,
  SocialRow,
  SocialBtn,
  BottomText,
  ErrorMsg,
} from "./Login.styles";

/* ── SignUp-only extras ── */
export const ReferralBadge = styled.div`
  display: flex;
  align-items: center;
  gap: calc(var(--spacing) * 1);
  background: linear-gradient(
    135deg,
    rgba(255, 81, 47, 0.08),
    rgba(221, 36, 118, 0.06)
  );
  border: 1px solid rgba(255, 81, 47, 0.25);
  border-radius: var(--radius);
  padding: calc(var(--spacing) * 1.2) calc(var(--spacing) * 1.8);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--secondary);
  margin-bottom: calc(var(--spacing) * 2.5);
`;

export const CheckboxRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: calc(var(--spacing) * 1.2);
  margin-bottom: calc(var(--spacing) * 2.5);
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.5;

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    margin-top: 2px;
    accent-color: var(--accent);
    flex-shrink: 0;
    cursor: pointer;
  }

  a {
    color: var(--accent);
    font-weight: 600;
    text-decoration: none;

    &:hover {
      color: var(--primary);
      text-decoration: underline;
    }
  }
`;
