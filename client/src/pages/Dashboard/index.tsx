import { Center, Flex, Box } from '@chakra-ui/react'
import { ContactSuggestions, Feed } from './components'
export const Dashboard = () => {
  return (
    <Flex w="100%" bgColor="#1E2027" justifyContent="space-between">
      <Box width={290} h="100vh" bgColor={'#282C37'}></Box>
      <Center p={7}>
        <Feed />
      </Center>
      <ContactSuggestions />
    </Flex>
  )
}
