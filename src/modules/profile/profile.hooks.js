import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthContext } from "../auth/AuthContext";
import {
  getProfileDetails,
  updateProfileDetails,
  createProfileDetails,
} from "./profile.api";

export const useProfileDetails = () => {
  const { user } = useAuthContext();

  return useQuery({
    queryKey: ["profile", "details"],
    queryFn: getProfileDetails,
    staleTime: 0, // Always fetch fresh data on mount (background refetch)
    retry: false, // don't retry on 404 (user has no profile yet)
    enabled: !!user, // Wait until user is logged in
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateProfileDetails,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile", "details"] });
    },
  });
};

export const useCreateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createProfileDetails,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile", "details"] });
    },
  });
};
