const ProfileTopBar = () => {
    return <div className="flex items-center justify-between border-b border-slate-200 px-8 py-4 dark:border-slate-800">
        <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500">Wallets</span>
            <span className="text-slate-400">/</span>
            <span className="font-semibold">Hardware Wallet 1</span>
        </div>

        <div className="flex items-center gap-4">
            <div className="flex rounded-lg bg-slate-100 p-1 dark:bg-slate-800">
                {["north_east", "south_west", "swap_horiz"].map((icon) => (
                    <button
                        key={icon}
                        className="p-1.5 transition-colors hover:text-primary"
                    >
                        <span className="material-symbols-outlined text-[20px]">
                            {icon}
                        </span>
                    </button>
                ))}
            </div>

            <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-bold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-blue-700">
                <span className="material-symbols-outlined fill-icon text-[18px]">
                    visibility
                </span>
                Privacy Mode
            </button>
        </div>
    </div>
}
export default ProfileTopBar