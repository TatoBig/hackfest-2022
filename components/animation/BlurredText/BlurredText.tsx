import useVisibility from 'hooks/useVisibility'
import { useEffect, useRef, useState } from 'react'
import styles from './BlurredText.module.scss'

type BlurredTextProps = {
  text: string
  delay?: number
  show?: boolean
  showOnView?: boolean
}

const BlurredText = ({
  text,
  delay = 0,
  show = true,
  showOnView = false
}: BlurredTextProps) => {
  const [initial, setInitial] = useState(false)
  const [hide, setHide] = useState(false)
  const ref = useRef()
  const inViewport = useVisibility(ref, '0px')

  useEffect(() => {
    triggerAnimation()
  }, [])

  useEffect(() => {
    if (showOnView && inViewport) {
      console.log(showOnView)
      setInitial(true)
    }
  }, [inViewport])

  useEffect(() => {
    if (!show) {
      setHide(true)
    }
  }, [show])

  const triggerAnimation = () => {
    setTimeout(() => {
      if (!showOnView) {
        setInitial(true)
      }
    }, delay * 1000)
  }

  return (
    <div
      className={initial ? (hide ? styles.hide : styles.text) : styles.inactive}
      ref={ref}
    >
      {text}
    </div>
  )
}

export default BlurredText
