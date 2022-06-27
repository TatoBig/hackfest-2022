import Link from 'next/link'
import styles from './GoalsCard.module.scss'

type Props = {
    l: string
}

const GoalsCard = ({ l }: Props) => {
  return (
  <div className={styles.container}>
    <div className={styles.content}>
      <Link href={l}>Mas información...</Link>
    </div>
    <div className={styles.flap}></div>
  </div>
  )
}

export default GoalsCard
