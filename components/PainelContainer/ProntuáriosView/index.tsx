/* eslint-disable indent */
/* eslint-disable prettier/prettier */
/* eslint-disable multiline-ternary */
// eslint-disable-next-line no-use-before-define
import React, { useCallback, useState } from 'react'
import { Flex, Heading, Input, Stack } from '@chakra-ui/core'
import { useFetch } from '../../../hooks/useFetch'
import { useRouter } from 'next/router'
import ButtonWithIcon from '../../ButtonWithIcon'
import { MdPersonAdd } from 'react-icons/md'
import { Paciente } from '../PacientesView'
import ProntuárioCard from './ProntuárioCard'

const Prontuários: React.FC = () => {
  const router = useRouter()
  const prontuários = useFetch<Paciente[]>('prontuarios/')

  const [isSearching, setIsSearching] = useState(false)
  const [searchString, setSearchString] = useState('')
  const [searchData, setSearchData] = useState([])

  const handleSearch = useCallback((e) => {
    setSearchString(e.target.value)
    if (prontuários.data) {
      setSearchData(prontuários.data.filter(pct => pct.nome.toLowerCase().includes(searchString.toLowerCase())))
    }
    if (searchString.length === 0) {
      setSearchData(prontuários.data)
    }
  }, [searchString, prontuários, searchData])

  return (
    <Flex display="column">
      <Flex justify="space-between" mb={4}>
        <Heading as="h2" size="lg" color="blue.100">
          {isSearching ? 'Buscar prontuário' : 'Prontuários'}
        </Heading>
        <Stack isInline>
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
          <p>Carregando</p>
          )}
      </Flex>
    </Flex>
  )
}

export default Prontuários
