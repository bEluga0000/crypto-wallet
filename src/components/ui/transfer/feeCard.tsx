import { FaInfoCircle } from "react-icons/fa";
import { FaGasPump } from "react-icons/fa6";

const NetworkFeeCard = () => {
    return (
      <div className="rounded-xl border border-slate-200 bg-slate-100 p-5 shadow-sm dark:border-[#282e39] dark:bg-[#1c1f27]/60">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-slate-400 text-lg">
            <FaGasPump />
            </span>
            <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
              Estimated Network Fee
            </p>
          </div>
  
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Live
            </span>
          </div>
        </div>
  
        {/* Fee details */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase text-slate-500">
              Fee Total
            </p>
            <div className="mt-1 flex items-baseline gap-1">
              <p className="text-lg font-bold">0.00042 ETH</p>
              <p className="text-xs text-slate-500">($0.96)</p>
            </div>
          </div>
  
          <div>
            <p className="text-[11px] font-bold uppercase text-slate-500">
              Network Traffic
            </p>
            <p className="mt-1 text-sm font-bold text-green-500">
              Normal (12 Gwei)
            </p>
          </div>
        </div>
  
        {/* Solana Notice */}
        <div className="mt-4 flex gap-3 rounded-lg border border-blue-500/20 bg-blue-500/5 p-3">
          <span className="material-symbols-outlined text-blue-500">
            <FaInfoCircle />
          </span>
          <div>
            <p className="text-xs font-bold text-blue-500">
              Solana Notice
            </p>
            <p className="text-[11px] leading-relaxed text-slate-500">
              If switching to Solana, a rent-exempt deposit of ~0.002 SOL may be
              required for new accounts.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default NetworkFeeCard;