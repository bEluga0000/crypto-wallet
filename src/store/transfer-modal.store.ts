import { create } from "zustand";

export type AccountState = {
  modalOpen: boolean;
  setModalOpen: (val: boolean) => void;
};

export const useTransferStore = create<AccountState>((set) => ({
  modalOpen: false,
  setModalOpen: (val) => set({ modalOpen: val }),
}));