/* eslint-disable no-use-before-define */
import React from 'react'
import { Flex, Text } from '@chakra-ui/core'
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
      align="center"
      overflowY="hidden"
      overflowX={['scroll', 'hidden']}
    >
      {menuItems.map(item => (
        <MenuItem key={item.title} href={item.href}>
          <Text fontSize="sm" textAlign="center">
            {item.title}
          </Text>
        </MenuItem>
      ))}
    </Flex>
  )
}

export default MenuContainer
