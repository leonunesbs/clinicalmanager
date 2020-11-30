// eslint-disable-next-line no-use-before-define
import React, { useCallback, useState } from 'react'
import { Box, Flex, Heading, Stack, Text, theme } from '@chakra-ui/core'
import {
  MdEventAvailable,
  MdToday,
  MdPersonAdd,
  MdSkipPrevious,
  MdSkipNext
} from 'react-icons/md'
import ButtonWithIcon from '../../ButtonWithIcon'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/pt-br'

import 'react-big-calendar/lib/css/react-big-calendar.css'

interface Event {
  id: number
  title: string
  allDay?: boolean
  desc?: string
  start: Date
  end: Date
}

const AgendaCalendárioView: React.FC = () => {
  const now = new Date()
  const localizer = momentLocalizer(moment)
  const [events, setEvents] = useState<Event[] | any>([
    {
      id: 0,
      title: 'All Day Event very long title',
      allDay: true,
      start: new Date(2015, 3, 0),
      end: new Date(2015, 3, 1)
    },
    {
      id: 1,
      title: 'Long Event',
      start: new Date(2015, 3, 7),
      end: new Date(2015, 3, 10)
    },

    {
      id: 2,
      title: 'DTS STARTS',
      start: new Date(2016, 2, 13, 0, 0, 0),
      end: new Date(2016, 2, 20, 0, 0, 0)
    },

    {
      id: 3,
      title: 'DTS ENDS',
      start: new Date(2016, 10, 6, 0, 0, 0),
      end: new Date(2016, 10, 13, 0, 0, 0)
    },

    {
      id: 4,
      title: 'Some Event',
      start: new Date(2015, 3, 9, 0, 0, 0),
      end: new Date(2015, 3, 10, 0, 0, 0)
    },
    {
      id: 5,
      title: 'Conference',
      start: new Date(2015, 3, 11),
      end: new Date(2015, 3, 13),
      desc: 'Big conference for important people'
    },
    {
      id: 6,
      title: 'Meeting',
      start: new Date(2015, 3, 12, 10, 30, 0, 0),
      end: new Date(2015, 3, 12, 12, 30, 0, 0),
      desc: 'Pre-meeting meeting, to prepare for the meeting'
    },
    {
      id: 7,
      title: 'Lunch',
      start: new Date(2015, 3, 12, 12, 0, 0, 0),
      end: new Date(2015, 3, 12, 13, 0, 0, 0),
      desc: 'Power lunch'
    },
    {
      id: 8,
      title: 'Meeting',
      start: new Date(2015, 3, 12, 14, 0, 0, 0),
      end: new Date(2015, 3, 12, 15, 0, 0, 0)
    },
    {
      id: 9,
      title: 'Happy Hour',
      start: new Date(2020, 11, 12, 0, 0, 0, 0),
      end: new Date(2020, 11, 12, 0, 0, 0, 0),
      desc: 'Most important meal of the day'
    },
    {
      id: 10,
      title: 'Dinner',
      start: new Date(2015, 3, 12, 20, 0, 0, 0),
      end: new Date(2015, 3, 12, 21, 0, 0, 0)
    },
    {
      id: 11,
      title: 'Birthday Party',
      start: new Date(2015, 3, 13, 7, 0, 0),
      end: new Date(2015, 3, 13, 10, 30, 0)
    },
    {
      id: 12,
      title: 'Late Night Event',
      start: new Date(2015, 3, 17, 19, 30, 0),
      end: new Date(2015, 3, 18, 2, 0, 0)
    },
    {
      id: 12.5,
      title: 'Late Same Night Event',
      start: new Date(2015, 3, 17, 19, 30, 0),
      end: new Date(2015, 3, 17, 23, 30, 0)
    },
    {
      id: 13,
      title: 'Multi-day Event',
      start: new Date(2015, 3, 20, 19, 30, 0),
      end: new Date(2015, 3, 22, 2, 0, 0)
    },
    {
      id: 14,
      title: 'Today',
      desc: 'Teste',
      start: new Date(new Date().setHours(new Date().getHours() - 3)),
      end: new Date(new Date().setHours(new Date().getHours() + 3))
    },
    {
      id: 15,
      title: 'Point in Time Event',
      start: now,
      end: now
    },
    {
      id: 16,
      title: 'Video Record',
      start: new Date(2015, 3, 14, 15, 30, 0),
      end: new Date(2015, 3, 14, 19, 0, 0)
    },
    {
      id: 17,
      title: 'Dutch Song Producing',
      start: new Date(2015, 3, 14, 16, 30, 0),
      end: new Date(2015, 3, 14, 20, 0, 0)
    },
    {
      id: 18,
      title: 'Itaewon Halloween Meeting',
      start: new Date(2015, 3, 14, 16, 30, 0),
      end: new Date(2015, 3, 14, 17, 30, 0)
    },
    {
      id: 19,
      title: 'Online Coding Test',
      start: new Date(2015, 3, 14, 17, 30, 0),
      end: new Date(2015, 3, 14, 20, 30, 0)
    },
    {
      id: 20,
      title: 'An overlapped Event',
      start: new Date(2015, 3, 14, 17, 0, 0),
      end: new Date(2015, 3, 14, 18, 30, 0)
    },
    {
      id: 21,
      title: 'Phone Interview',
      start: new Date(2015, 3, 14, 17, 0, 0),
      end: new Date(2015, 3, 14, 18, 30, 0)
    },
    {
      id: 22,
      title: 'Cooking Class',
      start: new Date(2015, 3, 14, 17, 30, 0),
      end: new Date(2015, 3, 14, 19, 0, 0)
    },
    {
      id: 23,
      title: 'Go to the gym',
      start: new Date(2015, 3, 14, 18, 30, 0),
      end: new Date(2015, 3, 14, 20, 0, 0)
    }
  ])

  const handleSelectSlot = useCallback(({ start, end }) => {
    const title = window.prompt('New Event name')
    console.log(title)
    console.log(start)
    console.log(end)
    if (title) {
      setEvents([
        ...events,
        {
          start,
          end,
          title
        }
      ])
    }
  }, [])

  const handleSelectEvent = useCallback(event => {
    console.log(event)
  }, [])

  const handleEventPropGetter = useCallback((event, start, end, isSelected) => {
    const newStyle = {
      backgroundColor: theme.colors.blue[500],
      color: 'white',
      shadow: theme.shadows.standard,
      borderRadius: theme.radii.sm
    }

    if (event.isMine) {
      newStyle.backgroundColor = 'lightgreen'
    }

    return {
      className: '',
      style: newStyle
    }
  }, [])

  return (
    <>
      <Flex display="column">
        <Flex justify="space-between" mb={4}>
          <Heading as="h2" size="lg" color="blue.100">
            Agenda
          </Heading>
          <Stack isInline>
            <ButtonWithIcon icon={MdEventAvailable} />
            <ButtonWithIcon icon={MdToday} />
            <ButtonWithIcon icon={MdPersonAdd} />
          </Stack>
        </Flex>
        <Flex
          borderColor="blue.400"
          borderWidth={3}
          borderRadius="md"
          backgroundColor="blue.100"
          h="600px"
          overflowY="auto"
          display="column"
          mb={4}
          p={4}
        >
          <Calendar
            selectable
            localizer={localizer}
            events={events}
            min={new Date(0, 0, 0, 9, 0, 0)}
            max={new Date(0, 0, 0, 22, 0, 0)}
            step={15}
            timeslots={4}
            defaultView="day"
            defaultDate={now}
            onSelectEvent={handleSelectEvent}
            onSelectSlot={handleSelectSlot}
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
            eventPropGetter={handleEventPropGetter}
          />
        </Flex>
      </Flex>
    </>
  )
}

export default AgendaCalendárioView
