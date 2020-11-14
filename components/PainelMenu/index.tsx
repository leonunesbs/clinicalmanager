// eslint-disable-next-line no-use-before-define
import React, { useCallback } from 'react'
import { Button, Flex } from '@chakra-ui/core'
import { MdHome, MdPerson } from 'react-icons/md'
import { useRouter } from 'next/router'
import HamburgerMenu from '../Header/HamburgerMenu'

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
      title: 'Pacientes',
      href: '/painel?d=pacientes',
      icon: MdPerson,
      slug: ['paciente', 'pacientes']
    },
    {
      title: 'Consultas',
      href: '/painel?d=consultas',
      icon: MdPerson,
      slug: ['consultas']
    }
  ]

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
      <Flex p={3} pl="5%" d={['flex', 'none']}>
        <HamburgerMenu menuItems={menuItems} rightText="Menu" />
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
                router.asPath === item.href && router.reload()
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
