/* eslint-disable no-use-before-define */
import React from 'react'
import Link from 'next/link'
import { Image, Link as ChakraLink } from '@chakra-ui/core'
import HamburgerMenu from './HamburgerMenu'
import HeaderBG from './HeaderBG'
import HeaderText from './HeaderText'
import HomeMenu from './HomeMenu'

export interface MenuItemsProps {
  menuItems: {
    title: string
    href: string
  }[]
}
const Header: React.FC = () => {
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
  return (
    <>
      <HeaderBG>
        <HamburgerMenu menuItems={menuItems} />
        <Link href="/" passHref>
          <ChakraLink>
            <Image
              src={require('../../public/images/logo.svg')}
              cursor="pointer"
              alt="logo"
              alignSelf="center"
              size={[60, 80]}
            />
          </ChakraLink>
        </Link>
        <HeaderText textAlign="right" display={['none', 'inline']}>
          Dr. Leonardo Nunes
          <br /> Médico <br />
          CRM-PI 0000
        </HeaderText>
      </HeaderBG>
      <HomeMenu menuItems={menuItems} />
    </>
  )
}

export default Header
