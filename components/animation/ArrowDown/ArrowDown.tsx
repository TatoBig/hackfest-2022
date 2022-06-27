import styles from './ArrowDown.module.scss'

type Props = {
  delay?: number
}

const ArrowDown = ({ delay = 0 }: Props) => {
  return (
     <div className={styles.scrollIcon}>
      <svg
        fill="none"
        stroke="#1d1d1b"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={12}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 235.78 380.79"
      >
        <polyline
          className={styles.path}
          points="1.39 265 118.39 378 234.39 265"
          style={{ animationDelay: `${delay + 4}s` }}
        />
        <line
          className={styles.path}
          x1="118.39" y1="378" x2="118.39"
          style={{ animationDelay: `${delay + 3}s` }}
        />
      </svg>
    </div>
  )
}

export default ArrowDown
