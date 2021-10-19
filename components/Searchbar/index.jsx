import React from 'react'
import styles from './Searchbar.module.css'

export default function Searchbar(props) {
  return (
    <div className={styles.search}>
      <input type="text" placeholder='Search' className={styles.sb_input} onChange={props.onChange} />
    </div>
  )
}
