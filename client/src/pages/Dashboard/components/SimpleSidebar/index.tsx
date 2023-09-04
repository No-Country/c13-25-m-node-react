import { useState } from 'react'
import { VStack } from '@chakra-ui/react'
import { FaHome, FaNewspaper, FaComment, FaUsers } from 'react-icons/fa'
import { SidebarLink } from './components'
import './styles.css'

const SimpleSidebar = () => {
  const links = [
    { name: 'Home', icon: FaHome, to: '/dashboard' },
    { name: 'Noticias', icon: FaNewspaper, to: '/profile' },
    { name: 'Equipo', icon: FaUsers, to: '/equipo' },
    { name: 'Chat', icon: FaComment, to: '/chat' },
  ]

  const [selectedButton, setSelectedButton] = useState('Home')

  return (
    <VStack as="nav" p={4} spacing={6} w={'100%'} h="100vh" mt={10}>
      {links.map((link) => (
        <SidebarLink
          to={link.to}
          key={link.name}
          icon={link.icon}
          label={link.name}
          isSelected={selectedButton === link.name}
          onClick={() => setSelectedButton(link.name)}
        />
      ))}
    </VStack>
  )
}

export default SimpleSidebar
