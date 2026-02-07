
import { NextResponse } from "next/server";
import { sendEth } from "./sendEth";

export async function POST(req: Request) {
    try {
        const { privateKey, to, amount } = await req.json();
        const rpcURL = process.env.ETH_ALCHEMY_SEPOLIA_RPC
        if(!rpcURL)
        {
            return NextResponse.json({ error: "RPC URL is missing" }, { status: 400 });
        }

        if (!privateKey || !to || !amount) {
            return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
        }

        const tx = await sendEth({
            privateKey,
            to,
            amountEth: amount,
            rpcUrl: rpcURL,
        });

        return NextResponse.json(tx);
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message ?? "Transfer failed" },
            { status: 500 }
        );
    }
}