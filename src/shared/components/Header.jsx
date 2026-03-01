import { useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import {
  Nav,
  NavContent,
  Logo,
  NavLinks,
  NavItem,
  NavLink,
  AuthButtons,
  LoginBtn,
  SignUpBtn,
  UserProfile,
  ProfileBtn,
  LogoutBtn,
  MobileMenuBtn,
  NavBackdrop,
  SidebarAuthSection,
  SidebarLoginBtn,
  SidebarSignUpBtn,
  SidebarProfileBtn,
  SidebarLogoutBtn,
} from "./Header.styles";
import { useAuthContext } from "../../modules/auth/AuthContext";
import { useLogout } from "../../modules/auth/auth.hooks";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/#features" },
  { label: "Pricing", to: "/#packages" },
  { label: "Refer & Earn", to: "/#referral" },
  { label: "Contact", to: "/contact" },
];

function Header() {
  const { user } = useAuthContext();
  const { mutate: logout } = useLogout();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const handleLinkClick = useCallback(
    (to) => {
      closeMenu();
      // External hash links on same page
      if (to.startsWith("/#")) {
        const id = to.slice(2);
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          navigate("/");
        }
        return;
      }
      navigate(to);
    },
    [closeMenu, navigate],
  );

  const handleLogout = useCallback(() => {
    closeMenu();
    logout();
  }, [closeMenu, logout]);

  return (
    <>
      <Nav aria-label="Primary navigation">
        <NavContent>
          {/* ── Logo ── */}
          <Logo onClick={() => handleLinkClick("/")}>LYF TAG</Logo>

          {/* ── Hamburger (mobile only) ── */}
          <MobileMenuBtn
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
          >
            {menuOpen ? (
              <X size={22} strokeWidth={2} />
            ) : (
              <Menu size={22} strokeWidth={2} />
            )}
          </MobileMenuBtn>

          {/* ── Nav Links ── */}
          <NavLinks id="primary-nav" open={menuOpen} role="menu">
            {NAV_LINKS.map(({ label, to }) => (
              <NavItem key={to} role="none">
                <NavLink
                  role="menuitem"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(to);
                  }}
                  href={to}
                >
                  {label}
                </NavLink>
              </NavItem>
            ))}

            {/* ── Sidebar auth (mobile only) ── */}
            <SidebarAuthSection>
              {user ? (
                <>
                  <SidebarProfileBtn to="/profile" onClick={closeMenu}>
                    <User size={16} strokeWidth={2.5} />
                    Profile
                  </SidebarProfileBtn>
                  <SidebarLogoutBtn type="button" onClick={handleLogout}>
                    Logout
                  </SidebarLogoutBtn>
                </>
              ) : (
                <>
                  <SidebarLoginBtn to="/auth" onClick={closeMenu}>
                    Login
                  </SidebarLoginBtn>
                  <SidebarSignUpBtn to="/auth/signup" onClick={closeMenu}>
                    Sign Up
                  </SidebarSignUpBtn>
                </>
              )}
            </SidebarAuthSection>
          </NavLinks>

          {/* ── Auth / Profile ── */}
          {user ? (
            <UserProfile>
              <ProfileBtn to="/profile" onClick={closeMenu}>
                <User size={16} strokeWidth={2.5} />
                Profile
              </ProfileBtn>
              <LogoutBtn type="button" onClick={handleLogout}>
                Logout
              </LogoutBtn>
            </UserProfile>
          ) : (
            <AuthButtons>
              <LoginBtn to="/auth" onClick={closeMenu}>
                Login
              </LoginBtn>
              <SignUpBtn to="/auth/signup" onClick={closeMenu}>
                Sign Up
              </SignUpBtn>
            </AuthButtons>
          )}
        </NavContent>
      </Nav>

      {/* ── Mobile backdrop ── */}
      <NavBackdrop open={menuOpen} onClick={closeMenu} aria-hidden="true" />
    </>
  );
}

export default Header;
