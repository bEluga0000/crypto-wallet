import { NextResponse } from "next/server";

import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

const connection = new Connection("https://api.devnet.solana.com");

export async function POST(req: Request) {
    try {
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