export type SupportedCoin = "ethereum" | "solana";

export type PriceMap = Record<SupportedCoin, number>;

export async function getUsdPrices(): Promise<PriceMap> {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum,solana&vs_currencies=usd"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch prices");
  }

  const data = await res.json();

  return {
    ethereum: data.ethereum.usd,
    solana: data.solana.usd,
  };
}