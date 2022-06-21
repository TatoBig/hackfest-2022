import 'styles/globals.scss'
import type { AppProps } from 'next/app'
import Default from 'layout/Default'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <Default>
      <Component {...pageProps} />
    </Default>
  )
}

export default MyApp
