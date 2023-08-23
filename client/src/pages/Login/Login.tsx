import { ViewIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, FormControl, FormHelperText, Input, Text, VStack, Image, Link, InputRightAddon, InputGroup, IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface FormValues {
    email: string;
    password: string;
}

const Login = () => {

    const [formData, setFormData] = useState<FormValues>({
        email: '',
        password: '',
    })
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Datos enviados:', formData);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <Flex h="100vh" bg={'#1E1E1E'}>
            <VStack flex={1} justify="center" align="center" spacing={8}>

                <Text as="h1" color={'#C4F4FE'} fontSize={'2.2em'} mb={'50px'}>
                    Bienvenido Invocador!
                </Text>

                <Box as='form' minW={'359px'} onSubmit={handleSubmit} >
                    <FormControl isRequired mb={4} >
                        <Input
                            onChange={handleChange}
                            variant="FocusWhite"
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Nombre de usuario" />
                    </FormControl>

                    <FormControl isRequired mb={4}>

                        <Input
                            variant="FocusWhite"
                            onChange={handleChange}
                            value={formData.password}
                            type="password"
                            name="password"
                            placeholder="Contraseña" />

                        <FormHelperText display={'flex'} justifyContent={'flex-end'} ><Link color={'viegogreen'}>Olvidaste tu Contraseña?</Link></FormHelperText>
                    </FormControl>

                    <FormControl paddingTop={5}>
                        <Button variant={'LoginButton'} minW="100%" type="submit">
                            Iniciar Sesión
                        </Button>
                        <FormHelperText display={'flex'} justifyContent={'center'}>Aun no tienes Cuenta?. <Link color={'viegogreen'} as={RouterLink} to={'/create'} >  Crea tu cuenta</Link></FormHelperText>
                    </FormControl>

                </Box>
            </VStack>

            <Box flex={1}>
                <Image h="100%" w='100%' objectFit="cover" src="https://th.bing.com/th/id/R.f158af6a5fc8ebeeb4f656b1911178c4?rik=ngwny8qUpDXuIQ&riu=http%3a%2f%2fimg.voolean.com%2fimg%2fnotice%2fcate_39.jpg&ehk=OMf0NiYWPtwezY8PtuHRcAf3PymznQGRVBbHwXLKPKc%3d&risl=&pid=ImgRaw&r=0" alt="League of Legends" />
            </Box>
        </Flex >
    );
};

export default Login;
