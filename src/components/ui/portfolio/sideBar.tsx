const PortfolioSideBar = () => {
    return <aside className="flex w-72 flex-col border-r border-slate-200 dark:border-slate-800">
        <div className="p-6">
            <div className="mb-8 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                    <span className="material-symbols-outlined text-3xl text-primary">
                        shield_person
                    </span>
                </div>
                <div>
                    <h1 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                        Vault Pro
                    </h1>
                    <p className="text-xs text-slate-400">High Security</p>
                </div>
            </div>

            <nav className="space-y-1">
                {[
                    ["account_balance_wallet", "Main Wallet"],
                    ["monitoring", "Trading Account"],
                    ["lock", "Cold Storage"],
                ].map(([icon, label]) => (
                    <div
                        key={label}
                        className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                        <span className="material-symbols-outlined text-slate-500">
                            {icon}
                        </span>
                        <span className="text-sm font-medium">{label}</span>
                    </div>
                ))}

                <div className="flex items-center gap-3 rounded-lg border border-primary/20 bg-primary/10 px-3 py-2.5 text-primary">
                    <span className="material-symbols-outlined fill-icon">
                        memory
                    </span>
                    <span className="text-sm font-bold">Hardware 1</span>
                </div>

                <div className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
                    <span className="material-symbols-outlined text-slate-500">
                        layers
                    </span>
                    <span className="text-sm font-medium">Staking</span>
                </div>
            </nav>
        </div>

        <div className="mt-auto border-t border-slate-200 p-6 dark:border-slate-800">
            <div className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined text-slate-500">
                    settings
                </span>
                <span className="text-sm font-medium">Settings</span>
            </div>

            <div className="mt-4 flex items-center gap-2 px-3">
                <div className="size-2 rounded-full bg-green-500" />
                <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-500">
                    Mainnet – Synced
                </span>
            </div>
        </div>
    </aside>
}
export default PortfolioSideBar