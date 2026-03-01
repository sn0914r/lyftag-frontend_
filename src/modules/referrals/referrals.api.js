import { auth } from "../../configs/firebase.config";
import apiClient from "../../libs/apiClient";

/**
 * Fetch referral information for the current user.
 * apiClient handles authentication headers and base URL.
 */
export const getReferralInfo = async () => {
    const token = await auth.currentUser.getIdToken();
    return apiClient.get("/referral", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
