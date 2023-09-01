import User from '../../models/User'

export const checkIfExists = async (email: string): Promise<boolean> => {
  const user = await User.findOne({ email })
  return user ? true : false
}
