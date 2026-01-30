import { STORAGE_KEYS } from "@/constants/storageKeys";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ImportWalletState = {
    walletName:string|null
}

export const useImportWalletStore = create<ImportWalletState>()(
    persist(
        (set)=>({
            walletName:null,
            setWalletName:(walletName:string)=>set({walletName})
        }),
        {
            name:STORAGE_KEYS.IMPORT_WALLET_NAME
        }
    )
)