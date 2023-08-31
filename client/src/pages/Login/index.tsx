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
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

interface FormValues {
  email: string
  password: string
}

export const Login = () => {
  const [formData, setFormData] = useState<FormValues>({
    email: '',
    password: '',
  })

  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isPasswordValid, setIsPasswordValid] = useState(false)

  const isFormValid = isEmailValid && isPasswordValid

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Datos enviados:', formData)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      setIsEmailValid(emailRegex.test(value))
    }
    if (name === 'password') {
      setIsPasswordValid(value.length >= 8)
    }
  }
  return (
    <Flex h="100vh">
      <VStack flex={1} justify="center" align="center" spacing={8}>
        <Heading
          as="h1"
          color={'#C4F4FE'}
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

      <Box flex={1} bg={'#464646'}></Box>
    </Flex>
  )
}