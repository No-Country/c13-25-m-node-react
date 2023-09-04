import { Flex, Heading, Spacer, Button, HStack } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <Flex as={'nav'} alignItems={'center'} bg={'navbarcolor.500'} minW={'100%'} height={'100px'}>
            <Heading paddingLeft={10} as={'h1'}>Logo</Heading>
            <Spacer />
            <HStack spacing={'10px'} marginRight={10}>
                <Button variant={'LogsButtons'}>Crear Cuenta</Button>
                <Button variant={'LogsButtons'}>Ingresar</Button>
            </HStack>

        </Flex>
    )
}

export default Navbar
