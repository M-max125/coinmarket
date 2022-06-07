import React from "react";
import { TrendingDataProps } from "./CoinMarketTrending";
import Image from "next/image";
import CryptoRate from "../cmc-table/CryptoRate";

const styles = {
  trendingCardRow: `flex items-center justify-between mb-4 text-[0.93rem]`,
};

const TrendingCardRow: React.FC<TrendingDataProps> = ({
  number,
  symbol,
  name,
  icon,
  isIncrement,
  rate,
}) => {
  return (
    <div className={styles.trendingCardRow}>
      <p className="opacity-40">{number}</p>
      <div className="flex w-full">
        <div className="mx-5">
          {icon && <Image src={icon} width={20} height={20} />}
        </div>
        <p className="font-bold">
          {name} <span className="text-grey-400">{symbol}</span>
        </p>
          </div>
          <CryptoRate isIncrement={isIncrement} rate={rate}/>
    </div>
  );
};

export default TrendingCardRow;
