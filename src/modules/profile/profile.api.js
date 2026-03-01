import apiClient from "../../libs/apiClient";
import { auth } from "../../configs/firebase.config";

const getAuthHeader = async () => {
  const token = await auth.currentUser.getIdToken();
  return { Authorization: `Bearer ${token}` };
};

export const getProfileDetails = async () => {
  const headers = await getAuthHeader();
  return apiClient.get("/vehicle-details/get", headers);
};

export const updateProfileDetails = (payload) =>
  auth.currentUser.getIdToken().then((token) =>
    apiClient.put("/vehicle-details/update", payload, {
      Authorization: `Bearer ${token}`,
    }),
  );

export const createProfileDetails = (payload) =>
  auth.currentUser.getIdToken().then((token) =>
    apiClient.post("/vehicle-details/add", payload, {
      Authorization: `Bearer ${token}`,
    }),
  );
