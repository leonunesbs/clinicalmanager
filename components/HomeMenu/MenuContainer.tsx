/* eslint-disable no-use-before-define */
import React from 'react'
import { Flex } from '@chakra-ui/core'
import MenuItem from './MenuItem'

const MenuContainer: React.FC = () => {
  const menuItems = [
    {
      title: 'Agendamento',
      href: '/agendamento'
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
      border="solid"
      borderWidth="2px"
      borderColor="blue.400"
      h="50px"
      align="center"
      justify="center"
      d={['none', 'flex']}
      overflow="hidden"
    >
      {menuItems.map(item => (
        <MenuItem key={item.title} href={item.href}>
          {item.title}
        </MenuItem>
      ))}
    </Flex>
  )
}

export default MenuContainer
