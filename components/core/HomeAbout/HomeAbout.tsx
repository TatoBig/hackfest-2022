import React from 'react'
import styles from './HomeAbout.module.scss'

const HomeAbout = () => {
  return (
    <div className={styles.homeAbout}>
      <h2>Sobre el objetivo</h2>
      <p>Reducir la huella ecológica mediante un cambio en los métodos de producción y consumo de bienes y recursos.</p>
      <div className={styles.columns}>
        <div className={styles.col}>
          <h3>1,300 millones</h3>
          <p>
            cada año se desperdician 1,300 millones de toneladas
            de alimentos, mientras que casi 2,000 millones de personas
            padecen hambre o desnutrición
          </p>
        </div>
        <div className={styles.col}>
          <h3>22%</h3>
          <p>
            El sector alimentario representa alrededor del 22% de las emisiones de gases
            de efecto invernadero, en gran medida debido a la conversion de bosques en tierras
            de cultivo
          </p>
        </div>
        <div className={styles.col}>
          <h3>USD 120</h3>
          <p>
            Si todas las personas utilizadas bajo consumo, el mundo ahorraría la cantidad de
            USD 120 mill millones anuales
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout
