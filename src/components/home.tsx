'use client'
import HomePageCard from "./ui/home/homePageCard";
import { MdAddModerator, MdOutlineSettingsBackupRestore } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import { RiDownloadCloudFill } from "react-icons/ri";
import { generateMnemonics } from "@/utils/generateMnemonic";
import { useRouter } from "next/navigation";
import { useMnemonicStore } from "@/store/mnemonic.store";
export default function HomePage() {
    const router = useRouter()
    const createNewWalletOnClick = () => {
        generateMnemonics()
        router.push("/security")
    }
    return (
        <div className="layout-container flex min-h-screen flex-col">
            {/* Main */}
            <main className="flex flex-1 flex-col items-center justify-center px-4 py-12">
                <div className="w-full max-w-[1024px] space-y-12">
                    {/* Headline */}
                    <div className="space-y-4 text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                            Welcome to Your Secure Gateway
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-[#616f89] dark:text-gray-400">
                            Manage your digital assets with a professional-grade HD wallet.
                            Secure, private, and non-custodial.
                        </p>
                    </div>

                    {/* CTA Cards */}
                    <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2">
                        {/* Create */}
                        <HomePageCard
                            icon={<MdAddModerator />}
                            title={"Create New Wallet"}
                            desc="Generate a new 12 word recovery phrase for a fresh start."
                            button="Get Started"
                            onClick={createNewWalletOnClick}
                            buttonIcon={<IoMdArrowForward />}
                        />

                        {/* Import */}


                        <HomePageCard
                            icon={<RiDownloadCloudFill />}
                            title={"Import Existing Wallet"}
                            desc="Restore your assets using an existing seed phrase or private
                    key."
                            button="Restore Wallet"
                            onClick={() => { router.push("/import-wallet") }}
                            buttonIcon={<MdOutlineSettingsBackupRestore />}
                        />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="flex flex-col items-center justify-between gap-4 border-t border-[#e5e7eb] px-6 py-6 text-xs font-medium uppercase tracking-widest text-[#616f89] dark:border-gray-800 dark:text-gray-500 md:flex-row md:px-20">
                <div className="flex items-center gap-6">
                    <span className="flex items-center gap-1.5">
                        <span className="size-2 rounded-full bg-green-500" />
                        API Connected
                    </span>
                    <span>v2.4.1-stable</span>
                </div>

                <div className="flex gap-8">
                    <a className="hover:text-primary">Privacy Policy</a>
                    <a className="hover:text-primary">Terms of Service</a>
                    <a className="hover:text-primary">Security Audit</a>
                </div>
            </footer>
        </div>
    );
}