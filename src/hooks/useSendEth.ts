import { useMutation } from "@tanstack/react-query";

type SendEthPayload = {
  privateKey: string;
  to: string;
  amount: number;
};

export function useSendEth() {
  return useMutation({
    mutationFn: async (payload: SendEthPayload) => {
      const res = await fetch("/api/transfer/eth", {
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