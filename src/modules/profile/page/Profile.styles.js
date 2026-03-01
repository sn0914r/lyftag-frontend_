import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: var(--light-bg);
  padding: calc(var(--spacing) * 5) 0 calc(var(--spacing) * 10);
`;

/* ── Back link ── */
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

/* ── Avatar + name block ── */
export const AvatarBlock = styled.div`
  display: flex;
  align-items: center;
  gap: calc(var(--spacing) * 2);
  padding-bottom: calc(var(--spacing) * 3);
  margin-bottom: calc(var(--spacing) * 3);
  border-bottom: 1px solid var(--border-color);
`;

export const Avatar = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--gradient-cta);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-white);
  flex-shrink: 0;
`;

export const NameStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ProfileName = styled.h1`
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-dark);
  letter-spacing: -0.3px;
`;

export const ProfileEmail = styled.p`
  font-size: 0.83rem;
  color: var(--text-muted);
`;

export const MemberBadge = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: var(--accent);
`;

/* ── Detail rows ── */
export const DetailList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: calc(var(--spacing) * 4);
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: calc(var(--spacing) * 1.75) 0;
  border-bottom: 1px solid var(--border-color);
  gap: calc(var(--spacing) * 2);

  &:first-of-type {
    border-top: 1px solid var(--border-color);
  }
`;

export const RowLabel = styled.span`
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-muted);
`;

export const RowValue = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-dark);
`;

export const EmptyValue = styled.span`
  font-size: 0.85rem;
  color: var(--text-muted);
  font-style: italic;
`;

/* ── Actions ── */
export const ActionsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 1.25);
`;

export const EditBtn = styled.button`
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
  transition: opacity 0.2s;
  &:hover:not(:disabled) {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const LogoutBtn = styled.button`
  width: 100%;
  padding: calc(var(--spacing) * 1.6);
  background: transparent;
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 600;
  font-family: var(--font-family);
  border: 1.5px solid var(--border-color);
  border-radius: var(--radius);
  cursor: pointer;
  transition:
    color 0.2s,
    border-color 0.2s;
  &:hover {
    color: var(--secondary);
    border-color: var(--secondary);
  }
`;

/* ── QR Card ── */
export const QrSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(var(--spacing) * 1.5);
  padding: calc(var(--spacing) * 3) 0;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: calc(var(--spacing) * 3);
`;

export const QrLabel = styled.p`
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const DownloadBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: calc(var(--spacing) * 0.75);
  padding: calc(var(--spacing) * 1) calc(var(--spacing) * 2.5);
  background: transparent;
  color: var(--text-muted);
  font-size: 0.82rem;
  font-weight: 600;
  font-family: var(--font-family);
  border: 1.5px solid var(--border-color);
  border-radius: var(--radius);
  cursor: pointer;
  transition:
    color 0.2s,
    border-color 0.2s;
  &:hover {
    color: var(--accent);
    border-color: var(--accent);
  }
`;

/* ── Blur / Unlock Layer ── */
export const QrOverlay = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QrBlurred = styled.div`
  filter: blur(8px);
  opacity: 0.4;
  user-select: none;
  pointer-events: none;
`;

export const UnlockOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  z-index: 2;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;

export const UnlockText = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-dark);
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: 0.2px;
`;

/* ── Spinner ── */
const spin = keyframes`to { transform: rotate(360deg); }`;
export const Spinner = styled.div`
  width: 32px;
  height: 32px;
  border: 2.5px solid var(--border-color);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  margin: calc(var(--spacing) * 6) auto;
`;
