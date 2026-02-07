import { ethers } from "ethers";
import { NextResponse } from "next/server";

const provider = new ethers.JsonRpcProvider(process.env.ETH_ALCHEMY_SEPOLIA_RPC)

export async function POST(req: Request) {
    try {
        const { address } = await req.json()
        const balanceWei = await provider.getBalance(address)
        const balanceEth = ethers.formatEther(balanceWei)
        return NextResponse.json({
            wei: balanceWei.toString(),
            eth: Number(balanceEth)
        })
    } catch (e) {
        return NextResponse.json(
            { wei: "0", eth: 0 },
            { status: 200 }
        );
    }
}