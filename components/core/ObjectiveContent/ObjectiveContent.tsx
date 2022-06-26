import React from 'react'
import styles from './ObjectiveContent.module.scss'

type Props = {
  text: string
  image: string
} 
const ObjectiveContent = ({text, image}:Props) => {
  return (
    <div className={styles.moreStuffGrid}>
    <img
      src={image}
      alt=""
      className={styles.slideIn + styles.fromLeft}
    />
    <p className={styles.slideIn + styles.fromRight}>
      {text}
    </p>
  </div>
  )
}

export default ObjectiveContent