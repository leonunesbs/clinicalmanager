/* eslint-disable no-use-before-define */
import React from 'react'
import { Flex, Image } from '@chakra-ui/core'

// import { Container } from './styles';

const HamburguerMenu: React.FC = ({ ...rest }) => {
  return (
    <Flex w={['100px', '180px']} justify="flex-end" d={['flex', 'none']}>
      <Image
        size={4}
        src={require('../../public/images/hamburgerMenu.png?webp')}
        cursor="pointer"
        {...rest}
      />
    </Flex>
  )
}

export default HamburguerMenu
