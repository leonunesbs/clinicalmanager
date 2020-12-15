/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable indent */
// eslint-disable-next-line no-use-before-define
import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  Flex,
  Text,
  Heading,
  theme,
  useDisclosure,
  Skeleton
} from '@chakra-ui/core'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/pt-br'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useFetch } from '../../../hooks/useFetch'
import { api } from '../../../services/api'
import { mutate as mutateGlobal } from 'swr'
import Head from 'next/head'
import { FormHandles } from '@unform/core'
import ModalAgenda from './ModalAgenda'
import { UseDisclosureReturn } from '@chakra-ui/core/dist/useDisclosure'

const CalendárioView: React.FC = () => {
  const now = new Date()
  const localizer = momentLocalizer(moment)
  const { data, mutate } = useFetch('listar-agendas/')
  const [agendas, setAgendas] = useState([])
  const [e, setE] = useState<any>()

  const formRef = useRef<FormHandles>(null)

  const modalAgendaDisclosure: UseDisclosureReturn = useDisclosure()

  useEffect(() => {
    if (data) {
      setAgendas(
        data.map(agenda => {
          agenda.start = new Date(agenda.start)
          agenda.end = new Date(agenda.end)
          agenda.title = (
            <Flex flexDir="column" justify="space-between" h="100%">
              <Flex justify="space-between">
                {
                  // eslint-disable-next-line multiline-ternary
                  agenda.prontuário ? (
                    <>
                      <Text fontSize="sm">
                        {agenda.prontuário.paciente.nome}
                      </Text>
                      <Text fontSize="sm" fontWeight="light" ml={2}>
                        {agenda.prontuário.paciente.idade} anos
                      </Text>
                    </>
                  ) : (
                    <Text>Horário disponível</Text>
                  )
                }
              </Flex>
              <Text fontWeight="light" fontSize="xs">
                {`${agenda.profissional?.especialidade}: ${agenda.profissional?.nome}`}
              </Text>
            </Flex>
          )
          return agenda
        })
      )
    }
  }, [data])

  const handleSelectSlot = useCallback(async ({ start, end }) => {
    const profissionalId = window.prompt('Qual o ID do profissional?')
    if (profissionalId) {
      const localDeAtendimento = window.prompt('Qual o local do atendimento?')
      const response = await api.post('nova-agenda/', {
        profissional: profissionalId,
        start: new Date(start),
        end: new Date(end),
        localDeAtendimento
      })
      if (response.ok) {
        mutate([...agendas, response.data], false)
        mutateGlobal('listar-agendas/', [...agendas, response.data])
      }
    }
  }, [])

  // const handleSelectEvent = useCallback(event => {}, [
  //   formRef,
  //   e,
  //   modalAgendaDisclosure.isOpen
  // ])

  const handleDoubleClickEvent = useCallback(() => {
    // setE(event)
    // modalAgendaDisclosure.onOpen()
  }, [e, modalAgendaDisclosure])

  const handleSelectEvent = useCallback(
    event => {
      setE(event)
      modalAgendaDisclosure.onOpen()
    },
    [e, modalAgendaDisclosure]
  )

  const handleEventPropGetter = useCallback(
    event => {
      const newStyle = {
        backgroundColor: theme.colors.blue[400],
        borderColor: theme.colors.white,
        color: 'white',
        shadow: theme.shadows.md,
        borderRadius: theme.radii.sm
      }

      if (event.is_disponível) {
        newStyle.backgroundColor = theme.colors.green[400]
      }

      return {
        className: '',
        style: newStyle
      }
    },
    [agendas]
  )

  if (!data) {
    return (
      <Flex display="column">
        <Flex justify="space-between" mb={4}>
          <Heading as="h2" size="lg" color="blue.100">
            Calendário
          </Heading>
        </Flex>
        <Skeleton h="500px" />
      </Flex>
    )
  }
  return (
    <>
      <Head>
        <title>Calendário - Clínical Manager</title>
        <meta
          name="description"
          content="Calendário de consultas - Clinical Manager"
        />
      </Head>
      <Flex display="column">
        <Flex justify="space-between" mb={4}>
          <Heading as="h2" size="lg" color="blue.100">
            Calendário
          </Heading>
        </Flex>
        <Flex
          borderColor="blue.400"
          borderWidth={3}
          borderRadius="md"
          backgroundColor="blue.100"
          h="840px"
          overflowY="auto"
          display="column"
          mb={4}
          p={4}
        >
          <Calendar
            selectable
            localizer={localizer}
            events={agendas}
            min={new Date(0, 0, 0, 9, 0, 0)}
            max={new Date(0, 0, 0, 22, 0, 0)}
            step={45}
            timeslots={4}
            onSelectEvent={handleSelectEvent}
            onDoubleClickEvent={handleDoubleClickEvent}
            defaultView="day"
            defaultDate={now}
            onSelectSlot={handleSelectSlot}
            eventPropGetter={handleEventPropGetter}
            messages={{
              date: 'Data',
              time: 'Hora',
              event: 'Evento',
              allDay: 'Dia inteiro',
              week: 'Semana',
              work_week: 'Dia de trabalho',
              day: 'Dia',
              month: 'Mês',
              previous: 'Anterior',
              next: 'Seguinte',
              yesterday: 'Ontem',
              tomorrow: 'Amanhã',
              today: 'Hoje',
              agenda: 'Agenda',
              noEventsInRange: 'Não há eventos no intervalo.',
              showMore: function (e) {
                return '+' + e + ' mais'
              }
            }}
          />
          <ModalAgenda
            ref={formRef}
            disclosure={modalAgendaDisclosure}
            agendas={agendas}
            e={e}
            setE={setE}
          />
        </Flex>
      </Flex>
    </>
  )
}

export default CalendárioView
