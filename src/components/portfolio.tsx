"use client";

import PortfolioSideBar from "./ui/portfolio/sideBar";

export default function PortfolioPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <PortfolioSideBar />

      {/* Main Content */}
      <main className="flex flex-1 flex-col overflow-y-auto">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-slate-200 px-8 py-4 dark:border-slate-800">
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
        </header>

        {/* Content */}
        <div className="max-w-5xl px-8 py-10">
          {/* Balance */}
          <div className="mb-12">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
              Combined Portfolio Balance
            </p>
            <div className="flex items-baseline gap-4">
              <h2 className="text-5xl font-bold">$124,500.00</h2>
              <span className="rounded bg-green-500/10 px-2 py-0.5 text-sm font-semibold text-green-500">
                +3.45% (24h)
              </span>
            </div>
          </div>

          {/* Assets */}
          <div className="space-y-4">
            {[
              ["Solana", "500.00 SOL", "$29,500.00", "purple"],
              ["Ethereum", "20.00 ETH", "$45,000.00", "blue"],
              ["Bitcoin", "1.20 BTC", "$50,000.00", "orange"],
            ].map(([name, amount, value, color]) => (
              <div
                key={name}
                className={`group relative rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-${color}-500/50 hover:shadow-xl dark:border-slate-800 dark:bg-[#16181d]`}
              >
                <div
                  className={`absolute left-0 top-1/4 bottom-1/4 w-1 rounded-r-full bg-${color}-500`}
                />
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{name}</h3>
                  <div className="text-right">
                    <p className="text-xl font-bold">{amount}</p>
                    <p className="text-sm text-slate-500">{value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Allocation */}
          <div className="mt-12">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">
              Allocation
            </h4>
            <div className="flex h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
              <div className="h-full w-[40%] bg-orange-500" />
              <div className="h-full w-[36%] bg-blue-500" />
              <div className="h-full w-[24%] bg-purple-500" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}