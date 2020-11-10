/* eslint-disable no-use-before-define */
import React from 'react'
import { Flex, Image } from '@chakra-ui/core'

// import { Container } from './styles';

const HamburguerMenu: React.FC = ({ ...rest }) => {
  return (
    <Flex w={['100px', '180px']} justify="flex-end" d={['flex', 'none']}>
      <Image
        size={6}
        src="/images/hamburguer-menu.svg?webp"
        {...rest}
        cursor="pointer"
      />
    </Flex>
  )
}

export default HamburguerMenu
