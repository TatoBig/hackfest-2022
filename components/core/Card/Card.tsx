import styles from './Card.module.scss'

const Card = ({ title }) => {
  return (
    <>
        <h1>
          Efecto: <span>Voltear Tarjeta</span>
        </h1>
        <div className={styles.cards_grid}>
          <div className={styles.flip_card}>
            <div className={styles.flip_card_inner}>
              <div className={styles.flip_card_front}>
                <div className={styles.flip_card_back} >
                  {title}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          {title}
        </div>
    </>
  )
}

export default Card
