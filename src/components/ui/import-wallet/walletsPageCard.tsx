interface WalletsPageCardProps {
    wallets: {
        title: string
        primary?: boolean
        icon: React.ReactNode
        desc: string
        // onClick: () => void
    }[]
}

const WalletsPageCard: React.FC<WalletsPageCardProps> = ({ wallets }) => {
    return <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {
            wallets.map((wallet) => (
                <div
                    key={wallet.title}
                    className={`group cursor-pointer rounded-xl border p-6 transition-all ${wallet.primary
                        ? "border-dashed border-primary bg-primary/5 hover:bg-primary/10 dark:bg-primary/10 dark:hover:bg-primary/20"
                        : "border-gray-200 bg-white hover:border-primary dark:border-gray-800 dark:bg-gray-900"
                        }`}
                >
                    <div
                        className={`mb-4 flex h-16 w-16 items-center justify-center rounded-lg ${wallet.primary
                            ? "bg-white dark:bg-gray-900"
                            : "bg-background-light dark:bg-gray-800"
                            }`}
                    >
                        <span
                            className={`material-symbols-outlined text-3xl ${wallet.primary
                                ? "text-primary"
                                : "text-gray-700 group-hover:text-primary dark:text-gray-300"
                                }`}
                        >
                            {wallet.icon}
                        </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {wallet.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {wallet.desc}
                    </p>
                </div>
            ))
        }
    </div >

}
export default WalletsPageCard