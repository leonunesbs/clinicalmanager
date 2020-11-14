/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-use-before-define */
import React from 'react'
import { Text } from '@chakra-ui/core'

// import { Container } from './styles';

interface CustomProps {
  display?: any
  textAlign?: any
}

const HeaderText: React.FC<CustomProps> = ({
  children,
  display,
  textAlign,
  ...rest
}) => {
  return (
    <Text
      color="blue.100"
      w={['100px', '180px']}
      fontSize={[8, 'sm']}
      display={display}
      textAlign={textAlign}
      {...rest}
    >
      {children}
    </Text>
  )
}

export default HeaderText
