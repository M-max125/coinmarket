
import type { NextPage } from "next";
import React from "react";
import CoinMarketTrending from "../components/trending/CoinMarketTrending";
import CMCTable from "../components/cmc-table/CMCTable";

const Home: NextPage = () => {

  return (
    <>
      {" "}
    
          <CoinMarketTrending />
          <CMCTable/>
  
    </>
  );
};

export default Home;
