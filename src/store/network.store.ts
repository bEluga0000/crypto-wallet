import { COIN_TYPES_KEYS } from "@/constants/blockChainType";
import { create } from "zustand";

export type NetworkState = {
  network: COIN_TYPES_KEYS;
  setNetwork: (val: COIN_TYPES_KEYS) => void;
};

export const useNetworkStore = create<NetworkState>((set) => ({
  network: "ethereum",
  setNetwork: (val) => set({ network: val }),
}));