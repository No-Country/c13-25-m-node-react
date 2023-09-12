import { useRef, useState } from 'react'
import {
  Button,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import { FaHome, FaNewspaper, FaSignOutAlt, FaUsers } from 'react-icons/fa'
import { IoMdPerson } from 'react-icons/io'
import { Link as RouterLink } from 'react-router-dom'
import { SidebarLink } from './components'
import './styles.css'
import { useAuth } from '@/context'

const SimpleSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = useRef(null)
  const { logout } = useAuth()
  const [selectedButton, setSelectedButton] = useState('Home')

  const SelectButton = (name: string): void => {
    setSelectedButton(name)
  }
  const links = [
    { name: 'Home', icon: FaHome, to: '/dashboard', SelectButton },
    {
      name: 'Noticias',
      icon: FaNewspaper,
      to: '/dashboard/noticias',
      SelectButton,
    },
    { name: 'Equipo', icon: FaUsers, to: '/dashboard/equipo', SelectButton },
    {
      name: 'Profile',
      icon: IoMdPerson,
      to: '/dashboard/profile',
      SelectButton,
    },
  ]

  return (
    <Flex
      as="nav"
      w={'100%'}
      h={'100%'}
      mt={2}
      justifyContent={'space-evenly'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Flex flexDirection={'column'} gap={10}>
        {links.map((link) => (
          <SidebarLink
            to={link.to}
            key={link.name}
            icon={link.icon}
            label={link.name}
            isSelected={selectedButton === link.name}
            onClick={() => SelectButton(link.name)}
          />
        ))}
      </Flex>
      <Divider />
      <Flex>
        <SidebarLink
          key={'LogOut'}
          icon={FaSignOutAlt}
          label={'LogOut'}
          isSelected={selectedButton === 'Logout'}
          onClick={onOpen}
        />
      </Flex>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Desconectarse</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>¿Deseas Salir?</p>
          </ModalBody>

          <ModalFooter>
            <Button
              as={RouterLink}
              to={'/'}
              colorScheme="blue"
              mr={3}
              onClick={logout}
            >
              Salir
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  )
}

export default SimpleSidebar
