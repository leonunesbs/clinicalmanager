/* eslint-disable no-use-before-define */
import React from 'react'

import Head from 'next/head'
import Header from '../components/Header'
import HomeMenu from '../components/HomeMenu'
import CallToAction from '../components/CallToAction'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Clinical Manager</title>
      </Head>
      <main>
        <Header />
        <HomeMenu />
        <CallToAction />
      </main>
    </div>
  )
}

export default Home
