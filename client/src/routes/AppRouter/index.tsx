import { Profile } from '@/features/ui/Profile'
import { Dashboard, SingnUp, Login, Onboarding, Noticias, Chat } from '@/pages'

import { Feed } from '@/pages/Dashboard/components'
import { Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SingnUp />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="" element={<Feed />} />
        <Route path="noticias" element={<Noticias />} />
        <Route path="equipo" element={<Profile />} />
        <Route path="chat" element={<Chat />} />
      </Route>
      <Route path="/" element={<Onboarding />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
