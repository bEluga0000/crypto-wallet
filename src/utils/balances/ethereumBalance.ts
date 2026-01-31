import { ethers } from "ethers"

const provider = new ethers.JsonRpcProvider("https://eth.llamarpc.com",
    {
        name: "mainnet",
        chainId: 1,
      }
)

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