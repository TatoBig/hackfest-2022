import HackfestLogo from 'components/animation/HackfestLogo'
import Members from 'components/animation/Members'
import CreditText from 'components/core/CreditText'
import Head from 'next/head'
import styles from './credits.module.scss'

const credits = () => {
  return (
    <>
      <Head>
        <title>Desarrollo Sostenible | Créditos</title>
        <meta name="description" content="Página de créditos " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.card}>
          <HackfestLogo />
          <div className={styles.textContainer}>
            <div className={styles.text}>
              <CreditText />
            </div>
          </div>
          <Members />
        </div>
        <div className={styles.blurred_2} />
        <div className={styles.blurred_3} />
      </div>
    </>
  )
}

export default credits
