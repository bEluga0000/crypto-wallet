import { STORAGE_KEYS } from "@/constants/storageKeys"
import { mnemonicToSeedSync } from "bip39"
import { derivePath } from "ed25519-hd-key"
export const solanaKeyPairs = (derivationPath: string)=>
{
    const mnemonic = localStorage.getItem(STORAGE_KEYS.MNEMONIC)
    if(!mnemonic)
        return
    const seed = mnemonicToSeedSync(mnemonic)
    const derivedSeed = derivePath(derivationPath,seed.toString("hex")).key
    
}