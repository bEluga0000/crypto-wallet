import { Keypair } from "@solana/web3.js"
import { mnemonicToSeedSync } from "bip39"
import { derivePath } from "ed25519-hd-key"
import nacl from "tweetnacl"
import bs58 from "bs58";
import { useMnemonicStore } from "@/store/mnemonic.store"
export interface ChainKeyPairsoutputSchema {
    publicKey: string | null
    privateKey: string | null
}
export const solanaKeyPairs = (derivationPath: string,optionalMnemonic?:string): ChainKeyPairsoutputSchema => {
    const storeMnemonic = useMnemonicStore.getState().mnemonic
    const mnemonic = optionalMnemonic ?? (storeMnemonic ? storeMnemonic.join(" ") :null)
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