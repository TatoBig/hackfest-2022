import styles from './Goals.module.scss'

type Props = {
    color: string
}

const Goals = ({ color }: Props) => {
  return (
    <div style={{ backgroundColor: color }} className={styles.goals}>
      <div className={styles.link}>

      </div>
    </div>
  )
}

export default Goals