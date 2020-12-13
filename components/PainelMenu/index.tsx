// eslint-disable-next-line no-use-before-define
import React, { useCallback, useRef } from 'react'
import {
  Button,
  Drawer,
  Text,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useDisclosure
} from '@chakra-ui/core'
import { MdHome, MdPerson } from 'react-icons/md'
import { useRouter } from 'next/router'
import { FiMenu } from 'react-icons/fi'
import { BsCalendar } from 'react-icons/bs'
import { FaFileArchive } from 'react-icons/fa'
import MenuItem from '../Header/MenuItem'

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
      slug: ['calendário']
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

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLDivElement>(null)

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
      <Flex
        p={1}
        pl="5%"
        d={['flex', 'none']}
        shadow="md"
        backgroundColor="blue.100"
      >
        <Button
          backgroundColor=""
          color={'blue.700'}
          _hover={{ backgroundColor: 'blue.400' }}
          _active={{ backgroundColor: 'blue.100', color: 'blue.700' }}
          onClick={onOpen}
          textAlign="center"
          p={0}
        >
          <Flex as={FiMenu} size="2xs" />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          size="xs"
          finalFocusRef={btnRef}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton borderRadius="sm" />
              <DrawerHeader>Menu</DrawerHeader>

              <Flex flexDirection="column" align="center" flexGrow={1}>
                {menuItems.map(item => (
                  <MenuItem key={item.title} href={item.href} w="80%">
                    <Text fontSize="sm" textAlign="center">
                      {item.title}
                    </Text>
                  </MenuItem>
                ))}
              </Flex>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
      <Flex
        flexGrow={1}
        h="2px"
        backgroundColor="blue.400"
        d={['inital', 'none']}
      />
      {/* Side menu */}
      <Flex
        width="30%"
        minWidth="150px"
        maxWidth="300px"
        display={['none', 'flex']}
      >
        <Flex display="column" width="100%" p={2} mt={4}>
          {menuItems.map(item => (
            <Button
              key={item.title}
              display="flex"
              leftIcon={item.icon}
              variant="solid"
              width="100%"
              mb={2}
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
              {item.title}
            </Button>
          ))}
        </Flex>
      </Flex>
    </>
  )
}

export default PainelMenu
