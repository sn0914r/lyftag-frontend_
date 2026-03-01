import apiClient from "../../libs/apiClient";
import { auth } from "../../configs/firebase.config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const syncUserWithBackend = async (name = null, referredBy = null) => {
  const user = auth.currentUser;
  if (!user) return;

  const token = await user.getIdToken();

  return apiClient.post(
    "/auth/sync-user",
    {
      name, // backend reads from req.body.name
      referredBy: referredBy || "NO_REFERRAL",
    },
    { Authorization: `Bearer ${token}` },
  );
};

export const signUpUser = async ({
  name,
  email,
  password,
  referredBy = null,
}) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  if (name) await updateProfile(user, { displayName: name });
  return syncUserWithBackend(name, referredBy);
};

export const loginUser = ({ email, password }) =>
  signInWithEmailAndPassword(auth, email, password);

export const logoutUser = () => auth.signOut();
