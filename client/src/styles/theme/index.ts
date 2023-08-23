import { extendTheme } from '@chakra-ui/react'

const customTheme = {
    colors: {
        viegogreen: "#319795", // color personalizado
        navbarcolor: {
            500: "#282C37", // color personalizado
        },
    },
    components: {
        Button: {
            variants: {
                LogsButtons: {
                    borderColor: "#319795", // Color del borde
                    color: "#319795", // Color del texto
                    _focus: {
                        border: '2px solid',
                        borderColor: "#319795", // Color de fondo al pasar el mouse
                        color: "#319795", // Color del texto al pasar el mouse
                    },
                },
                LoginButton: {
                    borderColor: "#7E7E7E",
                    color: "#FFFFFF",
                    bg: "#7E7E7E",
                    _focus: {
                        border: '2px solid',
                        borderColor: "#319795",
                        bg: "#319795",
                    }
                },
            },
        },
        Input: {
            variants: {
                FocusWhite: {
                    _focus: {
                        bg: '#ffffff'
                    },
                },
            },
        },
    },
}

const theme = extendTheme(customTheme)

export default theme
