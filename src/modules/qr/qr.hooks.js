import { useQuery } from "@tanstack/react-query";
import { getQrInfo } from "./qr.api";

export const useQrInfo = (qrId) =>
  useQuery({
    queryKey: ["qr", qrId],
    queryFn: () => getQrInfo(qrId),
    enabled: Boolean(qrId),
    retry: 1,
  });
