import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useLogin } from "../auth.hooks";
import {
  Title,
  Subtitle,
  Label,
  Input,
  PasswordWrapper,
  PasswordInput,
  EyeBtn,
  RowBetween,
  ForgotLink,
  SubmitBtn,
  OrDivider,
  SocialRow,
  SocialBtn,
  BottomText,
  ErrorMsg,
} from "./Login.styles";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { mutate: login, isPending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    login({ email, password }, { onSuccess: () => navigate("/") });
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Title>Welcome Back!</Title>
      <Subtitle>Scan. Connect. Save Lives.</Subtitle>

      {/* ── Email ── */}
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="email"
      />

      {/* ── Password ── */}
      <Label htmlFor="password">Password</Label>
      <PasswordWrapper>
        <PasswordInput
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <EyeBtn
          type="button"
          aria-label={showPassword ? "Hide password" : "Show password"}
          onClick={() => setShowPassword((v) => !v)}
        >
          {showPassword ? (
            <EyeOff size={18} strokeWidth={1.8} />
          ) : (
            <Eye size={18} strokeWidth={1.8} />
          )}
        </EyeBtn>
      </PasswordWrapper>

      {error && <ErrorMsg>{error.message}</ErrorMsg>}

      {/* ── Forgot password ── */}
      <RowBetween>
        <ForgotLink type="button">Forgot password?</ForgotLink>
      </RowBetween>

      {/* ── Submit ── */}
      <SubmitBtn type="submit" disabled={isPending}>
        {isPending ? "Logging in…" : "Log In"}
      </SubmitBtn>

      {/* ── Social ── */}
      <OrDivider>Or</OrDivider>
      <SocialRow>
        <SocialBtn type="button" disabled>
          <span style={{ fontSize: "1rem", fontWeight: 800 }}>G</span> Google
        </SocialBtn>
        <SocialBtn type="button" disabled>
          <span style={{ fontSize: "1rem", fontWeight: 800 }}>f</span> Facebook
        </SocialBtn>
      </SocialRow>

      {/* ── Sign up link ── */}
      <BottomText>
        Don&apos;t have an account? <Link to="/auth/signup">Sign Up</Link>
      </BottomText>
    </form>
  );
}

export default Login;
