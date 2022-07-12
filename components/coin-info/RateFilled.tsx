import React from 'react'
import ChevronUp from '../../assets/svg/chevronUp'

const RateFilled = () => {
  return (
      <div className='bg-green-600 flex items-center px-3 ml-3 rounded-xl'>
          <ChevronUp fill='#fff'/>
          <small className='pl-1'>23.32%</small>
      </div>
  )
}

export default RateFilled