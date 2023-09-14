import { UseFormSignup } from '@/hooks'
import backgroundlogin from '@/assets/images/backgroundlogin.png'
import {
  VStack,
  Box,
  FormHelperText,
  Input,
  FormControl,
  FormErrorMessage,
  Button,
  Heading,
  Link,
  Flex,
  Text,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export const SingnUp = () => {
  const { isFormValid, handleSubmit, handleInputChange, errors, userForm } =
    UseFormSignup()

  return (
    <>
      <Flex
        bgImage={`url(${backgroundlogin})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        w="100%"
        h="90vh"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          borderRadius={8}
          bgColor={'#282C37'}
          w={'400px'}
          h={'480px'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <VStack flex={1} justify="center" align="center" spacing={8}>
            <Heading
              as="h1"
              color={'#E3C488'}
              fontSize={'2.2em'}
              mb={'5px'}
              fontWeight={400}
            >
              Crea tu cuenta
            </Heading>
            <Box as="form" w={359} onSubmit={handleSubmit}>
              <FormControl isInvalid={!!errors.name}>
                <Input
                  color="#2C2C2C"
                  bg="white"
                  type="name"
                  name="name"
                  value={userForm.name || ''}
                  placeholder="Nombre de usuario"
                  _placeholder={{
                    color: '#2C2C2C',
                  }}
                  required
                  onChange={(e) =>
                    handleInputChange({
                      e,
                      name: 'username',
                      type: 'name',
                      required: true,
                      maxLength: 25,
                      minLength: 6,
                    })
                  }
                />
                <FormErrorMessage fontSize={'.75em'}>
                  {errors['name']}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.email}>
                <Input
                  bg="white"
                  color="#2C2C2C"
                  mt={4}
                  type="email"
                  name="email"
                  value={userForm.email}
                  placeholder="Email"
                  _placeholder={{
                    color: '#2C2C2C',
                  }}
                  required
                  onChange={(e) =>
                    handleInputChange({
                      e,
                      name: 'email',
                      type: 'email',
                      required: true,
                      maxLength: 75,
                      minLength: 8,
                    })
                  }
                />
                {errors['email'] && (
                  <FormErrorMessage fontSize={'.75em'}>
                    {errors['email']}
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={!!errors.password}>
                <Input
                  mt={4}
                  bg="white"
                  color="#2C2C2C"
                  type="password"
                  name="password"
                  value={userForm.password}
                  placeholder="Contraseña"
                  _placeholder={{
                    color: '#2C2C2C',
                  }}
                  required
                  onChange={(e) =>
                    handleInputChange({
                      e,
                      name: 'password',
                      type: 'password',
                      required: true,
                      maxLength: 75,
                      minLength: 8,
                    })
                  }
                />
                <FormErrorMessage fontSize={'.75em'}>
                  {errors['password']}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.passwordAgain}>
                <Input
                  mt={4}
                  bg="white"
                  color="#2C2C2C"
                  type="password"
                  name="passwordAgain"
                  value={userForm.passwordAgain}
                  placeholder="Repetir contraseña"
                  _placeholder={{
                    color: '#2C2C2C',
                  }}
                  required
                  onChange={(e) =>
                    handleInputChange({
                      e,
                      name: 'passwordAgain',
                      type: 'passwordAgain',
                      required: true,
                      maxLength: 75,
                      minLength: 8,
                    })
                  }
                />
                <FormErrorMessage fontSize={'.75em'}>
                  {errors['passwordAgain']}
                </FormErrorMessage>
                <Button
                  mt={4}
                  isDisabled={!isFormValid}
                  _hover={!isFormValid ? { bgColor: '#7E7E7E' } : undefined}
                  bg={isFormValid ? '#319795' : '#7E7E7E'}
                  variant={'ghost'}
                  minW="100%"
                  type="submit"
                  color={'white'}
                >
                  Crear cuenta
                </Button>
                <Box
                  my={6}
                  w="100%"
                  h="1px"
                  bgGradient="linear(to-r, rgba(227, 196, 136, 0) 0.27%, #E3C488 49.86%, rgba(227, 196, 136, 0) 98.97%)"
                />
                <FormHelperText display={'flex'} justifyContent={'center'}>
                  <Text px={2}>Ya tenés cuenta?</Text>
                  <Link color={'viegogreen'} as={RouterLink} to={'/login'}>
                    Ingresá
                  </Link>
                </FormHelperText>
              </FormControl>
            </Box>
          </VStack>
        </Flex>
      </Flex>
    </>
  )
}
