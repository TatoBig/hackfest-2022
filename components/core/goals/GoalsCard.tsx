import styles from './GoalsCard.module.scss'

type Props = {
    l: string
}

const GoalsCard = ({ l }: Props) => {
  return (
  <div className={styles.container}>
    <div className={styles.content}>
        <h3>{l}</h3>
    </div>
    <div className={styles.flap}></div>
  </div>
  )
}

export default GoalsCard
