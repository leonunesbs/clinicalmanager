// eslint-disable-next-line no-use-before-define
import React, { useCallback, useEffect, useState } from 'react'
import { Box, Button, Flex, Skeleton } from '@chakra-ui/react'

const teste: React.FC = () => {
  const [script, setScript] = useState(null)
  const [data, setData] = useState(null)
  const [modulePrescrição, setModulePrescrição] = useState(null)
  const [loading, setLoading] = useState(false)

  function initMemed() {
    setLoading(true)
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('data-color', '#fff')
    script.setAttribute('data-container', 'memed-container')
    script.setAttribute(
      'data-token',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.WzMyNjMzLCIzNTI2ZmQwMTVkZTQwZWY0YzIzZjIwNDAwMWYzNjQxNiIsIjIwMjAtMTItMTQiLCJzaW5hcHNlLnByZXNjcmljYW8iLCJwYXJ0bmVyLjMuMjgwMzUiXQ.XRAqFjK5oC9L1I1v_vy8n15OO1M36Jr3xzY2g6Hu8eI'
    )
    script.src =
      'https://sandbox.memed.com.br/modulos/plataforma.sinapse-prescricao/build/sinapse-prescricao.min.js'
    script.onload = function (data) {
      setData(data)
      data.path[3].defaultView.MdSinapsePrescricao.event.add(
        'core:moduleInit',
        function moduleInitHandler(module) {
          if (module.name === 'plataforma.prescricao') {
            data.path[3].defaultView.MdHub.command
              .send('plataforma.prescricao', 'setPaciente', {
                nome: 'José da Silva',
                telefone: '11999999999',
                idExterno: 12
              })
              .then(function () {
                data.path[3].defaultView.MdHub.module.show(
                  'plataforma.prescricao'
                )
                setLoading(false)
              })
          }
        }
      )
      // Obs: Essa função precisa ser implementada, seguindo o artigo de comandos para definição de paciente (Link abaixo).
    }
    document.body.appendChild(script)
  }

  // chamar a função "initMemed()" no momento desejado
  // para injetar o script Memed dinamicamente
  useEffect(() => {
    setScript(document.createElement('script'))
  }, [])
  useEffect(() => {
    if (script) {
      initMemed()
    }
  }, [script])

  return (
    <>
      <Flex justify="center">
        <Skeleton isLoaded={!loading} h="300px">
          <Flex w="820px" d="column" id="memed-container" />
        </Skeleton>
      </Flex>
    </>
  )
}

export default teste
