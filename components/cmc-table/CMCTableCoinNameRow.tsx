import { StaticImageData } from "next/image";
import React, { useContext } from "react";
import Image from "next/image";
import { CoinMarketCapContext } from "../../context/context";
import CMCSwapCryptoModal from "./CMCSwapCryptoModal";

const CMCTableCoinNameRow: React.FC<{
  name: string;
  icon: StaticImageData;
  onClick: () => void;
}> = (props) => {
  const { openSwapCryptoModal,setOpenSwapCryptoModal } = useContext(CoinMarketCapContext);
  console.log(openSwapCryptoModal);
  return (
    <>
      <div className="flex items-center justify-center md:justify-between flex-col md:flex-row">
        <div className="w-4 md:w-8 h-4 md:h-8 relative">
          <Image src={props.icon} layout="fill" />
        </div>

        <p
          className="text-xs md:text-base ml-2 cursor-pointer"
          onClick={props.onClick}
        >
          {props.name}
        </p>
        <span
          className="text-[#6188FF] border border-white px-2 py-2 md:py-0 cursor-pointer ml-2 mt-2 mb-2"
          onClick={() => setOpenSwapCryptoModal?.(true)}
        >
          Buy
        </span>
      </div>
     
    </>
  );
};

export default CMCTableCoinNameRow;
