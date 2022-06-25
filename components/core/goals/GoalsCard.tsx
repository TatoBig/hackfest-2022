import styles from './GoalsCard.module.scss'

type Props = {
    titulo: string,
    contenido: string
}

const GoalsCard = ({ titulo, contenido }: Props) => {
  return (
  <div className={styles.container}>
    <div className={styles.content}>
        <h1>{titulo}</h1>
        <h3>{contenido}</h3>
    </div>
    <div className={styles.flap}></div>
  </div>
  )
}

export default GoalsCard
