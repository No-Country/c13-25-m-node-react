import { Flex, Box, Image, Text } from '@chakra-ui/react'

interface TeamNameProps {
  imageUrl: string
  text: string
}

export const TeamName = ({ imageUrl, text }: TeamNameProps) => {
  return (
    <Flex
      alignItems={'center'}
      gap={5}
      justifyContent={'space-between'}
      padding={10}
    >
      <Flex display={'flex'} justifyContent={'flex-start'}>
        <Image src={imageUrl} alt="team logo" width="120px" height="100px" />
      </Flex>

      <Box textAlign="center">
        <Box
          w="100%"
          h="2px"
          bgGradient="linear(to-r, rgba(227, 196, 136, 0) 0.27%, #E3C488 49.86%, rgba(227, 196, 136, 0) 98.97%)"
        />
        <Text color={'#38D392'} fontSize={'16px'}>
          {text}
        </Text>
        <Box
          w="100%"
          h="2px"
          bgGradient="linear(to-r, rgba(227, 196, 136, 0) 0.27%, #E3C488 49.86%, rgba(227, 196, 136, 0) 98.97%)"
        />
      </Box>
    </Flex>
  )
}
