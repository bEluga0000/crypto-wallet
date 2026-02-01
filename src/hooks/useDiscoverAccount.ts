import { useAccountStore } from "@/store/accounts.store";
import { useBalanceStore } from "@/store/balance.store";
import { getBalanceKey } from "@/utils/balances/balanceGenerate";
import { discoverEthereumAccounts } from "@/utils/discovery/ethereumDiscovery";
import { discoverSolanaAccounts } from "@/utils/discovery/solanaDiscovery";
import { useEffect, useState } from "react";

type UseDiscoverAccountsProps = {
    enabled: boolean;
    max?: number;
    gap?: number;
    mnemonic:string
};

export function useDiscoverAccounts({
    enabled,
    max = 20,
    gap = 10,
    mnemonic
}: UseDiscoverAccountsProps) {
    const addAccount = useAccountStore((s) => s.addAccount);
    const setBalance = useBalanceStore((s) => s.setBalance);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!enabled) return;

        let cancelled = false;

        const discover = async () => {
            try {
                setLoading(true);

                const [solAccounts, ethAccounts] = await Promise.all([
                    discoverSolanaAccounts(max, gap,mnemonic),
                    discoverEthereumAccounts(max, gap,mnemonic),
                ]);

                if (cancelled) return;

                solAccounts.forEach((acc) => {
                    addAccount({
                        accountName: `Wallet ${acc.index}`,
                        publicKey: acc.publicKey,
                        privateKey: acc.privateKey,
                        coin: "solana",
                        index: acc.index,
                        type: "MAIN",
                    });

                    setBalance(getBalanceKey("solana", acc.publicKey), acc.balance);
                });

                ethAccounts.forEach((acc) => {
                    addAccount({
                        accountName: `Wallet ${acc.index}`,
                        publicKey: acc.publicKey,
                        privateKey: acc.privateKey,
                        coin: "ethereum",
                        index: acc.index,
                        type: "MAIN",
                    });
                    setBalance(getBalanceKey("ethereum", acc.publicKey), acc.balance);
                });
            } catch (e) {
                if (!cancelled) {
                    setError("Failed to discover accounts");
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        };

        discover();

        return () => {
            cancelled = true;
        };
    }, [enabled, max, gap, addAccount, setBalance]);

    return { loading, error };
}