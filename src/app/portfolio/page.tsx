"use client";
import PortfolioPage from "@/components/portfolio"
import { useMnemonicStore } from "@/store/mnemonic.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Portfolio = () => {
    const mnemonic = useMnemonicStore(s => s.mnemonic)
    const router = useRouter()
    useEffect(() => {
        if (!mnemonic) {
            router.replace("/");
        }
    }, [mnemonic, router]);
    return <div>
        <PortfolioPage />
    </div>
}
export default Portfolio