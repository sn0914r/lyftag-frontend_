import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  min-height: 100vh;
  padding: calc(var(--spacing) * 4) 0 calc(var(--spacing) * 10);
  background: var(--light-bg);

  @media (max-width: 768px) {
    padding-top: calc(var(--spacing) * 3);
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: calc(var(--spacing) * 6);
  padding: 0 var(--spacing);
`;

export const BackLink = styled.button`
  display: inline-flex;
  align-items: center;
  gap: calc(var(--spacing) * 0.75);
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: calc(var(--spacing) * 3);
  cursor: pointer;
  padding: 0;
  font-family: var(--font-family);
  transition: var(--transition-fast);

  &:hover {
    color: var(--accent);
  }
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 6vw, 2.75rem);
  font-weight: 900;
  letter-spacing: -1.5px;
  background: var(--gradient-logo);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--spacing);
`;

export const Subtitle = styled.p`
  font-size: 1.05rem;
  color: var(--text-muted);
  font-weight: 500;
  max-width: 500px;
  margin: 0 auto;
`;

export const Highlight = styled.span`
  color: var(--text-dark);
  font-weight: 800;
`;

export const SectionBlock = styled.section`
  padding: calc(var(--spacing) * 4) 0;
  border-bottom: 1px solid var(--border-color);

  &:last-of-type {
    border-bottom: none;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: calc(var(--spacing) * 3);
  display: flex;
  align-items: center;
  gap: calc(var(--spacing) * 1.25);
`;

/* ── Stats Block (Refactored to be flatter) ── */
export const StatsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: calc(var(--spacing) * 2) 0;
  border-bottom: 1px solid var(--border-color);

  &:last-of-type {
    border-bottom: none;
  }
`;

export const StatLabel = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-muted);
`;

export const StatValue = styled.span`
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--text-dark);
`;

export const WithdrawBtn = styled.button`
  width: 100%;
  margin-top: calc(var(--spacing) * 3);
  background: var(--text-dark);
  color: var(--text-white);
  border: none;
  padding: calc(var(--spacing) * 1.6);
  border-radius: var(--radius);
  font-size: 0.9rem;
  font-weight: 700;
  font-family: var(--font-family);
  cursor: pointer;
  transition: var(--transition-base);

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background: var(--disabled-bg);
    color: var(--text-disabled);
    cursor: not-allowed;
  }
`;

/* ── Referral Link Card ── */
export const ReferBox = styled.div`
  display: flex;
  gap: calc(var(--spacing) * 1.25);
  margin-bottom: calc(var(--spacing) * 3);
  flex-wrap: wrap;
`;

export const ReferInput = styled.input`
  flex: 1;
  min-width: 200px;
  padding: calc(var(--spacing) * 1.5) 0;
  border: none;
  border-bottom: 2px solid var(--border-color);
  background: transparent;
  color: var(--text-dark);
  font-size: 1rem;
  font-weight: 700;
  font-family: var(--font-family);
  transition: var(--transition-base);

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

export const CopyBtn = styled.button`
  background: none;
  border: none;
  color: var(--primary);
  cursor: pointer;
  padding: var(--spacing);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ShareGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: calc(var(--spacing) * 1.5);
  margin-bottom: auto;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ShareBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(var(--spacing) * 1);
  padding: calc(var(--spacing) * 1.25);
  border-radius: var(--radius);
  font-size: 0.85rem;
  font-weight: 700;
  font-family: var(--font-family);
  cursor: pointer;
  border: 1.5px solid var(--border-color);
  background: transparent;
  color: var(--text-dark);
  transition: var(--transition-base);

  &:hover {
    border-color: var(--primary);
    color: var(--primary);
  }
`;

export const InfoBox = styled.div`
  border-left: 3px solid var(--secondary);
  padding: calc(var(--spacing) * 1) calc(var(--spacing) * 2);
  margin-top: calc(var(--spacing) * 3);

  p {
    color: var(--text-muted);
    font-size: 0.8rem;
    line-height: 1.5;
    margin: 0;
    font-style: italic;
  }
`;

/* ── History & Steps ── */
export const HistoryList = styled.div`
  max-height: 380px;
  overflow-y: auto;
  padding-right: calc(var(--spacing) * 1);

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--border-color);
    border-radius: 10px;
  }
`;

export const HistoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: calc(var(--spacing) * 2) 0;
  border-bottom: 1px solid var(--border-color);

  &:last-child {
    border-bottom: none;
  }
`;

export const HistoryDetails = styled.div`
  flex: 1;
`;

export const HistoryName = styled.div`
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 2px;
  font-size: 0.95rem;
`;

export const HistoryDate = styled.div`
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 500;
`;

export const HistoryMeta = styled.div`
  font-size: 0.75rem;
  color: var(--text-muted);
  opacity: 0.7;
  font-family: var(--font-family);
`;

export const HistoryAmount = styled.div`
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--primary);
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: calc(var(--spacing) * 6) 0;
  color: var(--text-muted);
`;

export const EmptyIcon = styled.div`
  margin-bottom: calc(var(--spacing) * 2);
  color: var(--border-color);
  opacity: 0.6;
`;

/* ── How It Works ── */
export const CenterTitle = styled(SectionTitle)`
  justify-content: center;
  font-size: 1.1rem;
  margin-bottom: calc(var(--spacing) * 5);
  color: var(--text-dark);
`;

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: calc(var(--spacing) * 4);
`;

export const StepItem = styled.div`
  text-align: center;
  position: relative;

  h3 {
    color: var(--text-dark);
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: calc(var(--spacing) * 1);
  }

  p {
    color: var(--text-muted);
    font-size: 0.88rem;
    line-height: 1.5;
    margin: 0;
    font-weight: 500;
  }
`;

export const StepNum = styled.div`
  width: 40px;
  height: 40px;
  background: var(--light-bg);
  color: var(--accent);
  border: 2px solid var(--border-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 900;
  margin: 0 auto calc(var(--spacing) * 1.5);
`;
