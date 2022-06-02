import type { NextPage } from 'next'
import CoinmarketHeader from '../components/CoinmarketHeader'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <CoinmarketHeader/>
    </div>
  )
}

export default Home
