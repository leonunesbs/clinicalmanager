// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Image, Heading } from '@chakra-ui/core'
import HeaderBG from '../Header/HeaderBG'
import { useRouter } from 'next/router'

const PainelHeader: React.FC = () => {
  const router = useRouter()
  return (
    <HeaderBG
      cursor="pointer"
      onClick={() => router.push('/')}
      h="80px"
      justify="flex-start"
    >
      <Image
        size={12}
        src={require('../../public/images/logo.png?webp')}
        mr={6}
      />
      <Heading color="blue.100">Painel</Heading>
    </HeaderBG>
  )
}

export default PainelHeader
