import React, { createContext, ReactNode, useContext } from 'react'

interface Posting {
  image?: string
  text: string
  likes: number
}

interface User {
  id: number
  name: string
  email: string
  avatar: string
  region: ['LAS']
  postings: Posting[]
  coverPhoto: string
  level: number
  // Agrega más propiedades según tus necesidades
}

interface ProfileContext {
  user: User | null
  setUser: (user: User | null) => void
}

const ProfileContext = createContext<ProfileContext | undefined>(undefined)

interface ProfileProviderProps {
  children: ReactNode
}

export const UserProvider = ({ children }: ProfileProviderProps) => {
  const [user, setUser] = React.useState<User | null>(null)

  return (
    <ProfileContext.Provider value={{ user, setUser }}>
      {children}
    </ProfileContext.Provider>
  )
}
export const useAuth = () => {
  return useContext(ProfileContext)
}
