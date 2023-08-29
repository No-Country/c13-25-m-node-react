import { Box, List, Text } from '@chakra-ui/react'

import {
  LiaNewspaperSolid,
  LiaHouseDamageSolid,
  LiaRocketchat,
  LiaUsersSolid,
} from 'react-icons/lia'

import { FeedComponent } from './components/FeedComponent/index.tsx'
import { SideButton } from './components/SideButton/index.tsx'

export const Dashboard = () => {
  return (
    <Box p={4} height="100vh" bg={'#1E1E1E'}>
      <List spacing={1}>
        <SideButton icon={LiaHouseDamageSolid} name="Home" />
        <SideButton icon={LiaNewspaperSolid} name="Noticias" />
        <SideButton icon={LiaUsersSolid} name="Mi equipo" />
        <SideButton icon={LiaRocketchat} name="Chat" />
      </List>

      <FeedComponent />

      <Box bg="#282C37" p={4}>
        <Text>Componente recomendados</Text>
      </Box>
    </Box>
  )
}
