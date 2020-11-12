// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/core'
import PainelContainer from '../../components/PainelContainer'
import PainelHeader from '../../components/PainelHeader'
import PainelSideMenu from '../../components/PainelSideMenu'
import { useRouter } from 'next/dist/client/router'

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

  return (
    <Flex
      display="column"
      flexGrow={1}
      h="100%"
      minH="100vh"
      backgroundColor="blue.700"
    >
      <PainelHeader />
      <Flex>
        <PainelSideMenu painelContainerView={query} />
        <PainelContainer painelContainerView={query} />
      </Flex>
    </Flex>
  )
}

export default Painel
