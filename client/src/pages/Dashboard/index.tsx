import { Flex, Box } from '@chakra-ui/react'
import { ContactSuggestions } from './components'

import SimpleSidebar from './components/SimpleSidebar'
import { Outlet } from 'react-router-dom'
export const Dashboard = () => {
  return (
    <Flex
      h={'100%'}
      bgColor="#1E2027"
      justifyContent="space-between"
      overflowX="hidden"
    >
      <Box w={150} bgColor={'#282C37'} borderRight={'2px solid #E3C488'}>
        <SimpleSidebar />
      </Box>

      <Box px={8} pt={12} w={1200}>
        <Outlet />
      </Box>
      <ContactSuggestions />
    </Flex>
  )
}
