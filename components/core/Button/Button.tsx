import styles from './Button.module.scss'

type Props = {
  color: string
}

const Button = ({ color }: Props) => {
  return (
    <div style={{ backgroundColor: color }} className={styles.button}>
      <div className={styles.link}>

      </div>
    </div>
  )
}

export default Button
