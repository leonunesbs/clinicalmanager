/* eslint-disable no-use-before-define */
import React, { useEffect, useRef, useState } from 'react'
import { Flex, Heading, Text, Stack, Button } from '@chakra-ui/react'
import { Form } from '@unform/web'
import { FormHandles, SubmitHandler } from '@unform/core'
import DarkButton from '../components/DarkButton'
import Head from 'next/head'
import { useFetch } from '../hooks/useFetch'
import { useRouter } from 'next/router'
const Unidades: React.FC = () => {
  const router = useRouter()
  const formRef = useRef<FormHandles>(null)
  const unidades = useFetch('unidades_colaborador/')
  const [unidadeIdSelecionada, setUnidadeIdSelecionada] = useState<number>(0)

  useEffect(() => {
    setUnidadeIdSelecionada(
      parseInt(localStorage.getItem('@clinicalManager:unidadeIdSelecionada'))
    )
  }, [])

  const handleSubmit: SubmitHandler<FormData> = data => {
    localStorage.setItem(
      '@clinicalManager:unidadeIdSelecionada',
      `${unidadeIdSelecionada}`
    )
    router.push('dashboard/prontuarios/')
  }
  if (!unidades.data) {
    return <p>Carregando...</p>
  }
  console.log(unidades.data)
  return (
    <>
      <Head>
        <title>Login - Clinical Manager</title>
      </Head>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Flex
          backgroundColor="blue.700"
          h="100vh"
          justify="center"
          align="center"
        >
          <Stack
            flexDir="column"
            shadow="lg"
            w="100%"
            maxW="455px"
            borderRadius="md"
            backgroundColor="blue.800"
            justify="center"
            align="center"
            px="20px"
            py="30px"
            m="5px"
          >
            <Heading
              color="blue.100"
              textAlign="center"
              size="lg"
              fontWeight="normal"
            >
              Selecione uma unidade
            </Heading>
            <Flex w="80%" h="1px" backgroundColor="blue.100" my="5px" />
            {unidades.data.map(unidade => (
              <Button
                key={unidade.id}
                backgroundColor="blue.700"
                shadow="lg"
                w="100%"
                h="35px"
                align="center"
                justify="center"
                borderRadius="sm"
                p={2}
                isActive={unidadeIdSelecionada === unidade.id}
                _active={{ backgroundColor: 'blue.500' }}
                _hover={{ backgroundColor: 'blue.900' }}
                onClick={() => setUnidadeIdSelecionada(unidade.id)}
              >
                <Text
                  color="blue.100"
                  textAlign="center"
                  fontWeight="thin"
                  fontSize="sm"
                >
                  {unidade.nome}
                </Text>
              </Button>
            ))}
            <DarkButton type="submit">Selecionar</DarkButton>
          </Stack>
        </Flex>
      </Form>
    </>
  )
}

export default Unidades
