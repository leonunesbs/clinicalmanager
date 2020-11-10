/* eslint-disable no-use-before-define */
import { ButtonProps, PseudoBox } from '@chakra-ui/core'
import React from 'react'

interface CustomButtonProps extends ButtonProps {
  isBlock?: boolean
}

// import { Container } from './styles';
const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  isBlock,
  ...rest
}) => {
  return (
    <PseudoBox
      as="button"
      h="40px"
      backgroundColor="blue.400"
      borderRadius="sm"
      color="blue.100"
      fontWeight="thin"
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
    </PseudoBox>
  )
}

export default CustomButton
