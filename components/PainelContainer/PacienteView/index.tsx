// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import NovoPaciente from './NovoPaciente'
import { useRouter } from 'next/router'
import Custom404 from '../../../pages/Custom404'
import PacienteHome from './PacienteHome'

export interface Paciente {
  id: number
  nome: string
  // eslint-disable-next-line camelcase
  data_de_nascimento: string
  idade: number
  cpf: string
  rg: string
}

const PacienteView: React.FC = () => {
  const router = useRouter()
  const [componentToRender, setComponentToRender] = useState(null)
  const [actions] = useState([
    {
      title: 'novoPaciente',
      component: <NovoPaciente />
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
    if (router.asPath === '/painel?d=pacientes') {
      setComponentToRender(<PacienteHome />)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Pacientes - Clinical Manager</title>
      </Head>
      <>{componentToRender}</>
    </>
  )
}

export default PacienteView
