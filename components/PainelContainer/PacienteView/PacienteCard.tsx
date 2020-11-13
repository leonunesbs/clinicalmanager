// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Flex, Skeleton, Text } from '@chakra-ui/core'
import { Paciente } from '.'

interface PacienteProps {
  paciente?: Paciente
  isLoading?: boolean
}

const PacienteCard: React.FC<PacienteProps> = ({ paciente, isLoading }) => {
  return (
    <Flex
      flexDir="column"
      backgroundColor="blue.100"
      p={4}
      mb={2}
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
      borderRadius="sm"
      fontSize={['xs', 'sm']}
      w="100%"
    >
      <Skeleton isLoaded={!isLoading} h="15px">
        <Text fontWeight="bold">{paciente?.nome.toUpperCase()}</Text>
      </Skeleton>
      <Skeleton isLoaded={!isLoading} mt={2}>
        <Flex justify="space-between">
          <Flex flexDir="column">
            <Text>RG: {paciente?.rg}</Text>
            <Text>CPF: {paciente?.cpf}</Text>
          </Flex>
          <Flex flexDir="column" align={['flex-start', 'flex-end']}>
            <Text>DN: {paciente?.data_de_nascimento}</Text>
            <Text>Idade: {paciente?.idade} anos</Text>
          </Flex>
        </Flex>
      </Skeleton>
    </Flex>
  )
}

export default PacienteCard
