"use client";

const DiscoveredAccounts = () => {
    return (

        < section className="flex flex-1 flex-col gap-8" >
            {/* Heading */}
            < div className="space-y-2" >
                <h1 className="text-3xl font-bold tracking-tight">
                    Accounts Discovered
                </h1>
                <p className="text-sm text-gray-400">
                    We found these accounts associated with your recovery phrase.
                    Select the ones you want to import.
                </p>
            </div >

            {/* Accounts List */}
            < div className="custom-scrollbar flex max-h-[480px] flex-col gap-3 overflow-y-auto pr-2" >
                {
                    [
                        {
                            name: "Account #1",
                            coins: ["BTC", "ETH", "SOL"],
                            balance: "$12,450.80",
                            path: "m/44'/60'/0'/0/0",
                            checked: true,
                        },
                        {
                            name: "Account #2",
                            coins: ["ETH", "SOL"],
                            balance: "$420.15",
                            path: "m/44'/60'/1'/0/0",
                            checked: true,
                        },
                        {
                            name: "Account #3",
                            coins: ["New Account"],
                            balance: "$0.00",
                            path: "m/44'/60'/2'/0/0",
                            checked: false,
                            muted: true,
                        },
                        {
                            name: "Account #4",
                            coins: ["BTC"],
                            balance: "$1,102.55",
                            path: "m/44'/60'/3'/0/0",
                            checked: false,
                        },
                    ].map((acc, i) => (
                        <label
                            key={i}
                            className={`group flex cursor-pointer items-center justify-between rounded-xl border border-gray-800 bg-card-dark p-4 transition-all hover:border-primary/50 ${acc.muted ? "opacity-80" : ""
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <input
                                    type="checkbox"
                                    defaultChecked={acc.checked}
                                    className="h-5 w-5 rounded border-gray-700 bg-gray-900 text-primary focus:ring-primary"
                                />

                                <div>
                                    <p className="text-sm font-bold">{acc.name}</p>
                                    <p className="mt-1 text-xs text-gray-500">
                                        {acc.coins.join(", ")}
                                    </p>
                                </div>
                            </div>

                            <div className="text-right">
                                <p className="text-lg font-bold">{acc.balance}</p>
                                <p className="font-mono text-xs text-gray-500">
                                    {acc.path}
                                </p>
                            </div>
                        </label>
                    ))
                }
            </div >

            {/* Action */}
            < button className="rounded-lg bg-primary px-8 py-4 text-lg font-bold shadow-lg shadow-primary/20 transition hover:bg-blue-600" >
                Import Selected Accounts
            </button >
        </section >
    );
};

export default DiscoveredAccounts;