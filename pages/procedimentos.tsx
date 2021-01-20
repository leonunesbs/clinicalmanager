/* eslint-disable no-use-before-define */
import Link from 'next/link'
import { Link as ChakraLink, Text, Button, Box } from '@chakra-ui/react'
import React, { useCallback } from 'react'
import { mutate as mutateGlobal } from 'swr'
import { useFetch } from '../hooks/useFetch'
import api from '../services/api'

// import { Container } from './styles';

interface Paciente {
  id: number
  nome: string
  // eslint-disable-next-line camelcase
  data_de_nascimento: string
  cpf: string
  rg: string
}

const Procedimentos: React.FC = () => {
  const { data, mutate } = useFetch<Paciente[]>('paciente/')

  const handleNameChange = useCallback(
    (id: number) => {
      api.patch(`paciente/${id}/`, { nome: 'LeoNunesssss' })

      const updatedPacientes = data?.map((paciente: Paciente) => {
        if (paciente.id === id) {
          return { ...paciente, nome: 'LeoNunesssss' }
        }

        return paciente
      })

      mutate(updatedPacientes, false)
      mutateGlobal(`paciente/${id}/`, { id, nome: 'Bartolomeu' })
    },
    [data, mutate]
  )

  return (
    <>
      <Link href="/">
        <ChakraLink>Voltar</ChakraLink>
      </Link>
      {data?.map(paciente => (
        <Box key={paciente.id}>
          <Text>{paciente.nome}</Text>
          <Button onClick={() => handleNameChange(paciente.id)}>
            Alterar nome
          </Button>
        </Box>
      ))}
    </>
  )
}

export default Procedimentos
