import { IoSwapHorizontalSharp } from "react-icons/io5";
import { MdNorthEast, MdSouthWest, MdVisibility } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import TopBarButton from "./topBarButton";
import { ACCOUNT_TYPES } from "@/constants/accountTypes";

type ProfileTopBarProps = {
  onToggleSidebar: () => void;
  walletName: string;
};

const ProfileTopBar = ({ onToggleSidebar, walletName }: ProfileTopBarProps) => {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 px-8 py-4 dark:border-slate-800">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
          aria-label="Toggle sidebar"
        >
          <FiMenu className="text-xl" />
        </button>

        <h1 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          {ACCOUNT_TYPES[walletName as keyof typeof ACCOUNT_TYPES]?.label ?? walletName}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden lg:flex overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
          {TOPBAR_ICONS.map((item, ind) => (
            <TopBarButton key={item.label} ind={ind} icon={item.icon} />
          ))}
        </div>

        <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-bold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-blue-700">
          <MdVisibility className="text-[18px]" />
          Privacy Mode
        </button>
      </div>
    </header>
  );
};

export default ProfileTopBar;

const TOPBAR_ICONS = [
  { label: "send", icon: <MdNorthEast /> },
  { label: "receive", icon: <MdSouthWest /> },
  { label: "swap", icon: <IoSwapHorizontalSharp /> },
] as const;