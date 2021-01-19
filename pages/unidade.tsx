/* eslint-disable no-use-before-define */
import React, { useRef, useState } from 'react'
import { Flex, Heading, Text, Stack, Button } from '@chakra-ui/react'
import { Form } from '@unform/web'
import { FormHandles, SubmitHandler } from '@unform/core'
import DarkButton from '../components/DarkButton'
import Head from 'next/head'

interface FormData {
  name: string
  email: string
}

const Unidade: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const handleSubmit: SubmitHandler<FormData> = data => {
    console.log(formRef)
    console.log(data)
  }

  const [unidadeIdSelecionada, setUnidadeIdSelecionada] = useState<number>(0)
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
            border="2px solid rgba(228, 242, 241, 0.45)"
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
            <Button
              backgroundColor="blue.700"
              shadow="lg"
              w="100%"
              h="35px"
              align="center"
              justify="center"
              borderRadius="sm"
              p={2}
              isActive={unidadeIdSelecionada === 1}
              _active={{ backgroundColor: 'blue.500' }}
              _hover={{ backgroundColor: 'blue.900' }}
              onClick={() => setUnidadeIdSelecionada(1)}
            >
              <Text
                color="blue.100"
                textAlign="center"
                fontWeight="thin"
                fontSize="sm"
              >
                HOSPITAL ALBERTO NETO / DIRCEU II
              </Text>
            </Button>
            <Button
              backgroundColor="blue.700"
              shadow="lg"
              w="100%"
              h="35px"
              align="center"
              justify="center"
              borderRadius="sm"
              p={2}
              isActive={unidadeIdSelecionada === 2}
              _active={{ backgroundColor: 'blue.500' }}
              _hover={{ backgroundColor: 'blue.900' }}
              onClick={() => setUnidadeIdSelecionada(2)}
              mb={2}
            >
              <Text
                color="blue.100"
                textAlign="center"
                fontWeight="thin"
                fontSize="sm"
              >
                HOSPITAL DE URGÊNCIA DE TERESINA
              </Text>
            </Button>
            <DarkButton type="submit">Selecionar</DarkButton>
          </Stack>
        </Flex>
      </Form>
    </>
  )
}

export default Unidade
