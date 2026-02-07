import { COIN_TYPES_KEYS } from "@/constants/blockChainType";
import { useMutation } from "@tanstack/react-query";

type SendAmountPayload = {
  privateKey: string;
  to: string;
  amount: number;
  network: COIN_TYPES_KEYS
};

export function useSendAmount() {
  return useMutation({
    mutationFn: async (payload: SendAmountPayload) => {
      const url = payload.network == "ethereum" ? "/api/transfer/eth" : "/api/transfer/sol"

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Transfer failed");
      }

      return res.json();
    },
  });
}