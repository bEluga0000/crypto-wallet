
import { useBalanceStore } from "@/store/balance.store";
import { getSolanaBalance } from "@/utils/balances/solanaBalance";
import { useEffect, useState } from "react";

export function useSolanaBalance(publicKey: string) {
  const balance = useBalanceStore((s) => s.balances[publicKey]);
  const setBalance = useBalanceStore((s) => s.setBalance);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!publicKey) return;

    let mounted = true;

    const loadBalance = async () => {
      try {
        setLoading(true);
        const balance = await getSolanaBalance(publicKey);
        if (mounted) setBalance(publicKey, balance.sol);
      } catch (e) {
        if (mounted) setError("Failed to fetch balance");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    loadBalance();

    return () => {
      mounted = false;
    };
  }, [publicKey, setBalance]);

  return {
    lamports: balance ?? 0,
    loading,
    error,
  };
}