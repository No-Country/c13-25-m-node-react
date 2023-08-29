import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Input,
  InputGroup,
  Avatar,
  InputRightElement,
  Icon,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import logo from '@/assets/logos/LogoNuevo.png'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Header = () => {
  const [isAuth] = useState<boolean>(true)
  const [inputSearch, setinputSearch] = useState<string>('')
  const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinputSearch(e.target.value)
  }
  const location = useLocation()

  return (
    <Box pos={'absolute'} zIndex={2} w={'100%'}>
      <Flex
        minH={'110px'}
        align={'center'}
        bgColor={'#282C37'}
        borderBottom={1}
        px={66}
        borderStyle={'solid'}
        borderColor={'#363945'}
        justifyContent={'space-between'}
        opacity={location.pathname === '/' ? 0.6 : 1}
      >
        {location.pathname !== '/' ? (
          <>
            {isAuth ? (
              <>
                <InputGroup w="30%" bg={'#FFF'} borderRadius={6}>
                  <InputRightElement px={6}>
                    <Icon boxSize={6}>
                      <SearchIcon color="#319795" />
                    </Icon>
                  </InputRightElement>
                  <Input
                    value={inputSearch}
                    type="text"
                    onChange={handleInputSearch}
                    color="gray.400"
                    placeholder="Buscar"
                    _placeholder={{ color: 'gray.400' }}
                    size="md"
                  />
                </InputGroup>
                <Box>
                  <Avatar size="lg" name="user" src="" />
                </Box>
              </>
            ) : (
              <Flex>
                <Stack direction="row" spacing={14} align={'center'}>
                  <Link to="/signup">
                    <Button
                      fontSize={18}
                      color={'#319795'}
                      py={6}
                      px={10}
                      variant="ghost"
                    >
                      Craer cuenta
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button
                      fontSize={18}
                      py={6}
                      px={10}
                      color={'#319795'}
                      border={2}
                      borderStyle={'solid'}
                      borderColor={'#319795'}
                      variant="outline"
                    >
                      Ingresar
                    </Button>
                  </Link>
                </Stack>
              </Flex>
            )}
          </>
        ) : (
          ''
        )}
      </Flex>
      <Box pos={'absolute'} mt={'-80px'} ml={'60px'}>
        <Link to="/">
          <Image src={logo} alt={logo} w={'100px'} />
        </Link>
      </Box>
    </Box>
  )
}
