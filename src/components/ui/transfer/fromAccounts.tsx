"use client";

import { COIN_TYPES } from "@/constants/blockChainType";
import { useAccountStore } from "@/store/accounts.store";
import { useBalanceStore } from "@/store/balance.store";
import { useNetworkStore } from "@/store/network.store";
import { useTransferStore } from "@/store/useTransferStore";
import { useEffect, useState } from "react";

const shortKey = (key: string) => `${key.slice(0, 4)}…${key.slice(-4)}`;
const balanceKey = (coin: string, pub: string) => `${coin}:${pub}`;

const FromAccountDropdown = () => {
    const [open, setOpen] = useState(false);

    const selected = useTransferStore((s) => s.wallet);
    const setSelected = useTransferStore((s) => s.setWallet);
    const setTransferBalance = useTransferStore((s) => s.setBalance);

    const network = useNetworkStore((s) => s.network);
    const accounts = useAccountStore((s) => s.accounts);
    const balances = useBalanceStore((s) => s.balances);

    const filteredAccounts = accounts.filter((a) => a.coin === network);

    // Always runs — SAFE
    useEffect(() => {
        if (!selected && filteredAccounts.length > 0) {
            setSelected(filteredAccounts[0]);
        }
    
        if (filteredAccounts.length === 0) {
            setSelected(null);
        }
    }, [network, filteredAccounts.length]);

    let balance =
        selected
            ? balances[balanceKey(selected.coin, selected.publicKey)] ?? 0
            : 0;

    // Always runs — SAFE
    useEffect(() => {
        if (selected) {
            setTransferBalance(balance);
        }
    }, [balance, selected, setTransferBalance]);

    // Conditional return AFTER hooks ✅
    if (!selected) {
        return (
            <div className="mt-2 rounded-xl border border-dashed border-slate-300 p-4 text-center text-sm text-slate-500 dark:border-slate-700">
                No accounts available for this network
            </div>
        );
    }

    return (
        <div className="relative">
            <div
                onClick={() => setOpen((v) => !v)}
                className="mt-2 flex cursor-pointer items-center justify-between rounded-xl
                border border-slate-200 bg-slate-50 p-4 transition-all
                hover:border-primary/50
                dark:border-[#282e39] dark:bg-[#101622]"
            >
                <div>
                    <p className="text-sm font-bold">{selected.accountName}</p>
                    <p className="font-mono text-xs text-slate-500">
                        {shortKey(selected.publicKey)}
                    </p>
                </div>

                <div className="text-right">
                    <p className="text-sm font-bold">
                        {balance.toFixed(4)} {COIN_TYPES[selected.coin].short}
                    </p>
                </div>
            </div>

            {open && (
                <div className="absolute z-20 mt-2 w-full rounded-xl border border-slate-200 bg-white shadow-xl dark:border-[#282e39] dark:bg-[#1c1f27]">
                    {filteredAccounts.map((acc) => (
                        <div
                            key={acc.publicKey}
                            onClick={() => {
                                setSelected(acc);
                                setOpen(false);
                            }}
                            className="flex cursor-pointer items-center justify-between p-4 hover:bg-slate-100 dark:hover:bg-[#282e39]"
                        >
                            <div>
                                <p className="text-sm font-bold">{acc.accountName}</p>
                                <p className="font-mono text-xs text-slate-500">
                                    {shortKey(acc.publicKey)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FromAccountDropdown;