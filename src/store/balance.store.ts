import { create } from "zustand";
type BalanceState = {
    balances: Record<string, number>;
    setBalance: (pubkey: string, sol: number) => void;
    clearBalances: () => void;
};

export const useBalanceStore = create<BalanceState>((set) => ({
    balances: {},
  
    setBalance: (pubkey, sols) =>
      set((state) => ({
        balances: {
          ...state.balances,
          [pubkey]: sols,
        },
      })),
  
    clearBalances: () => set({ balances: {} }),
  }));
