"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import Field from "../formComponents/fieldWrapper";
import SelectBox from "../formComponents/selectBox";
import { IoIosCloseCircle } from "react-icons/io";

const WALLET_SOURCES = ["Main Seed Phrase"] as const;
const CHAINS = ["Multi-chain", "Solana", "Ethereum"] as const;

const AddNewAccountModal = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) => {
  const [walletSource, setWalletSource] = useState(WALLET_SOURCES[0]);
  const [chain, setChain] = useState(CHAINS[0]);
  const [accountName, setAccountName] = useState("");

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

        {/* Content */}
        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0f1b34] to-[#0b1428] p-6 text-white shadow-2xl">
          {/* Header */}
          <div className="mb-4 flex items-start justify-between">
            <div>
              <Dialog.Title className="text-xl font-semibold">
                Add New Account
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-sm text-slate-400">
                Create a new sub-account within your HD wallet. Each account
                derives a unique address.
              </Dialog.Description>
            </div>

            <Dialog.Close className="rounded-lg p-1  cursor-pointer hover:bg-red-700">
              <IoIosCloseCircle className="h-5 w-5" />
            </Dialog.Close>
          </div>

          {/* Form */}
          <div className="space-y-4">
            {/* Wallet Source */}
            <Field label="Common Wallet types">
              <SelectBox
                value={walletSource}
                onChange={()=>setWalletSource}
                items={WALLET_SOURCES}
              />
            </Field>

            {/* Chain */}
            <Field label="Select Chain / Coin">
              <SelectBox
                value={chain}
                onChange={()=>setChain}
                items={CHAINS}
              />
            </Field>

            {/* Account Name */}
            <Field label="Account Name">
              <input
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                placeholder="e.g., Trading Account"
                className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              />
            </Field>
          </div>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-between">

            <button
              className="rounded-lg bg-blue-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Create Account
            </button>
          </div>

          {/* Hint */}
          <p className="mt-4 flex items-center gap-2 text-xs text-slate-500">
            🔒 Standard HD derivation path (m/44'/60'/0'/0)
          </p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddNewAccountModal;