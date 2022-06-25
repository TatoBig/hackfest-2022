import styles from './Credits.module.scss'

const Credits = () => {
  return (
      <>
        <h1>
            Prueba para creditos
        </h1>
        <div className={styles.wrapper}>
            <div className={styles.static_txt}>Somos</div>
            <ul className={styles.dynamic_txts}>
                <li><span>Alejandra Santos</span></li>
                <li><span>Santiago Navas</span></li>
                <li><span>Paolo Veliz</span></li>
                <li><span>Diego Galan</span></li>
                <li><span>Vinicio Ricci</span></li>
            </ul>
        </div>
    </>
  )
}

export default Credits
