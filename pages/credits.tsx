import HackfestLogo from 'components/animation/HackfestLogo'
import Credits from 'components/core/Credits'
import CreditText from 'components/core/CreditText'
import styles from './credits.module.scss'

const credits = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <HackfestLogo />
        <CreditText></CreditText>
      </div>
    </div>
  )
}

export default credits
