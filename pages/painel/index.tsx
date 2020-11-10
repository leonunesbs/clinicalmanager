// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Flex } from '@chakra-ui/core'
import PainelContainer from '../../components/PainelContainer'
import PainelHeader from '../../components/PainelHeader'
import PainelSideMenu from '../../components/PainelSideMenu'

const Painel: React.FC = () => {
  return (
    <Flex display="column" flexGrow={1} backgroundColor="blue.700">
      <PainelHeader />
      <Flex>
        <PainelSideMenu />
        <PainelContainer />
      </Flex>
    </Flex>
  )
}

export default Painel
