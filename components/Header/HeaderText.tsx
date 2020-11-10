/* eslint-disable no-use-before-define */
import React from 'react'
import { Text } from '@chakra-ui/core'

// import { Container } from './styles';

const HeaderText: React.FC = ({ children, ...rest }) => {
  return (
    <Text
      color="blue.100"
      w={['100px', '180px']}
      fontSize={[8, 'sm']}
      {...rest}
    >
      {children}
    </Text>
  )
}

export default HeaderText
