import React from 'react'
import styles from './ObjectiveContentRight.module.scss'

type Props = {
  text: string
  image: string
} 
const ObjectiveContentRight = ({text, image}:Props) => {
  return (
    <div className={styles.moreStuffGrid}>
          <p className={styles.slideIn + styles.fromLeft}>
            {text}
          </p>
          <img
            src={image}
            alt=""
            className={styles.slideIn + styles.fromRight}
          />
    </div>
  )
}

export default ObjectiveContentRight