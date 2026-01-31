"use client";
import PortfolioSideBar from "./ui/portfolio/sideBar";
import ProfileTopBar from "./ui/portfolio/topBar";
import CoinCard from "./ui/portfolio/coinCard";
import { useEffect, useState } from "react";
import AddNewAccountModal from "./ui/modals/addNewAccount";
import { AccountSchema } from "@/constants/accounts";
import { ACCOUNT_TYPES, AccountTypeKey } from "@/constants/accountTypes";
import BalanceFilterSelect from "./ui/portfolio/accountDropDown";
import { useAccountStore } from "@/store/accounts.store";

export default function PortfolioPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openAddAccount, setOpenAddAccount] = useState(false)
  const accounts = useAccountStore(s => s.accounts)
  const [acc, setAcc] = useState<string | null>(null);
  const [accountsOptions, setAccountOptions] = useState<string[]>([])
  const [selectWalletType, setSelectedWalletType] = useState<AccountTypeKey | "HARDWARE" | "STAKING">("MAIN")
  const [filteredAccounts, setFilteredAccounts] = useState<AccountSchema[]>([])
  useEffect(() => {
    const options = accounts
      .filter((a) => a.type === selectWalletType)
      .map((d) => d.accountName);
    if (options.length > 0) {
      setAcc(options[0])
    }
    else {
      setAcc(null)
    }
    setAccountOptions(options)
  }, [accounts, selectWalletType]);
  useEffect(() => {
    if (acc) {
      const filteredOnes = accounts.filter(d => d.accountName == acc)
      setFilteredAccounts(filteredOnes)
    }
    else {
      setFilteredAccounts([])
    }
  }, [acc, accounts])
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
          <div className="max-w-5xl px-8 py-10 gap-3 flex flex-col">
            {
              acc && acc.length > 0 && <BalanceFilterSelect
                value={acc ?? ""}
                options={accountsOptions}
                onChange={setAcc}
                placeholder="No Account Found"
              />
            }
            {/* <BalanceCard /> */}
            {/* Assets */}
            {
              (!filteredAccounts || filteredAccounts.length == 0) && <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-[#16181d] p-10 text-center">
                <h3 className="text-lg font-semibold">
                  No accounts found
                </h3>

                <p className="mt-2 max-w-md text-sm text-slate-500">
                  There are no accounts created under{" "}
                  <span className="font-semibold">{ACCOUNT_TYPES[selectWalletType as AccountTypeKey].label}</span>.
                </p>
              </div>
            }
            {
              filteredAccounts.length > 0 && <div className="space-y-4">
                {filteredAccounts.map((c, ind) => {
                  return <CoinCard coin={c} ind={ind} key={ind} />
                })}
              </div>
            }

            {/* Allocation */}
            {/* <div className="mt-12">
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                Allocation
              </h4>
              <div className="flex h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="h-full w-[40%] bg-orange-500" />
                <div className="h-full w-[36%] bg-blue-500" />
                <div className="h-full w-[24%] bg-purple-500" />
              </div>
            </div> */}
          </div>
        </main>
      </div>
      <AddNewAccountModal open={openAddAccount} onOpenChange={setOpenAddAccount} />
    </>

  );
}