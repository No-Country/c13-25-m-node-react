import { Flex, HStack, Image, Text, VStack, Box } from '@chakra-ui/react'

interface MembersProps {
  name: string
  user_icon: string
  role_icon: string
  winrate: string
  solo_icon: string
  flex_icon: string
}

export const Members = ({
  name,
  user_icon,
  role_icon,
  winrate,
  solo_icon,
  flex_icon,
}: MembersProps) => {
  return (
    <>
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="space-evenly"
        width="100%"
      >
        <HStack spacing={4}>
          <Image
            borderRadius={'50%'}
            objectFit="cover"
            w={'64px'}
            h={'64px'}
            src={user_icon}
            alt="user icon"
          />
          <VStack alignItems={'start'}>
            <Text color={'#38D392'} size="sm">
              {name}
            </Text>
            <HStack>
              <Image src={role_icon} w={'20px'} h={'20px'} />
              <Text color={'#319795'} py="2" fontSize={'12px'}>
                WinRate
              </Text>
              <Text color={'white'}>{winrate}</Text>
            </HStack>
          </VStack>
        </HStack>
        <HStack>
          <VStack spacing={2}>
            <Text color={'#A5A5A5'}>Solo Duo</Text>
            <Image
              objectFit="cover"
              w={'64px'}
              h={'64px'}
              src={solo_icon}
              alt="solo duo"
            />
          </VStack>
          <VStack spacing={2}>
            <Text color={'#A5A5A5'}>Flex</Text>
            <Image
              objectFit="cover"
              w={'64px'}
              h={'64px'}
              src={flex_icon}
              alt="Flex"
            />
          </VStack>
        </HStack>
      </Flex>
      <Box
        my={6}
        w="100%"
        h="1px"
        bgGradient="linear(to-r, rgba(227, 196, 136, 0) 0.27%, #E3C488 49.86%, rgba(227, 196, 136, 0) 98.97%)"
      />
    </>
  )
}
