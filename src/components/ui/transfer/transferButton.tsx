"use client";

import { useSendEth } from "@/hooks/useSendEth";
import { useTransferStore } from "@/store/useTransferStore";

const ReviewTransferButton = () => {
  const { mutate, isPending, isError, error, data } = useSendEth();

  const wallet = useTransferStore((s) => s.wallet);
  const recipient = useTransferStore((s) => s.recipient);
  const balance = useTransferStore((s) => s.balance);
  const amount = useTransferStore((s) => s.transferAmount);

  const disabled =
    !wallet ||
    !wallet.privateKey ||
    !recipient ||
    recipient === wallet.publicKey ||
    amount <= 0 ||
    amount > balance;

  const handleSendEth = () => {
    if (!wallet || !wallet.privateKey || !recipient || amount <= 0) return;

    mutate({
      privateKey: wallet.privateKey,
      to: recipient,
      amount,
    });
  };

  return (
    <div className="space-y-2">
      <button
        disabled={disabled || isPending}
        onClick={handleSendEth}
        className={`
          w-full rounded-xl py-4 text-lg font-black transition-all
          ${
            disabled || isPending
              ? "cursor-not-allowed bg-slate-300 text-slate-500 dark:bg-slate-700"
              : "cursor-pointer bg-blue-500 text-white hover:bg-blue-600 shadow-lg"
          }
        `}
      >
        {isPending ? "Sending Transaction…" : "Review Transfer →"}
      </button>

      {/* Success */}
      {data?.hash && (
        <p className="text-xs text-green-500 break-all">
          ✅ Tx sent: {data.hash}
        </p>
      )}

      {/* Error */}
      {isError && (
        <p className="text-xs text-red-500">
          ❌ {error?.message}
        </p>
      )}
    </div>
  );
};

export default ReviewTransferButton;