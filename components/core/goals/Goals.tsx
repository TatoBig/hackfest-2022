import styles from './Goals.module.scss'
import GoalsCard from './GoalsCard'
import styles2 from './Grid.module.scss'

/*
type Props = {
    color: string
}
*/

const Goals = () => {
  return (
    <div className={styles.container}>
        <ul className={styles2.gallery}>
          <li className={styles.card}>
            <h1>1</h1>
            <GoalsCard titulo="Modalidades de Consumo" contenido="Aplicar el Marco Decenal de Programas sobre Modalidades de Consumo"></GoalsCard>
          </li>
          <li className={styles.card}>
            <h1>2</h1>
            <GoalsCard titulo="Sostenibilidad" contenido="De aquí a 2030, lograr la gestión sostenible y el uso eficiente de los recursos naturales"></GoalsCard>
          </li>
          <li className={styles.card}>
            <h1>3</h1>
            <GoalsCard titulo="Alimentos" contenido=" De aquí a 2030, reducir a la mitad el desperdicio de alimentos per capita mundial"></GoalsCard>
          </li>
          <li className={styles.card}>
            <h1>4</h1>
            <GoalsCard titulo="Químicos" contenido="gestionar los productos químicos y los desechos a lo largo de su ciclo de vida"></GoalsCard>
          </li>
          <li className={styles.card}>
            <h1>5</h1>
            <GoalsCard titulo="Desechos" contenido="2030, reducir considerablemente la generación de desechos mediante actividades de prevención"></GoalsCard>
          </li>
          <li className={styles.card}>
            <h1>6</h1>
            <GoalsCard titulo="Sostenibilidad" contenido="Alentar a las empresas a que adopten prácticas sostenibles"></GoalsCard>
          </li>
          <li className={styles.card}>
            <h1>7</h1>
            <GoalsCard titulo="Consumo" contenido="Promover prácticas de adquisición pública que sean sostenibles"></GoalsCard>
          </li>
          <li className={styles.card}>
            <h1>8</h1>
            <GoalsCard titulo="Informar" contenido="Que las personas  tengan la información y los conocimientos para el desarrollo sostenible"></GoalsCard>
          </li>
          <li className={styles.card}>
            <h1>9</h1>
            <GoalsCard titulo="Desarrollo" contenido="Ayudar a los países en desarrollo a fortalecer su capacidad científica"></GoalsCard>
          </li>
          <li className={styles.card}>
            <h1>10</h1>
            <GoalsCard titulo="Control" contenido="Elaborar y aplicar instrumentos para vigilar los efectos en el desarrollo sostenible"></GoalsCard>
          </li>
        </ul>
    </div>
  )
}

export default Goals
