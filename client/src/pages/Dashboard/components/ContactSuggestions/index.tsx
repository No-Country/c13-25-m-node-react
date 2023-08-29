import { Avatar, Flex, VStack, Box, Button, Text } from '@chakra-ui/react'

export const ContactSuggestions = () => {
  const dataMock = [
    {
      name: 'RMVic',
      range: 'Oro III',
      image:
        'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/profileicon/5692.png',
    },
    {
      name: 'M3rlin',
      range: 'Oro III',
      image:
        'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/5881.jpg',
    },
    {
      name: 'PabloLuz',
      range: 'Oro III',
      image:
        'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/5898.jpg',
    },
  ]

  return (
    <VStack
      mx={10}
      my={50}
      w={300}
      h={405}
      borderRadius={8}
      bgColor={'#282c37'}
      px={8}
      py={5}
      spacing={5}
    >
      {dataMock?.map((user, index) => {
        return (
          <Flex key={index} align="center" gap={2.5}>
            <Box>
              <Avatar size="xl" src={user.image} name={user.name} />
            </Box>
            <VStack align="left">
              <Text fontWeight="extrabold" color="#606060" fontSize={17}>
                {user.name}
              </Text>
              <Text color="#606060">{user.range}</Text>
              <Button
                border={2}
                borderStyle={'solid'}
                borderColor={'#319795'}
                variant="outline"
              >
                Conectar
              </Button>
            </VStack>
          </Flex>
        )
      })}
    </VStack>
  )
}
