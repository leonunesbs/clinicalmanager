/* eslint-disable indent */
/* eslint-disable prettier/prettier */
/* eslint-disable multiline-ternary */
// eslint-disable-next-line no-use-before-define
import React, { useCallback, useState } from 'react'
import { Flex, Heading, Input, Stack } from '@chakra-ui/core'
import { Paciente } from '.'
import { useFetch } from '../../../hooks/useFetch'
import PacienteCard from './PacienteCard'
import { useRouter } from 'next/router'
import ButtonWithIcon from '../../ButtonWithIcon'
import { MdPersonAdd, MdSearch } from 'react-icons/md'
import { FaFileArchive } from 'react-icons/fa'

const PacientesList: React.FC = () => {
  const router = useRouter()
  const pacientes = useFetch<Paciente[]>('pacientes/')
  const [loading] = useState(true)

  const [isSearching, setIsSearching] = useState(false)
  const [searchString, setSearchString] = useState('')
  const [searchData, setSearchData] = useState([])

  const handleSearch = useCallback((e) => {
    setSearchString(e.target.value)
    if (pacientes.data) {
      setSearchData(pacientes.data.filter(pct => pct.nome.toLowerCase().includes(searchString.toLowerCase())))
    }
    if (searchString.length === 0) {
      setSearchData(pacientes.data)
    }
  }, [searchString, pacientes, searchData])

  return (
    <Flex display="column">
      <Flex justify="space-between" mb={4}>
        <Heading as="h2" size="lg" color="blue.100">
          {isSearching ? 'Buscar paciente' : 'Pacientes'}
        </Heading>
        <Stack isInline>
          <ButtonWithIcon onClick={() => setIsSearching(!isSearching)} icon={MdSearch} isActive={isSearching} />
          <ButtonWithIcon onClick={() => router.push('/painel?d=prontuarios')} icon={FaFileArchive} />
          <ButtonWithIcon onClick={() => router.push('/painel?d=pacientes&action=novoPaciente')} icon={MdPersonAdd} />
        </Stack>
      </Flex>
      <Flex display={!isSearching && 'none'} mb={10}>
        <Input value={searchString} borderRadius='sm' onChange={handleSearch} placeholder='Digite o nome do paciente' />
      </Flex>
      <Flex
        borderColor="blue.400"
        borderWidth={3}
        borderRadius="md"
        maxH="440px"
        overflowY="auto"
        display={isSearching ? searchString.length < 1 && 'none' : 'column'}
        mb={4}
        p={4}
      >
        {pacientes.data ? (
          isSearching
            ? searchData.map((pct: Paciente) => (
              <PacienteCard key={pct.id} paciente={pct} />
            ))
            : (
              pacientes.data.length === 0 ? 'Nada a mostrar'
                : pacientes.data.map((pct: Paciente) => (
                  <PacienteCard key={pct.id} paciente={pct} />
                ))
            )
        ) : (
            <>
              <PacienteCard isLoading={loading} />
              <PacienteCard isLoading={loading} />
              <PacienteCard isLoading={loading} />
              <PacienteCard isLoading={loading} />
            </>
          )}
      </Flex>
    </Flex>
  )
}

export default PacientesList
