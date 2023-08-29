import React, { createContext, useContext, useState } from 'react'

interface User {
  username: string
  email: string
  password: string
}

interface Props {
  children: React.ReactNode | JSX.Element
}

interface AuthContextType {
  user?: User
  loading: boolean
  login: (password: string, email: string) => void
  signup: (email: string, userName: string, password: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>()
  const [loading, setLoading] = useState<boolean>(false)

  const login = (password: string, email: string) => {
    console.log(password, email)
  }

  const signup = (username: string, email: string, password: string) => {
    console.log(username, password, email)
  }

  const logout = () => {
    setUser(undefined)
  }

  const value = {
    user,
    setUser,
    loading,
    setLoading,
    login,
    signup,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}