import { useEffect, useState } from 'react'
import 'styles/globals.scss'
import type { AppProps } from 'next/app'
import Default from 'layout/Default'

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
      <Default>
        <Component {...pageProps} />
      </Default>
    )
  }
}

export default MyApp
