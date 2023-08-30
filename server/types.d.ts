export interface User {
  username: string
  email: string
  password: string
  photourl?: string
}

export interface SignUser {
  email: string
  password: string
}
