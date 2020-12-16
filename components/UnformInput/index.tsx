// eslint-disable-next-line no-use-before-define
import React, { useEffect, useRef } from 'react'
import {
  Input,
  InputProps,
  FormControl,
  FormLabel,
  FormHelperText
} from '@chakra-ui/react'
import { useField } from '@unform/core'

interface CustomInputProps extends InputProps {
  isLabeled?: boolean
  label?: string
}

const UnformInput: React.FC<CustomInputProps> = ({
  name,
  isLabeled,
  label,
  ...rest
}) => {
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
    <FormControl mb={2}>
      {isLabeled && (
        <FormLabel htmlFor={fieldName} color="blue.100">
          {(label && `${label}:`) ||
            `${name.charAt(0).toUpperCase() + name.slice(1)}:`}
        </FormLabel>
      )}

      <Input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        borderRadius="sm"
        backgroundColor="blue.100"
        borderColor="blue.400"
        focusBorderColor="blue.700"
        isInvalid={error && true}
        {...rest}
      />

      {error && (
        <FormHelperText color="blue.700" id={`${fieldName + '-helper-text'}`}>
          {error}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default UnformInput
