const HomePageCard = () => {
    return <div className="group flex cursor-pointer flex-col gap-6 rounded-xl border border-[#e5e7eb] bg-white p-8 shadow-sm transition-all hover:border-primary hover:shadow-xl dark:border-gray-800 dark:bg-[#1a212f]">
        <div className="flex size-14 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-[32px]">
                add_moderator
            </span>
        </div>

        <div>
            <h3 className="text-2xl font-bold">Create New Wallet</h3>
            <p className="mt-2 text-[#616f89] dark:text-gray-400">
                Generate a new 24-word recovery phrase for a fresh start.
            </p>
        </div>

        <button className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-primary text-lg font-bold text-white transition-transform group-hover:scale-[1.02]">
            Get Started
            <span className="material-symbols-outlined">
                arrow_forward
            </span>
        </button>
    </div>
}
export default HomePageCard