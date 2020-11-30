// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Flex, Text } from '@chakra-ui/core'

interface ProntuárioProps {
  prontuário: {
    id: number
    paciente: string
    // eslint-disable-next-line camelcase
    data_de_nascimento: string
  }
}

const ProntuárioCard: React.FC<ProntuárioProps> = ({ prontuário }) => {
  const { id, paciente, data_de_nascimento: dataDeNascimento } = prontuário

  return (
    <Flex
      flexDir="column"
      backgroundColor="blue.100"
      p={4}
      mb={2}
      shadow="standard"
      borderRadius="sm"
      fontSize={['xs', 'sm']}
      w="100%"
      cursor="pointer"
    >
      <Flex justify="space-between">
        <Text fontWeight="bold">{paciente}</Text>
        <Text>ID: {id}</Text>
      </Flex>
      <Text>
        {new Date(
          new Date(dataDeNascimento).setDate(
            new Date(dataDeNascimento).getDate() + 1
          )
        ).toLocaleDateString()}
      </Text>
    </Flex>
  )
}

export default ProntuárioCard
