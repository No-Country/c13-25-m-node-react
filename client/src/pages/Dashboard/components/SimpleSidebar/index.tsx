import { useState } from 'react'
import { VStack } from '@chakra-ui/react'
import {
  FaHome,
  FaNewspaper,
  FaComment,
  FaUsers,
  FaSignOutAlt,
} from 'react-icons/fa'
import { SidebarLink } from './components'
import './styles.css'
import { useAuth } from '@/context'

const SimpleSidebar = () => {
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
    { name: 'Chat', icon: FaComment, to: '/dashboard/chat', SelectButton },
  ]

  return (
    <VStack as="nav" p={4} spacing={4} w={'100%'} h={'100%'} mt={10}>
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

      <SidebarLink
        to={'/'}
        key={'LogOut'}
        icon={FaSignOutAlt}
        label={'LogOut'}
        isSelected={selectedButton === 'LogOut'}
        onClick={logout}
      />
    </VStack>
  )
}

export default SimpleSidebar
