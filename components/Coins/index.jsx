import React from 'react'
import styles from './Coins.module.css'
import { useRouter } from 'next/router'

export default function Coin({ name, id, price, symbol, marketcap, volume, image, priceChange }) {
  const router = useRouter()

  const handleClick = () => {
    router.push({ pathname: '/coin/[id]', query: { id } })
  }

  return (
    <tr className={styles.coin_tr} onClick={handleClick}>
      <td><img className={styles.coin_img} src={image} alt={name} /></td>
      <td><div className={styles.coin_h1}>{name}</div></td>
      <td><div>{symbol.toUpperCase()}</div></td>
      <td><div>${price}</div></td>
      <td>{volume!=null?(<div>${volume.toLocaleString()}</div>):'-'}</td>
      <td>
        {priceChange!=null 
          ?(<span>{priceChange < 0
            ? (<div className={styles.coin_red} >{priceChange.toFixed(2)}%</div>)
            : (<div className={styles.coin_green} >{priceChange.toFixed(2)}%</div>)
          }</span>)
          : '-'
      }
      </td>
      <td>{
        marketcap != null
          ? (<div>${marketcap.toLocaleString()}</div>)
          : '-'
      }</td>
    </tr>
  )
}