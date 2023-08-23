import { Home } from '@/pages/Home'
import { Route, Routes } from 'react-router-dom'
import LoginLayout from '@/pages/Login/LoginLayout'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginLayout />} />
    </Routes>
  )
}
