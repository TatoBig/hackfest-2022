import { useEffect, useState } from 'react'
import styles from './BlurredText.module.scss'

type BlurredTextProps = {
  text: string
  delay?: number
  show?: boolean
}

const BlurredText = ({
  text,
  delay = 0,
  show = true
}: BlurredTextProps) => {
  const [initial, setInitial] = useState(false)
  const [hide, setHide] = useState(false)

  useEffect(() => {
    triggerAnimation()
  }, [])

  useEffect(() => {
    if (!show) {
      setHide(true)
    }
  }, [show])

  const triggerAnimation = () => {
    setTimeout(() => {
      setInitial(true)
    }, delay * 1000)
  }

  return (
    <div
      className={initial ? (hide ? styles.hide : styles.text) : styles.inactive}
    >
      {text}
    </div>
  )
}

export default BlurredText
