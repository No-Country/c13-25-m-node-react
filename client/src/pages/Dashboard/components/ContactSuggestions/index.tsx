import {
  Avatar,
  Flex,
  Box,
  Button,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverBody,
  Image,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react'

import contactSggestionProfile from '@/assets/connectProfileOne.png'
import contactrange from '@/assets/rangeLogo.svg'
import iconRoll from '@/assets/roles/0.png'
import { DividerStats } from '@/components'

export const ContactSuggestions = () => {
  const dataMock = [
    {
      name: 'RMVic',
      range: 'Oro III',
      image:
        'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/profileicon/5692.png',
    },
    {
      name: 'PabloLuz',
      range: 'Oro III',
      image:
        'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/5898.jpg',
    },
    {
      name: 'PabloLuz',
      range: 'Oro III',
      image:
        'https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.16.1/CHAMPION_SKIN/1001/ICON',
    },
    {
      name: 'PabloLuz',
      range: 'Oro III',
      image:
        'https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.16.1/CHAMPION/17/ICON',
    },
    {
      name: 'PabloLuz',
      range: 'Oro III',
      image:
        'https://i.pinimg.com/736x/a9/8a/c0/a98ac0f09b1d20a1554b397b9755fdda.jpg',
    },
    {
      name: 'PabloLuz',
      range: 'Oro III',
      image:
        'https://cdn.donmai.us/original/4c/4f/4c4fb51e9b8cdcabbe3792a3edf3a405.jpg',
    },
    {
      name: 'M3rlin',
      range: 'Oro III',
      image:
        'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/5881.jpg',
    },
  ]

  return (
    <VStack
      mx={10}
      mt={50}
      w={350}
      h="auto"
      borderRadius={8}
      bgColor={'#282c37'}
      px={8}
      py={5}
      spacing={5}
    >
      {dataMock?.map((user, index) => {
        return (
          <>
            <Flex key={index} align="center" gap={2.5}>
              <Box>
                <Avatar size="xl" src={user.image} name={user.name} />
              </Box>
              <VStack align="left">
                <Text fontWeight="extrabold" color="#606060" fontSize={17}>
                  {user.name}
                </Text>
                <Text color="#606060">{user.range}</Text>
                <Flex gap={3}>
                  <Popover closeOnBlur>
                    <PopoverTrigger>
                      <Button
                        size="sm"
                        variant="outline"
                        border={1}
                        borderStyle="solid"
                        borderColor="#38D392"
                        color="#38D392"
                      >
                        Ver más
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      bgColor={'#282C37'}
                      w="auto"
                      px={10}
                      py={3}
                      border={2}
                      borderStyle="solid"
                      borderColor="#E3C488"
                    >
                      <Box m={2}>
                        <PopoverCloseButton />
                      </Box>
                      <PopoverBody>
                        <VStack spacing={5}>
                          <Flex justifyContent="center" gap={10}>
                            <Stack spacing={2} textAlign="center" fontSize={15}>
                              <Text>Solo/Duo</Text>
                              <Image
                                w={70}
                                h={70}
                                src={contactSggestionProfile}
                              />
                            </Stack>
                            <Stack spacing={2} textAlign="center" fontSize={15}>
                              <Text>Flex</Text>
                              <Image w={70} h={70} src={contactrange} />
                            </Stack>
                          </Flex>
                          <HStack align="center">
                            <Image src={iconRoll} h={26} w={26} />
                            <Text color="#319795" fontWeight="bold">
                              WinRate
                            </Text>
                            <Text fontWeight="bold"> 55%</Text>
                          </HStack>
                        </VStack>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Button
                    size="sm"
                    variant="solid"
                    bgColor="#38D392"
                    color="#1E2027"
                  >
                    Conectar
                  </Button>
                </Flex>
              </VStack>
            </Flex>
            <Box w="100%" h={2}>
              <DividerStats orientation="horizontal" typeDivider="simple" />
            </Box>
          </>
        )
      })}
    </VStack>
  )
}
