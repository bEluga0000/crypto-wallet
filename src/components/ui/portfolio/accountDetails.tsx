"use client";

import { AccountSchema } from "@/constants/accounts";
import { COIN_TYPES } from "@/constants/blockChainType";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import {
    MdClose,
    MdContentCopy,
    MdVisibility,
    MdVisibilityOff,
    MdDelete,
    MdWarning,
} from "react-icons/md";
import CopyButton from "../formComponents/copyButton";
import DeleteWalletDialog from "../modals/deleteAccount";
import { useAccountStore } from "@/store/accounts.store";
import { toast } from "sonner";
import { useBalanceStore } from "@/store/balance.store";

type AccountDetailsModalProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    account: AccountSchema
};

const AccountDetailsModal = ({
    open,
    onOpenChange,
    account
}: AccountDetailsModalProps) => {
    const [showPrivateKey, setShowPrivateKey] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const deleteAccount = useAccountStore(s=>s.removeAccount)
    const removebalance = useBalanceStore(s=>s.removeBalance)
    const handleDeleteAccount = ()=>{
        deleteAccount(account.publicKey)
        removebalance(`${account.coin}:${account.publicKey}`)
        toast.success(`${account.coin} wallet has been deleted`);
        onOpenChange(false)
    }
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                {/* Overlay */}
                <Dialog.Overlay className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" />

                {/* Modal */}
                <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-[560px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-slate-200 bg-background-light shadow-2xl dark:border-border-dark dark:bg-surface-dark">
                    {/* Header */}
                    <div className="flex items-start justify-between p-6">
                        <div className="flex items-center gap-4">
                            <div
                                className="h-14 w-14 rounded-full border-2 border-slate-200 bg-slate-200 bg-cover bg-center dark:border-border-dark dark:bg-[#111318]"
                                style={
                                    COIN_TYPES[account.coin].image
                                        ? { backgroundImage: `url(${COIN_TYPES[account.coin].image})` }
                                        : undefined
                                }
                            />

                            <div>
                                <Dialog.Title className="text-2xl font-bold">
                                    {account.accountName}
                                </Dialog.Title>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    {COIN_TYPES[account.coin].label}
                                </p>
                            </div>
                        </div>

                        <Dialog.Close className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-200 dark:hover:bg-white/10">
                            <MdClose size={20} />
                        </Dialog.Close>
                    </div>

                    {/* Content */}
                    <div className="space-y-6 px-6 pb-8">
                        {/* Public Key */}
                        <div className="space-y-2">
                            <label className="ml-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                Public Key
                            </label>

                            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-border-dark dark:bg-[#282e39]">
                                <code className="flex-1 break-all font-mono text-sm">
                                    {account.publicKey}
                                </code>

                                {/* <button
                                    onClick={() => copyToClipboard(account.publicKey)}
                                    className="p-2 text-slate-400 transition hover:text-primary"
                                >
                                    <MdContentCopy />
                                </button> */}
                                <CopyButton value={account.publicKey} options={{ label: "Public key" }} buttonText={false} />
                            </div>
                        </div>

                        {/* Private Key */}
                        <div className="space-y-2">
                            <label className="ml-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                Private Key
                            </label>

                            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-border-dark dark:bg-[#282e39]">
                                <code
                                    className={`
      flex-1 break-all font-mono text-sm transition-all
      ${showPrivateKey
                                            ? "text-slate-900 dark:text-white"
                                            : "select-none text-slate-400 dark:text-slate-500"}
    `}
                                >
                                    {showPrivateKey ? account.privateKey : "•••• •••• •••• •••• •••• ••••"}
                                </code>

                                <div className="flex gap-1">
                                    <button
                                        onClick={() => setShowPrivateKey((v) => !v)}
                                        className="rounded-md p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                                        aria-label={showPrivateKey ? "Hide private key" : "Show private key"}
                                    >
                                        {showPrivateKey ? <MdVisibilityOff /> : <MdVisibility />}
                                    </button>

                                    <CopyButton
                                        value={account.privateKey}
                                        options={{ label: "Private key" }}
                                        buttonText={false}
                                    />
                                </div>
                            </div>

                            <div className="flex items-start gap-2 px-1">
                                <MdWarning className="mt-0.5 text-amber-500" size={14} />
                                <p className="text-[11px] italic text-slate-500 dark:text-slate-400">
                                    Never share your private key. Anyone with this key can take
                                    your assets.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4 border-t border-slate-200 bg-slate-50 p-6 dark:border-border-dark dark:bg-[#111318]/50">
                        <button className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 text-sm font-bold text-red-600 transition hover:bg-red-500/20 dark:text-red-400" onClick={()=>setDeleteOpen(true)}>
                            <MdDelete size={18} />
                            Delete Account
                        </button>
                        <p className="text-center text-[11px] text-slate-400">
                            This account can be restored using your secret recovery phrase.
                        </p>
                    </div>
                    <DeleteWalletDialog
                        open={deleteOpen}
                        onOpenChange={setDeleteOpen}
                        onConfirm={handleDeleteAccount}
                    />
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default AccountDetailsModal;