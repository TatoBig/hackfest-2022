import styles from './Goals.module.scss'
import GoalsCard from './GoalsCard'

import React from 'react'

type Props = {
    color: string,
    titulo: string,
    contenido: string,
    links: string
    children: React.ReactNode;
}

const Goals = ({ color, titulo, contenido, links }: Props) => {
  return (
    <div style={{ backgroundColor: color }} className={styles.card}>
      <div>
      <h1>{titulo}</h1>
      <h3>{contenido}</h3>
      </div>
      <div>
      <GoalsCard l={links}></GoalsCard>
      </div>
    </div>

  )
}
export default Goals
