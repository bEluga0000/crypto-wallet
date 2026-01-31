"use client";
import { useRouter } from "next/navigation";
import { BiSolidWallet } from "react-icons/bi"
import { IoMdHelpCircle } from "react-icons/io"
import { MdOutlineSecurity } from "react-icons/md"
import PortfolioSecurityToggle from "./ui/nav/navBarToggleButton";

const NavBar = () => {
    const router = useRouter()
    return <div className="flex items-center justify-between border-b border-[#e5e7eb] bg-white px-6 py-4 dark:border-gray-800 dark:bg-[#1a212f] md:px-20">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push("/")}>
            <div className="flex items-center justify-center rounded-lg bg-primary/10 p-2 text-primary">
                <span className="material-symbols-outlined text-[28px]">
                    <BiSolidWallet />
                </span>
            </div>
            <h2 className="text-xl font-bold tracking-tight">CryptoHD</h2>
        </div>

        <div className="flex items-center gap-4 align-middle">
            {/* <div className="hidden items-center gap-2 rounded-full border border-green-100 bg-green-50 px-3 py-1.5 text-green-600 dark:border-green-800/30 dark:bg-green-900/20 dark:text-green-400 md:flex">
                <span className="material-symbols-outlined text-[16px]">
                    verified user
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider">
                    Network: Mainnet
                </span>
            </div> */}

            <PortfolioSecurityToggle />

            <div
                className="size-10 rounded-full border-2 border-primary/20 bg-cover bg-center"
                style={{
                    backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGeURLwB50B9BYxAK0IFk5sd6_3Mq9oXJeowRnhk5_1TDbAxa9KkRfqvPNIJ7gpmMbKzDeuxWXzmw8L3giUvcZt0W9EJAG5Terldo90Enhb6rAfRfZLtKn8r4zkWfXuGXgEspugqFVapWPLQdKlpHEFPfyh327DZymO54mbvCxnAftH82WNVt52iqKk99Xaw2ovqiG1nnuu50LEnvM9JkyUBN8gXq7tSn7JdvP6kqboOM-VBE0uGK-tWtbb27I1aHACAgnFOaiDrA")',
                }}
            />
        </div>
    </div>
}

export default NavBar