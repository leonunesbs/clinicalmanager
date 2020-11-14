/* eslint-disable no-use-before-define */
import React, { forwardRef } from 'react'
import { Button, Flex, Text } from '@chakra-ui/core'

interface CustomButtomProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
  rightText?: string
  onClick: () => unknown
}

const ButtonWithIcon: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  CustomButtomProps
> = ({ icon, rightText, ...rest }, ref) => {
  return (
    <Button
      ref={ref}
      borderColor="blue.400"
      borderWidth="2px"
      borderRadius="sm"
      backgroundColor=""
      color="blue.100"
      _hover={{ backgroundColor: 'blue.400' }}
      _active={{ backgroundColor: 'blue.700' }}
      w={rightText ? '90px' : '35px'}
      textAlign="center"
      h="35px"
      p={1}
      {...rest}
    >
      <Flex as={icon} size="xs" />
      {rightText && (
        <Text fontWeight="light" ml={1}>
          {rightText}
        </Text>
      )}
    </Button>
  )
}

export default forwardRef(ButtonWithIcon)
