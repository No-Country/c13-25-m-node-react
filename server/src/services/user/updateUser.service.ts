import User from '../../models/User'
import { Document, Types } from 'mongoose'
import { User as IUser } from '../../../types'
import { hashPassword } from '../../utils/auth/hashPassword'

export const updateUserService = async (
  id: Types.ObjectId,
  data: IUser
): Promise<Document | null> => {
  const { password } = data
  return (await User.findByIdAndUpdate(
    id,
    {
      password: await hashPassword(password)
    },
    { new: true }
  ).select('-password -__v')) as Document | null
}
