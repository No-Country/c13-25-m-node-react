import { Flex, Box, Stack } from '@chakra-ui/react'
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
        h="100vh"
        bgColor={'#282C37'}
        w={250}
        borderRight={'2px solid #E3C488'}
      >
        <SimpleSidebar />
      </Box>

      <Stack w={1200}>
        {/* <Feed /> */}
        <Outlet />
      </Stack>
      <ContactSuggestions />
    </Flex>
  )
}
