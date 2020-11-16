// eslint-disable-next-line no-use-before-define
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useFetch } from '../../../hooks/useFetch'
import { Paciente } from '.'
import { Button, Flex, FormControl, Heading, Stack } from '@chakra-ui/core'
import { SubmitHandler, FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import UnformInput from '../../UnformInput'
import { mutate as mutateGlobal } from 'swr'
import { api } from '../../../services/api'
import { MdCheck, MdEdit, MdKeyboardArrowLeft } from 'react-icons/md'
import ButtonWithIcon from '../../ButtonWithIcon'
import Head from 'next/head'

const PacienteDetailView: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const backRef = useRef(null)
  const editRef = useRef(null)
  const router = useRouter()
  const { id } = router.query
  if (!id) {
    router.push('/painel?d=pacientes')
  }
  const { data, mutate } = useFetch<Paciente>(id ? `paciente/${id}/` : '')

  const pacientes = useFetch<Paciente[]>('pacientes/')

  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    editRef.current.focus()
  }, [])

  const handleEdit = useCallback(() => {
    setEditing(!editing)
    setTimeout(() => formRef.current.getFieldRef('nome').focus(), 50)
  }, [editing])

  const handleSubmit: SubmitHandler<Paciente> = useCallback(async formData => {
    setSaving(true)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data, ok }: any = await api.put(`paciente/${id}/`, formData)

    if (ok) {
      mutate(formData)
      mutateGlobal(`paciente/${id}/`, formData)
      mutateGlobal('pacientes/', pacientes.data)
      setEditing(false)
      backRef.current.focus()
    } else {
      for (const field in data) {
        formRef.current.setFieldError(field, data[field])
      }
    }
    setTimeout(() => setSaving(false), 100)
  }, [])
  return (
    <>
      <Head>
        <title>{data?.nome} - Ficha de identificação</title>
      </Head>
      <Flex flexDir="column">
        <Flex justify="space-between" mb={4}>
          <Heading as="h4" size="lg" color="blue.100">
            Ficha de identificação
          </Heading>
          <ButtonWithIcon
            onClick={handleEdit}
            icon={MdEdit}
            activeColor="blue.700"
            ref={editRef}
            isActive={editing}
          />
        </Flex>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={data}>
          <Flex
            borderColor="blue.400"
            borderWidth={3}
            borderRadius="md"
            overflowY="auto"
            display="column"
            p={4}
          >
            <FormControl isRequired>
              <UnformInput name="nome" isLabeled isDisabled={!editing} />
              <UnformInput name="cpf" isLabeled isDisabled={!editing} />
              <UnformInput name="rg" isLabeled isDisabled={!editing} />
              <UnformInput
                name="data_de_nascimento"
                type="date"
                isLabeled
                label="Data de nascimento"
                isDisabled={!editing}
              />
            </FormControl>
          </Flex>
          <Stack isInline mt={12}>
            <Button
              ref={backRef}
              borderRadius="sm"
              color="blue.700"
              w={['50%', '']}
              size="lg"
              leftIcon={MdKeyboardArrowLeft}
              backgroundColor="blue.100"
              _hover={{ color: 'blue.700', backgroundColor: 'blue.400' }}
              onClick={() => router.back()}
            >
              Voltar
            </Button>
            <Button
              isLoading={saving}
              isDisabled={!editing}
              borderRadius="sm"
              type="submit"
              color="blue.100"
              w={['50%', '']}
              size="lg"
              backgroundColor="blue.700"
              _hover={{ color: 'blue.700', backgroundColor: 'blue.400' }}
              rightIcon={MdCheck}
            >
              Salvar
            </Button>
          </Stack>
        </Form>
      </Flex>
    </>
  )
}

export default PacienteDetailView
