import { AddAccountFormSchema } from "@/components/ui/modals/addNewAccount";
import { COIN_TYPES, COIN_TYPES_KEYS } from "@/constants/blockChainType";
import { STORAGE_KEYS } from "@/constants/storageKeys";
import { solanaKeyPairs } from "./generateKeyPairs/solanaKeyPairs";
import { AccountSchema } from "@/constants/accounts";

// [Log] Create Account: – {walletSource: "TRADING", chain: "solana", accountName: "8217346410"} (node_modules_next_dist_f3530cac._.js, line 2298)
export const createNewPublicPrivateKey = (input: AddAccountFormSchema) => {
    // check do we have data in the local storage
    const accounts = localStorage.getItem(STORAGE_KEYS.ACCOUNTS)
    if (!accounts)
        return createNewAccount(input)
    // if then create a new wallet with index zero

}

const createNewAccount = (input: AddAccountFormSchema) => {
    // Ensure input.chain is of type COIN_TYPES_KEYS
    const coinKey = input.chain as COIN_TYPES_KEYS;
    const derivationPath = getDerivationPath(coinKey, 0);
    const raw = localStorage.getItem(STORAGE_KEYS.ACCOUNTS);
    const accounts: AccountSchema[] = raw ? JSON.parse(raw) : [];
    let privateKey = null
    let publicKey = null
    if (coinKey == "solana") {
        const keypairs = solanaKeyPairs(derivationPath)
        privateKey = keypairs.privateKey
        publicKey = keypairs.publicKey
    }

    if (privateKey && publicKey)
        accounts.push({
            index: 0,
            type: input.walletSource,
            coin: input.chain,
            publicKey: publicKey,
            privateKey: privateKey,
            accountName: input.accountName

        })
    localStorage.setItem(STORAGE_KEYS.ACCOUNTS,JSON.stringify(accounts))
    return !!publicKey && !!privateKey
}

function getDerivationPath(
    coin: COIN_TYPES_KEYS,
    accountIndex: number
): string {
    return COIN_TYPES[coin].derivationPath(accountIndex);
}