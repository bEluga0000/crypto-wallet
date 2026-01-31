"use client";

import { useRouter } from "next/navigation";
import ProgressiveBar from "./progressivebar";
import { STORAGE_KEYS } from "@/constants/storageKeys";
import { useMnemonicStore } from "@/store/mnemonic.store";
import { useAccountStore } from "@/store/accounts.store";

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
    const accounts: Account[] = [
        // ← this can be empty []
        // {
        //   name: "Account #1",
        //   coins: ["BTC", "ETH", "SOL"],
        //   balance: "$12,450.80",
        //   path: "m/44'/60'/0'/0/0",
        //   checked: true,
        // },
        // {
        //   name: "Account #2",
        //   coins: ["ETH", "SOL"],
        //   balance: "$420.15",
        //   path: "m/44'/60'/1'/0/0",
        //   checked: true,
        // },
    ];
    const setMnemonicWords = useMnemonicStore((s)=>s.setMnemonic)
    const hasAccounts = accounts.length > 0;
    const handelButtonOnClick = () => {
        setMnemonicWords(words)
        useAccountStore.getState().clearAccounts()
        router.push("/portfolio")
    }
    return (
        <section className="flex flex-1 flex-col gap-8">
            <ProgressiveBar step={2} label="Select Accounts" />

            {/* Heading */}
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">
                    Accounts Discovered
                </h1>
                <p className="text-sm text-gray-400">
                    We found accounts associated with your recovery phrase.
                </p>
            </div>

            {/* Accounts List OR Empty State */}
            {hasAccounts ? (
                <div className="custom-scrollbar flex max-h-[480px] flex-col gap-3 overflow-y-auto pr-2">
                    {accounts.map((acc, i) => (
                        <label
                            key={i}
                            className="group flex cursor-pointer items-center justify-between rounded-xl border border-gray-800 bg-card-dark p-4 transition-all hover:border-primary/50"
                        >
                            <div className="flex items-center gap-4">
                                <input
                                    type="checkbox"
                                    defaultChecked={acc.checked}
                                    className="h-5 w-5 rounded border-gray-700 bg-gray-900 text-primary focus:ring-primary"
                                />

                                <div>
                                    <p className="text-sm font-bold">{acc.name}</p>
                                    <p className="mt-1 text-xs text-gray-500">
                                        {acc.coins.join(", ")}
                                    </p>
                                </div>
                            </div>

                            <div className="text-right">
                                <p className="text-lg font-bold">{acc.balance}</p>
                                <p className="font-mono text-xs text-gray-500">{acc.path}</p>
                            </div>
                        </label>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-700 bg-card-dark p-10 text-center">
                    <h3 className="text-lg font-semibold">
                        No accounts found
                    </h3>
                    <p className="mt-2 max-w-md text-sm text-gray-400">
                        We didn’t detect any active accounts for this recovery phrase.
                        This does <span className="text-white font-semibold">not</span> mean
                        your wallet is empty.
                    </p>

                    <p className="mt-3 text-xs text-gray-500">
                        Accounts with no balance or transactions won’t appear here.
                        You can create them later using <span className="text-white">Add Account</span>.
                    </p>
                </div>
            )}

            {/* Action */}
            <button
                className="rounded-lg bg-primary px-8 py-4 text-lg font-bold shadow-lg shadow-primary/20 transition hover:bg-blue-600 disabled:opacity-50"
                onClick={handelButtonOnClick}
            >
                {
                    hasAccounts ? "Import Selected Accounts" : "Go to Dashboard"
                }

            </button>
        </section>
    );
};

export default DiscoveredAccounts;