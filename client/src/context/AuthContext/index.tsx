import Cookies from 'js-cookie'
import axios, { AxiosResponse } from 'axios'
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
  isAuth: boolean
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)
const SERVER_LOCAL = import.meta.env.VITE_API_SERVER_LOCAL
//const SERVER_PRODUCTION = import.meta.env.VITE_API_SERVER_PRODUCTION

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>()
  const [loading, setLoading] = useState<boolean>(false)
  const [isAuth, setIsAuth] = useState<boolean>(false)

  const SetData = (res: AxiosResponse) => {
    Cookies.set('HexZone', res.data.token, { expires: 7 })
    setIsAuth(true)
  }

  const login = (password: string, email: string) => {
    axios

      .post(`${SERVER_LOCAL}login`, { email, password })
      .then((res) => SetData(res))
      .catch((error) => console.log(error))
  }

  const signup = (username: string, email: string, password: string) => {
    axios
      .post(`${SERVER_LOCAL}register`, {
        username,
        email,
        password,
      })
      .then((res) => console.log(res.status, res.statusText, res.data.data))
      .catch((error) => console.log(error.message))
  }

  const logout = () => {
    Cookies.remove('HexZone')
    setIsAuth(false)
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
    isAuth,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
