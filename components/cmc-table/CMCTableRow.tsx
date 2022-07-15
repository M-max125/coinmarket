import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import More from "../../assets/svg/more";
import Star from "../../assets/svg/star";
import { useRouter } from "next/router";
import CMCTableCoinNameRow from "./CMCTableCoinNameRow";
import CryptoRate from "./CryptoRate";

const styles = {
  tableRow: `text-white border-b-2 border-gray-800 text-[0.93rem]`,
};

type CMCTableRowProps = {
  starNumber: number;
  coinName: string;
  coinSymbol: string;
  coinIcon: StaticImageData;
  showBuy: boolean;
  hRate: number;
  dRate: number;
  hRateIsIncrement: boolean;
  dRateIsIncrement: boolean;
  price: number;
  marketCapValue: number;
  volumeCryptoValue: number;
  volumeValue: number;
  circulatingSupply: number;
};

const CMCTableRow: React.FC<CMCTableRowProps> = (props) => {
  const graphImages = [
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7129.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3957.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/328.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2416.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2099.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7653.svg",
  ];

  //generate random graphic
  const randomGraphic = () => {
    const randomIndex = Math.floor(Math.random() * graphImages.length) + 1;
    return graphImages[randomIndex];
  };

  const router = useRouter();

  const viewCoinDetails = () => {
    router.push(
      `/currencies/info?symbol=${props.coinSymbol}&coin=${props.coinName}&price=${props.price}`
    );
  };

  const viewCoinPrice = () => {
    router.push(
      `/currencies/price?symbol=${props.coinSymbol}&coin=${props.coinName}&price=${props.price}`
    );
  };

  const formatNumber = (num: number) => {
    return Number(num.toFixed(2)).toLocaleString();
  };
  console.log(randomGraphic());
  return (
    <tbody className={styles.tableRow}>
      <tr>
        <td>
          <Star />
        </td>

        <td className="text-xs md:text-base">{props.starNumber}</td>
        <td className="pr-5">
          {" "}
          {props.coinIcon && props.coinIcon ? (
            <CMCTableCoinNameRow
              name={props.coinName}
              icon={props.coinIcon}
              onClick={viewCoinDetails}
            />
          ) : (
            <></>
          )}
        </td>

        <td
          className="cursor-pointer text-xs md:text-base"
          onClick={viewCoinPrice}
        >
          <p>${formatNumber(props.price)}</p>
        </td>

        <td className="text-xs md:text-base">
          <CryptoRate
            isIncrement={props.hRateIsIncrement}
            rate={`${formatNumber(props.hRate)} %`}
          />
        </td>

        <td className="text-xs md:text-base">
          <CryptoRate
            isIncrement={props.dRateIsIncrement}
            rate={`${formatNumber(props.dRate)} %`}
          />
        </td>

        <td>
          <div>
            <p className="text-xs md:text-base">
              {formatNumber(props.marketCapValue)}
            </p>
          </div>
        </td>
        <td>
          <div>
            <p className="text-xs md:text-base">
              {formatNumber(props.volumeValue)}
            </p>
            <p className="text-gray-400 text-xs md:text-base">
              {formatNumber(props.volumeCryptoValue)} {props.coinSymbol}
            </p>
          </div>
        </td>

        <td>
          <div>
            <p className="text-xs md:text-base">
              {formatNumber(props.circulatingSupply)}
            </p>
          </div>
        </td>

        <td>
          <Image
            src={
              "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7653.svg"
            }
            width={150}
            height={60}
          />
        </td>

        <td>
          <More />
        </td>
      </tr>
    </tbody>
  );
};

export default CMCTableRow;
