import Image from "next/image";
import converter from "../../assets/converter.png";
import btc from "../../assets/btc.png";
import eth from "../../assets/eth.png";
import usdc from "../../assets/usdc.png";
import usdt from "../../assets/usdt.png";
import xrp from "../../assets/xrp.png";
import cardano from "../../assets/cardano.png";
import tera from "../../assets/tera.png";
import solana from "../../assets/solana.png";
import avalanche from "../../assets/avalanche.png";
import bnb from "../../assets/bnb.png";
import { useTheme } from "@mui/material/styles";
import BackButton from "../common/BackButton";
import CryptoRate from "../cmc-table/CryptoRate";
import RateFilled from "./RateFilled";
import DropDownButton from "./DropDownButton";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = {
  coinDetails: `min-h-screen text-white`,
  coinDetailsLinks: `flex mt-3 flex-wrap items-center justify-center`,
  greyBtn: `mr-3 mb-3 bg-[#6188FF] px-3 py-1 rounded-xl`,
  borderLeft: `ml-0 xl:ml-10 pl-5 w-full border-l border-gray-800`,
  title: `text-gray-400 whitespace-nowrap mr-2`,
  coinDetailsWrapper: `coin-details flex flex-col xl:flex-row max-w-screen-2xl m-auto pt-2 xl:pt-20`,
  coinSymbol: `bg-[#6188FF] flex items-center px-2 rounded-xl`,
  coinInfo: `flex flex-col xl:flex-row justify-between mt-10 p-4 border-t border-gray-800`,
  coinRates: `w-full flex flex-col xl:flex-row items-center xl:items-start justify-center xl:justify-between`,
  flexBetween: `flex justify-between`,
};

