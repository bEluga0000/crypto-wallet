import axios from "axios"
export async function getEthereumBalance(address: string) {
    const res = await axios.post("/api/balances/ethereum", {
        address
    });
    if (!res.data ) {
        return { lamports: 0, sol: 0 };
    }
    return res.data
}