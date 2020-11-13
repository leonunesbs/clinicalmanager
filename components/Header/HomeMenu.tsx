/* eslint-disable no-use-before-define */
import { Flex, Text } from '@chakra-ui/core'
import React from 'react'
import { MenuItemsProps } from '.'
import MenuItem from './MenuItem'

// import { Container } from './styles';

const HomeMenu: React.FC<MenuItemsProps> = ({ menuItems }) => {
  return (
    <Flex
      border="solid"
      borderWidth="2px"
      borderColor="blue.400"
      align="center"
      justify={['initial', 'center']}
      overflowY="hidden"
      overflowX={['scroll', 'scroll', 'scroll', 'hidden']}
    >
      {menuItems?.map(item => (
        <MenuItem key={item.title} href={item.href}>
          <Text fontSize="sm" textAlign="center">
            {item.title}
          </Text>
        </MenuItem>
      ))}
    </Flex>
  )
}

export default HomeMenu
