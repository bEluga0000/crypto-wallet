import { generateMnemonic } from "bip39"

export const generateMnemonics = ():string=>{
    // we need to decide which one they want is it 128 or 256, 12 words or 24 words
    const mnemonic = generateMnemonic(128)
    localStorage.setItem("mnemonic",mnemonic)
    return mnemonic
}