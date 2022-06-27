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
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <BlurredText
          text="Is simply dummy text of the printing and typesetting industry."
          delay={1}
        />
        <BlurredText
          delay={2}
          text="Text of the printing and typesetting industry."
        />
        <ArrowDown />
      </div>
    </div>
  )
}

export default Intro
