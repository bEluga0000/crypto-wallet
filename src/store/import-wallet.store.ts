import { STORAGE_KEYS } from "@/constants/storageKeys";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ImportWalletState = {
  walletName: string | null;
  setWalletName: (walletName: string | null) => void;
  clearWalletName: () => void;
};

export const useImportWalletStore = create<ImportWalletState>()(
  persist(
    (set) => ({
      walletName: null,

      setWalletName: (walletName) => set({ walletName }),

      clearWalletName: () => set({ walletName: null }),
    }),
    {
      name: STORAGE_KEYS.IMPORT_WALLET_NAME,
    }
  )
);