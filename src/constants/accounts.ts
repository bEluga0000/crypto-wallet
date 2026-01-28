import { AccountTypeKey } from "./accountTypes"
import { COIN_TYPES_KEYS } from "./blockChainType"

export type AccountSchema = {
    type:AccountTypeKey
    coin:COIN_TYPES_KEYS
    publicKey:string
    privateKey:string
    accountName:string
    index:number
}