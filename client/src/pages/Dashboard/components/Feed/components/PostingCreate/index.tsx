import {
  Avatar,
  Box,
  Button,
  Icon,
  Divider,
  HStack,
  Textarea,
  Flex,
} from '@chakra-ui/react'

import { BiImage } from 'react-icons/bi'

export const PostingCreate = () => {
  return (
    <Box bg="#282C37" borderRadius={10} w="100%" h="auto" mt={4}>
      <HStack spacing={5} px={5}>
        <Avatar src="" name="user" />
        <Box width="100%">
          <Textarea
            border="none"
            p={5}
            placeholder={`|  Publicar algo...`}
            resize="none"
          />
        </Box>
      </HStack>
      <Divider color="white" />
      <Flex justifyContent="space-around" width="100%" h="40px">
        <Button
          fontSize={17}
          bg={'transparent'}
          color={'#A5A5A5'}
          _focus={{ bg: 'transparent' }}
          _hover={{ bg: 'transparent' }}
        >
          <Icon as={BiImage} mr={2} mb={1} fontSize={25} />
          Imagen
        </Button>
        <Button
          fontSize={17}
          bg={'transparent'}
          color={'#A5A5A5'}
          _focus={{ bg: 'transparent' }}
          _hover={{ bg: 'transparent' }}
        >
          <Icon as={BiImage} mr={2} mb={1} fontSize={25} />
          Estadísticas
        </Button>
        <Button
          fontSize={17}
          bg={'transparent'}
          color={'#A5A5A5'}
          _focus={{ bg: 'transparent' }}
          _hover={{ bg: 'transparent' }}
        >
          <Icon as={BiImage} mr={2} mb={1} fontSize={25} />
          Foto
        </Button>
      </Flex>
    </Box>
  )
}
