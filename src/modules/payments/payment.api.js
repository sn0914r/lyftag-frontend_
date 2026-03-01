import { auth } from "../../configs/firebase.config";
import apiClient from "../../libs/apiClient";

/**
 * Create a payment order to get a paymentSessionId from Cashfree.
 * @param {Object} payload - { plan }
 */
export const createOrder = async (payload) => {
  const token = await auth.currentUser.getIdToken();
  return apiClient.post("/payments/create-order", payload, {
    Authorization: `Bearer ${token}`,
  });
};

/**
 * Verify a payment after the checkout process.
 * @param {Object} payload - { orderId }
 */
export const verifyOrder = async (payload) => {
  const token = await auth.currentUser.getIdToken();
  return apiClient.post("/payments/verify-order", payload, {
    Authorization: `Bearer ${token}`,
  });
};
