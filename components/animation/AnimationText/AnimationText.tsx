import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from './AnimationText.module.scss'

type AnimationTextProps = {
  text: string
  delay?: number
  show?: boolean
  showOnView?: boolean
  link?: string
  action?: () => void
}

const AnimationText = ({
  text = 'Prueba',
  delay = 0,
  show = false,
  link,
  action
}: AnimationTextProps) => {
  const [initial, setInitial] = useState(false)
  const [line, setLine] = useState(styles.hideLine)
  const router = useRouter()

  useEffect(() => {
    triggerAnimation()
  }, [])

  useEffect(() => {
    if (show) {
      triggerAnimation()
    } else {
      setInitial(false)
    }
  }, [show])

  const handleOnClick = () => {
    if (link) {
      router.push(link)
    }
    if (action) {
      action()
    }
  }

  const triggerAnimation = () => {
    setTimeout(() => {
      if (show) {
        setInitial(true)
      }
    }, delay * 1000)
  }

  return (
    <div
      className={styles.container}
      onClick={() => handleOnClick()}
      onMouseEnter={() => setLine(styles.showLine)}
      onMouseLeave={() => setLine(styles.hideLine)}
    >
      <div className={initial ? styles.show : styles.initial}>
        {text}
      </div>
      <div className={line}/>
    </div>
  )
}

export default AnimationText
