// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { useFetch } from '../../hooks/useFetch'
import { useRouter } from 'next/router'

const Manager: React.FC = () => {
  const router = useRouter()
  const [unidade, setUnidade] = useState('')
  const prontuários = useFetch(`prontuarios/${unidade}/`)

  useEffect(() => {
    setUnidade(localStorage.getItem('@clinicalManager:unidadeIdSelecionada'))
  }, [])

  if (!prontuários.data) {
    return <p>Carregando...</p>
  }
  console.log(prontuários.data)
  return (
    <Flex h="100vh" backgroundColor="blue.700" flexGrow={1}>
      <Flex
        backgroundColor="blue.500"
        h="20px"
        w="100%"
        px={4}
        position="absolute"
        justify="flex-end"
        align="center"
        top="0px"
        zIndex={10}
      >
        <Text color="blue.100" fontSize="xs">
          Segunda, 18 de janeiro de 2021, 19:56:01
        </Text>
      </Flex>
      <Flex
        zIndex={50}
        backgroundColor="blue.800"
        flexDir="column"
        shadow="lg"
        w="180px"
        h="100%"
        borderRight="2px solid rgba(228, 242, 241, 0.45)"
        borderRadius="0px 6px 6px 0px"
      >
        <Flex
          mt={10}
          flexDir="column"
          align="center"
          textAlign="center"
          textColor="blue.100"
          fontSize="xs"
        >
          <Text fontWeight="bold" mb={2}>
            HOSPITAL ALBERTO NETO / DIRCEU II
          </Text>
          <Text fontWeight="thin">MÉDICO: LEONARDO NUNES</Text>
        </Flex>
        <Flex flexDir="column">Teste</Flex>
      </Flex>
      <Flex flexDir="column" mt={10} px={4} flexGrow={1}>
        <Heading size="lg" color="blue.100">
          Prontuários
        </Heading>
        <Stack
          flexDir="column"
          shadow="lg"
          w="100%"
          h="100%"
          maxH="550px"
          borderRadius="md"
          backgroundColor="blue.800"
          overflow="auto"
          p={2}
        >
          {prontuários.data.map(prontuário => (
            <Button
              key={prontuário.id}
              backgroundColor="blue.700"
              shadow="lg"
              w="100%"
              h="35px"
              borderRadius="sm"
              p={2}
              _active={{ backgroundColor: 'blue.500' }}
              _hover={{ backgroundColor: 'blue.800' }}
              onClick={() => router.push(`prontuario/${prontuário.id}/`)}
            >
              <Flex flexGrow={1} justify="space-between">
                <Text
                  color="blue.100"
                  textAlign="center"
                  fontWeight="thin"
                  fontSize="sm"
                >
                  {prontuário.paciente}
                </Text>
                <Text
                  color="blue.100"
                  textAlign="center"
                  fontWeight="thin"
                  fontSize="sm"
                >
                  12/02/1998
                </Text>
              </Flex>
            </Button>
          ))}
        </Stack>
      </Flex>
    </Flex>
  )
}

export default Manager
