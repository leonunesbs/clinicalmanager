/* eslint-disable no-use-before-define */
import { ButtonProps, Button } from '@chakra-ui/react'
import React from 'react'

interface CustomButtonProps extends ButtonProps {
  isBlock?: boolean
}

// import { Container } from './styles';
const CTAButotn: React.FC<CustomButtonProps> = ({
  children,
  isBlock,
  ...rest
}) => {
  return (
    <Button
      h="40px"
      backgroundColor="blue.700"
      borderRadius="sm"
      color="blue.100"
      w={isBlock ? '100%' : '300px'}
      minW="150px"
      _active={{
        backgroundColor: 'blue.700',
        color: 'blue.100'
      }}
      _hover={{ backgroundColor: 'blue.100', color: 'blue.700' }}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default CTAButotn
