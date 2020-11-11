// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Image, Heading } from '@chakra-ui/core'
import HeaderBG from '../Header/HeaderBG'

const PainelHeader: React.FC = () => {
  return (
    <HeaderBG h="80px" justify="flex-start">
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
