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

const Login = () => {
  const [formData, setFormData] = useState<FormValues>({
    email: '',
    password: '',
  })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Datos enviados:', formData)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
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
            <FormControl
              isRequired
              mb={4}
              onInvalid={(e) => {
                console.log(e.nativeEvent)
                e.stopPropagation
              }}
            >
              <Input
                onErrorCapture={(e) => {
                  console.log(e.nativeEvent)
                  e.stopPropagation
                }}
                onChange={handleChange}
                variant="FocusWhite"
                bg="white"
                color="#2C2C2C"
                type="email"
                name="email"
                value={formData.email}
                placeholder="Nombre de usuario"
              />
            </FormControl>

            <FormControl isRequired mb={4}>
              <Input
                variant="FocusWhite"
                bg="white"
                color="#2C2C2C"
                onChange={handleChange}
                value={formData.password}
                type="password"
                name="password"
                placeholder="Contraseña"
              />

              <FormHelperText display={'flex'} justifyContent={'flex-end'}>
                <Link color={'viegogreen'}>Olvidaste tu Contraseña?</Link>
              </FormHelperText>
            </FormControl>

            <FormControl paddingTop={5}>
              <Button variant={'LoginButton'} minW="100%" type="submit">
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

export default Login
