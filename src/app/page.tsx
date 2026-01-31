"use client";
import HomePage from "@/components/home";
import { useMnemonicStore } from "@/store/mnemonic.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const mnemonic = useMnemonicStore(s => s.mnemonic)
  const router = useRouter()
  useEffect(() => {
    if (mnemonic) {
      router.replace("/portfolio");
    }
  }, [mnemonic, router]);
  return (
    <div>
      <HomePage />
    </div>
  );
}
