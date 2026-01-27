import { AccountTypeKey } from "./accountTypes"
import { COIN_TYPES_KEYS } from "./blockChainType"

export type AccountSchema = {
    type:AccountTypeKey
    coint:COIN_TYPES_KEYS
    publicKey:string
    privateKey:string
    accontName:string
    index:number
}