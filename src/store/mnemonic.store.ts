import { STORAGE_KEYS } from "@/constants/storageKeys";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ImportMnemonicState = {
    mnemonic: string[] | null;
    setMnemonic: (mnemonic: string[] | null) => void;
    clearMnemonic: () => void;
};

export const useImportWalletStore = create<ImportMnemonicState>()(
    persist(
        (set) => ({
            mnemonic: null,

            setMnemonic: (mnemonic) => set({ mnemonic }),

            clearMnemonic: () => set({ mnemonic: null }),
        }),
        {
            name: STORAGE_KEYS.MNEMONIC,
        }
    )
);