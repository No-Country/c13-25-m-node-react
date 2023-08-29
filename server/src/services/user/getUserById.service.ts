import User from '../../models/User'
import { Types } from 'mongoose'

export const getUserByIdService = async (
  id: Types.ObjectId
): Promise<Document | null> => {
  return await User.findById(id, { __v: 0 })
}
