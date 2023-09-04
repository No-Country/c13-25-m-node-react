import { Profile } from '@/features/ui/Profile'
import { Dashboard, SingnUp, Login, Onboarding } from '@/pages'
import { Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SingnUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Onboarding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}
