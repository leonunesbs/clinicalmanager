// eslint-disable-next-line no-use-before-define
import React, { useCallback, useRef, useState } from 'react'
import { Form } from '@unform/web'
import UnformInput from '../../UnformInput'
import { Button, Flex, FormControl, Heading, Stack } from '@chakra-ui/core'
import { FormHandles, SubmitHandler } from '@unform/core'
import { Paciente } from '.'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { MdKeyboardArrowLeft, MdCheck, MdSave, MdLink } from 'react-icons/md'
import { api } from '../../../services/api'
import { mutate as mutateGlobal } from 'swr'
import ButtonWithIcon from '../../ButtonWithIcon'
import { cpfMask } from '../../../scripts/masks'

const NovoPaciente: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const backRef = useRef(null)
  const editRef = useRef(null)
  const router = useRouter()

  const [novoPacienteId, setNovoPacienteId] = useState(null)

  const [editing, setEditing] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleFieldsFormat = useCallback(() => {
    const cpf = formRef.current.getFieldValue('cpf')
    if (cpf) {
      formRef.current.setFieldValue('cpf', cpfMask(cpf))
    }

    const nome = formRef.current.getFieldValue('nome')
    if (nome) {
      formRef.current.setFieldValue('nome', nome.toUpperCase())
    }
  }, [formRef.current])

  const handleSubmit: SubmitHandler<Paciente> = useCallback(async formData => {
    formRef.current.setErrors({})
    setSaving(true)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data, ok }: any = await api.post('paciente/', formData)

    if (ok) {
      const { id } = data
      mutateGlobal('pacientes/', formData)
      setNovoPacienteId(id)
      setSaved(true)
      setEditing(false)
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
        <title>Novo paciente - Clinical Manager</title>
      </Head>
      <Flex flexDir="column">
        <Flex justify="space-between" mb={4}>
          <Heading as="h2" size="lg" color="blue.100">
            Novo paciente
          </Heading>
          <Stack isInline display={!saved && 'none'}>
            <ButtonWithIcon
              onClick={() =>
                router.push(`/painel?d=paciente&id=${novoPacienteId}`)
              }
              icon={MdLink}
              ref={editRef}
              isActive={editing}
            />
          </Stack>
        </Flex>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Flex
            borderColor="blue.400"
            borderWidth={3}
            borderRadius="md"
            overflowY="auto"
            display="column"
            p={4}
          >
            <FormControl isRequired>
              <UnformInput
                name="nome"
                onChange={handleFieldsFormat}
                isLabeled
                isDisabled={!editing}
              />
              <UnformInput
                name="cpf"
                onChange={handleFieldsFormat}
                isLabeled
                isDisabled={!editing}
              />
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
              onClick={() => router.push('/painel?d=pacientes')}
            >
              Pacientes
            </Button>
            <Button
              isLoading={saving}
              loadingText="Salvando..."
              isDisabled={!editing}
              borderRadius="sm"
              type="submit"
              color="blue.100"
              w={['50%', '']}
              size="lg"
              backgroundColor="blue.700"
              _hover={{ color: 'blue.700', backgroundColor: 'blue.400' }}
              rightIcon={saved ? MdCheck : MdSave}
            >
              {saved ? 'Salvo' : 'Salvar'}
            </Button>
          </Stack>
        </Form>
      </Flex>
    </>
  )
}

export default NovoPaciente
