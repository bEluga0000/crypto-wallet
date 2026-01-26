"use client";

import { COIN_TYPES, COIN_TYPES_KEYS } from "@/constants/blockChainType";
import BalanceCard from "./ui/portfolio/balance";
import PortfolioSideBar from "./ui/portfolio/sideBar";
import ProfileTopBar from "./ui/portfolio/topBar";
import CoinCard from "./ui/portfolio/coinCard";

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
            {cointTypes.map((c,ind) => {
              const coin = COIN_TYPES[c]
              return <CoinCard coin={coin} ind={ind} key={ind}/>
            })}
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

const cointTypes: COIN_TYPES_KEYS[] = [
  "solana",
  "ethereum",
  "bitcoin"
]