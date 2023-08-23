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
  Image,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Validation } from '@/Validations'
import { error } from 'console'

interface User {
  name: string
  email: string
  password: string
  passwordAgain: string
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
type ChangedInfoInput = Partial<User>

export const SingnUp = () => {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    password: '',
    passwordAgain: '',
  })
  const [errors, setErrors] = useState<Errors>({})
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
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: value,
      ...changedInfoInput,
    }))

    setErrors(err)
  }
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    console.log('Datos enviados:', user)
  }
  console.log(errors)
  return (
    <>
      <Flex h="100vh">
        <VStack flex={1} justify="center" align="center" spacing={8}>
          <Box w={'55%'}>
            <Heading color={'#C4F4FE'} fontSize={'2.2em'} mb={'40px'}>
              Bienvenido Invocador!
            </Heading>
            <Box as="form" w={'100%'} onSubmit={handleSubmit}>
              <FormControl isInvalid={!!errors.name}>
                <Input
                  mt={5}
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
                <FormErrorMessage>{errors['name']}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.email}>
                <Input
                  mt={5}
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
                  <FormErrorMessage>{errors['email']}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={!!errors.password}>
                <Input
                  mt={5}
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
                <FormErrorMessage>{errors['password']}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.passwordAgain}>
                <Input
                  mt={5}
                  type="passwordAgain"
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
                <FormErrorMessage>{errors['passwordAgain']}</FormErrorMessage>
                <Button
                  variant={'LoginButton'}
                  minW="100%"
                  type="submit"
                  mt={10}
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
          </Box>
        </VStack>
        <Box flex={1}>
          <Image
            h="100%"
            w="100%"
            objectFit="cover"
            src="https://th.bing.com/th/id/R.f158af6a5fc8ebeeb4f656b1911178c4?rik=ngwny8qUpDXuIQ&riu=http%3a%2f%2fimg.voolean.com%2fimg%2fnotice%2fcate_39.jpg&ehk=OMf0NiYWPtwezY8PtuHRcAf3PymznQGRVBbHwXLKPKc%3d&risl=&pid=ImgRaw&r=0"
            alt="League of Legends"
          />
        </Box>
      </Flex>
    </>
  )
}
