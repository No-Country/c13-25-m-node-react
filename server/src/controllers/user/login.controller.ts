import { Request, Response } from 'express'
import { checkIfExists } from '../../utils/auth/userExists'
import { comparePassword } from '../../utils/auth/hashPassword'
import { SignUser as ISignUser, User as IUser } from '../../../types'
import { generateToken } from '../../utils/generateToken'
import { getUserByEmail } from '../../services/user/getUserByEmail.service'

export const loginController = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body as ISignUser
  let token
  try {
    if (!await checkIfExists(email)) return res.status(400).json({ message: 'No hay cuenta registrada con ese email' })
    const user: IUser | null = await getUserByEmail(email)
    if (user !== null) {
      if (!await comparePassword(password, user?.password)) return res.status(401).json({ message: 'Contraseña incorrecta' })
      token = generateToken(user?.email, user?.password)
      // el token debe ir incluido en cada request en un header { Authorization: 'Bearer ' + token }
      return res.status(200).json(
        {
          user: {
            _id: user._id,
            username: user.username,
            email: user.email,
            photourl: user.photourl
          },
          token
        })
    }
    return res.status(500).json({ message: 'Ha ocurrido un error, por favor vuelva a intentarlo' })
  } catch (error) {
    let errorMessage
    if (error instanceof Error) errorMessage = error.message
    return res.status(500).json({ error: errorMessage })
  }
}
