import Intro from 'components/animation/Intro'
import HomeAbout from 'components/core/HomeAbout'

import Objectives from 'components/core/Objectives'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from './index.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Desarrollo Sostenible | Inicio</title>
        <meta name="description" content="Pagina informativa acerca de los objetivos de desarrollo sostenible " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />

      <div className={styles.pageContainer}>
        <div className={styles.content}>
          <HomeAbout />
          <Objectives />
        </div>
      </div>

    </div>
  )
}

export default Home
