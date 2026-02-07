import nextApi from "../apiConnection";
export async function getEthereumBalance(address: string) {
    const res = await nextApi.post("/api/balances/eth", {
        address
    });
    if (!res.data) {
        return { wei: "0", eth: 0 };
    }
    return res.data
}