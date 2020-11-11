// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react'
import { Flex } from '@chakra-ui/core'
import PainelContainer from '../../components/PainelContainer'
import PainelHeader from '../../components/PainelHeader'
import PainelSideMenu from '../../components/PainelSideMenu'
import { useRouter } from 'next/dist/client/router'

const Painel: React.FC = () => {
  const router = useRouter()
  const { d } = router.query

  useEffect(() => {
    router.replace('/painel?d=inicio')
  }, [])

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
        <PainelSideMenu painelContainerView={d} />
        <PainelContainer painelContainerView={d} />
      </Flex>
    </Flex>
  )
}

export default Painel
