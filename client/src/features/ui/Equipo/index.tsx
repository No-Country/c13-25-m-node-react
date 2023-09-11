import { Box, Button, Flex, Text } from '@chakra-ui/react'

import Imageteamlogo from '@/assets/images/ImageTeamlogo.png'
import { TeamChat, TeamMember, TeamName } from './components'

const Equipo = () => {
  return (
    <Flex h="100%" w="100%">
      <Flex w={'50%'} h={'100%'} direction={'column'}>
        <Box bgColor="#282C37" m={2}>
          <TeamName imageUrl={Imageteamlogo} text="Que Piedritas Team" />
        </Box>
        <Box m={2}>
          <Text>Chat</Text>
        </Box>
        <Box h={'auto'} bgColor="#282C37" m={2} p={5}>
          <TeamChat />
        </Box>
      </Flex>
      <Flex w={'50%'} h={'auto'} direction={'column'}>
        <Flex direction={'row'} m={2} justifyContent={'space-between'}>
          <Text>Integrantes</Text>
          <Button
            bg={'#38D392'}
            color={'black'}
            w={'234px'}
            h={'28px'}
            size={'sm'}
          >
            Buscar Nuevos Miembros
          </Button>
        </Flex>
        <Box bgColor="#282C37">
          <TeamMember />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Equipo
