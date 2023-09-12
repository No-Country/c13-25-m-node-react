import React, { createContext, ReactNode, useContext } from 'react'

interface Posting {
  image?: string
  text: string
  likes: number
}

export interface User {
  id: string
  name: string
  email: string
  avatar: string
  roll:
    | 'Ninguno'
    | 'Top Laners'
    | 'Jungler'
    | 'Mid line'
    | 'Bot Laners'
    | 'Support'

  region: ['LAS']
  postings: Posting[]
  coverPhoto: string
  level: number
  // Agrega más propiedades según tus necesidades
}

interface ProfileContextType {
  user: User | null
  setUser: (user: User | null) => void
}

const ProfileContext = createContext<ProfileContextType>(
  {} as ProfileContextType
)

interface ProfileProviderProps {
  children: ReactNode
}

export const UserContextProvider = ({ children }: ProfileProviderProps) => {
  const [user, setUser] = React.useState<User | null>({
    id: 'sda2212',
    name: '@Leo123',
    email: 'johndoe@example.com',
    avatar: 'https://example.com/avatar.jpg',
    region: ['LAS'],
    postings: [],
    roll: 'Ninguno',
    coverPhoto: 'https://example.com/avatar.jpg',
    level: 1,
  })

  return (
    <ProfileContext.Provider value={{ user, setUser }}>
      {children}
    </ProfileContext.Provider>
  )
}
export const useProfileContext = () => {
  return useContext(ProfileContext)
}
