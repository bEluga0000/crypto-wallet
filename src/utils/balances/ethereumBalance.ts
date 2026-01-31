import { ethers } from "ethers"

const provider = new ethers.JsonRpcProvider("https://cloudflare-eth.com")

export async function getEthereumBalance(address: string) {
    try {
        const balanceWei = await provider.getBalance(address)
        const balanceEth = ethers.formatEther(balanceWei)
        return {
            wei: balanceWei.toString(),
            eth: Number(balanceEth)
        }
    } catch {
        return {
            wei: "0",
            eth: 0,
        };
    }
}