/* eslint-disable no-use-before-define */
import React from 'react'

import Head from 'next/head'
import Header from '../components/Header'
import CallToAction from '../components/CallToAction'
import { Flex } from '@chakra-ui/react'
import { withKeepAlive } from 'react-next-keep-alive'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Início - Clinical Manager</title>
        <meta
          name="description"
          content="Gerenciador de consultas, pacientes, profissionais e suas agendas para atendimentos clínicos ou cirurgicos."
        />
        <meta name="keywords" content="Médico, Leonardo, Nunes, Piauí" />
        <meta name="author" content="Leonardo Nunes" />
        <link rel="canonical" href="https://clinicalmanager.vercel.app/" />.
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

export default withKeepAlive(Home, 'Home')
