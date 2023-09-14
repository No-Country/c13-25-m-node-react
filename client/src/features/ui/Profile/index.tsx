import {
  Flex,
  Box,
  Image,
  Avatar,
  Text,
  VStack,
  Button,
  Tab,
  Tabs,
  TabList,
  useDisclosure,
} from '@chakra-ui/react'
import Fondo from '@/assets/ProfileImg/Fondo.jpg'
import Blue_Melee from '@/assets/ProfileImg/Blue_Melee_Minion_profileicon 1.jpg'
//import Roll from '@/assets/ProfileImg/Roll1.png'
import Roll from '@/assets/roles/0.png'
import { TabPanels, TabPanel } from '@chakra-ui/react'
import { ModalRegion, MyPosting, Statistics } from './components'
import { useProfileContext } from '@/context/ProfileContext'
import { useState } from 'react'

import roll0 from '@/assets/roles/0.png'
import roll1 from '@/assets/roles/1.png'
import roll2 from '@/assets/roles/2.png'
import roll3 from '@/assets/roles/3.png'
import roll4 from '@/assets/roles/4.png'
import roll5 from '@/assets/roles/5.png'

const roles = [roll0, roll4, roll2, roll1, roll3, roll5]

const userProfile = {
  img: Fondo,
  userName: '@Leo123',
  userImg: Blue_Melee,
  roll: Roll,
  range: 'Oro III',
  experience: 0,
}

interface Image {
  name: string
  path: string
}

export const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedImage, setSelectedImage] = useState({
    name: '',
    path: '0',
  })

  const { setUser, user } = useProfileContext()

  const handleImageSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedImageName = event.target.value
    //const selectedImagePath = `@/assets/roles/${selectedImageName}.png`
    const selectedImagePath = roles[parseInt(selectedImageName)]

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setUser({ ...user, roll: selectedImageName })
    setSelectedImage({
      name: selectedImageName,
      path: selectedImagePath,
    })
  }

  console.log(user)
  return (
    <VStack w="100%" mx={5}>
      <Box w="100%">
        <Image
          w="100%"
          objectFit="cover"
          overflow="hidden"
          src={userProfile.img}
          alt=""
        />
        <Flex w={'100%'} alignItems={'center'} flexDirection={'column'}>
          <Avatar
            size="xl"
            mt={'-6%'}
            borderColor={'#E3C488'}
            borderWidth={'2px'}
            src={userProfile.userImg}
          />
          <Text
            color={'#717171'}
            borderColor={'#E3C488'}
            borderWidth={'2px'}
            px={'8px'}
            lineHeight={'4'}
            fontSize={'10px'}
            mt={'-14px'}
            bgColor={'#1E2328'}
            zIndex={3}
            minW={'4%'}
            textAlign={'center'}
          >
            {userProfile.experience}
          </Text>
        </Flex>
      </Box>
      <Box>
        <Text color={'#717171'} mt={'-8px'}>
          {userProfile.userName}
        </Text>
      </Box>
      <Flex
        w={'100%'}
        px={4}
        mt={'-4'}
        mb={4}
        justifyContent={'space-between'}
        align="center"
      >
        <Flex flexGrow={1} alignItems={'center'} gap={5}>
          <Image src={`${selectedImage.path}`} alt={selectedImage.name} />
          <Text color="#E6E6E6" fontSize={17}>
            {'Elige tu rol principal'}
          </Text>
        </Flex>
        <Button
          _hover={{ bgColor: '#319795' }}
          colorScheme="teal"
          variant={'outline'}
          size={'sm'}
          borderColor={'#B4975F'}
          onClick={onOpen}
          color={'white'}
        >
          Editar perfil
        </Button>
      </Flex>
      <Tabs w="100%">
        <TabList
          borderBottomRadius={8}
          borderTopRadius={5}
          borderBottom={1}
          borderStyle="solid"
          bgColor="#282C37"
          h={12}
        >
          <Tab
            _selected={{
              color: '#E3C488',
              borderColor: '#E3C488',
            }}
            w="50%"
          >
            Mis Publicaciones
          </Tab>
          <Tab
            _selected={{
              color: '#E3C488',
              borderColor: '#E3C488',
            }}
            w="50%"
          >
            Mis estadísticas
          </Tab>
        </TabList>

        <TabPanels mt={20}>
          <TabPanel bgColor="#282C37" borderRadius={10} px={10}>
            <MyPosting />
          </TabPanel>
          <TabPanel bgColor="#282C37" borderRadius={10} px={10}>
            <Statistics />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <ModalRegion
        isOpen={isOpen}
        onClose={onClose}
        handleImageSelect={handleImageSelect}
      />
    </VStack>
  )
}
