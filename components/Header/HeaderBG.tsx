/* eslint-disable no-use-before-define */
import React from 'react'
import { Flex, FlexProps } from '@chakra-ui/core'

interface CustomProps extends FlexProps {
  href?: string
}

const HeaderBG: React.FC<CustomProps> = ({ children, ...rest }) => {
  return (
    <>
      <Flex
        // background="radial-gradient(114.98% 213.06% at 50% 100%, #021526 0%, #037F8B 100%);"
        backgroundColor="blue.700"
        h="7%"
        align="center"
        justify="space-between"
        px={['8%', '5%']}
        {...rest}
      >
        {children}
      </Flex>
      <Flex h="2px" backgroundColor="blue.400" />
    </>
  )
}

export default HeaderBG
