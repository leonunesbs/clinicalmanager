// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Button, Flex, Icon, Text } from '@chakra-ui/core'
import { MdPerson } from 'react-icons/md'

const PainelSideMenu: React.FC = () => {
  const sideMenuItems = [
    {
      title: 'Pacientes',
      href: '/pacientes',
      icon: MdPerson
    },
    {
      title: 'Painel',
      href: '/painel',
      icon: MdPerson
    },
    {
      title: 'Procedimentos',
      href: '/procedimentos'
    },
    {
      title: 'Profissionais',
      href: '/profissionais'
    },
    {
      title: 'Especialidades',
      href: '/especialidades'
    }
  ]
  return (
    <Flex
      width="30%"
      minWidth="150px"
      maxWidth="300px"
      display={['none', 'flex']}
    >
      <Flex display="column" width="100%" p={2}>
        {sideMenuItems.map(item => (
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
            _hover={{ backgroundColor: 'blue.200' }}
          >
            {item.title}
          </Button>
        ))}
      </Flex>
    </Flex>
  )
}

export default PainelSideMenu
