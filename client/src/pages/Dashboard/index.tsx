import { Center, Flex, Box } from '@chakra-ui/react'
import { ContactSuggestions, Feed } from './components'

import SimpleSidebar from './components/SimpleSidebar'
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
        w={350}
        borderRight={'2px solid #E3C488'}
      >
        <SimpleSidebar />
      </Box>

      <Center p={7} w={1200}>
        <Feed />
      </Center>
      <ContactSuggestions />
    </Flex>
  )
}
