"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";

type ConfirmDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  trigger?: ReactNode;
  danger?: boolean;
};

export const ConfirmDialog = ({
  open,
  onOpenChange,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  trigger,
  danger = false,
}: ConfirmDialogProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

        <Dialog.Content className="fixed left-1/2 top-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-[#0b1428] p-6 shadow-xl">
          <Dialog.Title className="text-lg font-semibold text-white">
            {title}
          </Dialog.Title>

          <Dialog.Description className="mt-2 text-sm text-slate-400">
            {description}
          </Dialog.Description>

          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={() => onOpenChange(false)}
              className="rounded-lg px-4 py-2 text-sm text-slate-300 hover:text-white"
            >
              {cancelText}
            </button>

            <button
              onClick={() => {
                onConfirm();
                onOpenChange(false);
              }}
              className={`rounded-lg px-4 py-2 text-sm font-semibold text-white ${
                danger
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {confirmText}
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};