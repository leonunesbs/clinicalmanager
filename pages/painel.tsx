// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/core'
import PainelContainer from '../components/PainelContainer'
import PainelHeader from '../components/PainelHeader'
import PainelMenu from '../components/PainelMenu'
import { useRouter } from 'next/dist/client/router'

const Painel: React.FC = () => {
  const router = useRouter() // instanciando router
  const { d: displayView } = router.query // armazena contexto
  const [viewToRender, setViewToRender] = useState<string | string[]>('loading')

  useEffect(() => {
    setViewToRender(displayView)
    if (router.asPath === '/painel') {
      setViewToRender('home')
    }
  }, [displayView, router.query])

  return (
    <Flex
      display="column"
      h="100vh"
      maxH="100vh"
      overflow="hidden"
      backgroundColor="blue.700"
    >
      <PainelHeader />
      <Flex flexDirection={['column', 'row']} h="90%" overflow="hidden">
        <PainelMenu painelMenuView={viewToRender} />
        <PainelContainer painelContainerView={viewToRender} />
      </Flex>
    </Flex>
  )
}

export default Painel
