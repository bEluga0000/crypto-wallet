import { AccountSchema } from "@/constants/accounts"
import { COIN_TYPES } from "@/constants/blockChainType"
import CopyButton from "../formComponents/copyButton"
import AccountDetailsModal from "./accountDetails"
import { useState } from "react"

type CoinCardProps = {
    coin: AccountSchema,
    ind: number
}
// type CoinCard = {
//     coin:COIN_TYPES_KEYS,
// }
const CoinCard: React.FC<CoinCardProps> = ({
    coin,
    ind
}) => {
    const [open,setOpen] = useState<boolean>(false)
    return (
        <>
            <div
                key={ind}
                className={`group relative rounded-xl border border-slate-200 bg-white p-6 transition-all hover:shadow-xl dark:border-slate-800 dark:bg-[#16181d] cursor-pointer`}
                onClick={()=>(setOpen(true))}
            >
                {/* Left accent bar */}
                <div
                    className="absolute left-0 top-1/4 bottom-1/4 w-1 rounded-r-full"
                    style={{ backgroundColor: COIN_TYPES[coin.coin].color }}
                />

                <div className="flex items-center justify-between">
                    {/* LEFT SIDE */}
                    <div className="flex items-center gap-4">
                        {/* Coin Image */}
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 shadow-inner dark:bg-black/20">
                            <img
                                src={COIN_TYPES[coin.coin].image}
                                alt={COIN_TYPES[coin.coin].label}
                                className="h-8 w-8 rounded-full"
                            />
                        </div>

                        {/* Coin Info */}
                        <div className="flex flex-col gap-1">
                            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                                {COIN_TYPES[coin.coin].label}
                            </h3>

                            <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                                <span className="text-xs font-mono tracking-wide">
                                    {coin.publicKey.slice(0, 3)}…{coin.publicKey.slice(-3)}
                                </span>
                                <CopyButton value={coin.publicKey} options={{ label: "Public Key", clear: false }} buttonText={false} size="text-sm" />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="text-right">
                        <p className="text-xl font-bold">
                            500.00 {COIN_TYPES[coin.coin].short}
                        </p>
                        <p className="text-sm text-slate-500">
                            $29,500.00
                        </p>
                    </div>
                </div>
            </div>
            <AccountDetailsModal open={open} onOpenChange={setOpen} account={coin}/>
        </>
    );
}
export default CoinCard