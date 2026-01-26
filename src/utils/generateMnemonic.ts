import { STORAGE_KEYS } from "@/constants/storageKeys"
import { generateMnemonic } from "bip39"
import { toast } from "sonner"

export const generateMnemonics = (): string => {
    // we need to decide which one they want is it 128 or 256, 12 words or 24 words
    let mnemonic = localStorage.getItem(STORAGE_KEYS.MNEMONIC)
    if (mnemonic)
    {
        toast.success("Mnemonic Already Present");
        return mnemonic
    }
    mnemonic = generateMnemonic(128)
    localStorage.setItem(STORAGE_KEYS.MNEMONIC, mnemonic)
    toast.success("Mnemonic Generated");
    return mnemonic
}