export interface User {
  id: number
  userName: string
  password: string
  photoUrl: string
}

export interface CreateUser {
  username: string
  email: string
  password: string
  photourl?: string
}
