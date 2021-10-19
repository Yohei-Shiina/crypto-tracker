import React, { useState } from 'react'

import Searchbar from '../components/Searchbar'
import CoinTable from '../components/CoinTable'
import Layout from '../components/Layout/Layout';

export default function Home({ filteredCoins }) {
  const [search, setSearch] = useState([])

  const allCoins = filteredCoins.filter(coin => {

    if (search.length === 0) return filteredCoins

    return search.some(word => {
      return coin.name.toLowerCase().includes(word)
        || coin.symbol.toLowerCase().includes(word)
    })
  })

  const handleChange = (e) => {
    const keyword = e.target.value.toLowerCase().split(' ')
    const filteredKeyword = keyword.filter((word) => {
      return word !== ''
    })
    setSearch(filteredKeyword)
  }
  return (
    <Layout>
      <div className="container">
        <div className="section-my-2">
          <Searchbar onChange={handleChange} />
        </div>
        <div className="section-my-2">
          <CoinTable coins={allCoins} />
        </div>
        {/* Todo add pagination */}
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&page=1&sparkline=false');
  const filteredCoins = await res.json()
  return {
    props: { filteredCoins }, // will be passed to the page component as props
  }
}