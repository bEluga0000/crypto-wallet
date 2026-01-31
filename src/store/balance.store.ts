import { create } from "zustand";
type BalanceState = {
  balances: Record<string, number>;
  setBalance: (pubkey: string, sol: number) => void;
  removeBalance: (pubkey: string) => void;
  clearBalances: () => void;
};

// pubkey looks `${account.coin}:${account.publicKey}`
export const useBalanceStore = create<BalanceState>((set) => ({
  balances: {},
  setBalance: (pubkey, sols) =>
    set((state) => ({
      balances: {
        ...state.balances,
        [pubkey]: sols,
      },
    })),
  removeBalance: (pubkey) =>
    set((state) => {
      const { [pubkey]: _, ...rest } = state.balances;
      return { balances: rest };
    }),
  clearBalances: () => set({ balances: {} }),
}));
