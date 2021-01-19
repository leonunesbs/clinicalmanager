/* eslint-disable no-use-before-define */
import React, { useRef } from 'react'
import { Flex, Heading, Link, Stack } from '@chakra-ui/react'
import { Form } from '@unform/web'
import { FormHandles, SubmitHandler } from '@unform/core'
import DarkInput from '../components/DarkInput'
import DarkButton from '../components/DarkButton'
import Head from 'next/head'

interface FormData {
  name: string
  email: string
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const handleSubmit: SubmitHandler<FormData> = data => {
    console.log(formRef)
    console.log(data)
  }
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
            w="100%"
            maxW="455px"
            shadow="lg"
            border="2px solid rgba(228, 242, 241, 0.45)"
            borderRadius="md"
            backgroundColor="blue.800"
            justify="center"
            align="center"
            px="20px"
            py="30px"
            m="5px"
          >
            <Heading color="blue.100" size="lg" fontWeight="normal">
              Login
            </Heading>
            <Flex w="80%" h="1px" backgroundColor="blue.100" my="5px" />
            <DarkInput name="usuário" placeholder="Usuário" />
            <DarkInput
              name="senha"
              type="password"
              placeholder="Senha"
              mb={2}
            />
            <DarkButton type="submit">Entrar</DarkButton>
            <Link
              color="rgb(255,255,255,0.4)"
              _hover={{ color: 'blue.500' }}
              lineHeight={1}
              fontSize="xs"
            >
              Esqueceu sua senha?
            </Link>
          </Stack>
        </Flex>
      </Form>
    </>
  )
}

export default Login
