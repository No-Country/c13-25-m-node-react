import User from '../../models/User'

export const getAllUsersService = async (): Promise<Document[]> => {
  return await User.find({}, { __v: 0 })
}
