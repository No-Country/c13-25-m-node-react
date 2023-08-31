import { Request, Response } from 'express'
import { checkIfExists } from '../../utils/auth/userExists'
import { createUserService } from '../../services/user/createUser.service'
import { generateToken } from '../../utils/auth/generateToken'
import { User as IUser } from '../../../types'

export const registerController = async (req: Request, res: Response): Promise<Response> => {
  let user
  let token
  try {
    if (await checkIfExists(req.body.email)) return res.status(400).json({ message: 'El email se encuentra registrado' })

    const newUser: IUser | string = await createUserService(req.body)
    if (typeof newUser !== 'string') {
      token = generateToken(newUser.email, newUser.password)
      user = {
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        photourl: newUser.photourl
      }
    }
    return res.json({
      message: 'Usuario creado',
      user,
      token
    })
  } catch (error) {
    let errorMessage
    if (error instanceof Error) errorMessage = error.message
    return res.status(500).json(
      {
        message: 'Error creando el usuario, por favor vuelva a intentarlo',
        error: `${errorMessage as string}`
      })
  }
}
