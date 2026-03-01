import { useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Gift } from "lucide-react";
import { useSignUp } from "../auth.hooks";
import {
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
  ReferralBadge,
  CheckboxRow,
} from "./SignUp.styles";

function SignUp() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const referralFromUrl = searchParams.get("ref") || "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referral, setReferral] = useState(referralFromUrl);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [validationError, setValidationError] = useState("");

  const { mutate: signUp, isPending, error } = useSignUp();

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationError("");

    if (!name || !email || !password || !confirmPassword) {
      setValidationError("Please fill in all required fields.");
      return;
    }
    if (password !== confirmPassword) {
      setValidationError("Passwords do not match.");
      return;
    }
    if (!agreed) {
      setValidationError("You must agree to the Terms & Conditions.");
      return;
    }

    signUp(
      { name, email, password, referredBy: referral || null },
      { onSuccess: () => navigate("/") },
    );
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Title>Create an Account</Title>
      <Subtitle>Scan. Connect. Save Lives.</Subtitle>

      {/* ── Referral badge (shown only when ref param present) ── */}
      {referralFromUrl && (
        <ReferralBadge>
          <Gift size={15} strokeWidth={1.8} />
          You&apos;re signing up with a referral code! Get special benefits.
        </ReferralBadge>
      )}

      {/* ── Name ── */}
      <Label htmlFor="name">Name</Label>
      <Input
        id="name"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoComplete="name"
      />

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
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
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

      {/* ── Confirm Password ── */}
      <Label htmlFor="confirmPassword">Confirm Password</Label>
      <PasswordWrapper>
        <PasswordInput
          id="confirmPassword"
          type={showConfirm ? "text" : "password"}
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          autoComplete="new-password"
        />
        <EyeBtn
          type="button"
          aria-label={showConfirm ? "Hide password" : "Show password"}
          onClick={() => setShowConfirm((v) => !v)}
        >
          {showConfirm ? (
            <EyeOff size={18} strokeWidth={1.8} />
          ) : (
            <Eye size={18} strokeWidth={1.8} />
          )}
        </EyeBtn>
      </PasswordWrapper>

      {/* ── Referral Code ── */}
      <Label htmlFor="referral">
        Referral Code{" "}
        <span style={{ fontWeight: 400, textTransform: "none" }}>
          (optional)
        </span>
      </Label>
      <Input
        id="referral"
        type="text"
        placeholder="Enter referral code if you have one"
        value={referral}
        onChange={(e) => setReferral(e.target.value)}
      />

      {(validationError || error) && (
        <ErrorMsg>{validationError || error?.message}</ErrorMsg>
      )}

      {/* ── Terms checkbox ── */}
      <CheckboxRow>
        <input
          type="checkbox"
          id="terms"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        <label htmlFor="terms">
          I agree to all the{" "}
          <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
        </label>
      </CheckboxRow>

      {/* ── Submit ── */}
      <SubmitBtn type="submit" disabled={isPending}>
        {isPending ? "Creating account…" : "Sign Up"}
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

      {/* ── Login link ── */}
      <BottomText>
        Already have an account? <Link to="/auth">Log In</Link>
      </BottomText>
    </form>
  );
}

export default SignUp;
