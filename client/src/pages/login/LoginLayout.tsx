import Navbar from '@/components/Navbar'
import { Box } from '@chakra-ui/react'
import Login from './Login'

export default function LoginLayout() {
  return (
    <Box>
      <Navbar />
      <Login />
    </Box>
  )
}
