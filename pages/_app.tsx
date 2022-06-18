import { useEffect, useState } from 'react'
import 'styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp ({ Component, pageProps }: AppProps) {
  const [showing, setShowing] = useState(false)

  useEffect(() => {
    setShowing(true)
  }, [])

  if (!showing) {
    return null
  }

  if (typeof window === 'undefined') {
    return <></>
  } else {
    return (
      <Component {...pageProps} />
    )
  }
}

export default MyApp