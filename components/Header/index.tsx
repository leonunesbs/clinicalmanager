/* eslint-disable no-use-before-define */
import React, { useRef } from 'react'
import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Text,
  useDisclosure,
  Button,
  Box,
  Stack
} from '@chakra-ui/react'
import HeaderBG from './HeaderBG'
import { FiMenu } from 'react-icons/fi'
import MenuItem from './MenuItem'
import { useRouter } from 'next/router'

export interface MenuItemsProps {
  menuItems: {
    title: string
    href: string
  }[]
}
const Header: React.FC = () => {
  const router = useRouter()
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
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLDivElement>(null)
  return (
    <>
      <HeaderBG>
        <Button
          justifySelf="flex-start"
          as="div"
          aria-label="Menu"
          borderRadius="sm"
          backgroundColor="rgb(0,0,0,0.3)"
          w="30px"
          h="30px"
          p="5px"
          color={'blue.100'}
          _hover={{
            color: 'blue.400'
          }}
          _active={{ backgroundColor: '', color: 'blue.400' }}
          textAlign="center"
          onClick={onOpen}
        >
          <Box as={FiMenu} h="100%" w="100%" />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          size="xs"
          finalFocusRef={btnRef}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton borderRadius="sm" />
              <DrawerHeader>Menu</DrawerHeader>

              <Flex flexDirection="column" align="center" flexGrow={1}>
                {menuItems.map(item => (
                  <MenuItem key={item.title} href={item.href} w="80%">
                    <Text fontSize="sm" textAlign="center">
                      {item.title}
                    </Text>
                  </MenuItem>
                ))}
              </Flex>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>

        <Image
          position={['relative', 'absolute']}
          left="0"
          right="0"
          mx={['initial', 'auto']}
          src="/images/logo.svg?include?trace?sprite"
          cursor="pointer"
          alt="logo"
          alignSelf="center"
          w="40px"
          h="40px"
        />

        <Text
          justifySelf="self-end"
          display={['none', 'inline']}
          textAlign="right"
          color="blue.100"
          w={['100px', '180px']}
          fontSize="xs"
          lineHeight={1.2}
          fontWeight="light"
        >
          <b>Dr. Leonardo Nunes</b>
          <br /> Médico
        </Text>
      </HeaderBG>
      <Stack
        isInline
        spacing={2}
        align="center"
        h="55px"
        backgroundColor="blue.100"
        justify={['initial', 'center']}
        overflowY="hidden"
        overflowX={['scroll', 'scroll', 'scroll', 'hidden']}
        p={2}
      >
        {menuItems?.map(item => (
          <Button
            p={2}
            minW="130px"
            key={item.title}
            color="blue.700"
            borderRadius="sm"
            _hover={{ backgroundColor: 'blue.100' }}
            _active={{ backgroundColor: 'blue.400', color: 'blue.100' }}
            onClick={() => router.push(item.href)}
          >
            <Text fontSize="sm" textAlign="center">
              {item.title}
            </Text>
          </Button>
        ))}
      </Stack>
    </>
  )
}

export default Header
