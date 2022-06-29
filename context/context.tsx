import { createContext, useState, useEffect } from "react";

export type ApiTopTenCoins = {
  circulating_supply: number;
  cmc_rank: number;
  date_added: string;
  id: number;
  last_updated: string;
  max_supply: number;
  name: string;
  num_market_pairs: number;
  platform: {
    id: number;
    name: string;
    slug: string;
    symbol: string;
    token_address: string;
  } | null;
  quote: {
    USD: {
      fully_diluted_market_cap: number;
      last_updated: string;
      market_cap: number;
      market_cap_dominance: number;
      percent_change_1h: number;
      percent_change_7d: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_60d: number;
      percent_change_90d: number;
      price: number;
      tvl: null;
      volume_24h: number;
      volume_change_24h: number;
    };
  };
  self_reported_circulating_supply: null;
  self_reported_market_cap: null;
  slug: string;
  symbol: string;
  tags: string[];
  total_supply: number;
  tvl_ratio: null;
};

export const CoinMarketCapContext = createContext<ApiTopTenCoins[]>([]);

export const CoinMarketCapProvider = ({ children }: any) => {
  const [topTenCoins, setTopTenCoins] = useState<ApiTopTenCoins[]>([]);

  useEffect(() => {
    getTopTenCoins();
  }, []);
  const getTopTenCoins = async () => {
    try {
      const res = await fetch("/api/getTopTen");
      const data = await res.json();
      setTopTenCoins(data.data);
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <CoinMarketCapContext.Provider value={topTenCoins}>
      {children}
    </CoinMarketCapContext.Provider>
  );
};
