import { STORAGE_KEYS } from "@/constants/storageKeys"
import { mnemonicToSeedSync } from "bip39"
import { ChainKeyPairsoutputSchema } from "./solanaKeyPairs"
import { HDNodeWallet } from "ethers"

export const ethereumKeyPairs = (derivationPath: string): ChainKeyPairsoutputSchema => {
    const mnemonic = localStorage.getItem(STORAGE_KEYS.MNEMONIC)
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