// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Image, Heading } from '@chakra-ui/core'
import HeaderBG from '../Header/HeaderBG'
import { useRouter } from 'next/router'

const PainelHeader: React.FC = () => {
  const router = useRouter()
  return (
    <HeaderBG h="7%" minH="55px" justify="flex-start">
      <Image
        cursor="pointer"
        maxHeight="70%"
        src={require('../../public/images/logo.svg')}
        mr={6}
        onClick={() => router.push('/')}
      />
      <Heading
        cursor="pointer"
        color="blue.100"
        onClick={() => router.push('/painel')}
        as="h1"
        size="lg"
      >
        Painel
      </Heading>
    </HeaderBG>
  )
}

export default PainelHeader
