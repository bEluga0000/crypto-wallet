import { COIN_TYPES } from "@/constants/blockChainType"
import { Connection, PublicKey } from "@solana/web3.js"
import { solanaKeyPairs } from "../generateKeyPairs/solanaKeyPairs"

const connection = new Connection("https://api.mainnet-beta.solana.com")

export async function discoverSolanaAccounts(
    max = 20,
    gapLimit = 5
) {
    const accounts = []
    let emptyCount = 0
    for (let index = 0; index < max; index++) {
        const path = COIN_TYPES.solana.derivationPath(index)
        const { publicKey, privateKey } = solanaKeyPairs(path)
        if (!publicKey) break
        const pub = new PublicKey(publicKey)
        const [balance, transactions] = await Promise.all([
            connection.getBalance(pub),
            connection.getSignaturesForAddress(pub, { limit: 1 }),
        ])
        const hasActivity = balance > 0 || transactions.length > 0;
        accounts.push({
            index,
            publicKey,
            balance,
            hasActivity,
        });
        if (!hasActivity) {
            emptyCount++;
            if (emptyCount >= gapLimit) break;
        } else {
            emptyCount = 0;
        }
    }
    return accounts
}
