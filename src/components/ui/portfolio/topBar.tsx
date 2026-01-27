import { IoSwapHorizontalSharp } from "react-icons/io5";
import { MdNorthEast, MdSouthWest, MdVisibility } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import TopBarButton from "./topBarButton";

type ProfileTopBarProps = {
  onToggleSidebar: () => void;
};

const ProfileTopBar = ({ onToggleSidebar }: ProfileTopBarProps) => {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 px-8 py-4 dark:border-slate-800">
      {/* Left: Sidebar toggle + breadcrumb */}
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
          aria-label="Toggle sidebar"
        >
          <FiMenu className="text-lg" />
        </button>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-500">Wallets</span>
          <span className="text-slate-400">/</span>
          <span className="font-semibold text-slate-900 dark:text-slate-100">
            Hardware Wallet 1
          </span>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Segmented actions */}
        <div className="flex overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
          {TOPBAR_ICONS.map((item, ind) => (
            <TopBarButton key={item.label} ind={ind} icon={item.icon} />
          ))}
        </div>

        {/* Privacy mode */}
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
    {
      label: "send",
      icon: <MdNorthEast />,
    },
    {
      label: "receive",
      icon: <MdSouthWest />,
    },
    {
      label: "swap",
      icon: <IoSwapHorizontalSharp />,
    },
  ] as const;