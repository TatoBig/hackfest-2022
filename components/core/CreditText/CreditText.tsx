import { useState, useEffect } from 'react'
import styles from './CreditText.module.scss'

type Props = {
  delay?: number
}

const CreditText = ({ delay = 4 }: Props) => {
  const [initial, setinitial] = useState(false)

  useEffect(() => {
    texto()
  }, [])

  const texto = () => {
    setTimeout(() => {
      setinitial(true)
    }, delay * 1000)
  }

  return (
    <div className={initial ? styles.final : styles.inicio}>
      <div style={{ transitionDelay: '0.5s' }} className={initial ? styles.final_texto : styles.inicio_texto}>
        Integrantes
      </div>
    </div>
  )
}

export default CreditText
