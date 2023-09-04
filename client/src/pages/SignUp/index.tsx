import { UseFormSignup } from '@/hooks'
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
      <Flex h="100vh">
        <VStack flex={1} justify="center" align="center" spacing={8}>
          <Heading color={'#C4F4FE'} fontSize={'2.2em'} mb={'20px'}>
            Crea tu cuenta
          </Heading>
          <Box as="form" w={359} onSubmit={handleSubmit}>
            <FormControl isInvalid={!!errors.name}>
              <Input
                type="name"
                name="name"
                value={userForm.name || ''}
                placeholder="Nombre de usuario"
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
                mt={4}
                type="email"
                name="email"
                value={userForm.email}
                placeholder="Email"
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
                type="password"
                name="password"
                value={userForm.password}
                placeholder="Contraseña"
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
                type="password"
                name="passwordAgain"
                value={userForm.passwordAgain}
                placeholder="Repetir contraseña"
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
              <FormHelperText display={'flex'} justifyContent={'center'}>
                <Text px={2}>Ya tenés cuenta?</Text>
                <Link color={'viegogreen'} as={RouterLink} to={'/login'}>
                  Ingresá
                </Link>
              </FormHelperText>
            </FormControl>
          </Box>
        </VStack>
        <Box flex={1} bg={'#464646'}></Box>
      </Flex>
    </>
  )
}
