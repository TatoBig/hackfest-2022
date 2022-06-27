import { useState, useEffect } from 'react'
import BlurredText from 'components/animation/BlurredText'

const card = () => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    triggerAnimation()
  }, [])

  const triggerAnimation = () => {
    setTimeout(() => {
      setShow(false)
    }, 10000)
  }

  return (
    <div>
      <BlurredText
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        show={show}
      />
      <BlurredText
        show={show}
        text="Is simply dummy text of the printing and typesetting industry."
        delay={1}
      />
      <BlurredText
        delay={2}
        show={show}
        text="Text of the printing and typesetting industry."
      />
    </div>
  )
}

export default card
