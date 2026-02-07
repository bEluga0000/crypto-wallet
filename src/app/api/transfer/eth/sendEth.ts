import { ethers } from "ethers";

interface sendEthSchema {
    privateKey: string;
    to: string;
    amountEth: number;
    rpcUrl: string;
}
export async function sendEth({
    privateKey,
    to,
    amountEth,
    rpcUrl
}:sendEthSchema) {
    const provider = new ethers.JsonRpcProvider(rpcUrl)
    const wallet = new ethers.Wallet(privateKey,provider)
    const tx = await wallet.sendTransaction({
        to,
        value:ethers.parseEther(amountEth.toString())
    })
    const recipient = await tx.wait()
    return {
        hash:tx.hash,
        status:recipient?.status
    }
}