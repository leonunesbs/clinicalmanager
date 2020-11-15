// eslint-disable-next-line no-use-before-define
import React, { useCallback } from 'react'
import { Form } from '@unform/web'
import UnformInput from '../../UnformInput'

const NovoPaciente: React.FC = () => {
  const handleSubmit = useCallback(data => {
    console.log(data)
  }, [])
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <UnformInput name="nome" />
      </Form>
    </>
  )
}

export default NovoPaciente
