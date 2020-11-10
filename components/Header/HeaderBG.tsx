/* eslint-disable no-use-before-define */
import { Flex, FlexProps } from '@chakra-ui/core'
import React from 'react'

const HeaderBG: React.FC<FlexProps> = ({ children, ...rest }) => {
  return (
    <>
      <Flex
        flexGrow={1}
        background="radial-gradient(114.98% 213.06% at 50% 100%, #021526 0%, #037F8B 100%);"
        h={['120px', '160px']}
        align="center"
        justify="space-between"
        px={[8, 10]}
        {...rest}
      >
        {children}
      </Flex>
      <Flex flexGrow={1} h="2px" backgroundColor="blue.400" />
    </>
  )
}

export default HeaderBG
