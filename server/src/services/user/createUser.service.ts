import User from '../../models/User'
import { hashPassword } from '../../utils/auth/hashPassword'
import { User as IUser } from '../../../types'

export const createUserService = async (
  user: IUser
): Promise<IUser | string> => {
  const { email, password, username } = user
  try {
    const hashedPassword = await hashPassword(password)
    const newUser = await User.create({
      email,
      username,
      password: hashedPassword
    })
    return newUser
  } catch (error) {
    let errorMessage
    if (error instanceof Error) errorMessage = error.message
    return errorMessage as string
  }
}
