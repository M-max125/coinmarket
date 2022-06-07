import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { StaticImageData } from "next/image";
import React from "react";
import { TrendingDataProps } from "./CoinMarketTrending";
import Image from "next/image";
import MoreButton from "./MoreButton";
import { styled } from "@mui/material/styles";
import TrendingCardRow from "./TrendingCardRow";

const styles = {
  trendingCard: `w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3 mb-3`,
  trendingCardWrapper: `flex items-center justify-between`,
};



const TrendingCard: React.FC<{
  title: string;
  trendingData: TrendingDataProps[];
  icon: StaticImageData;
}> = (props) => {
  return (
    <div className={styles.trendingCard}>
      <div className={styles.trendingCardWrapper}>
        <div className="flex">
          {props.icon && <Image src={props.icon} width={27} height={27} />}
          &nbsp;&nbsp;
          <p className="font-bold">{props.title}</p>
        </div>
        <MoreButton />
      </div>
      <br />
      {props.trendingData.map((item, index) => {
        return (
          <TrendingCardRow
            key={index}
            number={item.number}
            symbol={item.symbol}
            name={item.name}
            icon={item.icon}
            isIncrement={item.isIncrement}
            rate={item.rate}
          />
        );
      })}
    </div>
  );
};

export default TrendingCard;
