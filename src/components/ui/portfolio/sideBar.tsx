import { ACCOUNT_TYPES, AccountTypeKey } from "@/constants/accountTypes"
import { IoMdAddCircle } from "react-icons/io";
import { MdLayers, MdMemory } from "react-icons/md";

type SidebarProps = {
  isOpen: boolean;
  onToggle: () => void;
  setOpenAddAccount:(val:boolean)=>void
};

const PortfolioSideBar = ({ isOpen, onToggle,setOpenAddAccount }: SidebarProps) => {
  return (
    <aside
      className={`
          flex flex-col border-r border-slate-200 dark:border-slate-800
          transition-all duration-300 ease-in-out
          ${isOpen ? "w-72" : "w-20"}
        `}
    >
      <div className="p-6">
        {/* Header */}
        <div className="mb-8 flex items-center gap-3 cursor-pointer" onClick={()=>setOpenAddAccount(true)}>
          <div className="rounded-lg bg-primary/10 p-2">
            <IoMdAddCircle className="text-2xl text-primary" />
          </div>

          {isOpen && (
            <div className="transition-opacity duration-200">
              <h1 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Add Wallet
              </h1>
              <p className="text-xs text-slate-400">High Security</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {SIDEBAR_ACCOUNTS.map((key) => {
            const account = ACCOUNT_TYPES[key];

            return (
              <div
                key={key}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <span className="text-slate-500">{account.icon}</span>

                {isOpen && (
                  <span className="text-sm font-medium">
                    {account.label}
                  </span>
                )}
              </div>
            );
          })}

          {/* Hardware */}
          <div className="flex items-center gap-3 rounded-lg border border-primary/20 bg-primary/10 px-3 py-2.5 text-primary">
            <MdMemory />
            {isOpen && (
              <span className="text-sm font-bold">Hardware 1</span>
            )}
          </div>

          {/* Staking */}
          <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
            <MdLayers className="text-slate-500" />
            {isOpen && (
              <span className="text-sm font-medium">Staking</span>
            )}
          </div>
        </nav>
      </div>

      {/* Footer */}
      <div className="mt-auto border-t border-slate-200 p-6 dark:border-slate-800">
        <div
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
          onClick={onToggle}
        >
          <span className="material-symbols-outlined text-slate-500">
            menu
          </span>
          {isOpen && (
            <span className="text-sm font-medium">Collapse</span>
          )}
        </div>

        {isOpen && (
          <div className="mt-4 flex items-center gap-2 px-3">
            <div className="size-2 rounded-full bg-green-500" />
            <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-500">
              Mainnet – Synced
            </span>
          </div>
        )}
      </div>
    </aside>
  );
};

export default PortfolioSideBar;

const SIDEBAR_ACCOUNTS: AccountTypeKey[] = [
  "MAIN",
  "TRADING",
  "COLD_STORAGE",
];