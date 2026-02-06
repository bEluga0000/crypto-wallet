export const getSolanaBalance = async (publicKey: string) => {
    const res = await fetch("/api/balances/solana", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicKey }),
      });
    
      if (!res.ok) {
        return { lamports: 0, sol: 0 };
      }
    
      return res.json();
}
