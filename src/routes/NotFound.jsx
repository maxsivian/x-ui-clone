import React from 'react'
import styles from "./NotFound.module.css"
import { useLocation } from 'react-router-dom'

let notDesignedPaths = ["/explore", "/notifications", "/messages", "/grok", "/communities", "/profile" ]

const NotFound = () => {
  const location = useLocation()
  const IsInNotDesignedPaths = notDesignedPaths.includes(location.pathname)
  return (
    <div className={styles.container}>
      {IsInNotDesignedPaths && <div> Not Designed: {location.pathname}</div>}
      {!IsInNotDesignedPaths && <div> Not Found: {location.pathname}</div>}
    </div>
  )
}

export default NotFound