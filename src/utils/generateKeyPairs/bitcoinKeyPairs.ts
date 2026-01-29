import { STORAGE_KEYS } from "@/constants/storageKeys";
import { mnemonicToSeedSync } from "bip39";
import * as bitcoin from "bitcoinjs-lib";
import * as ecc from "tiny-secp256k1";
import * as bip32 from "bip32";
import { ChainKeyPairsoutputSchema } from "./solanaKeyPairs";

bitcoin.initEccLib(ecc);
const bip32Factory = bip32.BIP32Factory(ecc);

export const bitcoinKeyPairs = (
    derivationPath: string
): ChainKeyPairsoutputSchema => {
    const network = bitcoin.networks.bitcoin;
    const mnemonic = localStorage.getItem(STORAGE_KEYS.MNEMONIC);

    if (!mnemonic) {
        return { publicKey: null, privateKey: null };
    }

    const seed = mnemonicToSeedSync(mnemonic);
    const root = bip32Factory.fromSeed(seed, network);
    const child = root.derivePath(derivationPath);

    if (!child.privateKey || !child.publicKey) {
        return { publicKey: null, privateKey: null };
    }

    return {
        publicKey: Buffer.from(child.publicKey).toString("hex"),
        privateKey: Buffer.from(child.privateKey).toString("hex"),
    };
};