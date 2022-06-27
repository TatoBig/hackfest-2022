import React from 'react'
import styles from './ObjectiveContent.module.scss'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

type Props = {
  text: string
  image: string
  right?: boolean
}
const ObjectiveContent = ({ text, image, right = false }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  })

  return (
    <div ref={ref} className={inView ? styles.show : styles.hidden} style={{ flexDirection: right ? 'row-reverse' : 'row' }}>
      <div className={styles.image}>
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          style={{ borderRadius: '5%' }}
        />
      </div>
      <p className={styles.text}>
        {text}
      </p>
    </div>
  )
}

export default ObjectiveContent
