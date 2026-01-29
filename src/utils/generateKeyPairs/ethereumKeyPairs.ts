import { STORAGE_KEYS } from "@/constants/storageKeys"
import { Keypair } from "@solana/web3.js"
import { mnemonicToSeedSync } from "bip39"
import { derivePath } from "ed25519-hd-key"
import nacl from "tweetnacl"
import bs58 from "bs58";
import { ChainKeyPairsoutputSchema } from "./solanaKeyPairs"
import { HDNodeWallet } from "ethers"

export const solanaKeyPairs = (derivationPath: string): ChainKeyPairsoutputSchema => {
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
        publicKey:wallet.publicKey,
        privateKey:wallet.privateKey
    }
}