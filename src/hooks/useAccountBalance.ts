
import { AccountSchema } from "@/constants/accounts";
import { useBalanceStore } from "@/store/balance.store";
import { usePriceStore } from "@/store/prices.store";
import { getEthereumBalance } from "@/utils/balances/ethereumBalance";
import { getSolanaBalance } from "@/utils/balances/solanaBalance";
import { useEffect, useState } from "react";

export function useAccountBalance(account: AccountSchema) {
  const key = `${account.coin}:${account.publicKey}`
  const balance = useBalanceStore((s) => s.balances[key]);
  const setBalance = useBalanceStore((s) => s.setBalance);
  const prices = usePriceStore((s) => s.prices)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (!account.publicKey) return;

    let mounted = true;

    const loadBalance = async () => {
      try {
        setLoading(true);
        setError(null)
        let value = 0
        switch (account.coin) {
          case "solana": {
            const res = await getSolanaBalance(account.publicKey)
            value = res.sol
            break
          }
          case "ethereum": {
            const res = await getEthereumBalance(account.publicKey);
            value = res.eth;
            break;
          }

          case "bitcoin": {
            // const res = await getBitcoinBalance(account.publicKey);
            // value = res.sats;
            break;
          }
          default:
            return

        }
        if (mounted) setBalance(key, value);
      } catch (e: any) {
        if (!mounted) return;

        if (
          typeof e?.message === "string" &&
          (e.message.includes("403") || e.message.includes("Access forbidden"))
        ) {
          setError(null);
          return;
        }
        setError("Failed to fetch balance");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    loadBalance();

    return () => {
      mounted = false;
    };
  }, [account.publicKey, account.coin, key, setBalance]);

  return {
    balance: balance ?? 0,
    loading,
    error,
    usd: prices ? balance != 0 ? balance * prices[account.coin] : 0 : null,
  };
}