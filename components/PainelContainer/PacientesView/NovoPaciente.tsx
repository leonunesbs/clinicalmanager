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
import { mutate } from 'swr'
import { api } from '../../../services/api'
import ButtonWithIcon from '../../ButtonWithIcon'

const NovoPaciente: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const backRef = useRef(null)
  const editRef = useRef(null)
  const deleteRef = useRef(null)
  const cancelRef = useRef(null)
  const router = useRouter()

  const [novoPacienteId, setNovoPacienteId] = useState(null)

  const [editing, setEditing] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleSubmit: SubmitHandler<Paciente> = useCallback(async formData => {
    formRef.current.setErrors({})
    setSaving(true)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data, ok }: any = await api.post('paciente/', formData)

    if (ok) {
      const { id } = data
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
          <Heading as="h4" size="lg" color="blue.100">
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
