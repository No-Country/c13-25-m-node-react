import jwt from 'jsonwebtoken'

export const generateToken = (username: string, email: string): string => {
  return jwt.sign({ username, email }, process.env.JWT_SECRET as string, { expiresIn: '5m' })
}
