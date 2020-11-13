// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Button, Flex } from '@chakra-ui/core'
import { MdHome, MdPerson } from 'react-icons/md'
import { useRouter } from 'next/router'
import { PainelContainerProps } from '../PainelContainer'
import HamburguerMenu from '../Header/HamburgerMenu'

const PainelMenu: React.FC<PainelContainerProps> = ({
  painelContainerView
}) => {
  const router = useRouter()
  const menuItems = [
    {
      title: 'Home',
      href: '/painel?d=home',
      icon: MdHome,
      slug: 'home'
    },
    {
      title: 'Pacientes',
      href: '/painel?d=pacientes',
      icon: MdPerson,
      slug: 'pacientes'
    },
    {
      title: 'Consultas',
      href: '/painel?d=consultas',
      icon: MdPerson,
      slug: 'consultas'
    }
  ]

  return (
    <>
      <Flex p={4} pl="5%">
        <HamburguerMenu menuItems={menuItems} />
      </Flex>
      <Flex
        width="30%"
        minWidth="150px"
        maxWidth="300px"
        display={['none', 'flex']}
      >
        <Flex display="column" width="100%" p={2}>
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
              isActive={painelContainerView === item.slug}
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
