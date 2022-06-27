import Link from 'next/link'
import styles from './GoalsCard.module.scss'

type Props = {
  l: string
}

const GoalsCard = ({ l }: Props) => {
  return (
    <Link href={l}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.link}>
            Más información...
          </div>
        </div>
        <div className={styles.flap}></div>
      </div>
    </Link>
  )
}

export default GoalsCard
