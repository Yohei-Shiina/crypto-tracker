import React, { useState } from 'react'

import Searchbar from '../components/Searchbar'
import CoinTable from '../components/CoinTable'
import Layout from '../components/Layout/Layout';
import Pagenation from '../components/Pagination'

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

        {/* remove or delete if not use */}
        {/* <Pagenation
          pageCount={10}
          pageRangeDisplayed={4}
          marginPagesDisplayed={0}
        /> */}

        <div className="section-my-2">
          <CoinTable coins={allCoins} />
        </div>
        {/* Todo add pagination */}
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  let filteredCoins = []
  for(let i = 1; i < 10; i++){
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=${i}&sparkline=false`);
    const awaitedRes = await res.json()
    filteredCoins = filteredCoins.concat(...awaitedRes)
  }
  
  console.log(filteredCoins.length);
  return {
    props: { filteredCoins }, // will be passed to the page component as props
  }
}