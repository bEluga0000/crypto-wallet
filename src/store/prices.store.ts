import { getUsdPrices, PriceMap } from "@/utils/prices/getUSDprices";
import { create } from "zustand";

type PriceState = {
  prices: PriceMap | null;
  loading: boolean;
  fetchPrices: () => Promise<void>;
};

export const usePriceStore = create<PriceState>((set) => ({
  prices: null,
  loading: false,

  fetchPrices: async () => {
    set({ loading: true });
    try {
      const prices = await getUsdPrices();
      set({ prices });
    } finally {
      set({ loading: false });
    }
  },
}));