import apiClient from "../../libs/apiClient";

// Public endpoint — no auth token needed
export const getQrInfo = (qrId) => apiClient.get(`/qr/${qrId}`);
