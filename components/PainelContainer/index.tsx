// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/core'
import PacienteView from './PacienteView'
import ConsultasView from './ConsultasView'
import Custom404 from '../../pages/404'
import InícioView from './InícioView'

export interface PainelContainerProps {
  painelContainerView: string | string[]
}

const PainelContainer: React.FC<PainelContainerProps> = ({
  painelContainerView
}) => {
  const [containerViews] = useState([
    {
      title: 'inicio',
      component: <InícioView key={1} />
    },
    {
      title: 'pacientes',
      component: <PacienteView key={1} />
    },
    {
      title: 'consultas',
      component: <ConsultasView key={1} />
    }
  ])

  const [componentToRender, setComponentToRender] = useState(null)

  useEffect(() => {
    for (let i = 0; i < containerViews.length; i++) {
      console.log(containerViews[i])
      if (containerViews[i].title === painelContainerView) {
        setComponentToRender(containerViews[i].component)
        break
      }
      setComponentToRender(<Custom404 />)
    }
  }, [painelContainerView])

  return (
    <Flex
      display="column"
      h="100%"
      minH="100vh"
      w="100%"
      backgroundColor="blue.500"
      padding={6}
    >
      {componentToRender}
    </Flex>
  )
}

export default PainelContainer
