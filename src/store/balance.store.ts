import { create } from "zustand";
type BalanceState = {
    balances: Record<string, number>; // publicKey → lamports
    setBalance: (pubkey: string, lamports: number) => void;
    clearBalances: () => void;
};

export const useBalanceStore = create<BalanceState>((set) => ({
    balances: {},
  
    setBalance: (pubkey, lamports) =>
      set((state) => ({
        balances: {
          ...state.balances,
          [pubkey]: lamports,
        },
      })),
  
    clearBalances: () => set({ balances: {} }),
  }));
