// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Flex, Heading } from '@chakra-ui/core'
import { useFetch } from '../../../hooks/useFetch'
import PacienteCard from './PacienteCard'
import Head from 'next/head'

export interface Paciente {
  id: number
  nome: string
  // eslint-disable-next-line camelcase
  data_de_nascimento: string
  idade: number
  cpf: string
  rg: string
}

const PacienteView: React.FC = () => {
  const pacientes = useFetch<Paciente[]>('paciente/')
  if (!pacientes.data) {
    return <p>Carregando...</p>
  }
  return (
    <>
      <Head>
        <title>Pacientes - Clinical Manager</title>
      </Head>
      <Flex display="column">
        <Flex justify="space-between" flexGrow={1}>
          <Heading as="h4" size="lg" color="blue.100" mb={4}>
            Pacientes
          </Heading>
          <Flex>Icones</Flex>
        </Flex>
        <Flex
          borderColor="blue.400"
          borderWidth={3}
          borderRadius="md"
          h="540px"
          overflowY="scroll"
          display="column"
          p={4}
        >
          {pacientes.data.map((pct: Paciente) => (
            <PacienteCard key={pct.id} paciente={pct} />
          ))}
        </Flex>
      </Flex>
    </>
  )
}

export default PacienteView
