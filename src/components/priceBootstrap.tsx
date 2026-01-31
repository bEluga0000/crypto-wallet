"use client";
import { useEffect } from "react";
import { usePriceStore } from "@/store/prices.store";

export function PriceBootstrap() {
  const fetchPrices = usePriceStore((s) => s.fetchPrices);

  useEffect(() => {
    fetchPrices();
    const id = setInterval(fetchPrices, 60_000);
    return () => clearInterval(id);
  }, [fetchPrices]);

  return null;
}