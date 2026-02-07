import { useTransferStore } from "@/store/useTransferStore";

type ReviewButtonProps = {
    onClick: () => void;
  };
  
  const ReviewTransferButton = ({
    onClick,
  }: ReviewButtonProps) => {
    const walletSelected = useTransferStore(s=>s.wallet)
    const recipient = useTransferStore(s=>s.recipient)
    const balance = useTransferStore(s=>s.balance)
    const amount = useTransferStore(s=>s.transferAmount)
    const disabled =
      !walletSelected ||
      !recipient ||
      !recipient ||
      recipient == walletSelected.publicKey||
      amount <= 0 ||
      amount > balance;
  
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={`
          w-full rounded-xl py-4 text-lg font-black transition
          ${
            disabled
              ? "cursor-not-allowed bg-slate-300 text-slate-500 dark:bg-slate-700"
              : "cursor-pointer bg-blue-500 text-white hover:bg-blue-600 shadow-lg"
          }
        `}
      >
        Review Transfer →
      </button>
    );
  };
  
  export default ReviewTransferButton;