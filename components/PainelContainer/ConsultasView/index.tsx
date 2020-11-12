// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import NovaConsulta from './NovaConsulta'
import { useRouter } from 'next/router'
import Custom404 from '../../../pages/404'
import ConsultasHome from './ConsultasHome'

const ConsultasView: React.FC = () => {
  const router = useRouter()
  const [componentToRender, setComponentToRender] = useState(null)

  const [actions] = useState([
    {
      title: 'novaConsulta',
      component: <NovaConsulta />
    }
  ])

  const { action: actionQuery } = router.query
  useEffect(() => {
    for (let i = 0; i <= actions.length; i++) {
      if (actions[i]?.title === actionQuery) {
        setComponentToRender(actions[i]?.component)
        break
      }
      if (i === actions.length) {
        setComponentToRender(<Custom404 />)
      }
    }
  }, [actionQuery])

  useEffect(() => {
    if (router.asPath === '/painel?d=consultas') {
      setComponentToRender(<ConsultasHome />)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Consultas - Clinical Manager</title>
      </Head>
      <>{componentToRender}</>
    </>
  )
}

export default ConsultasView
