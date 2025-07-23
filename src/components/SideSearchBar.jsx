import React from 'react'
import styles from "./SideSearchBar.module.css"

const SideSearchBar = () => {
  return (
    <div className={styles.container}> 
        <div className={styles.searchSvgC}>
            <img src="./icons/search.svg" alt="" />
        </div>
        <input type="text" className={styles.input} placeholder='Search'/>
    </div>
  )
} 

export default SideSearchBar