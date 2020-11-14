// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/core'
import PacientesView from './PacientesView'
import ConsultasView from './ConsultasView'
import HomeView from './HomeView'
import Custom404 from '../../pages/Custom404'
import PacienteDetailView from './PacientesView/PacienteDetailView'

export interface PainelContainerProps {
  painelContainerView: string | string[]
}

const PainelContainer: React.FC<PainelContainerProps> = ({
  painelContainerView
}) => {
  const [containerViews] = useState([
    {
      title: 'home',
      component: <HomeView key={1} />
    },
    {
      title: 'pacientes',
      component: <PacientesView key={1} />
    },
    {
      title: 'paciente',
      component: <PacienteDetailView key={1} />
    },
    {
      title: 'consultas',
      component: <ConsultasView key={1} />
    },
    {
      title: 'loading',
      component: <Flex>Carregando...</Flex>
    }
  ])

  const [componentToRender, setComponentToRender] = useState(null)

  useEffect(() => {
    for (let i = 0; i <= containerViews.length; i++) {
      if (containerViews[i]?.title === painelContainerView) {
        setComponentToRender(containerViews[i]?.component)
        break
      }
      if (i === containerViews.length) {
        setComponentToRender(<Custom404 />)
      }
    }
  }, [painelContainerView])

  return (
    <Flex
      display="column"
      minH="100vh"
      overflow="scroll"
      w="100%"
      backgroundColor="blue.500"
      padding={6}
    >
      {componentToRender}
    </Flex>
  )
}

export default PainelContainer
