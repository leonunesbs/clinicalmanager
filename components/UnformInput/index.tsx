// eslint-disable-next-line no-use-before-define
import React, { useEffect, useRef } from 'react'
import { Input, InputProps, Text } from '@chakra-ui/core'
import { useField } from '@unform/core'

interface CustomInputProps extends InputProps {
  isLabeled?: boolean
}

const UnformInput: React.FC<InputProps> = ({ name, isLabeled, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])
  return (
    <>
      <Text color="blue.100">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Text>
      <Input
        ref={inputRef}
        defaultValue={defaultValue}
        borderRadius="sm"
        backgroundColor="blue.100"
        borderColor="blue.400"
        focusBorderColor="blue.700"
        {...rest}
      />
    </>
  )
}

export default UnformInput
