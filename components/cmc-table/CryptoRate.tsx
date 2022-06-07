import React from 'react'
import ChevronDown from '../../assets/svg/chevronDown'
import ChevronUp from '../../assets/svg/chevronUp'

const styles = {
  rate: `rate flex items-center`,
  red: `ml-2 text-[#EA3943]`,
  green : `ml-2 text-[#00C853]`,
}

const CryptoRate: React.FC<{
    isIncrement: boolean,
    rate : string
}> = (props) => {
  return (
    <div className={styles.rate}>
      {props.isIncrement ? <ChevronUp fill='#00C853' /> : <ChevronDown fill='#EA3943' />}
      <p className={props.isIncrement ? styles.green : styles.red}>{props.rate }</p>
    </div>
  )
}

export default CryptoRate