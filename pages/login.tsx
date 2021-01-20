/* eslint-disable no-use-before-define */
import React, { useRef, useState } from 'react'
import { Flex, FormControl, Heading, Link, Stack } from '@chakra-ui/react'
import { Form } from '@unform/web'
import { FormHandles, SubmitHandler } from '@unform/core'
import DarkInput from '../components/DarkInput'
import DarkButton from '../components/DarkButton'
import Head from 'next/head'
import api from '../services/api'
import { useRouter } from 'next/router'

interface FormData {
  usuário: string
  senha: string
}

interface AuthData {
  ok?: boolean
  data?: {
    token?: string
  }
}

const Login: React.FC = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const formRef = useRef<FormHandles>(null)
  const handleSubmit: SubmitHandler<FormData> = async data => {
    setLoading(true)
    const response: AuthData = await api.post('autenticar/', {
      usuário: data.usuário,
      senha: data.senha
    })
    if (response.ok) {
      localStorage.setItem('@clinicalManager:Token', response.data.token)
      router.push('unidades/')
    }
    setLoading(false)
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
            <FormControl id="usuário" isRequired>
              <DarkInput name="usuário" placeholder="Usuário" />
            </FormControl>
            <FormControl id="senha" isRequired>
              <DarkInput
                name="senha"
                type="password"
                placeholder="Senha"
                mb={2}
              />
            </FormControl>
            <DarkButton type="submit" isLoading={loading}>
              Entrar
            </DarkButton>
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
