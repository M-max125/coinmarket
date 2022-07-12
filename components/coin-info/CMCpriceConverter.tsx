import React from 'react'
import converter from '../../assets/converter.png'
import btc from '../../assets/btc.png'
import eth from '../../assets/eth.png'
import usdc from '../../assets/usdc.png'
import usdt from '../../assets/usdt.png'
import xrp from '../../assets/xrp.png'
import cardano from '../../assets/cardano.png'
import tera from '../../assets/tera.png'
import solana from '../../assets/solana.png'
import avalanche from '../../assets/avalanche.png'
import bnb from '../../assets/bnb.png'
import Image, { StaticImageData } from 'next/Image'
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";


const styles = {
    converter: `flex items-center justify-between bg-[#171924] border border-gray-500/10 px-5 py-5 rounded-xl`,
  
}

const CMCpriceConverter:React.FC<{
    from: string | null,
    to: string,
    fromSymbol: string | null,
    toSymbol:string,
    fromLogo: StaticImageData,
    toLogo: JSX.Element,
    price: number | null,
    converter:StaticImageData
}> = (props) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const renderCoinIcon = () => {
        switch(props.from) {
            case 'Bitcoin':
                return <Image className='rounded-full' src={btc} width={30} height={30} />
            case 'Ethereum':
                return <Image className='rounded-full'  src={eth} width={30} height={30} />
            case 'USD Coin':
                return <Image className='rounded-full'  src={usdc} width={30} height={30} />
            case 'Tether':
                return <Image className='rounded-full'  src={usdt} width={30} height={30} />
            case 'XRP':
                return <Image className='rounded-full'  src={xrp} width={30} height={30} />
            case 'Cardano':
                return <Image className='rounded-full'  src={cardano} width={30} height={30} />
            case 'Terra':
                return <Image className='rounded-full'  src={tera} width={30} height={30} />
            case 'Solana':
                return <Image className='rounded-full'  src={solana} width={30} height={30} />
            case 'Avalanche':
                return <Image className='rounded-full'  src={avalanche} width={30} height={30} />
            case 'BNB':
                return <Image className='rounded-full'  src={bnb} width={30} height={30} />
            default:
                return <Image className='rounded-full'  src={btc} width={30} height={30} />
        }
    }
  return (
      <div>
          <h2 className='ml-3 md:ml-0'>
              {props.fromSymbol} to {props.toSymbol} Converter
          </h2>
          <br />
          <div className='flex w-11/12 mx-auto md:mx-0 md:w-auto flex-col md:flex-row items-start md:items-center justify-start md:justify-between bg-[#171924] border border-gray-500/10 px-5 py-5 rounded-xl'>
              <div>
                  <div className="flex items-center justify-center">
                      <div className='avatar-container'>
                          {props.fromLogo && props.fromLogo ? renderCoinIcon():<div></div>}
                      </div>
                      &nbsp;&nbsp;
                      <div className='flex'>
                          <p>{props.fromSymbol}</p>&nbsp;&nbsp;
                          <h4>{props.from }</h4>
                      </div>
                  </div>
              </div>
              <div className="flex items-center justify-center">
                  <p className="text-3xl">1</p>
                  &nbsp;&nbsp;
                  <div>
                      <Image src={ props.converter} width={isMobile ? 30 : 40} height={isMobile ? 30 : 40} />
                  </div>
                  &nbsp;&nbsp;
                  <div className="flex items-center">
                      {props.toLogo}
                      &nbsp;&nbsp;
                      <div className='flex'>
                          <p>{props.toSymbol}</p>
                          <h4>{ props.to}</h4>
                      </div>
                  </div>
              </div>
              <p className='text-base md:text-3xl'>{ props.price}</p>
          </div>
          <div className={'bg-[#1d4ed8] text-white p-2 px-5 w-min rounded-xl ml-4 md:ml-0 mt-5 cursor-pointer hover:opacity-60'}>
              Convert
          </div>
    </div>
  )
}

export default CMCpriceConverter