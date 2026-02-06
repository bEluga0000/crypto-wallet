"use client";

import { useTransferStore } from "@/store/transfer-modal.store";
import * as Dialog from "@radix-ui/react-dialog";
import { MdClose } from "react-icons/md";

const TransferDialog = () => {
    const open = useTransferStore(s => s.modalOpen)
    const onOpenChange = useTransferStore(s => s.setModalOpen)
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                {/* Overlay */}
                <Dialog.Overlay className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" />

                <Dialog.Title>
                
                </Dialog.Title>
                {/* Content */}
                <Dialog.Content
                    className="
            fixed left-1/2 top-1/2 z-50
            w-full max-w-[680px]
            -translate-x-1/2 -translate-y-1/2
            rounded-2xl bg-white dark:bg-[#101622]
            border border-slate-200 dark:border-[#282e39]
            shadow-2xl
            overflow-hidden
          "
                >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-[#282e39] px-6 py-4">
                        <div className="flex items-center gap-3">
                            <div className="size-9 rounded-lg bg-primary flex items-center justify-center text-white">
                                <span className="material-symbols-outlined">
                                    account_balance_wallet
                                </span>
                            </div>
                            <h2 className="text-lg font-bold">Transfer Assets</h2>
                        </div>

                        <Dialog.Close className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-[#1c1f27]">
                            <MdClose size={20} />
                        </Dialog.Close>
                    </div>

                    {/* Body */}
                    <div className="max-h-[80vh] overflow-y-auto p-6 flex flex-col gap-6">
                        {/* Network Tabs */}
                        <div className="bg-slate-100 dark:bg-[#1c1f27] rounded-xl p-1 flex gap-1 border border-slate-200 dark:border-[#282e39]">
                            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary text-white font-bold text-sm">
                                Ethereum Sepolia
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 dark:hover:bg-[#282e39] font-bold text-sm">
                                Solana Devnet
                            </button>
                        </div>

                        {/* From Account */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                From Account
                            </label>
                            <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-[#282e39] bg-slate-50 dark:bg-[#101622]">
                                <div>
                                    <p className="font-bold text-sm">Main Wallet (Sepolia)</p>
                                    <p className="text-xs text-slate-500 font-mono">
                                        0x71C…4f92
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-sm">1.245 ETH</p>
                                    <p className="text-xs text-slate-500">≈ $2,842.12</p>
                                </div>
                            </div>
                        </div>

                        {/* Recipient */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                Recipient Address
                            </label>
                            <input
                                className="
                  w-full rounded-xl border border-slate-200 dark:border-[#282e39]
                  bg-slate-50 dark:bg-[#101622]
                  px-4 py-4 font-mono text-sm
                  focus:border-primary focus:ring-1 focus:ring-primary
                "
                                placeholder="Enter ENS or Address"
                            />
                        </div>

                        {/* Amount */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                Amount to Send
                            </label>
                            <div className="p-4 rounded-xl border border-slate-200 dark:border-[#282e39] bg-slate-50 dark:bg-[#101622]">
                                <input
                                    type="number"
                                    placeholder="0.00"
                                    className="
                    w-full bg-transparent text-right text-2xl font-bold
                    focus:outline-none
                  "
                                />
                                <p className="mt-2 text-xs text-slate-500">
                                    ≈ $1,141.41 USD
                                </p>
                            </div>
                        </div>

                        {/* Fee Preview */}
                        <div className="rounded-xl border border-slate-200 dark:border-[#282e39] bg-slate-100 dark:bg-[#1c1f27]/50 p-5">
                            <p className="text-sm font-bold mb-2">
                                Estimated Network Fee
                            </p>
                            <p className="text-lg font-bold">0.00042 ETH</p>
                            <p className="text-xs text-slate-500">≈ $0.96</p>
                        </div>

                        {/* Action */}
                        <button
                            className="
                w-full rounded-xl bg-primary py-4 text-white font-black
                shadow-[0_8px_16px_rgba(19,91,236,0.3)]
                hover:bg-primary/90 transition
                flex items-center justify-center gap-2
              "
                        >
                            Review Transfer
                            <span className="material-symbols-outlined">
                                arrow_forward
                            </span>
                        </button>

                        <p className="text-center text-[11px] text-slate-500">
                            Transactions on testnets carry no real monetary value.
                        </p>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default TransferDialog;