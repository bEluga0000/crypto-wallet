"use client";

import { useRouter } from "next/navigation";
import ProgressiveBar from "./progressivebar";
import { useMnemonicStore } from "@/store/mnemonic.store";
import { useAccountStore } from "@/store/accounts.store";
import { useDiscoverAccounts } from "@/hooks/useDiscoverAccount";

interface Account {
    name: string;
    coins: string[];
    balance: string;
    path: string;
    checked: boolean;
}

interface DiscoveredPhraseAccountsProps {
    words: string[]
}
const DiscoveredAccounts: React.FC<DiscoveredPhraseAccountsProps> = ({
    words,
}) => {
    const router = useRouter()
    const accounts = useAccountStore((s) => s.accounts);
    const setMnemonicWords = useMnemonicStore((s) => s.setMnemonic)
    const { loading } = useDiscoverAccounts({ enabled: true })
    const hasAccounts = accounts.length > 0;
    const handleImport = () => {
        setMnemonicWords(words)
        router.push("/portfolio")
    }
    return (
        <section className="flex flex-1 flex-col gap-8">
            <ProgressiveBar step={2} label="Select Accounts" />
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">
                    Accounts Discovered
                </h1>
                <p className="text-sm text-gray-400">
                    We found accounts associated with your recovery phrase.
                </p>
            </div>
            {loading && (
                <div className="flex flex-col gap-3">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="h-20 animate-pulse rounded-xl border border-gray-800 bg-card-dark"
                        />
                    ))}
                </div>
            )}
            {/* Accounts List OR Empty State */}
            {!loading && hasAccounts && (
                <div className="custom-scrollbar flex max-h-[480px] flex-col gap-3 overflow-y-auto pr-2">
                    {accounts.map((acc, i) => (
                        <label
                            key={i}
                            className="group flex cursor-pointer items-center justify-between rounded-xl border border-gray-800 bg-card-dark p-4 transition-all hover:border-primary/50"
                        >
                            <div className="flex items-center gap-4">
                                <input
                                    type="checkbox"
                                    checked
                                    readOnly
                                    className="h-5 w-5 rounded border-gray-700 bg-gray-900 text-primary"
                                />

                                <div>
                                    <p className="text-sm font-bold">{acc.accountName}</p>
                                    <p className="mt-1 text-xs text-gray-500 uppercase">
                                        {acc.coin}
                                    </p>
                                </div>
                            </div>

                            <div className="text-right">
                                <p className="font-mono text-xs text-gray-500">
                                    m/44'/…/{acc.index}
                                </p>
                            </div>
                        </label>
                    ))}
                </div>
            )}
            {!loading && !hasAccounts && (
                <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-700 bg-card-dark p-10 text-center">
                    <h3 className="text-lg font-semibold">No accounts found</h3>

                    <p className="mt-2 max-w-md text-sm text-gray-400">
                        We didn’t detect any active accounts for this recovery phrase.
                        This does <span className="font-semibold text-white">not</span> mean
                        your wallet is empty.
                    </p>

                    <p className="mt-3 text-xs text-gray-500">
                        Accounts with no balance or transactions won’t appear here.
                        You can create them later using{" "}
                        <span className="text-white">Add Account</span>.
                    </p>
                </div>
            )}
            <button
                disabled={loading}
                onClick={handleImport}
                className="rounded-lg bg-primary px-8 py-4 text-lg font-bold shadow-lg shadow-primary/20 transition hover:bg-blue-600 disabled:opacity-50"
            >
                {hasAccounts ? "Import Accounts" : "Go to Dashboard"}
            </button>
        </section>
    );
};

export default DiscoveredAccounts;