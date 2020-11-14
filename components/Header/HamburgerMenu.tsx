/* eslint-disable no-use-before-define */
import React, { useRef } from 'react'
import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure
} from '@chakra-ui/core'
import { MenuItemsProps } from '.'
import MenuItem from './MenuItem'
import ButtonWithIcon from '../ButtonWithIcon'
import { FiMenu } from 'react-icons/fi'

// import { Container } from './styles';
interface HamburgerMenuProps extends MenuItemsProps {
  rightText?: string
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  menuItems,
  rightText
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <ButtonWithIcon
        icon={FiMenu}
        rightText={rightText && rightText}
        onClick={onOpen}
      />
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
    </>
  )
}

export default HamburgerMenu
