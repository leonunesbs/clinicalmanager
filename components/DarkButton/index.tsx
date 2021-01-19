// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Button, ButtonProps, forwardRef } from '@chakra-ui/react'

const DarkButton: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = ({ children, ...rest }, ref) => {
  return (
    <Button
      ref={ref}
      backgroundColor="blue.700"
      borderColor="blue.100"
      borderRadius="sm"
      borderWidth="1px"
      color="blue.100"
      _hover={{ backgroundColor: 'blue.500' }}
      _active={{ backgroundColor: 'blue.400' }}
      w="120px"
      h="30px"
      fontWeight="thin"
      fontSize="xs"
      {...rest}
    >
      {children}
    </Button>
  )
}

export default forwardRef(DarkButton)
