// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Flex, Heading } from '@chakra-ui/core'
import { Paciente } from '.'
import { useFetch } from '../../../hooks/useFetch'
import PacienteCard from './PacienteCard'
import { useRouter } from 'next/router'

const PacienteHome: React.FC = () => {
  const router = useRouter()
  const pacientes = useFetch<Paciente[]>('paciente/')
  if (!pacientes.data) {
    return <p>Carregando...</p>
  }
  return (
    <Flex display="column">
      <Flex justify="space-between" flexGrow={1}>
        <Heading as="h4" size="lg" color="blue.100" mb={4}>
          Pacientes
        </Heading>
        <Flex
          onClick={() => router.push('/painel?d=pacientes&action=novoPaciente')}
        >
          Icones
        </Flex>
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
  )
}

export default PacienteHome
