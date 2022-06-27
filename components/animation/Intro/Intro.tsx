import BlurredText from 'components/animation/BlurredText'
import ArrowDown from 'components/animation/ArrowDown'

import styles from './Intro.module.scss'

const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blurred_1} />
      <div className={styles.blurred_2} />
      <div className={styles.blurred_3} />
      <div className={styles.textContainer}>
        <BlurredText
          text="12. Producción y Consumo Responsable"
        />
        <BlurredText
          text="El consumo y la producción mundiales dependen del uso del medio ambiente y de los recursos de una manera"
          delay={1}
        />
        <BlurredText
          delay={2}
          text="que continua teniendo efectos destructivos sobre el planeta."
        />
        <ArrowDown />
      </div>
    </div>
  )
}

export default Intro
