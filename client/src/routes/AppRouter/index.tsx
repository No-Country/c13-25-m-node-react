import { Home } from '@/pages/Home'
import Login from '@/pages/Login'
import { Route, Routes } from 'react-router-dom'
import { SingnUp } from '@/pages/SignUp'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SingnUp />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
