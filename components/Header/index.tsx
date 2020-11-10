/* eslint-disable no-use-before-define */
import React from 'react'
import Link from 'next/link'
import { Image, Link as ChakraLink } from '@chakra-ui/core'
import HamburguerMenu from './HamburgerMenu'
import HeaderBG from './HeaderBG'
import HeaderText from './HeaderText'

const Header: React.FC = () => {
  return (
    <HeaderBG>
      <HeaderText>
        Dr. Leonardo Nunes
        <br /> Médico <br />
        CRM-PI 0000
      </HeaderText>
      <Link href="/" passHref>
        <ChakraLink>
          <Image
            src={'/images/logo.svg'}
            cursor="pointer"
            alt="logo"
            size={[60, 120]}
            mx={4}
          />
        </ChakraLink>
      </Link>
      <HeaderText textAlign="right" display={['none', 'inline']}>
        Rua Aristides Saraiva de Almeida, 960, 407C Teresina-PI
      </HeaderText>
      <HamburguerMenu />
    </HeaderBG>
  )
}

export default Header
