import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signUpUser, loginUser, logoutUser } from "./auth.api";

// ── Sign Up ──────────────────────────────────────────────
export const useSignUp = () =>
  useMutation({
    mutationFn: signUpUser,
  });

// ── Login ────────────────────────────────────────────────
export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      // Invalidate any cached user-related queries after login
      queryClient.invalidateQueries(["user"]);
    },
  });
};

// ── Logout ───────────────────────────────────────────────
export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      // Clear all cached queries on logout
      queryClient.clear();
    },
  });
};
