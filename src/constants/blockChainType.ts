type CoinTypeSchem = {
    label: string
    short: string
    color: string
    image: string
    derivationPath: (ind:number)=>string
}

export const COIN_TYPES = {
    solana: {
      label: "Solana",
      short: "SOL",
      color: "purple",
      image: "sol.png",
      // m/44'/501'/account'/0'
      derivationPath: (accountIndex: number) =>
        `m/44'/501'/${accountIndex}'/0'`,
    },
  
    ethereum: {
      label: "Ethereum",
      short: "ETH",
      color: "blue",
      image: "eth.png",
      // m/44'/60'/account'/0/0
      derivationPath: (accountIndex: number) =>
        `m/44'/60'/0'/0/${accountIndex}`,
    },
  
    bitcoin: {
      label: "Bitcoin",
      short: "BTC",
      color: "orange",
      image: "btc.png",
      // Native SegWit (BIP-84)
      // m/84'/0'/account'/0/0
      derivationPath: (accountIndex: number) =>
        `m/84'/0'/${accountIndex}'/0/0`,
    },
  } as const satisfies Record<string, CoinTypeSchem>;

export type COIN_TYPES_KEYS = keyof typeof COIN_TYPES