import { Link as RouterLink } from 'react-router-dom'
import { UseFormLogin } from '@/hooks/UseFormLogin'

import backgroundlogin from '@/assets/images/backgroundlogin.png'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  Input,
  VStack,
  Link,
  Heading,
} from '@chakra-ui/react'

import { useAuth } from '@/context'
import { Navigate } from 'react-router-dom'

export const Login = () => {
  const { isAuth } = useAuth()

  const { isFormValid, handleSubmit, handleChange, formData } = UseFormLogin()
  return !isAuth ? (
    <Flex
      bgImage={`url(${backgroundlogin})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      w="100%"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        borderRadius={8}
        bgColor={'#282C37'}
        w={'486px'}
        h={'584px'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <VStack flex={1} justify="center" align="center" spacing={8}>
          <Heading
            as="h1"
            color={'#E3C488'}
            fontSize={'2.2em'}
            mb={'50px'}
            fontWeight={400}
          >
            Bienvenido Invocador!
          </Heading>
          <Box minW={359}>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired mb={4}>
                <Input
                  color="#2C2C2C"
                  onChange={handleChange}
                  bg="white"
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Ingrese su Email"
                  _placeholder={{
                    color: '#2C2C2C',
                  }}
                />
              </FormControl>

              <FormControl isRequired mb={4}>
                <Input
                  bg="white"
                  color="#2C2C2C"
                  onChange={handleChange}
                  value={formData.password}
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  _placeholder={{
                    color: '#2C2C2C',
                  }}
                />

                <FormHelperText display={'flex'} justifyContent={'flex-end'}>
                  <Link color={'viegogreen'}>Olvidaste tu Contraseña?</Link>
                </FormHelperText>
              </FormControl>

              <FormControl paddingTop={5}>
                <Button
                  isDisabled={!isFormValid}
                  color={'white'}
                  _hover={!isFormValid ? { bgColor: '#7E7E7E' } : undefined}
                  bg={isFormValid ? '#319795' : '#7E7E7E'}
                  variant={'ghost'}
                  minW="100%"
                  type="submit"
                >
                  Iniciar Sesión
                </Button>
                <Box
                  my={6}
                  w="100%"
                  h="1px"
                  bgGradient="linear(to-r, rgba(227, 196, 136, 0) 0.27%, #E3C488 49.86%, rgba(227, 196, 136, 0) 98.97%)"
                />
                <FormHelperText display={'flex'} justifyContent={'center'}>
                  Aun no tienes Cuenta?.{' '}
                  <Link color={'viegogreen'} as={RouterLink} to={'/signup'}>
                    {' '}
                    Crea tu cuenta
                  </Link>
                </FormHelperText>
              </FormControl>
            </form>
          </Box>
        </VStack>
      </Flex>
    </Flex>
  ) : (
    <Navigate to="/dashboard" />
  )
}
