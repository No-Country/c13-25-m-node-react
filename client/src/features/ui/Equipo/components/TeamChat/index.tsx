import { Box, Flex, Input, IconButton, Text, Image } from '@chakra-ui/react'
import { IoMdSend } from 'react-icons/io'
import avatar1 from '@/assets/ProfileImg/Avatar-1.png'
import avatar2 from '@/assets/ProfileImg/Avatar-2.png'
import avatar3 from '@/assets/ProfileImg/Avatar-3.png'
export const TeamChat = () => {
  return (
    <Flex alignItems={'center'} flexDirection={'column'}>
      <Flex flexDirection={'column'} gap={2} width="100%">
        <Flex
          mt={2}
          mr={'30px'}
          w={'200px'}
          alignSelf={'end'}
          borderRadius={'12px 12px 0px 12px'}
          bgColor={'#4CD6D6'}
        >
          <Text m={2} fontSize={'10px'} color={'black'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            officiis?
          </Text>
        </Flex>
        <Image
          alignSelf={'end'}
          borderRadius={'50%'}
          objectFit="cover"
          w={'40px'}
          h={'40px'}
          src={avatar1}
          alt="user icon"
        />

        <Flex
          mt={2}
          ml={'30px'}
          w={'200px'}
          alignSelf={'start'}
          borderRadius={'12px 12px 12px 0px'}
          bgColor={'#E6E6E6'}
        >
          <Text m={2} fontSize={'10px'} color={'black'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            officiis?
          </Text>
        </Flex>
        <Image
          alignSelf={'start'}
          borderRadius={'50%'}
          objectFit="cover"
          w={'40px'}
          h={'40px'}
          src={avatar2}
          alt="user icon"
        />
        <Flex
          mt={2}
          ml={'30px'}
          w={'200px'}
          alignSelf={'start'}
          borderRadius={'12px 12px 12px 0px'}
          bgColor={'#E6E6E6'}
        >
          <Text m={2} fontSize={'10px'} color={'black'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            officiis?
          </Text>
        </Flex>
        <Image
          alignSelf={'start'}
          borderRadius={'50%'}
          objectFit="cover"
          w={'40px'}
          h={'40px'}
          src={avatar3}
          alt="user icon"
        />
        <Flex
          mt={2}
          mr={'30px'}
          w={'200px'}
          alignSelf={'end'}
          borderRadius={'12px 12px 0px 12px'}
          bgColor={'#4CD6D6'}
        >
          <Text m={2} fontSize={'10px'} color={'black'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            officiis?
          </Text>
        </Flex>
        <Image
          alignSelf={'end'}
          borderRadius={'50%'}
          objectFit="cover"
          w={'40px'}
          h={'40px'}
          src={avatar1}
          alt="user icon"
        />
      </Flex>

      <Box
        my={6}
        w="100%"
        h="1px"
        bgGradient="linear(to-r, rgba(227, 196, 136, 0) 0.27%, #E3C488 49.86%, rgba(227, 196, 136, 0) 98.97%)"
      />
      <Flex gap={1}>
        <Input w={300} placeholder="Message" />
        <IconButton
          color={'#282C37'}
          borderRadius={'50'}
          bg={'#38D392'}
          aria-label="send"
          fontSize={'30px'}
          icon={<IoMdSend />}
        />
      </Flex>
    </Flex>
  )
}
