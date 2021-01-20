/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable indent */
/* eslint-disable multiline-ternary */
// eslint-disable-next-line no-use-before-define
import React, { forwardRef, useCallback, useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  ModalFooter,
  Flex,
  Button,
  UseDisclosureProps
} from '@chakra-ui/react'
import { Form } from '@unform/web'
import UnformInput from '../../../UnformInput'
import { FormHandles, SubmitHandler } from '@unform/core'
import { mutate as mutateGlobal } from 'swr'
import api from '../../../../services/api'

interface ModalAgendaProps {
  disclosure: UseDisclosureProps
  e: any
  setE: React.Dispatch<any>
  agendas: any
}

const ModalAgenda: React.ForwardRefRenderFunction<
  FormHandles,
  ModalAgendaProps
> = ({ disclosure, e, setE, agendas }, formRef) => {
  const { isOpen, onClose } = disclosure
  const [loading, setLoading] = useState(false)
  const handleDesmarcar = useCallback(async () => {
    const response = await api.delete(`desmarcar-agenda/${e.id}/`)
    if (response.ok) {
      mutateGlobal('listar-agendas/', response.data)
    }
    onClose()
    setE('')
  }, [e])

  const handleRemoverAgenda = useCallback(async () => {
    const response = await api.delete(`remover-agenda/${e.id}/`)
    if (response.ok) {
      mutateGlobal('listar-agendas/', response.data)
    }
    onClose()
    setE('')
  }, [e])

  const handleAgendamento: SubmitHandler<FormData> = useCallback(
    async (data: any) => {
      setLoading(true)
      if (e.is_disponível) {
        if (data.prontuárioId) {
          const response = await api.post('agendar-prontuario/', {
            prontuário: data.prontuárioId,
            agenda: e.id
          })
          if (response.ok) {
            mutateGlobal('listar-agendas/', [...agendas, response.data])
          }
        }
      } else {
        if (data.prontuárioId) {
          const response = await api.patch(`alterar-agenda/${e.id}/`, {
            prontuário: data.prontuárioId
          })
          if (response.ok) {
            mutateGlobal('listar-agendas/', [...agendas, response.data])
          }
        }
      }
      setE('')
      onClose()
      setLoading(false)
    },
    [formRef, e]
  )

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <Form ref={formRef} onSubmit={handleAgendamento}>
        <ModalContent backgroundColor="blue.400">
          <ModalHeader color="blue.700">
            {e
              ? e.is_disponível
                ? 'Agendar prontuário'
                : 'Alterar agenda'
              : 'Agendar prontuário'}
          </ModalHeader>
          <ModalCloseButton borderRadius="sm" color="blue.100" />
          <ModalBody pb={6}>
            <FormControl>
              <UnformInput name="agendaId" hidden />
              <UnformInput
                name="prontuárioId"
                autoFocus
                autoComplete="off"
                isLabeled
                label="Prontuário"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Flex flexGrow={1}>
              {e && e.is_disponível ? (
                <Button
                  variantColor="red"
                  onClick={handleRemoverAgenda}
                  borderRadius="sm"
                  mr={3}
                >
                  Remover agenda
                </Button>
              ) : (
                <Button
                  variantColor="red"
                  onClick={handleDesmarcar}
                  borderRadius="sm"
                  mr={3}
                >
                  Desmarcar
                </Button>
              )}
            </Flex>
            <Button
              variantColor="blue"
              borderRadius="sm"
              type="submit"
              isLoading={loading}
              mr={3}
            >
              Agendar
            </Button>
            <Button borderRadius="sm" onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Form>
    </Modal>
  )
}

export default forwardRef(ModalAgenda)
