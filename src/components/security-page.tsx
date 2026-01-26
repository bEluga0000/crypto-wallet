"use client";
import { BackupReminder } from "./ui/security/backupReminder";
import { MdDiversity3, MdOfflineBolt } from "react-icons/md";
import { SecretRecoveryPhrase } from "./ui/security/recoveryPhrase";
import BestPracticesCard from "./ui/security/bestPractices";
import { IoCloudOffline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SecurityPage() {
  const router = useRouter()
  const [mnemonic, setMnemonic] = useState<string | null>(null)
  useEffect(() => {
    setMnemonic(localStorage.getItem("mnemonic"))
  })
  const handleDeleteAccount = () => {
    // here we need to delete everything from localstorage about the account  
    // show the confirmation popup also for confirmation
    // right now only recovery phrase 
    localStorage.removeItem("mnemonic")
    router.push("/")
  }
  return (
    <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">

      {/* Main */}
      <main className="mx-auto flex w-full max-w-[960px] flex-1 flex-col gap-6 px-4 py-10">
        {/* Title */}
        <div>
          <h1 className="text-4xl font-black tracking-tight">
            Security & Recovery
          </h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Manage your private keys and mnemonic recovery phrase to ensure
            long-term fund safety.
          </p>
        </div>
        <section>
          <BackupReminder />
        </section>
        <section>
          <SecretRecoveryPhrase />
        </section>
        <section className="border-t border-slate-200 pt-6 dark:border-slate-800">
          <h3 className="mb-4 font-bold">Security Best Practices</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {bestPractices.map((item, index) => (
              <BestPracticesCard icon={item.icon} title={item.title} desc={item.desc} key={index} />
            ))}
          </div>
        </section>
        {
          mnemonic && <div className="rounded-xl border border-red-900/30 bg-red-900/10 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-red-400">Delete Wallet Data</p>
                <p className="text-sm text-slate-400">
                  This will remove all wallet information from this device.
                </p>
              </div>
              <button
                className="rounded-lg border border-red-500 px-4 py-2 text-sm font-bold text-red-500 transition-all hover:bg-red-500 hover:text-white"
                onClick={handleDeleteAccount}
              >
                Delete Account
              </button>
            </div>
          </div>
        }
      </main>
    </div>
  );
}

const bestPractices = [
  {
    icon: <MdOfflineBolt />,
    title: "Offline Storage",
    desc: "Store your phrase on physical paper or cold storage.",
  },
  {
    icon: <MdDiversity3 />,
    title: "Never Share",
    desc: "Anyone with your phrase can steal your funds.",
  },
  {
    icon: <IoCloudOffline />,
    title: "No Cloud Backup",
    desc: "Never upload your phrase to cloud services.",
  },
];