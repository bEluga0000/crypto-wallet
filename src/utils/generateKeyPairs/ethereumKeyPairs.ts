import { STORAGE_KEYS } from "@/constants/storageKeys"
import { mnemonicToSeedSync } from "bip39"
import { ChainKeyPairsoutputSchema } from "./solanaKeyPairs"
import { HDNodeWallet } from "ethers"
import { useMnemonicStore } from "@/store/mnemonic.store"

export const ethereumKeyPairs = (derivationPath: string,optionalMnemonic?:string): ChainKeyPairsoutputSchema => {
    const storeMnemonic = useMnemonicStore.getState().mnemonic;
    const mnemonic = optionalMnemonic ?? (storeMnemonic ? storeMnemonic.join(" ") :null)
    if (!mnemonic)
        return {
            publicKey: null,
            privateKey: null
        }
    const seed = mnemonicToSeedSync(mnemonic)
    const hdNode = HDNodeWallet.fromSeed(seed);
    const wallet = hdNode.derivePath(derivationPath)
    return {
        publicKey:wallet.address,
        privateKey:wallet.privateKey
    }
}