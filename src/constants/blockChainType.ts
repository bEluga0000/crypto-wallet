type CoinTypeSchem = {
    label: string
    short: string
    color:string
    image:string
    // derivationPath:string
}

export const COIN_TYPES:Record<string, CoinTypeSchem> = {
    solana: {
        label: "Solana",
        short: "SOL",
        color: "purple",
        image: "sol.png"
    },
    ethereum: {
        label:"Ethereum",
        short:"ETH",
        color:"blue",
        image:"eth.png"
    },
    bitcoin:{
        label:"Bitcoin",
        short:"BTC",
        color:"orange",
        image:"btc.png"
    }
}

export type COIN_TYPES_KEYS = keyof typeof COIN_TYPES