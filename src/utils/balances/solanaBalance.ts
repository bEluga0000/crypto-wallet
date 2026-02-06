import nextApi from "../apiConnection";

export const getSolanaBalance = async (publicKey: string) => {
    const res = await nextApi.post("/api/balances/solana", {
      publicKey
      });

    
      if (!res.data) {
        return { lamports: 0, sol: 0 };
      }
    
      return res.data;
}
