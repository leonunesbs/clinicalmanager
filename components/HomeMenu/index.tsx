/* eslint-disable no-use-before-define */
import React from 'react'
import MenuContainer from './MenuContainer'

// import { Container } from './styles';

const HomeMenu: React.FC = () => {
  const menuItems = [
    {
      title: 'Agendamento',
      href: '/agendamento'
    },
    {
      title: 'Painel',
      href: '/painel'
    },
    {
      title: 'Procedimentos',
      href: '/procedimentos'
    },
    {
      title: 'Profissionais',
      href: '/profissionais'
    },
    {
      title: 'Especialidades',
      href: '/especialidades'
    }
  ]
  return <MenuContainer menuItems={menuItems} />
}

export default HomeMenu
