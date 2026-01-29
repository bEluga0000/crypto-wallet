import { STORAGE_KEYS } from "@/constants/storageKeys"
import { Keypair } from "@solana/web3.js"
import { mnemonicToSeedSync } from "bip39"
import { derivePath } from "ed25519-hd-key"
import nacl from "tweetnacl"
import bs58 from "bs58";
export interface ChainKeyPairsoutputSchema {
    publicKey: string | null
    privateKey: string | null
}
export const solanaKeyPairs = (derivationPath: string): ChainKeyPairsoutputSchema => {
    const mnemonic = localStorage.getItem(STORAGE_KEYS.MNEMONIC)
    if (!mnemonic)
        return {
            publicKey: null,
            privateKey: null
        }
    const seed = mnemonicToSeedSync(mnemonic)
    const derivedSeed = derivePath(derivationPath, seed.toString("hex")).key
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey
    const publicKey = Keypair.fromSecretKey(secret).publicKey.toBase58()
    const privateKey = bs58.encode(secret);
    return {
        publicKey,
        privateKey
    }
}