import {
    Connection,
    PublicKey,
    Keypair,
    Transaction,
    SystemProgram,
    LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import bs58 from "bs58";

export async function sendSol({
    fromPrivateKey,
    to,
    amountSol,
    rpcUrl
}: {
    fromPrivateKey: string;
    to: string;
    amountSol: number;
    rpcUrl: string
}) {
    const connection = new Connection(
        rpcUrl,
        "confirmed"
    );

    const sender = Keypair.fromSecretKey(
        bs58.decode(fromPrivateKey)
    );

    const transaction = new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: sender.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amountSol * LAMPORTS_PER_SOL,
        })
    );

    const signature = await connection.sendTransaction(
        transaction,
        [sender]
    );

    await connection.confirmTransaction(signature, "confirmed");

    return signature;
}