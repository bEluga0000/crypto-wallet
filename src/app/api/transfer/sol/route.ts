import { NextResponse } from "next/server";
import { sendSol } from "./sendSol";

export async function POST(req: Request) {
    try {
        const { privateKey, to, amount } = await req.json()
        const rpcURL = process.env.SOLANA_RPC_URL
        if (!rpcURL)
            return NextResponse.json({ error: "RPC URL is missing" }, { status: 400 });
        if (!privateKey || !to || !amount) {
            return NextResponse.json({
                error: "Invalid Payload"
            },
                { status: 400 }
            )
        }
        const tx = await sendSol({
            fromPrivateKey: privateKey,
            to,
            amountSol: amount,
            rpcUrl: rpcURL
        })
        return NextResponse.json(tx)
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message ?? "Transfer failed" },
            { status: 500 }
        );
    }
}