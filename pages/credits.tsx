import HackfestLogo from 'components/animation/HackfestLogo'
import CreditText from 'components/core/CreditText'
import styles from './credits.module.scss'

const credits = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <HackfestLogo />
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <CreditText />
          </div>
        </div>
      </div>
    </div>
  )
}

export default credits
