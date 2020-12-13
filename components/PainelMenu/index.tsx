/* eslint-disable multiline-ternary */
// eslint-disable-next-line no-use-before-define
import React, { useCallback, useState } from 'react'
import { Button, Flex, Stack, Text } from '@chakra-ui/core'
import { MdHome, MdPerson } from 'react-icons/md'
import {
  BsChevronCompactRight,
  BsCalendar,
  BsChevronCompactLeft,
  BsChevronCompactUp,
  BsChevronCompactDown
} from 'react-icons/bs'
import { useRouter } from 'next/router'

import { FaFileArchive } from 'react-icons/fa'

interface PainelMenuProps {
  painelMenuView: string | string[]
}

const PainelMenu: React.FC<PainelMenuProps> = ({ painelMenuView }) => {
  const router = useRouter()
  const menuItems = [
    {
      title: 'Home',
      href: '/painel?d=home',
      icon: MdHome,
      slug: ['home']
    },
    {
      title: 'Calendário',
      href: '/painel?d=calendario',
      icon: BsCalendar,
      slug: ['calendario']
    },
    {
      title: 'Pacientes',
      href: '/painel?d=pacientes',
      icon: MdPerson,
      slug: ['paciente', 'pacientes']
    },

    {
      title: 'Prontuários',
      href: '/painel?d=prontuarios',
      icon: FaFileArchive,
      slug: ['prontuarios']
    }
  ]
  const [isExtended, setIsExtended] = useState(false)

  const checkIsActive = useCallback(
    (slug: string | string[]) => {
      for (let i = 0; i < slug.length; i++) {
        if (slug[i] === painelMenuView) {
          return true
        }
      }
      return false
    },
    [painelMenuView]
  )

  return (
    <>
      {/* Side menu Desktop */}
      <Flex d={['none', 'flex']}>
        <Stack flexGrow={1} p={2}>
          {menuItems.map(item => {
            const Icon = item.icon
            return (
              <Button
                key={item.title}
                display="flex"
                variant="solid"
                minW={isExtended && '160px'}
                borderRadius="sm"
                justifyContent="flex-start"
                backgroundColor="blue.100"
                onClick={() => {
                  router.push(item.href)
                }}
                _hover={{ backgroundColor: 'blue.200' }}
                _active={{
                  backgroundColor: 'blue.500',
                  color: 'blue.100'
                }}
                isActive={checkIsActive(item.slug)}
              >
                {isExtended ? (
                  <>
                    <Icon size={18} />
                    <Text ml={4}>{item.title}</Text>
                  </>
                ) : (
                  <Icon size={18} />
                )}
              </Button>
            )
          })}
        </Stack>
        <Flex
          align="center"
          shadow="md"
          justify="center"
          cursor="pointer"
          backgroundColor="blue.400"
          borderRightColor="blue.700"
          borderRightWidth="1px"
          onClick={() => setIsExtended(!isExtended)}
        >
          <Flex
            color="blue.100"
            size={4}
            as={isExtended ? BsChevronCompactLeft : BsChevronCompactRight}
          />
        </Flex>
      </Flex>

      {/* Side menu Mobile */}
      <Flex d={['flex', 'none']} flexDir="column">
        <Stack isInline={!isExtended} justify="center" flexGrow={1} m={2}>
          {menuItems.map(item => {
            const Icon = item.icon
            return (
              <Button
                key={item.title}
                display="flex"
                variant="solid"
                minW={isExtended && '160px'}
                h="45px"
                borderRadius="sm"
                justifyContent="flex-start"
                backgroundColor="blue.100"
                onClick={() => {
                  router.push(item.href)
                }}
                _hover={{ backgroundColor: 'blue.200' }}
                _active={{
                  backgroundColor: 'blue.500',
                  color: 'blue.100'
                }}
                isActive={checkIsActive(item.slug)}
              >
                {isExtended ? (
                  <>
                    <Icon size={18} />
                    <Text ml={4}>{item.title}</Text>
                  </>
                ) : (
                  <Icon size={18} />
                )}
              </Button>
            )
          })}
        </Stack>
        <Flex
          align="center"
          shadow="md"
          justify="center"
          cursor="pointer"
          backgroundColor="blue.400"
          borderBottomColor="blue.700"
          borderBottomWidth="1px"
          onClick={() => setIsExtended(!isExtended)}
        >
          <Flex
            color="blue.100"
            size={4}
            as={isExtended ? BsChevronCompactUp : BsChevronCompactDown}
          />
        </Flex>
      </Flex>
    </>
  )
}

export default PainelMenu
