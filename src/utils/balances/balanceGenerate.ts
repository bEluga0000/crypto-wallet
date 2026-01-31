import { COIN_TYPES_KEYS } from "@/constants/blockChainType";

export const getBalanceKey = (
  coin: COIN_TYPES_KEYS,
  publicKey: string
) => `${coin}:${publicKey}`;