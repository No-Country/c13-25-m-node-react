import { Center, Flex, Box } from '@chakra-ui/react'
import { ContactSuggestions } from './components'

import SimpleSidebar from './components/SimpleSidebar'
import { Outlet } from 'react-router-dom'
export const Dashboard = () => {
  return (
    <Flex
      w="100%"
      bgColor="#1E2027"
      justifyContent="space-between"
      overflowX="hidden"
    >
      <Box
        h={'100hv'}
        bgColor={'#282C37'}
        w={150}
        borderRight={'2px solid #E3C488'}
        mb={4}
      >
        <SimpleSidebar />
      </Box>

      <Center p={2} w={1200}>
        {/* <Feed /> */}
        <Outlet />
      </Center>
      <ContactSuggestions />
    </Flex>
  )
}
