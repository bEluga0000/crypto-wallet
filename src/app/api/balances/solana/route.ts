import { NextResponse } from "next/server";

import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";


export async function POST(req: Request) {
    try {
        if(!process.env.SOLANA_RPC_URL)
            throw new Error("No RPC link found")
        const connection = new Connection(process.env.SOLANA_RPC_URL,"confirmed");
        
        const { publicKey } = await req.json();

        const key = new PublicKey(publicKey);
        const lamports = await connection.getBalance(key);

        return NextResponse.json({
            lamports,
            sol: lamports / LAMPORTS_PER_SOL,
        });
    } catch (error) {
        return NextResponse.json(
            { lamports: 0, sol: 0 },
            { status: 200 }
        );
    }
}