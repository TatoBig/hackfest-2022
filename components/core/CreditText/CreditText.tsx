import { useState, useEffect } from 'react'
import styles from './CreditText.module.scss'

type Props = {delay?: number}

const CreditText = ({ delay = 0 }: Props) => {
  const [initial, setinitial] = useState(false)
  const [initial2, setinitial2] = useState(false)
  useEffect(() => {
    texto()
  }, [])
  const texto = () => {
    setTimeout(() => {
      setinitial(true)
    }, delay * 1000)
    setTimeout(() => {
      setinitial2(true)
    }, (delay * 1000) + 1000)
  }
  return (
    <div className={styles.container}>
        <div className={initial ? styles.final : styles.inicio}></div>
        <div className={initial2 ? styles.final_texto : styles.inicio_texto} style={{ transitionDelay: '1s' }}>Integrantes holaadios</div>
    </div>
  )
}

export default CreditText
