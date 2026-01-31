import { generateMnemonic } from "bip39";
import { toast } from "sonner";
import { useMnemonicStore } from "@/store/mnemonic.store";

export const generateMnemonics = (): string => {
  const { mnemonic, setMnemonic } = useMnemonicStore.getState();

  if (mnemonic && mnemonic.length > 0) {
    toast.success("Mnemonic already present");
    return mnemonic.join(" ");
  }

  // 128 bits → 12 words
  const newMnemonic = generateMnemonic(128);
  const words = newMnemonic.split(" ");

  setMnemonic(words);

  toast.success("Mnemonic generated");
  return newMnemonic;
};