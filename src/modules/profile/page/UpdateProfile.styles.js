import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: var(--light-bg);
  padding: calc(var(--spacing) * 8) 0;
`;

export const FormCard = styled.div`
  background: var(--surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  padding: calc(var(--spacing) * 5) calc(var(--spacing) * 5);
  width: 100%;
  max-width: 480px;
`;

export const BackLink = styled.button`
  display: inline-flex;
  align-items: center;
  gap: calc(var(--spacing) * 0.75);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-bottom: calc(var(--spacing) * 4);
  font-family: var(--font-family);
  transition: color 0.2s;

  &:hover {
    color: var(--accent);
  }
`;

export const Title = styled.h1`
  font-size: 1.45rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: calc(var(--spacing) * 0.5);
  letter-spacing: -0.4px;
`;

export const Subtitle = styled.p`
  font-size: 0.88rem;
  color: var(--text-muted);
  margin-bottom: calc(var(--spacing) * 4);
  line-height: 1.5;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 0.6);
  margin-bottom: calc(var(--spacing) * 3);
`;

export const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted);
`;

export const Input = styled.input`
  width: 100%;
  padding: calc(var(--spacing) * 1.2) 0;
  border: none;
  border-bottom: 1.5px solid var(--border-color);
  border-radius: 0;
  font-size: 1rem;
  font-family: var(--font-family);
  color: var(--text-dark);
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: var(--text-muted);
    opacity: 0.5;
  }
  &:focus {
    outline: none;
    border-bottom-color: var(--accent);
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: calc(var(--spacing) * 1.2) 0;
  border: none;
  border-bottom: 1.5px solid var(--border-color);
  border-radius: 0;
  font-size: 1rem;
  font-family: var(--font-family);
  color: var(--text-dark);
  background: transparent;
  appearance: none;
  cursor: pointer;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-bottom-color: var(--accent);
  }
`;

export const ErrorMsg = styled.p`
  font-size: 0.83rem;
  font-weight: 600;
  color: var(--secondary);
  margin-bottom: calc(var(--spacing) * 1.5);
`;

export const SuccessMsg = styled.p`
  font-size: 0.83rem;
  font-weight: 600;
  color: #16a34a;
  margin-bottom: calc(var(--spacing) * 1.5);
`;

export const SubmitBtn = styled.button`
  width: 100%;
  padding: calc(var(--spacing) * 1.6);
  background: var(--text-dark);
  color: var(--text-white);
  font-size: 0.9rem;
  font-weight: 600;
  font-family: var(--font-family);
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  margin-top: calc(var(--spacing) * 2);
  transition: opacity 0.2s;

  &:hover:not(:disabled) {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;
