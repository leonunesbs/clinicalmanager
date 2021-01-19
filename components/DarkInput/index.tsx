// eslint-disable-next-line no-use-before-define
import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { Input, InputProps } from '@chakra-ui/react'

interface Props {
  name: string
  label?: string
}

type CustomInputProps = JSX.IntrinsicElements['input'] & Props & InputProps

const DarkInput: React.FC<CustomInputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current
    })
  }, [fieldName, registerField])

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <Input
        id={fieldName}
        name={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        backgroundColor="blue.700"
        shadow="lg"
        h="35px"
        border=""
        borderRadius="sm"
        color="blue.100"
        _placeholder={{
          textColor: 'rgb(228, 242, 241, 0.33)',
          fontWeight: 'thin',
          fontSize: 'sm'
        }}
        {...rest}
      />

      {error && <span>{error}</span>}
    </>
  )
}

export default DarkInput
