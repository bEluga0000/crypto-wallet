import { AddAccountFormSchema } from "@/components/ui/modals/addNewAccount";
import { COIN_TYPES, COIN_TYPES_KEYS } from "@/constants/blockChainType";
import { STORAGE_KEYS } from "@/constants/storageKeys";
import { solanaKeyPairs } from "./generateKeyPairs/solanaKeyPairs";
import { AccountSchema } from "@/constants/accounts";
import { ethereumKeyPairs } from "./generateKeyPairs/ethereumKeyPairs";
import { bitcoinKeyPairs } from "./generateKeyPairs/bitcoinKeyPairs";
import { useAccountStore } from "@/store/accounts.store";

export const createNewPublicPrivateKey = (input: AddAccountFormSchema) => {
    const {accounts,addAccount} = useAccountStore.getState()
    const filteredAccounts = accounts
        .filter(acc => acc.coin == input.chain)
    .sort((a, b) => b.index - a.index);
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
    if(coinKey == "bitcoin")
        {
            const keypairs = bitcoinKeyPairs(derivationPath)
            publicKey = keypairs.publicKey
            privateKey=keypairs.privateKey
        }
    if (!privateKey || !publicKey)
        return false
    addAccount({
        index: newIndex,
        type: input.walletSource,
        coin: input.chain,
        publicKey,
        privateKey,
        accountName: input.accountName,
      });
    return true
}

function getDerivationPath(
    coin: COIN_TYPES_KEYS,
    accountIndex: number
): string {
    return COIN_TYPES[coin].derivationPath(accountIndex);
}