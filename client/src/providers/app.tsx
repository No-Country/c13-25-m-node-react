import theme from '@/styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Router>{children}</Router>
      </ChakraProvider>
    </>
  )
}
