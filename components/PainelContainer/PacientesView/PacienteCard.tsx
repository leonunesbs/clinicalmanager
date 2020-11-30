// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { Flex, Skeleton, Text } from '@chakra-ui/core'
import { Paciente } from '.'
import { useRouter } from 'next/router'

interface PacienteProps {
  paciente?: Paciente
  isLoading?: boolean
}

const PacienteCard: React.FC<PacienteProps> = ({
  paciente: pct,
  isLoading
}) => {
  const router = useRouter()
  const [paciente] = useState(pct)

  return (
    <Flex
      flexDir="column"
      backgroundColor="blue.100"
      p={4}
      mb={2}
      shadow="md"
      borderRadius="sm"
      fontSize={['xs', 'sm']}
      w="100%"
      cursor="pointer"
      onClick={() => router.push(`/painel?d=paciente&id=${paciente.id}`)}
    >
      <Skeleton isLoaded={!isLoading} minH="15px">
        <Text fontWeight="bold">{paciente?.nome.toUpperCase()}</Text>
      </Skeleton>
      <Skeleton isLoaded={!isLoading} mt={2}>
        <Flex justify="space-between">
          <Flex flexDir="column">
            <Text>RG: {paciente?.rg}</Text>
            <Text>CPF: {paciente?.cpf}</Text>
          </Flex>
          <Flex flexDir="column" align={['flex-start', 'flex-end']}>
            <Text>DN: {paciente?.data_de_nascimento_local_format}</Text>
            <Text>Idade: {paciente?.idade} anos</Text>
          </Flex>
        </Flex>
      </Skeleton>
    </Flex>
  )
}

export default PacienteCard
