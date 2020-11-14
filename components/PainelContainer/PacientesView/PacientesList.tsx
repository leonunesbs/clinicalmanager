/* eslint-disable indent */
/* eslint-disable prettier/prettier */
/* eslint-disable multiline-ternary */
// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import { Flex, Heading } from '@chakra-ui/core'
import { Paciente } from '.'
import { useFetch } from '../../../hooks/useFetch'
import PacienteCard from './PacienteCard'
import { useRouter } from 'next/router'
import { FaUserPlus } from 'react-icons/fa'
import ButtonWithIcon from '../../ButtonWithIcon'

const PacientesList: React.FC = () => {
  const router = useRouter()
  const pacientes = useFetch<Paciente[]>('pacientes/')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!pacientes.data) {
      setLoading(true)
    }
  }, [pacientes.data])

  return (
    <Flex display="column">
      <Flex justify="space-between" mb={4}>
        <Heading as="h4" size="lg" color="blue.100">
          Pacientes
        </Heading>
        <ButtonWithIcon onClick={() => router.push('/painel?d=pacientes&action=novoPaciente')} icon={FaUserPlus} />
      </Flex>
      <Flex
        borderColor="blue.400"
        borderWidth={3}
        borderRadius="md"
        h="540px"
        overflowY="auto"
        display="column"
        mb={4}
        p={4}
      >
        {pacientes.data ? (
          pacientes.data.map((pct: Paciente) => (
            <PacienteCard key={pct.id} paciente={pct} />
          ))
        ) : (
            <PacienteCard isLoading={loading} />
          )}
      </Flex>
    </Flex>
  )
}

export default PacientesList
