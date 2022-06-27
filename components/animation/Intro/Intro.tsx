import BlurredText from 'components/animation/BlurredText'

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
          text="EL consumo y la produccion mundiales dependen del uso del medio ambiente y de los recursos de una manera"
          delay={1}
        />
        <BlurredText
          delay={2}
          text="que continua teniendo efectos destructivos sobre el planeta."
        />
        <div className={styles.scrollIcon}>
          <svg
            fill="none"
            stroke="#1d1d1b"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={12}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 235.78 380.79"
          >
            <polyline
              className={styles.path}
              points="1.39 265 118.39 378 234.39 265"
              style={{ animationDelay: '4s' }}
            />
            <line
              className={styles.path}
              x1="118.39" y1="378" x2="118.39"
              style={{ animationDelay: '3s' }}
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Intro
