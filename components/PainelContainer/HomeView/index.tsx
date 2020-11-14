// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Flex, Heading } from '@chakra-ui/core'
import Head from 'next/head'

const HomeView: React.FC = () => {
  return (
    <>
      <Head>
        <title>Painel - Clinical Manager</title>
      </Head>
      <Flex justify="space-between">
        <Heading as="h4" size="lg" color="blue.100" mb={4}>
          Início
        </Heading>
        <Flex>Icones</Flex>
      </Flex>
    </>
  )
}

export default HomeView
