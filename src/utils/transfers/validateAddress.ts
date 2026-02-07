import { ethers } from "ethers";
import { PublicKey } from "@solana/web3.js";
import { COIN_TYPES_KEYS } from "@/constants/blockChainType";

export function validateAddress(
  address: string,
  network: COIN_TYPES_KEYS
): boolean {
  if (!address) return false;

  try {
    if (network === "ethereum") {
      return ethers.isAddress(address);
    }

    if (network === "solana") {
      new PublicKey(address);
      return true;
    }

    return false;
  } catch {
    return false;
  }
}