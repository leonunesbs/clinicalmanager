// eslint-disable-next-line no-use-before-define
import React, { useEffect, useRef, useState } from 'react'
import {
  Button,
  Flex,
  FormControl,
  Heading,
  Link,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea
} from '@chakra-ui/react'
import DarkButton from '../../../components/DarkButton'
import { useRouter } from 'next/router'
import { useFetch } from '../../../hooks/useFetch'
import api from '../../../services/api'
import { mutate } from 'swr'
import { Form } from '@unform/web'
import { FormHandles, SubmitHandler } from '@unform/core'

const Manager: React.FC = () => {
  const router = useRouter()
  const [autoSave, setAutoSave] = useState(false)
  const [unidadeId, setUnidadeId] = useState('')
  const [consultaIdAtiva, setConsultaIdAtiva] = useState(0)
  const [dadosClínicos, setDadosClínicos] = useState('')
  const { id } = router.query

  useEffect(() => {
    setUnidadeId(localStorage.getItem('@clinicalManager:unidadeIdSelecionada'))
  }, [unidadeId])

  const url = () => {
    if (unidadeId && id) {
      return `prontuario/${unidadeId}/${id}/`
    }
  }
  const prontuário = useFetch(url(), {
    // refreshInterval: 5000
  })

  const handleGuardar = async () => {
    const response: any = await api.post(`nova_consulta/${unidadeId}/${id}/`, {
      dados_clínicos: dadosClínicos
    })

    if (response.ok) {
      prontuário.mutate({ ...prontuário.data, ...response.data })
      mutate(
        `prontuario/${unidadeId}/${id}/`,
        { ...prontuário.data, ...response.data },
        false
      )

      return response.data
    }
  }
  const handleNovo = () => {
    setDadosClínicos('')
    setConsultaIdAtiva(0)
  }
  const formRef = useRef<FormHandles>(null)
  const handleSubmit: SubmitHandler<FormData> = async data => {
    if (consultaIdAtiva === 0) {
      await handleGuardar()
    }
  }

  const handleDadosClínicos = e => {
    setDadosClínicos(e.target.value)
  }

  const handleSelect = id => {
    prontuário.data.histórico_clínico.map(consulta => {
      if (consulta.id === id) {
        setDadosClínicos(consulta.dados_clínicos)
        setConsultaIdAtiva(id)
      }
      return consulta
    })
  }

  return (
    <Flex h="100vh" w="100vw" backgroundColor="blue.700" overflow="hidden">
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
        d={['none', 'flex']}
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
      <Flex flexDir="column" mt={10} px={[1, 4]} flexGrow={1}>
        <Flex align="flex-end">
          <Heading
            size="lg"
            color="blue.100"
            as="h1"
            textAlign="justify"
            lineHeight={1.4}
          >
            {prontuário.data?.paciente.nome || 'PACIENTE'}
          </Heading>
        </Flex>
        <Stack
          flexDir="column"
          w="100%"
          borderRadius="md"
          overflow="auto"
          mb={4}
        >
          <Flex
            flexDir="column"
            backgroundColor="blue.800"
            shadow="lg"
            borderRadius="sm"
            textColor="blue.100"
            p={2}
            mb={2}
          >
            <Text>CPF: 068.008.773-79</Text>
            <Text>Data de admissão: 16/01/2021</Text>
            <Text>Data de nascimento: 12/02/1998</Text>
          </Flex>
          <Tabs
            size="sm"
            borderRadius="sm"
            backgroundColor="blue.800"
            shadow="lg"
            isFitted
            variant="enclosed"
            textColor="blue.100"
          >
            <TabList mb="1em">
              <Tab
                _selected={{
                  backgroundColor: 'blue.500',
                  textColor: 'blue.100'
                }}
              >
                Dados clínicos
              </Tab>
              <Tab
                _selected={{
                  backgroundColor: 'blue.500',
                  textColor: 'blue.100'
                }}
              >
                Exames/procedimentos
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel d="flex" flexDir="column" p={2}>
                <Form ref={formRef} onSubmit={handleSubmit}>
                  <Heading as="h4" size="sm" mb={2}>
                    Consulta
                  </Heading>
                  <FormControl>
                    <Textarea
                      shadow="lg"
                      value={dadosClínicos}
                      onChange={handleDadosClínicos}
                      border=""
                      backgroundColor="blue.700"
                      placeholder="Descreva os dados clínicos do paciente..."
                      mb={2}
                      minH="120px"
                    />
                  </FormControl>
                  <Stack isInline justify="flex-end" mb={2} wrap="wrap">
                    <DarkButton
                      isActive={autoSave}
                      onClick={() => setAutoSave(!autoSave)}
                      mb={2}
                    >
                      Autosave
                    </DarkButton>
                    <DarkButton mb={2} onClick={handleNovo}>
                      Novo
                    </DarkButton>
                    <DarkButton mb={2} type="submit">
                      Guardar
                    </DarkButton>
                  </Stack>
                </Form>
                <Heading
                  as="h4"
                  size="sm"
                  mb={2}
                  display={
                    prontuário.data?.histórico_clínico.length
                      ? prontuário.data.histórico_clínico.length === 0 && 'none'
                      : 'none'
                  }
                >
                  Histórico clínico
                </Heading>
                <Stack
                  direction="column"
                  shadow="lg"
                  h="100%"
                  maxH="350px"
                  borderRadius="md"
                  backgroundColor="blue.800"
                  overflow="auto"
                >
                  {prontuário.data?.histórico_clínico.map(consulta => {
                    const dataHora = new Date(consulta.data_hora)
                    return (
                      <Button
                        key={consulta.id}
                        backgroundColor="blue.700"
                        shadow="lg"
                        h="35px"
                        borderRadius="sm"
                        p={2}
                        isActive={consultaIdAtiva === consulta.id}
                        _active={{ backgroundColor: 'blue.500' }}
                        _hover={{ backgroundColor: 'blue.900' }}
                        onClick={() => handleSelect(consulta.id)}
                      >
                        <Flex w="100%" justify="space-between" wrap="wrap">
                          <Text
                            color="blue.100"
                            textAlign="center"
                            fontWeight="normal"
                            fontSize="sm"
                          >
                            {`${dataHora.getDate()}/${
                              dataHora.getMonth() + 1 < 10
                                ? `0${dataHora.getMonth() + 1}`
                                : dataHora.getMonth() + 1
                            }/${dataHora.getFullYear()} ${dataHora.getHours()}h${dataHora.getMinutes()}`}
                          </Text>
                          <Text
                            color="blue.100"
                            textAlign="center"
                            fontWeight="thin"
                            fontSize="sm"
                          >
                            {consulta.responsável}
                          </Text>
                          <Text
                            color="blue.100"
                            textAlign="center"
                            fontWeight="thin"
                            fontSize="sm"
                          >
                            {consulta.setor}
                          </Text>
                        </Flex>
                      </Button>
                    )
                  })}
                </Stack>
              </TabPanel>
              <TabPanel d="flex" flexDir="column" p={2}>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Flex>
    </Flex>
  )
}

export default Manager
