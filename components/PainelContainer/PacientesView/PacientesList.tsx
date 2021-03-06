/* eslint-disable indent */
/* eslint-disable prettier/prettier */
/* eslint-disable multiline-ternary */
// eslint-disable-next-line no-use-before-define
import React, { useCallback, useState } from 'react'
import { Button, ButtonGroup, Flex, Heading, Input, Stack } from '@chakra-ui/react'
import { Paciente } from '.'
import { useFetch } from '../../../hooks/useFetch'
import PacienteCard from './PacienteCard'
import { useRouter } from 'next/router'
import ButtonWithIcon from '../../ButtonWithIcon'
import { MdPersonAdd, MdSearch } from 'react-icons/md'
import { FaFileArchive } from 'react-icons/fa'
import { cpfMask } from '../../../scripts/masks'

const PacientesList: React.FC = () => {
  const router = useRouter()
  const pacientes = useFetch<Paciente[]>('pacientes/')
  const [loading] = useState(true)

  const [isSearching, setIsSearching] = useState(false)
  const [searchString, setSearchString] = useState('')
  const [searchBy, setSeachBy] = useState('')
  const [searchData, setSearchData] = useState([])

  const handleSearch = useCallback((e) => {
    setSearchString(e.target.value)
    if (pacientes.data) {
      if (searchBy === 'nome') {
        setSearchData(pacientes.data.filter(pct => pct.nome.toLowerCase().includes(searchString.toLowerCase())))
      }

      if (searchBy === 'cpf') {
        setSearchData(pacientes.data.filter(pct => pct.cpf.includes(cpfMask(searchString))))
      }
    }
    if (searchString.length === 0) {
      setSearchData(pacientes.data)
    }
  }, [searchString, pacientes, searchData])

  const handleSearchBy = useCallback((sBy: string) => {
    setSeachBy(sBy)
  }, [searchBy])

  const handleSearchByActive = useCallback((sBy: string) => {
    if (searchBy === sBy) {
      return true
    }
    return false
  }, [searchBy])

  return (
    <Flex display="column">
      <Flex justify="space-between" mb={4}>
        <Heading as="h2" size="lg" color="blue.100">
          {isSearching ? 'Buscar paciente' : 'Pacientes'}
        </Heading>
        <Stack isInline>
          <ButtonWithIcon label='Buscar' onClick={() => setIsSearching(!isSearching)} icon={MdSearch} isActive={isSearching} />
          <ButtonWithIcon label='Prontuários' onClick={() => router.push('/painel?d=prontuarios')} icon={FaFileArchive} />
          <ButtonWithIcon label='Novo paciente' onClick={() => router.push('/painel?d=pacientes&action=novoPaciente')} icon={MdPersonAdd} />
        </Stack>
      </Flex>
      <Flex display={!isSearching && 'none'} mb={10}>
        <Flex justify='center' mb={2}>
          <ButtonGroup>
            <Button borderRadius='sm' onClick={() => handleSearchBy('nome')} isActive={handleSearchByActive('nome')} backgroundColor='blue.400' color='blue.100' _hover={{ backgroundColor: 'blue.700' }} _active={{ backgroundColor: 'blue.700' }}>Nome</Button>
            <Button borderRadius='sm' onClick={() => handleSearchBy('cpf')} isActive={handleSearchByActive('cpf')} backgroundColor='blue.400' color='blue.100' _hover={{ backgroundColor: 'blue.700' }} _active={{ backgroundColor: 'blue.700' }}>CPF</Button>
          </ButtonGroup>
        </Flex>
        <Flex justify='center' mb={2}>
          <Input value={searchString} borderRadius='sm' onChange={handleSearch} maxW={['100%', '50%']} placeholder='Digite Nome ou CPF...' />
        </Flex>
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
