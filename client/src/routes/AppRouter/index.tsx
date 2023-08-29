import { Dashboard, SingnUp, Home, Login } from '@/pages'
import { Route, Routes } from 'react-router-dom'
import Onboarding from '@/pages/OnBoarding'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SingnUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/onboarding" element={<Onboarding />} />
    </Routes>
  )
}
