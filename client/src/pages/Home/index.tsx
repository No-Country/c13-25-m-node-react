import { VStack, Image, Box, Text } from '@chakra-ui/react'
import logoLol from '@/assets/e7845ge1qoiqsir1ie41e92k4m-9a93e1477db6741aa32709ae39720ab8.png'

export const Home = () => {
  return (
    <VStack m={200}>
      <Image src={logoLol} alt={logoLol} cursor="pointer" />
      <Box>
        <Text
          fontSize={'4xl'}
          cursor="pointer"
          transition="all 0.3s ease-in-out"
          _hover={{
            color: '#000',
            fontSize: '5xl',
            transform: 'scale(1.2)',
            transition: 'all 0.4s ',
          }}
        >
          Proximamente...
        </Text>
      </Box>
    </VStack>
  )
}
