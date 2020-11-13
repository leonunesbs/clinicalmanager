/* eslint-disable no-use-before-define */
import React, { useRef } from 'react'
import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Text,
  useDisclosure
} from '@chakra-ui/core'
import { MenuItemsProps } from '.'
import MenuItem from './MenuItem'

// import { Container } from './styles';
interface HamburgerMenuProps extends MenuItemsProps {
  rightText?: string
}

const HamburguerMenu: React.FC<HamburgerMenuProps> = ({
  menuItems,
  rightText
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <Flex
        d={['flex', 'none']}
        ref={btnRef}
        onClick={onOpen}
        justify="center"
        align="center"
        cursor="pointer"
      >
        <Image
          size={4}
          src={require('../../public/images/hamburgerMenu.png?webp')}
        />
        {rightText && (
          <Text color="blue.100" ml={2}>
            {rightText}
          </Text>
        )}
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size="xs"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
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

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button color="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default HamburguerMenu
