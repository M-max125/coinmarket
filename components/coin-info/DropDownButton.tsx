import React from 'react'
import ChevronDown from '../../assets/svg/chevronDown'

const DropDownButton: React.FC<{
    label: string;
}> = ({label}) => {
  return (
      <div className='flex items-center mr-2 rounded-md px-2 pt-2 pb-2 bg-blue-700 cursor-pointer'>
          <p className='mr-2 text-xs xl:text-base'>{label}</p>
          <ChevronDown fill='#fff'/>
    </div>
  )
}

export default DropDownButton