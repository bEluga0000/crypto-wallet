"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { MdDelete, MdWarning } from "react-icons/md";

type DeleteWalletDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
};

const DeleteWalletDialog = ({
  open,
  onOpenChange,
  onConfirm,
}: DeleteWalletDialogProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" />

        {/* Content */}
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 w-full max-w-md
          -translate-x-1/2 -translate-y-1/2 rounded-xl
          border border-slate-200 bg-white p-6 shadow-2xl
          dark:border-slate-800 dark:bg-[#16181d]"
        >
          {/* Title */}
          <Dialog.Title className="flex items-center gap-2 text-lg font-bold text-red-500">
            <MdWarning size={20} />
            Delete Wallet
          </Dialog.Title>

          {/* Description */}
          <Dialog.Description className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            This will permanently remove this wallet from this device.
            Your funds are safe on the blockchain, but you will need your
            recovery phrase to restore access.
            <span className="block mt-2 font-semibold text-red-400">
              This action cannot be undone.
            </span>
          </Dialog.Description>

          {/* Actions */}
          <div className="mt-6 flex justify-end gap-3">
            <Dialog.Close asChild>
              <button className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10">
                Cancel
              </button>
            </Dialog.Close>

            <button
              onClick={() => {
                onConfirm();
                onOpenChange(false);
              }}
              className="flex items-center gap-2 rounded-lg
              bg-red-500 px-4 py-2 text-sm font-bold text-white
              transition hover:bg-red-600"
            >
              <MdDelete size={16} />
              Delete Wallet
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DeleteWalletDialog;