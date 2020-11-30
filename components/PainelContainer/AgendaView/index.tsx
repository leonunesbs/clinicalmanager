// eslint-disable-next-line no-use-before-define
import React, { useCallback, useEffect, useState } from 'react'
import { Flex, Text, Heading, Stack } from '@chakra-ui/core'
import { useFetch } from '../../../hooks/useFetch'
import { MdEventAvailable, MdPersonAdd, MdToday } from 'react-icons/md'
import ButtonWithIcon from '../../ButtonWithIcon'

const monthNames = [
  'JAN',
  'FEV',
  'MAR',
  'ABR',
  'MAI',
  'JUN',
  'JUL',
  'AGO',
  'SET',
  'OUT',
  'NOV',
  'DEZ'
]

interface ProfissionalProps {
  id: number
  nome: string
  especialidade: string
  registro: string
}

interface ProntuárioProps {
  id: number
  paciente: string
  // eslint-disable-next-line camelcase
  data_de_nascimento: string
}

interface HorárioProps {
  horário: string
  // eslint-disable-next-line camelcase
  is_disponível: boolean
}

const HorárioBox: React.FC<HorárioProps> = ({
  horário,
  is_disponível: isDisponível
}) => {
  const [date, setDate] = useState<string | JSX.Element>('')

  useEffect(() => {
    const h = new Date(horário).getDate()
    const today = new Date().getDate()

    switch (h) {
      case today:
        setDate(<Text>HOJE</Text>)
        break
      case today + 1:
        setDate(<Text>AMANHÃ</Text>)
        break
      case today - 1:
        setDate(<Text>ONTEM</Text>)
        break
      default:
        setDate(
          <>
            <Text>{new Date(horário).getDate()}</Text>
            <Text>{monthNames[new Date(horário).getMonth()]}</Text>
          </>
        )
        break
    }
  }, [horário])

  return (
    <Flex
      fontSize="sm"
      flexDirection="column"
      p={4}
      flexShrink={0}
      borderRadius="sm"
      backgroundColor={isDisponível ? 'blue.700' : 'blue.500'}
      align="center"
      shadow="md"
      justify="center"
      w="70px"
      h="100%"
      color="gray.100"
    >
      {date}
      <Text>
        {new Date(horário).getHours()}h
        {new Date(horário).getMinutes() > 0
          ? new Date(horário).getMinutes()
          : '00'}
      </Text>
    </Flex>
  )
}

interface AgendaProps {
  id: number
  horário: string
  // eslint-disable-next-line camelcase
  is_disponível: boolean
  profissional: ProfissionalProps
  prontuário?: ProntuárioProps
}

const AgendaCard: React.FC<AgendaProps> = ({
  id,
  horário,
  is_disponível: isDisponível,
  profissional,
  prontuário
}) => {
  return (
    <Flex
      key={id}
      mb={2}
      backgroundColor={isDisponível ? 'blue.100' : 'blue.400'}
      p={[2, 4]}
      shadow="md"
      borderRadius="sm"
    >
      <HorárioBox horário={horário} is_disponível={isDisponível} />
      <Flex ml={2} flexDir="column" flexGrow={1}>
        <Flex
          flexGrow={1}
          align={isDisponível && 'center'}
          justify={isDisponível && 'center'}
        >
          <Heading
            color={isDisponível ? 'blue.700' : 'blue.100'}
            size="xs"
            as="h4"
          >
            {isDisponível ? 'Horário disponível' : prontuário.paciente}
          </Heading>
        </Flex>
        <Text
          color="blue.100"
          fontSize="xs"
          borderRadius="sm"
          backgroundColor="blue.500"
          p={1}
          px={2}
        >
          {profissional.nome}
        </Text>
      </Flex>
    </Flex>
  )
}

const AgendaView: React.FC = () => {
  const { data } = useFetch<AgendaProps[]>('agendas/')

  const [agendas, setAgendas] = useState<AgendaProps[]>([])

  const [filters, setFilters] = useState([])

  const [isTodayBtnActive, setIsTodayBtnActive] = useState(false)
  const [isIsDisponívelBtnActive, setIsDisponívelBtnActive] = useState(false)

  useEffect(() => {
    setAgendas(data)
  }, [data])

  const handleActiveButtons = (filter: string) => {
    if (filter === 'today') {
      setIsTodayBtnActive(true)
    }
    if (filter === 'isDisponível') {
      setIsDisponívelBtnActive(true)
    }
  }

  const handleFilterChange = useCallback(
    (filter: string) => {
      if (!filters.includes(filter)) {
        setFilters([...filters, filter])
        handleActiveButtons(filter)
      } else {
        handleActiveButtons(filter)
        filters.splice(filters.indexOf(filter))
        setFilters(filters)
      }
    },
    [filters]
  )

  if (!agendas) {
    return <p>carregando</p>
  }
  return (
    <Flex display="column">
      <Flex justify="space-between" mb={4}>
        <Heading as="h2" size="lg" color="blue.100">
          Agenda
        </Heading>
        <Stack isInline>
          <ButtonWithIcon
            icon={MdEventAvailable}
            isActive={isIsDisponívelBtnActive}
            onClick={() => handleFilterChange('isDisponível')}
          />
          <ButtonWithIcon
            icon={MdToday}
            isActive={isTodayBtnActive}
            onClick={() => handleFilterChange('today')}
          />
          <ButtonWithIcon icon={MdPersonAdd} />
        </Stack>
      </Flex>
      <Flex
        borderColor="blue.400"
        borderWidth={3}
        borderRadius="md"
        maxH="440px"
        overflowY="auto"
        display="column"
        mb={4}
        p={4}
      >
        {agendas.map((agenda: AgendaProps) => {
          if (agenda.is_disponível) {
            // Retorna cards com horário disponível
            return (
              <AgendaCard
                key={agenda.id}
                id={agenda.id}
                horário={agenda.horário}
                is_disponível={agenda.is_disponível}
                profissional={agenda.profissional}
              />
            )
          } else {
            // Retorna cards agendados
            return (
              <AgendaCard
                key={agenda.id}
                id={agenda.id}
                horário={agenda.horário}
                is_disponível={agenda.is_disponível}
                profissional={agenda.profissional}
                prontuário={agenda.prontuário}
              />
            )
          }
        })}
      </Flex>
    </Flex>
  )
}

export default AgendaView
