import User from '../../models/User'
import { hashPassword } from '../../utils/auth/hashPassword'
import { Document } from 'mongoose'
import { CreateUser as IUser } from '../../../types'

export const createUserService = async (user: IUser): Promise<Document | string> => {
  const { username, email, password, photourl } = user
  try {
    const hashedPassword = await hashPassword(password)
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      photourl
    })
    return newUser
  } catch (error) {
    let errorMessage
    if (error instanceof Error) errorMessage = error.message
    return errorMessage as string
  }
}
