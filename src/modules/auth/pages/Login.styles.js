import styled from "@emotion/styled";

export const Title = styled.h2`
  font-size: 1.85rem;
  font-weight: 900;
  color: var(--text-dark);
  margin-bottom: calc(var(--spacing) * 0.75);
  letter-spacing: -0.5px;
`;

export const Subtitle = styled.p`
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: calc(var(--spacing) * 3.5);
  font-weight: 400;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: calc(var(--spacing) * 0.75);
  font-size: 0.8rem;
  color: var(--text-dark);
  font-weight: 700;
  letter-spacing: 0.3px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  width: 100%;
  padding: calc(var(--spacing) * 1.6) calc(var(--spacing) * 2);
  border-radius: var(--radius);
  border: 1.5px solid var(--border-color);
  margin-bottom: calc(var(--spacing) * 2.5);
  font-size: 0.9rem;
  font-family: var(--font-family);
  outline: none;
  background: var(--light-bg);
  color: var(--text-dark);
  transition:
    border 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;

  &::placeholder {
    color: #9ca3af;
    font-weight: 400;
  }

  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.12);
    background: #fff;
  }
`;

/* ── Password wrapper ── */
export const PasswordWrapper = styled.div`
  position: relative;
  margin-bottom: calc(var(--spacing) * 2.5);
`;

export const PasswordInput = styled(Input)`
  margin-bottom: 0;
  padding-right: calc(var(--spacing) * 5.5);
`;

export const EyeBtn = styled.button`
  position: absolute;
  right: calc(var(--spacing) * 1.5);
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  transition: color 0.2s;

  &:hover {
    color: var(--text-dark);
  }
`;

/* ── Forgot row ── */
export const RowBetween = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: calc(var(--spacing) * 0.5) 0 calc(var(--spacing) * 2.75);
`;

export const ForgotLink = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--accent);
  font-family: var(--font-family);
  padding: 0;
  transition: color 0.2s;

  &:hover {
    color: var(--primary);
    text-decoration: underline;
  }
`;

/* ── Primary CTA ── */
export const SubmitBtn = styled.button`
  width: 100%;
  padding: calc(var(--spacing) * 1.75);
  background: var(--gradient-cta);
  color: var(--text-white);
  font-size: 0.95rem;
  font-weight: 700;
  font-family: var(--font-family);
  border-radius: var(--radius);
  border: none;
  cursor: pointer;
  margin-bottom: calc(var(--spacing) * 2.75);
  box-shadow: var(--shadow-cta);
  transition:
    transform 0.15s ease,
    box-shadow 0.25s ease;
  letter-spacing: 0.3px;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: var(--shadow-cta-hover);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

/* ── OR divider ── */
export const OrDivider = styled.div`
  text-align: center;
  margin: calc(var(--spacing) * 1) 0 calc(var(--spacing) * 2.5);
  color: var(--text-muted);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 38%;
    height: 1px;
    background: var(--border-color);
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

/* ── Social buttons ── */
export const SocialRow = styled.div`
  display: flex;
  gap: calc(var(--spacing) * 1.5);
  margin-bottom: calc(var(--spacing) * 2.5);
`;

export const SocialBtn = styled.button`
  flex: 1;
  padding: calc(var(--spacing) * 1.5);
  border-radius: var(--radius);
  border: 1.5px solid var(--border-color);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(var(--spacing) * 1);
  font-size: 0.88rem;
  font-weight: 600;
  font-family: var(--font-family);
  color: var(--text-dark);
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover:not(:disabled) {
    border-color: var(--primary);
    background: rgba(14, 165, 233, 0.04);
    transform: translateY(-1px);
    box-shadow: var(--shadow);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: #f3f4f6;
  }
`;

/* ── Bottom link ── */
export const BottomText = styled.p`
  text-align: center;
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-top: calc(var(--spacing) * 1);

  a {
    color: var(--accent);
    font-weight: 700;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: var(--primary);
      text-decoration: underline;
    }
  }
`;

export const ErrorMsg = styled.p`
  font-size: 0.82rem;
  color: var(--secondary);
  font-weight: 600;
  margin-top: calc(var(--spacing) * -1.5);
  margin-bottom: calc(var(--spacing) * 1.5);
`;
