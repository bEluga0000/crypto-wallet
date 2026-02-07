"use client";

import { useState } from "react";
import { COIN_TYPES } from "@/constants/blockChainType";
import { useTransferStore } from "@/store/useTransferStore";
import { useNetworkStore } from "@/store/network.store";
import { usePriceStore } from "@/store/prices.store";

type Props = {
    onChange?: (value: number) => void;
};

const AmountToSendCard = ({ onChange }: Props) => {
    const prices = usePriceStore((s) => s.prices);
    const balance = useTransferStore((s) => s.balance);
    const network = useNetworkStore((s) => s.network);

    const [amount, setAmount] = useState<number>(0);

    const usdValue = amount * (prices?.[network] ?? 0);
    const isOverBalance = amount > balance;

    const handleMax = () => {
        setAmount(balance);
        onChange?.(balance);
    };

    return (
        <div
            className={`rounded-xl border p-4 shadow-sm transition
        ${isOverBalance
                    ? "border-red-500/50 bg-red-500/5"
                    : "border-slate-200 bg-white dark:border-[#282e39] dark:bg-[#101622]"
                }`}
        >
            {/* Label */}
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                Amount to Send
            </p>

            {/* Main Row */}
            <div className="flex items-center justify-between">
                {/* Token */}
                <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 dark:border-[#282e39] dark:bg-[#1c1f27]">
                    <img
                        src={COIN_TYPES[network].image}
                        alt={COIN_TYPES[network].label}
                        className="h-5 w-5 rounded-full"
                    />
                    <span className="text-sm font-bold">
                        {COIN_TYPES[network].short}
                    </span>
                </div>

                {/* Amount input */}
                <input
                    type="text"
                    inputMode="decimal"
                    value={amount || ""}
                    placeholder="0.0"
                    onChange={(e) => {
                        const value = e.target.value;

                        if (/^\d*\.?\d*$/.test(value)) {
                            const num = Number(value || 0);
                            setAmount(num);
                            onChange?.(num);
                        }
                    }}
                    className={`w-32 bg-transparent text-right text-3xl font-bold outline-none
            ${isOverBalance ? "text-red-500" : "text-slate-900 dark:text-white"}`}
                />
            </div>

            {/* Divider */}
            <div className="my-3 h-px bg-slate-200 dark:bg-[#282e39]" />

            {/* Bottom Row */}
            <div className="flex items-center justify-between">
                <p
                    className={`text-xs font-medium
            ${isOverBalance ? "text-red-500" : "text-slate-500"}`}
                >
                    ≈ ${usdValue.toFixed(2)} USD
                </p>

                <button
                    onClick={handleMax}
                    className="
                    cursor-pointer
    rounded-full
    px-3 py-1
    text-xs font-bold
    text-blue-500
    bg-transparent
    transition
    hover:bg-blue-500/10
    active:bg-blue-500/20
  "
                >
                    MAX
                </button>
            </div>

            {/* Error */}
            {isOverBalance && (
                <p className="mt-2 text-xs font-semibold text-red-500">
                    Insufficient balance
                </p>
            )}
        </div>
    );
};

export default AmountToSendCard;