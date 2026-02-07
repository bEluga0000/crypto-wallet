"use client";
import { useNetworkStore } from "@/store/network.store";
import { useEffect, useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import clsx from "clsx";
import { validateAddress } from "@/utils/transfers/validateAddress";
import { useTransferStore } from "@/store/useTransferStore";

const RecipientCard = () => {
  const network = useNetworkStore((s) => s.network);
  const walletSelected = useTransferStore((s)=>s.wallet)
  const recipient = useTransferStore(s=>s.recipient)
  const setRecipient = useTransferStore(s=>s.setRecipient)
  const [error, setError] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (!recipient) {
      setError(null);
      setIsValid(false);
      return;
    }
    if(recipient == walletSelected?.publicKey)
    {
      setError("From and to accounts are same")
      return
    }
    const valid = validateAddress(recipient, network);
    setIsValid(valid);

    if (!valid) {
      setError(
        network === "ethereum"
          ? "Invalid Ethereum address"
          : "Invalid Solana address"
      );
    } else {
      setError(null);
    }
  }, [recipient, network]);

  return (
    <div>
      <label className="text-xs font-bold uppercase text-slate-500">
        Recipient Address
      </label>

      <div
        className={clsx(
          "mt-2 flex items-center rounded-xl px-4 py-3 transition-all",
          "bg-slate-50 dark:bg-[#101622]",
          error
            ? "border border-red-500"
            : "border border-slate-200 dark:border-[#282e39]",
          "focus-within:ring-2",
          error
            ? "focus-within:ring-red-500/40"
            : "focus-within:ring-primary/40"
        )}
      >
        <input
          value={recipient ??""}
          onChange={(e) => setRecipient(e.target.value.trim())}
          placeholder="Enter address"
          className="flex-1 bg-transparent font-mono text-sm focus:outline-none"
        />
        <div className="ml-3 flex items-center gap-2">
          {isValid && (
            <MdCheckCircle
              className="text-green-500"
              size={20}
              title="Valid address"
            />
          )}

          {/* QR Button */}
          {/* <button
            type="button"
            className="rounded-lg p-1 text-slate-400 hover:text-primary transition-colors"
            title="Scan QR"
            onClick={() => {
              // TODO: open QR scanner
            }}
          >
            <BsQrCodeScan size={18} />
          </button> */}
        </div>
      </div>

      {/* Error text */}
      {error && (
        <p className="mt-1 text-xs font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default RecipientCard;