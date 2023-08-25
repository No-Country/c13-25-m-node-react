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
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Validation } from '@/Validations'

interface User {
  name: string
  email: string
  password: string
  passwordAgain: string
  [key: string]: string
}
interface Errors {
  [key: string]: string | boolean
}
interface HandleInputChangeProps {
  e: React.ChangeEvent<HTMLInputElement>
  name: string
  type: 'email' | 'password' | 'name' | 'passwordAgain'
  required?: boolean
  maxLength?: number
  minLength?: number
}

export const SingnUp = () => {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    password: '',
    passwordAgain: '',
  })
  const initialErrors: Errors = {
    name: '',
    email: '',
    password: '',
    passwordAgain: '',
  }
  const [errors, setErrors] = useState<Errors>(initialErrors)
  const [isFormValid, setIsFormValid] = useState(false)
  const handleInputChange = ({
    e,
    name,
    type,
    required,
    maxLength,
    minLength,
  }: HandleInputChangeProps): void => {
    const { changedInfoInput, value, err } = Validation(
      e,
      name,
      type,
      required,
      maxLength,
      minLength,
      user,
      errors
    )
    setUser(
      (prevUser) =>
        ({
          ...prevUser,
          [e.target.name]: value,
          ...changedInfoInput,
        }) as User
    )
    setErrors(err)
    const anyErrorPresent = Object.values(err).some(
      (error) => typeof error === 'string'
    )
    setIsFormValid(!anyErrorPresent)
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
  }
  console.log(errors, isFormValid)
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
                value={user.name}
                placeholder="Nombre de usuario"
                required
                onChange={(e) =>
                  handleInputChange({
                    e,
                    name: 'name',
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
                value={user.email}
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
                value={user.password}
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
                value={user.passwordAgain}
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
