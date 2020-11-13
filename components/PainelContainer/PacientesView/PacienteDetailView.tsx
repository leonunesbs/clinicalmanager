// eslint-disable-next-line no-use-before-define
import React from 'react'
import { useRouter } from 'next/router'
import { useFetch } from '../../../hooks/useFetch'
import { Paciente } from '.'
import { Button, Flex } from '@chakra-ui/core'

const PacienteDetailView: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  if (!id) {
    router.push('/painel?d=pacientes')
  }
  const { data } = useFetch<Paciente>(id ? `paciente/${id}/` : '')

  return (
    <Flex flexDir="column">
      ID: {data?.id} <br />
      Nome: {data?.nome} <br />
      CPF: {data?.cpf} <br />
      RG: {data?.rg} <br />
      <Button onClick={() => router.back()}>Voltar</Button>
    </Flex>
  )
}

export default PacienteDetailView
