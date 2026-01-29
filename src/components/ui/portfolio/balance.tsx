const BalanceCard = () => {
    return <div className="mb-12">
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
}
export default BalanceCard