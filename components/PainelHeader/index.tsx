// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Image, Heading } from '@chakra-ui/core'
import HeaderBG from '../Header/HeaderBG'
import { useRouter } from 'next/router'

const PainelHeader: React.FC = () => {
  const router = useRouter()
  return (
    <HeaderBG h="10%" justify="flex-start" boxShadow="0 10px 10px -5px">
      <Image
        cursor="pointer"
        size={12}
        src={require('../../public/images/logo.svg')}
        mr={6}
        onClick={() => router.push('/')}
      />
      <Heading
        cursor="pointer"
        color="blue.100"
        onClick={() => router.push('/painel')}
      >
        Painel
      </Heading>
    </HeaderBG>
  )
}

export default PainelHeader
