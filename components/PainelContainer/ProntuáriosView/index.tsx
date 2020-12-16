/* eslint-disable indent */
/* eslint-disable prettier/prettier */
/* eslint-disable multiline-ternary */
// eslint-disable-next-line no-use-before-define
import React, { useCallback, useState } from 'react'
import { Button, ButtonGroup, Flex, Heading, Input, Skeleton, Stack } from '@chakra-ui/react'
import { useFetch } from '../../../hooks/useFetch'
import { useRouter } from 'next/router'
import ButtonWithIcon from '../../ButtonWithIcon'
import { MdPerson, MdSearch } from 'react-icons/md'
import { Paciente } from '../PacientesView'
import ProntuárioCard from './ProntuárioCard'
import { cpfMask } from '../../../scripts/masks'

const Prontuários: React.FC = () => {
  const router = useRouter()
  const prontuários = useFetch<Paciente[]>('prontuarios/')

  const [isSearching, setIsSearching] = useState(false)
  const [searchString, setSearchString] = useState('')
  const [searchBy, setSeachBy] = useState('')
  const [searchData, setSearchData] = useState([])

  const handleSearch = useCallback((e) => {
    setSearchString(e.target.value)
    if (prontuários.data) {
      if (searchBy === 'nome') {
        setSearchData(prontuários.data.filter(prt => prt.paciente.nome.toLowerCase().includes(searchString.toLowerCase())))
      }

      if (searchBy === 'cpf') {
        setSearchData(prontuários.data.filter(prt => prt.paciente.cpf.includes(cpfMask(searchString))))
      }
    }
    if (searchString.length === 0) {
      setSearchData(prontuários.data)
    }
  }, [searchString, prontuários, searchData])

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
          {isSearching ? 'Buscar prontuário' : 'Prontuários'}
        </Heading>
        <Stack isInline>
        <ButtonWithIcon label='Buscar'onClick={() => setIsSearching(!isSearching)} icon={MdSearch} isActive={isSearching} />
          <ButtonWithIcon label='Pacientes'onClick={() => router.push('/painel?d=pacientes')} icon={MdPerson} />
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
        {prontuários.data ? (
          isSearching
            ? searchData.map((prontuario) => (
              <ProntuárioCard key={prontuario.id} prontuário={prontuario}/>
            ))
            : (
              prontuários.data.length === 0 ? 'Nada a mostrar'
                : prontuários.data.map((prontuario) => (
                  <ProntuárioCard key={prontuario.id} prontuário={prontuario}/>
                ))
            )
        ) : (
          <Skeleton h='50px'/>
          )}
      </Flex>
    </Flex>
  )
}

export default Prontuários
