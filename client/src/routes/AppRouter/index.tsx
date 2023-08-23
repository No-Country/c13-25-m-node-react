import { Home } from '@/pages/Home'
import LoginLayout from '@/pages/login/LoginLayout'
import { Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginLayout />} />
    </Routes>
  )
}
