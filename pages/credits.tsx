import HackfestLogo from 'components/animation/HackfestLogo'
import Credits from 'components/core/Credits'
import styles from './credits.module.scss'

const credits = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <HackfestLogo />
        <Credits></Credits>
      </div>
    </div>
  )
}

export default credits
