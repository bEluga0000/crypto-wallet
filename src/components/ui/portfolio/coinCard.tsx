type CoinCardProps = {
    coin: any,
    ind: number
}
const CoinCard: React.FC<CoinCardProps> = ({
    coin,
    ind
}) => {
    return <div
        key={ind}
        className={`group relative rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-${coin.color}-500/50 hover:shadow-xl dark:border-slate-800 dark:bg-[#16181d]`}
    >
        <div
            className={`absolute left-0 top-1/4 bottom-1/4 w-1 rounded-r-full bg-${coin.color}-500`}
        />
        <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">{coin.label}</h3>
            <div className="text-right">
                <p className="text-xl font-bold">500.00 {coin.short}</p>
                <p className="text-sm text-slate-500"> $29,500.00</p>
            </div>
        </div>
    </div>
}
export default CoinCard