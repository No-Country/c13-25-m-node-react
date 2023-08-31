import { VStack } from '@chakra-ui/react'
import { FaHome, FaNewspaper, FaComment, FaUsers } from 'react-icons/fa'
import { SidebarLink } from './components'
import './styles.css'

const SimpleSidebar = () => {
  const links = [
    { name: 'Home', icon: FaHome },
    { name: 'Noticias', icon: FaNewspaper },
    { name: 'Equipo', icon: FaUsers },
    { name: 'Chat', icon: FaComment },
  ]

  return (
    <VStack as="nav" p={4} spacing={6} w={'100%'} h="100vh" mt={10}>
      {links.map((link) => (
        <SidebarLink key={link.name} icon={link.icon} label={link.name} />
      ))}
    </VStack>
  )
}

export default SimpleSidebar
