/* eslint-disable no-use-before-define */
import Link from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'
import React from 'react'

// import { Container } from './styles';

const Agendamento: React.FC = () => {
  return (
    <Link href="/">
      <ChakraLink>Voltar</ChakraLink>
    </Link>
  )
}

export default Agendamento
