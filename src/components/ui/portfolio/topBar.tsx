import { IoSwapHorizontalSharp } from "react-icons/io5"
import { MdNorthEast, MdSouthWest, MdVisibility } from "react-icons/md"
import TopBarButton from "./topBarButton"

const ProfileTopBar = () => {
    return <div className="flex items-center justify-between border-b border-slate-200 px-8 py-4 dark:border-slate-800">
        <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500">Wallets</span>
            <span className="text-slate-400">/</span>
            <span className="font-semibold">Hardware Wallet 1</span>
        </div>

        <div className="flex items-center gap-4">
            <div className="flex overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
                {Icons.map((i, ind) => (
                    <TopBarButton ind={ind} icon={i.icon} />
                ))}
            </div>

            <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-bold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-blue-700">
                <span className="material-symbols-outlined fill-icon text-[18px]">
                    <MdVisibility />
                </span>
                Privacy Mode
            </button>
        </div>
    </div>
}
export default ProfileTopBar

const Icons = [
    {
        label: "send",
        icon: <MdNorthEast />
    },
    {
        label: "recive",
        icon: <MdSouthWest />
    },
    {
        label: "swap",
        icon: <IoSwapHorizontalSharp />
    }
]