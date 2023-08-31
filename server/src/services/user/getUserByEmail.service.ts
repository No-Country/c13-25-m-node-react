import User from '../../models/User'
import { User as IUser } from '../../../types'

export const getUserByEmail = async (email: string): Promise<IUser | null> => {
  return await User.findOne({ email })
}
