import HackfestLogo from 'components/animation/HackfestLogo'
import Members from 'components/animation/Members'
import CreditText from 'components/core/CreditText'
import styles from './credits.module.scss'

const credits = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <HackfestLogo />
          <div className={styles.textContainer}>
            <div className={styles.text}>
              <CreditText />
            </div>
          </div>
          <Members />
        </div>
        <div className={styles.blurred_2} />
        <div className={styles.blurred_3} />
      </div>
    </>
  )
}

export default credits
