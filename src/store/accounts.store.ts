import { AccountSchema } from "@/constants/accounts";
import { STORAGE_KEYS } from "@/constants/storageKeys";
import { create } from "zustand";
import { persist } from "zustand/middleware";
export type AccountState = {
    accounts: AccountSchema[]
    addAccount: (account: AccountSchema) => void
    setAccounts: (accounts: AccountSchema[]) => void
    removeAccount: (index: number) => void;
    clearAccounts: () => void;
}

export const useAccountStore = create<AccountState>()(
    persist(
        (set) => ({
            accounts: [],
            addAccount: (account) =>
                set((state) => ({
                    accounts: [...state.accounts, account],
                })),

            setAccounts: (accounts) => set({ accounts }),

            removeAccount: (index) =>
                set((state) => ({
                    accounts: state.accounts.filter((a) => a.index !== index),
                })),

            clearAccounts: () => set({ accounts: [] }),
        }),
        {
            name: STORAGE_KEYS.ACCOUNTS,
        }
    )
);