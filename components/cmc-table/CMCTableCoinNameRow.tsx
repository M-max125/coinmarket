import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

const CMCTableCoinNameRow: React.FC<{
  name: string;
  icon: StaticImageData;
  onClick: () => void;
}> = (props) => {
  return (
    <td>
          <div className="flex flex-col md:flex-row cursor-pointer" onClick={props.onClick}>
              <div className='w-4 md:w-8 h-4 md:h-8 relative'>
              <Image src={props.icon} layout='fill'/>
              </div>
          
              <p className="text-xs md:text-base ml-2 cursor-pointer">{props.name}</p>
      </div>
    </td>
  );
};

export default CMCTableCoinNameRow;
