import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import solana from "../../assets/solana.png";
import Usd from "../../assets/svg/usd";
import CMCpriceConverter from "../../components/coin-info/CMCpriceConverter";
import CoinGraphic from "../../components/coin-info/CoinGraphic";
import CapChat from "../../components/cmc-chat/CapChat";
import BackButton from "../../components/common/BackButton";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = {
  activeTab: `p-1 px-2 mr-2 rounded-lg bg-[#171924]`,
  tabItem: `px-2`,
  tabContainer: `w-11/12 md:w-auto flex justify-center items-center mb-3 md:mb-0 mx-auto md:mx-0 p-2 rounded-xl bg-[#222531] border border-gray-500/10 text-xs md:text-sm`,
  info: `min-h-screen w-full`,
  main: `text-white mx-auto max-w-screen-2xl`,
  flexBetween: `flex justify-between`,
  flexBetweenCenter: `flex flex-col md:flex-row justify-center md:justify-between items-center`,
  tabContainerWrapper: `p-10 pl-0 pr-0 w-2/3`,
  flexCenter: `flex items-center justify-center`,
};

const InfoCurrencies = () => {
  const [coinName, setCoinName] = useState<string | null>("");
  const [coinSymbol, setCoinSymbol] = useState<string | null>("");
  const [coinPrice, setCoinPrice] = useState<string | null>("");
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    getUrlData();
  });

  const getUrlData = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    setCoinName(urlParams.get("coin"));
    setCoinPrice(urlParams.get("price"));
    setCoinSymbol(urlParams.get("symbol"));
  };
  return (
    <div className={styles.info}>
      <BackButton />

      <main
        className={`${
          theme.palette.mode === "dark" ? "text-white" : "text-[#6188FF]"
        } mx-auto w-full xl:max-w-screen-2xl`}
      >
        <div className="flex flex-col xl:flex-row items-start">
          <div className="p-2 md:p-10 pl-0 pr-0 w-full xl:w-2/3">
            <div className="flex flex-col xl:flex-row justify-center xl:justify-between">
              <div className={styles.tabContainer}>
                <p className={styles.activeTab}>Price</p>
                <p className={styles.tabItem}>Market Cap</p>
                <p className={styles.tabItem}>Trading View</p>
                <p className={styles.tabItem}>History</p>
              </div>

              <div className={styles.tabContainer}>
                <p className={styles.activeTab}>1D</p>
                <p className={styles.tabItem}>2D</p>
                <p className={styles.tabItem}>1M</p>
                <p className={styles.tabItem}>3M</p>
                <p className={styles.tabItem}>1Y</p>
                <p className={styles.tabItem}>YTD</p>
                <p className={styles.tabItem}>ALL</p>
                <p className={styles.tabItem}>LOG</p>
              </div>
            </div>
            <br />
            <CoinGraphic />
            <br />
            <div className={styles.flexBetweenCenter}>
              <div className="flex">
                <div className={styles.flexCenter}>
                  <input className="outline-none" type="checkbox" /> &nbsp; USD
                </div>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <div className={styles.flexCenter}>
                  <input type="checkbox" /> &nbsp; BTC
                </div>
              </div>

              <p>
                Want more data?{""}
                <span className="text-[#6188FF]">Check out our API</span>
              </p>
            </div>
            {isMobile ? <></> : <br />}
             <br />

            <CMCpriceConverter
              from={coinName}
              fromSymbol={coinSymbol}
              toSymbol="USD"
              to="United States Dollars"
              price={Number(coinPrice)}
              fromLogo={solana}
              toLogo={<Usd />}
              converter={solana}
            />
          </div>
          <div className="pt-10 xl:ml-5 mx-auto ">
            <CapChat />
          </div>
        </div>
      </main>
    </div>
  );
};

export default InfoCurrencies;
