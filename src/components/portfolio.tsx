"use client";

import BalanceCard from "./ui/portfolio/balance";
import PortfolioSideBar from "./ui/portfolio/sideBar";
import ProfileTopBar from "./ui/portfolio/topBar";

export default function PortfolioPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <PortfolioSideBar />
      <main className="flex flex-1 flex-col overflow-y-auto">
        <ProfileTopBar />
        <div className="max-w-5xl px-8 py-10">
          <BalanceCard />
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