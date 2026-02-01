"use client";
import { useImportWalletStore } from "@/store/import-wallet.store";
import { useRouter } from "next/navigation";
interface WalletsPageCardProps {
    wallets: {
      title: string;
      primary?: boolean;
      icon: React.ReactNode;
      desc: string;
      work: boolean; // 👈 NEW
    }[];
  }
const WalletsPageCard: React.FC<WalletsPageCardProps> = ({ wallets }) => {
  const router = useRouter();
  const setWalletName = useImportWalletStore((s) => s.setWalletName);

  const handleCardClick = (wallet: WalletsPageCardProps["wallets"][0]) => {
    if (!wallet.work) return; // 🚫 block action
    setWalletName(wallet.title);
    router.push("/import-wallet/import-seedphrase");
  };

  return (
    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {wallets.map((wallet) => {
        const disabled = !wallet.work;

        return (
          <div
            key={wallet.title}
            onClick={() => handleCardClick(wallet)}
            className={`
              relative rounded-xl border p-6 transition-all
              ${wallet.primary
                ? "border-dashed border-primary bg-primary/5"
                : "border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"}
              ${disabled
                ? "cursor-not-allowed opacity-60"
                : "cursor-pointer hover:border-primary hover:shadow-lg"}
            `}
          >
            {/* 🔒 Disabled Overlay */}
            {disabled && (
              <div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-black/60 text-center">
                <p className="px-4 text-sm font-semibold text-white">
                  Not available yet
                  <br />
                  <span className="text-xs text-gray-300">
                    Coming soon
                  </span>
                </p>
              </div>
            )}

            {/* Icon */}
            <div
              className={`mb-4 flex h-16 w-16 items-center justify-center rounded-lg
                ${wallet.primary
                  ? "bg-white dark:bg-gray-900"
                  : "bg-background-light dark:bg-gray-800"}
              `}
            >
              <span
                className={`material-symbols-outlined text-3xl
                  ${wallet.primary
                    ? "text-primary"
                    : "text-gray-700 dark:text-gray-300"}
                `}
              >
                {wallet.icon}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {wallet.title}
            </h3>

            {/* Description */}
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {wallet.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default WalletsPageCard;