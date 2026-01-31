import { JsonRpcProvider } from "ethers";
import { COIN_TYPES } from "@/constants/blockChainType";
import { ethereumKeyPairs } from "../generateKeyPairs/ethereumKeyPairs";

const provider = new JsonRpcProvider("https://eth.llamarpc.com");

export async function discoverEthereumAccounts(
  max = 20,
  gapLimit = 5
) {
  const accounts = [];
  let emptyCount = 0;

  for (let index = 0; index < max; index++) {
    const path = COIN_TYPES.ethereum.derivationPath(index);
    const { publicKey } = ethereumKeyPairs(path);
    if (!publicKey) break;

    const balance = await provider.getBalance(publicKey);
    const txCount = await provider.getTransactionCount(publicKey);

    const hasActivity = balance > 0 || txCount > 0;

    accounts.push({
      index,
      address: publicKey,
      balance: Number(balance) / 1e18,
      hasActivity,
    });

    if (!hasActivity) {
      emptyCount++;
      if (emptyCount >= gapLimit) break;
    } else {
      emptyCount = 0;
    }
  }

  return accounts;
}