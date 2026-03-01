import { useQuery } from "@tanstack/react-query";
import { getReferralInfo } from "./referrals.api";

/**
 * Hook to fetch referral info and history.
 */
export const useReferralInfo = () =>
  useQuery({
    queryKey: ["referrals"],
    queryFn: getReferralInfo,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
