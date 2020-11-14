// eslint-disable-next-line no-use-before-define
import React, { useEffect, useRef, useState } from 'react'
import { Flex } from '@chakra-ui/core'
import PainelContainer from '../components/PainelContainer'
import PainelHeader from '../components/PainelHeader'
import PainelMenu from '../components/PainelMenu'
import { useRouter } from 'next/dist/client/router'
import { disableBodyScroll } from 'body-scroll-lock'

const Painel: React.FC = () => {
  const router = useRouter() // instanciando router
  const { d } = router.query // armazena contexto
  const [query, setQuery] = useState<string | string[]>('loading')

  useEffect(() => {
    setQuery(d)
    if (router.asPath === '/painel') {
      setQuery('home')
    }
  }, [d])

  const mainRef = useRef(null)

  useEffect(() => {
    disableBodyScroll(mainRef.current)
  }, [])

  return (
    <Flex
      display="column"
      h="100vh"
      maxH="100vh"
      overflow="hidden"
      backgroundColor="blue.700"
      ref={mainRef}
    >
      <PainelHeader />
      <Flex flexDirection={['column', 'row']} h="90%" overflow="hidden">
        <PainelMenu painelContainerView={query} />
        <PainelContainer painelContainerView={query} />
      </Flex>
    </Flex>
  )
}

export default Painel
