import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const spin = keyframes`to { transform: rotate(360deg); }`;

export const Page = styled.div`
  min-height: 100vh;
  background: #fff;
  padding: 48px 24px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const Brand = styled.p`
  font-size: 0.75rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #111;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
`;

export const OwnerName = styled.h1`
  font-size: 1.8rem;
  font-weight: 400;
  color: #111;
  text-align: center;
  margin-bottom: 24px;
  letter-spacing: -0.5px;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 0 0 24px;
`;

/* ── Timeline field list ── */
export const FieldList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 32px;
`;

export const FieldRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const FieldNum = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: #f3f4f6;
  color: #6b7280;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 2px;
`;

export const FieldContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  gap: 12px;
  border-bottom: 1px dashed #e5e7eb;
  padding-bottom: 8px;
`;

export const FieldKey = styled.span`
  font-size: 0.85rem;
  color: #6b7280;
  font-weight: 400;
  white-space: nowrap;
`;

export const FieldVal = styled.span`
  font-size: 0.95rem;
  color: #111;
  font-weight: 400;
  text-align: right;
  word-break: break-all;
`;

export const BloodVal = styled(FieldVal)`
  color: #dc2626;
  font-weight: 700;
  font-size: 1.1rem;
`;

/* ── Actions ── */
export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CallBtn = styled.a`
  display: block;
  width: 100%;
  padding: 16px;
  background: #111;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-align: center;
  text-decoration: none;
  border: 1px solid #111;
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.8;
    color: #fff;
  }
  &[aria-disabled="true"] {
    opacity: 0.3;
    pointer-events: none;
  }
`;

export const SosBtn = styled.a`
  display: block;
  width: 100%;
  padding: 16px;
  background: #fff;
  color: #dc2626;
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-align: center;
  text-decoration: none;
  border: 1px solid #dc2626;
  transition:
    background 0.15s,
    color 0.15s;

  &:hover {
    background: #dc2626;
    color: #fff;
  }
`;

/* ── States ── */
export const Spinner = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid #e5e7eb;
  border-top-color: #111;
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
  margin: 60px auto;
`;

export const ErrorBox = styled.div`
  padding: 60px 0;
  text-align: center;
`;

export const ErrorTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 400;
  color: #111;
  margin-bottom: 12px;
`;

export const ErrorText = styled.p`
  font-size: 0.85rem;
  color: #6b7280;
  margin-bottom: 24px;
  line-height: 1.5;
`;

export const RetryBtn = styled.button`
  padding: 12px 28px;
  background: #111;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 400;
  border: none;
  cursor: pointer;
  transition: opacity 0.15s;
  &:hover {
    opacity: 0.8;
  }
`;
