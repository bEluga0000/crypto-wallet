import { ACCOUNT_TYPES, AccountTypeKey } from "@/constants/accountTypes"
import { IoMdAddCircle } from "react-icons/io";
import { MdLayers, MdMemory } from "react-icons/md";
import SideBarFieldCard from "./sideBarFieldCard";

type SidebarProps = {
  isOpen: boolean;
  onToggle: () => void;
  setOpenAddAccount: (val: boolean) => void;
  activeKey: AccountTypeKey | "HARDWARE" | "STAKING";
  onSelect: (key: SidebarProps["activeKey"]) => void;
};

const PortfolioSideBar = ({
  isOpen,
  onToggle,
  setOpenAddAccount,
  activeKey,
  onSelect,
}: SidebarProps) => {
  return (
    <aside
      className={`
        flex flex-col border-r border-slate-200 dark:border-slate-800
        bg-background-light dark:bg-background-dark
        transition-all duration-300 ease-in-out
        ${isOpen ? "w-72" : "w-20"}
      `}
    >
      <div className="p-4">
        {/* Add Wallet CTA */}
        <div
          onClick={() => setOpenAddAccount(true)}
          className={`
            mb-6 flex items-center gap-3 rounded-xl border
            px-3 py-3 cursor-pointer transition-all
            ${
              isOpen
                ? "border-primary/30 bg-primary/10 hover:bg-primary/15"
                : "justify-center border-transparent hover:bg-primary/10"
            }
          `}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white shadow-md">
            <IoMdAddCircle className="text-xl" />
          </div>

          {isOpen && (
            <div>
              <p className="text-sm font-semibold text-primary">
                Add Account
              </p>
              <p className="text-xs text-slate-500">
                Create a new wallet
              </p>
            </div>
          )}
        </div>

        {/* Accounts */}
        <nav className="space-y-1">
          {SIDEBAR_ACCOUNTS.map((key) => {
            const account = ACCOUNT_TYPES[key];
            return (
              <SideBarFieldCard
                key={key}
                icon={account.icon}
                label={account.label}
                isOpen={isOpen}
                active={activeKey === key}
                onClick={() => onSelect(key)}
              />
            );
          })}

          <SideBarFieldCard
            icon={<MdMemory />}
            label="Hardware 1"
            isOpen={isOpen}
            active={activeKey === "HARDWARE"}
            onClick={() => onSelect("HARDWARE")}
          />

          <SideBarFieldCard
            icon={<MdLayers />}
            label="Staking"
            isOpen={isOpen}
            active={activeKey === "STAKING"}
            onClick={() => onSelect("STAKING")}
          />
        </nav>
      </div>

      {/* Footer */}
      <div className="mt-auto border-t border-slate-200 p-4 dark:border-slate-800">
        <button
          onClick={onToggle}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
        >
          <span className="material-symbols-outlined text-xl">menu</span>
          {isOpen && <span className="text-sm font-medium">Collapse</span>}
        </button>

        {isOpen && (
          <div className="mt-4 flex items-center gap-2 px-3">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              Mainnet • Synced
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