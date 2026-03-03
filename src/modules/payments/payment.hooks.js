import { useMutation } from "@tanstack/react-query";
import { createOrder } from "./payment.api";

/**
 * Hook to handle the complete checkout flow with Cashfree.
 * 1. Creates an order via the backend.
 * 2. Opens the Cashfree checkout modal.
 * 3. Handles success/error from the SDK.
 */
export const usePaymentCheckout = () => {
  return useMutation({
    mutationFn: async (plan) => {
      // 1. Create the order in the backend
      const createResponse = await createOrder({ plan });

      // Backend returns { data: order } where order is the Cashfree object
      const order = createResponse.data;
      const paymentSessionId =
        order.payment_session_id || order.paymentSessionId;
      const orderId = order.order_id || order.orderId;

      if (!paymentSessionId) {
        throw new Error("Failed to initialize payment session.");
      }

      // 2. Initialize Cashfree SDK
      if (!window.Cashfree) {
        throw new Error(
          "Cashfree SDK not loaded. Check your internet connection.",
        );
      }

      const cashfree = window.Cashfree({
        mode: "production", // Change to 'production' when going live
      });

      // 3. Primary checkout flow via SDK
      const checkoutResult = await cashfree.checkout({
        paymentSessionId: paymentSessionId,
        redirectTarget: "_modal",
      });

      if (checkoutResult.error) {
        const error = new Error(checkoutResult.error.message);
        error.code = "SDK_ERROR";
        throw error;
      }

      // User closed modal or finished. SDK returns flow results.
      // We return success/closed status. Backend webhooks handle the truth.
      return {
        status: checkoutResult.paymentDetails ? "success" : "closed",
        orderId,
      };
    },
  });
};

/**
 * Optional hook to manually verify a payment if needed.
 */
export const useVerifyPayment = () => {
  return useMutation({
    mutationFn: (orderId) => verifyOrder({ orderId }),
  });
};
