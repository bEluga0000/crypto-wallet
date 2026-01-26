import { AiOutlineStock } from "react-icons/ai"
import { IoMdLock } from "react-icons/io"
import { MdLayers, MdMemory, MdOutlineAccountBalanceWallet } from "react-icons/md"

type AccountTypeSchema = {
    label:string
    icon:React.ReactNode
}



export const ACCOUNT_TYPES:Record<string,AccountTypeSchema> = {
    MAIN:{
        label:"Main Wallet",
        icon:<MdOutlineAccountBalanceWallet />
    },
    TRADING:{
        label: "Trading",
        icon:<AiOutlineStock />
    },
    COLD_STORAGE:{
        label:"Cold Storage",
        icon:<IoMdLock />
    },
    HARDWARE:{
        label:"Hardware",
        icon:<MdMemory />
    },
    STACKING:{
        label:"Stacking",
        icon:<MdLayers />
    }
}