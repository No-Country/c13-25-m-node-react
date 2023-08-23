import { Home } from '@/pages/Home'
import { Route, Routes } from 'react-router-dom'
import LoginLayout from '@/pages/Login/LoginLayout'
import { SingnUp } from '@/pages/SignUp'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SingnUp />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginLayout />} />
    </Routes>
  )
}
