/* eslint-disable no-use-before-define */
import React from 'react'
import Link, { LinkProps } from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/core'

// import { Container } from './styles';

const MenuItem: React.FC<LinkProps> = ({ children, href }) => {
  return (
    <Link href={href}>
      <ChakraLink
        mx={4}
        my={2}
        w="140px"
        color="blue.500"
        style={{ textDecoration: 'none' }}
        p={2}
        borderWidth={2}
        borderColor="blue.100"
        borderRadius="sm"
        _hover={{ backgroundColor: 'blue.100' }}
        _active={{ backgroundColor: 'blue.400', color: 'blue.100' }}
      >
        {children}
      </ChakraLink>
    </Link>
  )
}

export default MenuItem
