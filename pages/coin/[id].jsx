import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout/Layout'
import styles from './coin.module.css'

const CURRENCY = 'usd'

export default function Coin({ coin }) {
  const router = useRouter()
  
  const { market_data } = coin
  const { current_price, market_cap, market_cap_rank, total_volume, total_supply } = market_data
  
  const clickHandler = () => {
    router.push('/')
  }
  return (
    <Layout>
      <div className={`section-my-2 container ${styles.coin}`}>
        <div className={styles.coin_left}>
          <img className={styles.coin_image} src={coin.image.large} alt={coin.name} />
          <h1 className="section-my-1">{coin.name}</h1>
          <div className={styles.coin_linklist}>
            {coin.links.homepage.length > 0 && coin.links.homepage.map((link)=>{
              if(!!!link) return
              const url = new URL(link)
              if(url.origin != null){ return (<a key={url.origin} href={url.href} className="section-my-05" >{url.origin}</a>)}
            })}
          </div>
        </div>
        <div className={`section-my-2 ${styles.coin_right}`}>
          <p className={`${styles.coin_detailitem}`}>Symbol: {coin.symbol.toUpperCase()}</p>
          <p className={`${styles.coin_detailitem}`}>Current Price: ${current_price != null ? current_price[CURRENCY].toLocaleString() : 'No Data'}</p>
          <p className={`${styles.coin_detailitem}`}>Marketcap: ${market_cap != null ? market_cap[CURRENCY].toLocaleString() : 'No Data'}</p>
          <p className={`${styles.coin_detailitem}`}>Marketcap Rank: {market_cap_rank != null ? market_cap_rank : 'No Data'}</p>
          <p className={`${styles.coin_detailitem}`}>Total volume: ${total_volume != null ? total_volume[CURRENCY].toLocaleString() : 'No Data'}</p>
          <p className={`${styles.coin_detailitem}`}>Total supply: {total_supply != null ? total_supply : 'No Data'}</p>
        </div>
      </div>
      <button className={`section-my-2 ${styles.coin_btn}`} onClick={clickHandler}>Go back</button>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
  const data = await res.json()
  return {
    props: {
      coin: data
    }
  }
}
