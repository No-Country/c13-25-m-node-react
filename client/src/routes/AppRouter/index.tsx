import { Home } from '@/pages/Home'
import Login from '@/pages/Login'
import { Route, Routes } from 'react-router-dom'


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
