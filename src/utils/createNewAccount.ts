import { AddAccountFormSchema } from "@/components/ui/modals/addNewAccount";
import { COIN_TYPES, COIN_TYPES_KEYS } from "@/constants/blockChainType";
import { STORAGE_KEYS } from "@/constants/storageKeys";
import { solanaKeyPairs } from "./generateKeyPairs/solanaKeyPairs";
import { AccountSchema } from "@/constants/accounts";
import { ethereumKeyPairs } from "./generateKeyPairs/ethereumKeyPairs";

export const createNewPublicPrivateKey = (input: AddAccountFormSchema) => {
    const raw = localStorage.getItem(STORAGE_KEYS.ACCOUNTS)
    console.log(raw)
    const accounts: AccountSchema[] = raw ? JSON.parse(raw) : [];
    console.log(accounts)
    const filteredAccounts = accounts
        .filter(acc => acc.coin == input.chain)
    .sort((a, b) => b.index - a.index);
    console.log(filteredAccounts)
    const coinKey = input.chain as COIN_TYPES_KEYS;
    const newIndex = filteredAccounts.length > 0 ? filteredAccounts[0].index + 1 : 0
    const derivationPath = getDerivationPath(
        coinKey, 
        newIndex
    );
    let privateKey = null;
    let publicKey = null;
    if (coinKey === "solana") {
        const keypairs = solanaKeyPairs(derivationPath)
        privateKey = keypairs.privateKey
        publicKey = keypairs.publicKey
    }
    if(coinKey == "ethereum")
    {
        const keypairs = ethereumKeyPairs(derivationPath)
        publicKey = keypairs.publicKey
        privateKey=keypairs.privateKey
    }
    if (privateKey && publicKey)
        accounts.push({
            index: newIndex,
            type: input.walletSource,
            coin: input.chain,
            publicKey: publicKey,
            privateKey: privateKey,
            accountName: input.accountName
        })
    localStorage.setItem(STORAGE_KEYS.ACCOUNTS, JSON.stringify(accounts))
    return !!publicKey && !!privateKey
}

function getDerivationPath(
    coin: COIN_TYPES_KEYS,
    accountIndex: number
): string {
    return COIN_TYPES[coin].derivationPath(accountIndex);
}