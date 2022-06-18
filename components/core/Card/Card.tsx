import styles from './Card.module.scss'

type Props = {
  title: string
}

const Card = ({ title }: Props) => {
  return (
    <>
      <h1>
        Efecto: <span>Voltear Tarjeta</span>
      </h1>
      <div className={styles.flip_card}>
        <div className={styles.flip_card_inner}>
          <div className={styles.flip_card_front}
            style={{ backgroundImage: `url("https://cdn.sstatic.net/Img/home/illo-public.svg?v=14bd5a506009")` }}
          >
          </div>
          <div className={styles.flip_card_back}>
            Studio Ghibli, dirigida y creada por Hayao Miyazaki en 1988. Tras realizar esta película, se adoptó como logotipo del estudio a los Totoros. Es la tercera película del estudio tras su fundación.
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
