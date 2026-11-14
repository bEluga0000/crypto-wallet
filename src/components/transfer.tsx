"use client";

import { FaHistory } from "react-icons/fa";
import NetworkTab from "./ui/transfer/network";
import TransferCard from "./ui/transfer/transferCard";
import NetworkFeeCard from "./ui/transfer/feeCard";
import ReviewTransferButton from "./ui/transfer/transferButton";

export default function TransferPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
            <main className="flex flex-1 justify-center py-10 px-4">
                <div className="w-full max-w-[640px] flex flex-col gap-6">
                    <div className="flex justify-between items-end px-2">
                        <div>
                            <h1 className="text-4xl font-black">Transfer Assets</h1>
                        </div>
                        <button className="h-10 px-4 rounded-lg bg-slate-100 dark:bg-[#282e39] text-sm font-bold hover:bg-slate-200 dark:hover:bg-[#353c4b] transition flex items-center gap-2 cursor-pointer">
                            <span className="material-symbols-outlined text-sm mr-1">
                                <FaHistory />
                            </span>
                            History
                        </button>
                    </div>
                    <NetworkTab/>

                    <TransferCard/>

                    <NetworkFeeCard/>

                    <ReviewTransferButton />

                    <p className="text-center text-xs text-slate-500">
                        Testnet transactions carry no real monetary value
                    </p>
                </div>
            </main>
        </div>
    );
}