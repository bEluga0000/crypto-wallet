import { create } from "zustand";
import { AccountSchema } from "@/constants/accounts";

type TransferState = {
    recipient: string | null;
    setRecipient: (recipient: string | null) => void;

    wallet: AccountSchema | null;
    setWallet: (wallet: AccountSchema | null) => void;

    balance: number;
    setBalance: (balance: number) => void;

    clearTransfer: () => void;
};

export const useTransferStore = create<TransferState>()(
        (set) => ({
            recipient: null,
            wallet: null,
            balance: 0,

            setRecipient: (recipient) => set({ recipient }),

            setWallet: (wallet) => set({ wallet }),

            setBalance: (balance) => set({ balance }),

            clearTransfer: () =>
                set({
                    recipient: null,
                    wallet: null,
                    balance: 0,
                }),
        }),
);