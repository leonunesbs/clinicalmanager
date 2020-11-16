// eslint-disable-next-line no-use-before-define
import React, { useRef } from 'react'
import { Form } from '@unform/web'
import UnformInput from '../../UnformInput'
import { Button } from '@chakra-ui/core'
import { FormHandles, SubmitHandler } from '@unform/core'
import { Paciente } from '.'

const NovoPaciente: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const handleSubmit: SubmitHandler<Paciente> = data => {
    console.log(data)
  }
  return (
    <>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <UnformInput name="nome" isLabeled />
        <Button borderRadius="sm" type="submit">
          Salvar
        </Button>
      </Form>
    </>
  )
}

export default NovoPaciente