const CoinPriceDetails: React.FC<{
  coinName: string | null;
  coinPrice: string | null;
  coinSymbol: string | null;
}> = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const renderCoinIcon = () => {
    switch (props.coinName) {
      case "Bitcoin":
        return (
          <Image className="rounded-full" src={btc} width={30} height={30} />
        );
      case "Ethereum":
        return (
          <Image className="rounded-full" src={eth} width={30} height={30} />
        );
      case "USD Coin":
        return (
          <Image className="rounded-full" src={usdc} width={30} height={30} />
        );
      case "Tether":
        return (
          <Image className="rounded-full" src={usdt} width={30} height={30} />
        );
      case "XRP":
        return (
          <Image className="rounded-full" src={xrp} width={30} height={30} />
        );
      case "Cardano":
        return (
          <Image
            className="rounded-full"
            src={cardano}
            width={30}
            height={30}
          />
        );
      case "Terra":
        return (
          <Image className="rounded-full" src={tera} width={30} height={30} />
        );
      case "Solana":
        return (
          <Image className="rounded-full" src={solana} width={30} height={30} />
        );
      case "Avalanche":
        return (
          <Image
            className="rounded-full"
            src={avalanche}
            width={30}
            height={30}
          />
        );
      case "BNB":
        return (
          <Image className="rounded-full" src={bnb} width={30} height={30} />
        );
      default:
        return (
          <Image className="rounded-full" src={btc} width={30} height={30} />
        );
    }
  };

  return (
    <main className={styles.coinDetails}>
      <BackButton />
      <div>
        <div className={styles.coinDetailsWrapper}>
          <div className="flex flex-col w-fit mx-auto justify-center items-center xl:items-start">
            <div className="flex items-center">
              {renderCoinIcon()}
              &nbsp;&nbsp;
              <div>
                <div className="flex">
                  <p
                    className={`text-xl xl:text-3xl ${
                      theme.palette.mode === "dark"
                        ? "text-white"
                        : "text-[#6188FF]"
                    }`}
                  >
                    {props.coinName}
                  </p>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <p className={styles.coinSymbol}>{props.coinSymbol}</p>
                </div>
              </div>
            </div>
            <br />
            {isMobile ? <></> : <br />}
            {isMobile ? <></> : <br />}
            {isMobile ? <></> : <br />}
            {isMobile ? <></> : <br />}
            {isMobile ? <></> : <br />}
           
         
            <div className={styles.coinDetailsLinks}>
              <div className={styles.greyBtn}>solana.com</div>
              <div className={styles.greyBtn}>Explorers</div>
              <div className={styles.greyBtn}>Community</div>
              <div className={styles.greyBtn}>Blog</div>
              <div className={styles.greyBtn}>News</div>
              <div className={styles.greyBtn}>PostsWall</div>
            </div>
            <br />
            <p
              className={` ${
                theme.palette.mode === "dark" ? "text-white" : "text-gray-400"
              }`}
            >
              Topics
            </p>
            <div className={styles.coinDetailsLinks}>
              <div className={styles.greyBtn}>Mineable</div>
              <div className={styles.greyBtn}>POW</div>
              <div className={styles.greyBtn}>SHA-256</div>
              <div className={styles.greyBtn}>Store</div>
            </div>
          </div>
          <div className="ml-0 xl:ml-16">
            <div className={styles.coinRates}>
              <div>
                <p className="text-gray-400">
                  {props.coinName} {props.coinSymbol}
                </p>
                <div className="flex my-3">
                  <h1
                    className={`text-xl xl:text-4xl ${
                      theme.palette.mode === "dark"
                        ? "text-white"
                        : "text-[#6188FF]"
                    }`}
                  >
                    {props.coinPrice}
                  </h1>
                  <RateFilled/>
                </div>
                <div className="flex items-start">
                  <p className="text-gray-400">15.26 ETH</p>
                  &nbsp;&nbsp;&nbsp;
                  <CryptoRate isIncrement={false} rate="0.53%" />
                </div>
                <div className="flex items-start">
                  <p className="text-gray-400">24.33 BTC</p>
                  &nbsp;&nbsp;&nbsp;
                  <CryptoRate isIncrement={true} rate="0.99%" />
                </div>
              </div>
              <div className="flex items-center">
                <DropDownButton label = 'Buy'/>
                <DropDownButton label = 'Exchange'/>
                <DropDownButton label = 'Gaming'/>
                <DropDownButton label = 'Earn Crypto'/>
              </div>
            </div>
            <div className={styles.coinInfo}>
              <div>
                <div>
                  <small className={styles.title}>Market Cap</small>
                </div>
                <small
                  className={`${
                    theme.palette.mode === "dark"
                      ? "text-white"
                      : "text-[#6188FF]"
                  }`}
                >
                  $868,000,235,119
                </small>
                <CryptoRate isIncrement={true} rate="0.68%" />
              </div>
              <div className={styles.borderLeft}>
                <div>
                  <small className={styles.title}>
                    Fully diluted market cap
                  </small>
                </div>
                <small
                  className={`${
                    theme.palette.mode === "dark"
                      ? "text-white"
                      : "text-[#6188FF]"
                  }`}
                >
                  $968,060,235,559
                </small>
                <CryptoRate isIncrement={true} rate="0.75%" />
              </div>
              <div className={styles.borderLeft}>
                <div>
                  <div>
                    <small className={styles.title}>
                      Volume &nbsp;<small>BTC</small>
                    </small>
                  </div>
                  <small
                    className={`${
                      theme.palette.mode === "dark"
                        ? "text-white"
                        : "text-[#6188FF]"
                    }`}
                  >
                    $24,060,235,559
                  </small>
                  <CryptoRate isIncrement={true} rate="0.95%" />
                </div>
                <br />
                <div>
                  <div>
                    {" "}
                    <small className={styles.title}>Volume / Market Cap</small>
                  </div>
                  <small
                    className={`${
                      theme.palette.mode === "dark"
                        ? "text-white"
                        : "text-[#6188FF]"
                    }`}
                  >
                    0.03315
                  </small>
                </div>
              </div>
              <div className={styles.borderLeft}>
                <div>
                  <div>
                    <small className={styles.title}>Circulating Supply</small>
                  </div>
                  <small
                    className={`${
                      theme.palette.mode === "dark"
                        ? "text-white"
                        : "text-[#6188FF]"
                    }`}
                  >
                    532,060,235,772 BTC
                  </small>
                </div>
                <br />
                <div>
                  <div className='flex flex-col xl:flex-row justify-center xl:justify-between'>
                    <div>
                      <small className={styles.title}>Max Supply</small>
                    </div>
                    <div>
                      <small
                        className={`${
                          theme.palette.mode === "dark"
                            ? "text-white"
                            : "text-[#6188FF]"
                        }`}
                      >
                        21,060,235,772
                      </small>
                    </div>
                  </div>
                  <div className='flex flex-col xl:flex-row justify-center xl:justify-between'>
                    <div>
                      <small className={styles.title}>Total Supply</small>
                    </div>
                    <div>
                      <small
                        className={`${
                          theme.palette.mode === "dark"
                            ? "text-white"
                            : "text-[#6188FF]"
                        }`}
                      >
                        18,300,235,002
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoinPriceDetails;
