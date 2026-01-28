"use client";

import { COIN_TYPES, COIN_TYPES_KEYS } from "@/constants/blockChainType";
import BalanceCard from "./ui/portfolio/balance";
import PortfolioSideBar from "./ui/portfolio/sideBar";
import ProfileTopBar from "./ui/portfolio/topBar";
import CoinCard from "./ui/portfolio/coinCard";
import { useEffect, useState } from "react";
import AddNewAccountModal from "./ui/modals/addNewAccount";
import { AccountSchema } from "@/constants/accounts";
import { AccountTypeKey } from "@/constants/accountTypes";
import { STORAGE_KEYS } from "@/constants/storageKeys";
import BalanceFilterSelect from "./ui/portfolio/accountDropDown";

const FILTER_OPTIONS = [
  "All Accounts",
  "Main Wallet",
  "Trading",
  "Cold Storage",
  "Hardware",
  "Staking",
];

export default function PortfolioPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openAddAccount, setOpenAddAccount] = useState(false)
  const [accounts, setAccounts] = useState<AccountSchema[]>([])
  const [filter, setFilter] = useState(FILTER_OPTIONS[0]);
  const [selectWalletType, setSelectedWalletType] = useState<AccountTypeKey | "HARDWARE" | "STAKING">("MAIN")
  useEffect(() => {
    const rawAccount = localStorage.getItem(STORAGE_KEYS.ACCOUNTS)
    const parseAccounts: AccountSchema[] = rawAccount ? JSON.parse(rawAccount) : [];
    setAccounts(parseAccounts)
  }, [])
  return (
    <>
      <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
        <PortfolioSideBar
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen((p) => !p)}
          setOpenAddAccount={setOpenAddAccount}
          onSelect={(key) => setSelectedWalletType(key)}
          activeKey={selectWalletType}
          accounts={accounts}
        />
        <main className="flex flex-1 flex-col overflow-y-auto">
          <ProfileTopBar
            onToggleSidebar={() => setIsSidebarOpen((p) => !p)}
            walletName={selectWalletType}
          />
          <div className="max-w-5xl px-8 py-10">
            <BalanceFilterSelect
              value={filter}
              options={FILTER_OPTIONS}
              onChange={setFilter}
            />
            <BalanceCard />
            {/* Assets */}
            <div className="space-y-4">
              {cointTypes.map((c, ind) => {
                const coin = COIN_TYPES[c]
                return <CoinCard coin={coin} ind={ind} key={ind} />
              })}
            </div>

            {/* Allocation */}
            <div className="mt-12">
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                Allocation
              </h4>
              <div className="flex h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="h-full w-[40%] bg-orange-500" />
                <div className="h-full w-[36%] bg-blue-500" />
                <div className="h-full w-[24%] bg-purple-500" />
              </div>
            </div>
          </div>
        </main>
      </div>
      <AddNewAccountModal open={openAddAccount} onOpenChange={setOpenAddAccount} />
    </>

  );
}

const cointTypes: COIN_TYPES_KEYS[] = [
  "solana",
  "ethereum",
  "bitcoin"
]