/* eslint-disable no-use-before-define */
import React from 'react'

import Head from 'next/head'
import Header from '../components/Header'
import CallToAction from '../components/CallToAction'
import { Flex } from '@chakra-ui/core'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Clinical Manager</title>
        <meta
          name="description"
          content="Gerenciador de consultas, pacientes, profissionais e suas agendas para atendimentos clínicos ou cirurgicos."
        />
        <meta name="keywords" content="Médico, Leonardo, Nunes, Piauí" />
        <meta name="author" content="Leonardo Nunes" />
      </Head>
      <main>
        <Flex flexDirection="column" h="100vh" w="100vw" overflow="hidden">
          <Header />
          <CallToAction />
        </Flex>
      </main>
    </div>
  )
}

export default Home
