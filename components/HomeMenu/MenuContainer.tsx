/* eslint-disable no-use-before-define */
import React from 'react'
import { Flex } from '@chakra-ui/core'
import MenuItem from './MenuItem'

export interface MenuProps {
  menuItems: {
    title: string
    href: string
    slug?: string
  }[]
}

const MenuContainer: React.FC<MenuProps> = ({ menuItems }) => {
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
