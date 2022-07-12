import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import CoinPriceDetails from "../../components/coin-info/CoinPriceDetails";


const PriceCurrency = () => {
  const [coinName, setCoinName] = useState<string | null>("");
  const [coinSymbol, setCoinSymbol] = useState<string | null>("");
  const [coinPrice, setCoinPrice] = useState<string | null>("");
    const theme = useTheme();
  

  useEffect(() => {
    getUrlData();
  });

  const getUrlData = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    setCoinName(urlParams.get("coin"));
    setCoinPrice(Number(urlParams.get("price")).toLocaleString());
    setCoinSymbol(urlParams.get("symbol"));
  };

  return (
    <>
      <CoinPriceDetails
        coinName={coinName}
        coinPrice={coinPrice}
        coinSymbol={coinSymbol}
      />
    </>
  );
};

export default PriceCurrency;
