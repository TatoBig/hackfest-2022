import React from 'react'
import styles from './ObjectiveContent.module.scss'
import { useInView } from 'react-intersection-observer'

type Props = {
  text: string
  image: string
  right?: boolean
}
const ObjectiveContent = ({ text, image, right = false }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.5
  })

  return (
    <div ref={ref} className={inView ? styles.show : styles.hidden} style={{ flexDirection: right ? 'row-reverse' : 'row' }}>
      <img
        src={image}
        alt=""
        className={styles.image}
      />
      <p className={styles.text}>
        {text}
      </p>
    </div>
  )
}

export default ObjectiveContent
