import { MdMoreHoriz, MdOutlineBackpack, MdOutlineToken, MdOutlineUsb, MdOutlineVerifiedUser } from "react-icons/md";
import WalletsPageCard from "./ui/import-wallet/walletsPageCard";
import { FaWandMagicSparkles } from "react-icons/fa6";

export default function ImportWalletPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark">
            {/* Main */}
            <main className="mx-auto w-full max-w-[960px] flex-1 px-4 py-12">
                {/* Heading */}
                <div className="mx-auto max-w-xl text-center">
                    <div className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                        <span className="material-symbols-outlined text-base">lock</span>
                        Secure Import
                    </div>

                    <h1 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white">
                        Import Your Wallet
                    </h1>

                    <p className="mt-3 text-gray-500 dark:text-gray-400">
                        Select your existing wallet provider to sync your assets. All imports
                        are encrypted locally and never leave your device.
                    </p>
                </div>

                {/* Wallet Grid */}
                <div>
                    <WalletsPageCard wallets={wallets} />
                </div>

                {/* Help */}
                <div className="mt-10 text-center">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-primary dark:text-gray-400"
                    >
                        <span className="material-symbols-outlined text-lg">help</span>
                        Need help? View our security guide.
                    </a>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-200 px-6 py-16 text-center dark:border-gray-800">
                <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
                    <a className="hover:text-primary">Terms of Service</a>
                    <a className="hover:text-primary">Privacy Policy</a>
                    <a className="hover:text-primary">Security Audit</a>
                </div>

                <p className="mt-8 text-sm text-gray-400 dark:text-gray-500">
                    © 2024 CryptoVault Inc. Encrypted & Secure.
                </p>
            </footer>
        </div>
    );
}

const wallets = [
    {
        title: "Backpack",
        icon: <MdOutlineBackpack />,
        desc: "Import using your Backpack account securely.",
    },
    {
        title: "Phantom",
        icon: <FaWandMagicSparkles />,
        desc: "Connect your Phantom Solana wallet extension.",
    },
    {
        title: "MetaMask",
        icon: <MdOutlineToken />,
        desc: "The most popular Ethereum & ERC-20 wallet.",
    },
    {
        title: "Trust Wallet",
        icon: <MdOutlineVerifiedUser />,
        desc: "Import via mobile app or browser extension.",
    },
    {
        title: "Other Wallet",
        icon: <MdMoreHoriz />,
        desc: "Import via Seed Phrase, Private Key, or Hardware.",
    },
    {
        title: "Hardware Wallet",
        icon: <MdOutlineUsb />,
        desc: "Connect your Ledger, Trezor, or Keystone.",
        primary: true,
    },
];