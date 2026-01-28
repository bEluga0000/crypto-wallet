"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { IoIosCloseCircle } from "react-icons/io";

import Field from "../formComponents/fieldWrapper";
import SelectBox from "../formComponents/selectBox";
import { ACCOUNT_TYPES, AccountTypeKey } from "@/constants/accountTypes";
import { COIN_TYPES, COIN_TYPES_KEYS } from "@/constants/blockChainType";
import { AccountSchema } from "@/constants/accounts";
import { createNewPublicPrivateKey } from "@/utils/createNewAccount";
import { toast } from "sonner";

export const WALLET_SOURCES = (
  ["MAIN", "TRADING", "COLD_STORAGE"] as const
).map((key) => ({
  value: key,
  label: ACCOUNT_TYPES[key].label,
  icon: ACCOUNT_TYPES[key].icon,
}));

export const COIN_SELECT_ITEMS = (
  Object.keys(COIN_TYPES) as COIN_TYPES_KEYS[]
).map((key) => ({
  value: key,
  label: COIN_TYPES[key].label,
  icon: (
    <img
      src={COIN_TYPES[key].image}
      alt={COIN_TYPES[key].label}
      className="h-4 w-4 rounded-full"
    />
  ),
}));

export type AddAccountFormSchema = {
  walletSource: AccountTypeKey;
  chain: COIN_TYPES_KEYS;
  accountName: string;
};

const AddNewAccountModal = ({
  open,
  onOpenChange,
  setAccounts,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  setAccounts:(val:AccountSchema[])=>void
}) => {
  const {
    handleSubmit,
    setValue,
    watch,
    register,
    formState: { errors },
  } = useForm<AddAccountFormSchema>({
    defaultValues: {
      walletSource: WALLET_SOURCES[0].value,
      chain: COIN_SELECT_ITEMS[0].value,
      accountName: "",
    },
  });

  const onSubmit = (data: AddAccountFormSchema) => {
    console.log("Create Account:", data);
    if(createNewPublicPrivateKey(data))
      toast.success(`New Account Created Successfully`);
    else
      toast.error("Failed to create account")
    onOpenChange(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0f1b34] to-[#0b1428] p-6 text-white shadow-2xl">
          {/* Header */}
          <div className="mb-4 flex items-start justify-between">
            <div>
              <Dialog.Title className="text-xl font-semibold">
                Add New Account
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-sm text-slate-400">
                Create a new sub-account within your HD wallet.
              </Dialog.Description>
            </div>

            <Dialog.Close className="rounded-lg p-1 hover:bg-red-700">
              <IoIosCloseCircle className="h-5 w-5" />
            </Dialog.Close>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Field label="Wallet Source">
              <SelectBox
                value={watch("walletSource")}
                onChange={(v) => setValue("walletSource", v as AccountTypeKey)}
                items={WALLET_SOURCES}
              />
            </Field>

            <Field label="Select Chain / Coin">
              <SelectBox
                value={watch("chain")}
                onChange={(v) => setValue("chain", v as COIN_TYPES_KEYS)}
                items={COIN_SELECT_ITEMS}
              />
            </Field>

            <Field label="Account Name">
              <input
                {...register("accountName", {
                  required: "Account name is required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters",
                  },
                })}
                placeholder="e.g., Trading Account"
                className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              />
            </Field>

            {/* Footer */}
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="rounded-lg bg-blue-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Create Account
              </button>
            </div>
          </form>

          <p className="mt-4 text-xs text-slate-500">
            🔒 Standard HD derivation path (m/44'/60'/0'/0)
          </p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddNewAccountModal;