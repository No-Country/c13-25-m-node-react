import { Center, Flex, Box, List } from '@chakra-ui/react'
import { ContactSuggestions, Feed } from './components'
import {
  LiaNewspaperSolid,
  LiaHouseDamageSolid,
  LiaRocketchat,
  LiaUsersSolid,
} from 'react-icons/lia'

import { SideButton } from './components/SideButton/index.tsx'

export const Dashboard = () => {
  return (
    <Flex
      w="100%"
      bgColor="#1E2027"
      justifyContent="space-between"
      overflowX="hidden"
    >
      <Box h="100vh" bgColor={'#282C37'} w={350}>
        <List spacing={1}>
          <SideButton icon={LiaHouseDamageSolid} name="Home" />
          <SideButton icon={LiaNewspaperSolid} name="Noticias" />
          <SideButton icon={LiaUsersSolid} name="Mi equipo" />
          <SideButton icon={LiaRocketchat} name="Chat" />{' '}
        </List>
      </Box>

      <Center p={7} w={1200}>
        <Feed />
      </Center>
      <ContactSuggestions />
    </Flex>
  )
}
