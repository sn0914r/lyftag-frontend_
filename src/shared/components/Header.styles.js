import styled from "@emotion/styled";
import { Link } from "react-router-dom";

/* ── Nav Root ── */
export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.96);
  box-shadow: var(--shadow);
  z-index: var(--z-navbar);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: var(--transition-base);
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5%;
  width: 100%;
`;

/* ── Logo ── */
export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: -0.5px;
  background: var(--gradient-logo);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
  cursor: pointer;
  flex-shrink: 0;
`;

/* ── Nav Links ── */
export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: calc(var(--spacing) * 3);
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? "0" : "-100%")};
    height: 100vh;
    width: 80%;
    max-width: 320px;
    background: var(--surface);
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 0;
    box-shadow: -5px 0 25px rgba(0, 0, 0, 0.15);
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
    padding: 80px 24px 32px;
    overflow-y: auto;
  }
`;

export const NavItem = styled.li`
  @media (max-width: 768px) {
    border-bottom: 1px solid var(--border-color);
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 600;
  font-size: 0.95rem;
  padding: calc(var(--spacing) * 1) calc(var(--spacing) * 1.5);
  border-radius: var(--radius);
  transition: var(--transition-base);
  display: block;

  &:hover,
  &:focus-visible {
    color: var(--accent);
    background: linear-gradient(
      90deg,
      rgba(14, 165, 233, 0.06),
      rgba(124, 58, 237, 0.04)
    );
    transform: translateY(-2px);
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 14px 8px;
    border-radius: 0;
    font-size: 1rem;

    &:hover {
      transform: none;
      background: rgba(124, 58, 237, 0.05);
    }
  }
`;

/* ── Auth Buttons (desktop only) ── */
export const AuthButtons = styled.div`
  display: flex;
  gap: calc(var(--spacing) * 1.5);
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LoginBtn = styled(Link)`
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 600;
  font-size: 0.9rem;
  padding: calc(var(--spacing) * 1) calc(var(--spacing) * 2);
  border-radius: var(--radius);
  transition: var(--transition-base);
  cursor: pointer;

  &:hover {
    color: var(--primary);
    background-color: rgba(14, 165, 233, 0.05);
  }
`;

export const SignUpBtn = styled(Link)`
  text-decoration: none;
  background: var(--gradient-cta);
  color: var(--text-white);
  padding: calc(var(--spacing) * 1.2) calc(var(--spacing) * 2.5);
  border-radius: var(--radius);
  font-weight: 600;
  font-size: 0.9rem;
  transition: var(--transition-base);
  box-shadow: var(--shadow-cta);
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-cta-hover);
  }
`;

/* ── User Profile (logged in — desktop only) ── */
export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: calc(var(--spacing) * 1.5);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ProfileBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: calc(var(--spacing) * 1);
  padding: 0 calc(var(--spacing) * 2.5);
  height: 38px;
  border-radius: var(--radius);
  border: 1.5px solid var(--accent);
  background: transparent;
  color: var(--accent);
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: var(--transition-base);
  cursor: pointer;

  svg {
    flex-shrink: 0;
  }

  &:hover {
    background: var(--accent);
    color: var(--text-white);
  }
`;

export const LogoutBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1.5px solid var(--secondary);
  color: var(--secondary);
  padding: 0 calc(var(--spacing) * 2.5);
  height: 38px;
  border-radius: var(--radius);
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  font-family: var(--font-family);
  transition: var(--transition-base);

  &:hover {
    background: var(--secondary);
    color: var(--text-white);
  }
`;

/* ── Sidebar Auth Section (mobile only) ── */
export const SidebarAuthSection = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: calc(var(--spacing) * 1.5);
    margin-top: auto;
    padding-top: calc(var(--spacing) * 3);
    border-top: 1px solid var(--border-color);
  }
`;

export const SidebarLoginBtn = styled(Link)`
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 600;
  font-size: 1rem;
  padding: calc(var(--spacing) * 1.5) calc(var(--spacing) * 2);
  border-radius: var(--radius);
  border: 1.5px solid var(--border-color);
  text-align: center;
  transition: var(--transition-base);
  cursor: pointer;

  &:hover {
    color: var(--primary);
    border-color: var(--primary);
    background-color: rgba(14, 165, 233, 0.05);
  }
`;

export const SidebarSignUpBtn = styled(Link)`
  text-decoration: none;
  background: var(--gradient-cta);
  color: var(--text-white);
  padding: calc(var(--spacing) * 1.5) calc(var(--spacing) * 2);
  border-radius: var(--radius);
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  transition: var(--transition-base);
  box-shadow: var(--shadow-cta);
  cursor: pointer;

  &:hover {
    box-shadow: var(--shadow-cta-hover);
    filter: brightness(1.05);
  }
`;

export const SidebarProfileBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(var(--spacing) * 1);
  text-decoration: none;
  color: var(--accent);
  font-weight: 600;
  font-size: 1rem;
  padding: calc(var(--spacing) * 1.5) calc(var(--spacing) * 2);
  border-radius: var(--radius);
  border: 1.5px solid var(--accent);
  transition: var(--transition-base);
  cursor: pointer;

  &:hover {
    background: var(--accent);
    color: var(--text-white);
  }
`;

export const SidebarLogoutBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1.5px solid var(--secondary);
  color: var(--secondary);
  padding: calc(var(--spacing) * 1.5) calc(var(--spacing) * 2);
  border-radius: var(--radius);
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  font-family: var(--font-family);
  width: 100%;
  transition: var(--transition-base);

  &:hover {
    background: var(--secondary);
    color: var(--text-white);
  }
`;

/* ── Mobile Hamburger ── */
export const MobileMenuBtn = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: calc(var(--spacing) * 0.75);
  border-radius: calc(var(--radius) * 0.5);
  color: var(--text-dark);
  transition: var(--transition-fast);
  z-index: 1001;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

/* ── Mobile Backdrop ── */
export const NavBackdrop = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: opacity 0.3s ease;
`;
