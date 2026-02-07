"use client";
import { useNetworkStore } from "@/store/network.store";
import clsx from "clsx";


const NetworkTab = () => {
    const value = useNetworkStore(s=>s.network)
    const onChange = useNetworkStore(s=>s.setNetwork)
  return (
    <div className="flex gap-1 rounded-xl border border-slate-200 bg-white p-1 dark:border-[#282e39] dark:bg-[#1c1f27]">
      <button
        onClick={() => onChange("ethereum")}
        className={clsx(
          "flex-1 rounded-lg py-2.5 text-sm font-bold transition-all duration-200",
          value === "ethereum"
            ? "bg-blue-500 text-white shadow-sm"
            : "text-slate-500 hover:bg-slate-100 dark:hover:bg-[#282e39]"
        )}
      >
        Ethereum Sepolia
      </button>
      <button
        onClick={() => onChange("solana")}
        className={clsx(
          "flex-1 rounded-lg py-2.5 text-sm font-bold transition-all duration-200",
          value === "solana"
            ? "bg-blue-500 text-white shadow-sm"
            : "text-slate-500 hover:bg-slate-100 dark:hover:bg-[#282e39]"
        )}
      >
        Solana Devnet
      </button>
    </div>
  );
};

export default NetworkTab;