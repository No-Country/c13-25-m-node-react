import { Document } from 'mongoose'

export interface User extends Document {
  username: string
  email: string
  password: string
  photourl?: string
}

export interface SignUser extends Document {
  email: string
  password: string
}

export interface LoginResponse {
  _id: string
  username: string
  email: string
  photourl: string
}
