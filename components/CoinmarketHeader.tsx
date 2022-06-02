import React from 'react'
import Image from 'next/image'

const styles = {
    header: `bg-[#1E434C] text-white gap-[100px] flex  w-full`,
    
}

const CoinmarketHeader = () => {
  return (
      <div className={styles.header}>
          <div className='flex content-center'>
          <div className='w-10 h-10 relative flex'>
              <Image src='/static/market-logo.png' layout='fill' />
             
          </div>
          <div className='text-white'>This is a coin market</div>
          </div>
       
        
         
        
    </div>
  )
}

export default CoinmarketHeader