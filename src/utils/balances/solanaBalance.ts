import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
const SOLANA_RPC = "https://rpc.ankr.com/solana";
const connection = new Connection(SOLANA_RPC, "confirmed")
export const getSolanaBalance = async (publicKey: string) => {
    try {
        const key = new PublicKey(publicKey)
        const lamports = await connection.getBalance(key)
        return {
            lamports,
            sol: lamports / LAMPORTS_PER_SOL
        }
    } catch (err) {
        // console.error("Failed to fetch Solana balance", err);
        return {
            lamports: 0,
            sol: 0,
        }
    }
}
