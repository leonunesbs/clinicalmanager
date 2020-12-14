// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/core'
import PacientesView from './PacientesView'
import HomeView from './HomeView'
import Custom404 from '../../pages/Custom404'
import PacienteDetailView from './PacientesView/PacienteDetailView'
import ProntuáriosView from './ProntuáriosView'
import CalendárioView from './CalendárioView'

interface PainelContainerProps {
  painelContainerView: string | string[]
}

const PainelContainer: React.FC<PainelContainerProps> = ({
  painelContainerView
}) => {
  const [componentToRender, setComponentToRender] = useState(null)
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
      title: 'calendario',
      component: <CalendárioView key={1} />
    },
    {
      title: 'prontuarios',
      component: <ProntuáriosView key={1} />
    },
    {
      title: 'loading',
      component: <Flex>Carregando...</Flex>
    }
  ])

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
      flexGrow={1}
      h="100%"
      overflow="auto"
      backgroundColor="blue.500"
      py={6}
      px={[2, 4]}
    >
      {componentToRender}
    </Flex>
  )
}

export default PainelContainer
