import AmountToSendCard from "./ammountSend"
import FromAccountDropdown from "./fromAccounts"
import ReciptentCard from "./reciptentCard"

const TransferCard = () => {
    return <div className="bg-white dark:bg-[#1c1f27] rounded-xl border border-slate-200 dark:border-[#282e39] p-6 space-y-6">
        <div>
            <label className="text-xs font-bold uppercase text-slate-500">
                From Account
            </label>
            <FromAccountDropdown />
        </div>
        <ReciptentCard />
        <AmountToSendCard
            onChange={()=>{}}
        />
    </div>
}
export default TransferCard