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
  TabIndicator,
  TabList,
  Select,
  useDisclosure,
} from '@chakra-ui/react'
import Fondo from '@/assets/ProfileImg/Fondo.jpg'
import Blue_Melee from '@/assets/ProfileImg/Blue_Melee_Minion_profileicon 1.jpg'
import Roll from '@/assets/ProfileImg/Roll1.png'
import { TabPanels, TabPanel } from '@chakra-ui/react'
import { ModalRegion, MyPosting, Statistics } from './components'
import { useState } from 'react'

const userProfile = {
  img: Fondo,
  userName: '@Leo123',
  userImg: Blue_Melee,
  roll: Roll,
  range: 'Oro III',
  experience: 0,
}

export const Profile = () => {
  const [selectedRoll, setSelectedRoll] = useState('0')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleSelectedRoll = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRoll(e.target.value)
  }

  const logoRoll: { [key: string]: string } = {
    '0': 'src/assets/roles/0.png',
    '1': 'src/assets/roles/1.png',
    '2': 'src/assets/roles/2.png',
    '3': 'src/assets/roles/3.png',
    '4': 'src/assets/roles/4.png',
    '5': 'src/assets/roles/5.png',
  }

  return (
    <>
      <VStack bgColor="#282C37">
        <Box>
          <Image
            objectFit="cover"
            overflow="hidden"
            src={userProfile.img}
            alt=""
          />
          <Flex w={'100%'} alignItems={'center'} flexDirection={'column'}>
            <Avatar
              size="xl"
              mt={'-10%'}
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
            <Button variant="unstyled" onClick={onOpen}>
              {userProfile.userName}
            </Button>
          </Text>
        </Box>
        <Flex
          w={'100%'}
          px={4}
          mt={'-4'}
          mb={4}
          justifyContent={'space-between'}
        >
          <Flex flexGrow={1} alignItems={'center'}>
            <Image src={logoRoll[selectedRoll]} />
            <Select
              variant="filled"
              ml={'8px'}
              fontWeight={600}
              w={200}
              value={selectedRoll}
              placeholder="Elige tu rol"
              _focusVisible={{ boder: 'none' }}
              onChange={handleSelectedRoll}
            >
              <option value="1">Top Laners</option>
              <option value="2">Jungler</option>
              <option value="3">Mid line</option>
              <option value="4">Bot Laners</option>
              <option value="5">Support</option>
            </Select>
          </Flex>
          <Button variant={'outline'} size={'sm'} borderColor={'#E3C488'}>
            Editar perfil
          </Button>
        </Flex>
        <Tabs w="100%" variant="unstyled">
          <TabList
            borderBottomRadius={8}
            borderTopRadius={5}
            borderBottom={1}
            borderStyle="solid"
            bgColor="#282C37"
            h={12}
          >
            <Tab
              _selected={{ color: '#E3C488', borderColor: '#E3C488' }}
              w="50%"
            >
              Mis Publicaciones
            </Tab>
            <Tab
              _selected={{ color: '#E3C488', borderColor: '#E3C488' }}
              w="50%"
            >
              Mis estadísticas
            </Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="#E3C488"
            borderRadius="1px"
          />
          <TabPanels m={10}>
            <TabPanel>
              <MyPosting />
            </TabPanel>
            <TabPanel>
              <Statistics />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <ModalRegion isOpen={isOpen} onClose={onClose} />
      </VStack>
    </>
  )
}
