import styles from './Card.module.scss'
import prueba from './Card2.module.scss'

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
            style={{ backgroundImage: `url("http://www.odsarte.pr.gov.br/sites/ods-arte/arquivos_restritos/files/imagem/2020-09/img_12.jpg")` }}
          >
          </div>
          <div className={styles.flip_card_back}>
            {title}
          </div>
        </div>
      </div>
      <div className={prueba.card}>
        <div className={prueba.imgbox} style={{ backgroundImage: `url("https://c.tenor.com/YQiF2mfEsYwAAAAC/infinite-infinitely.gif")` }}>
        </div>
        <div className={prueba.details}>
          <div className='title'>
            <h3>Titulo de prueba<br></br>
              <small>Contenido de prueba</small>
            </h3>
          </div>
          <div className='description'>
            <h4>Descripcion</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nobis, iure eius, adipisci fugit voluptatibus sapiente distinctio assumenda dicta ducimus quo? Iste dolorem quod cumque enim corporis iure veniam rerum.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
