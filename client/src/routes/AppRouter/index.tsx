import { Dashboard, SingnUp, Home, Login } from '@/pages'
import { Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SingnUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
