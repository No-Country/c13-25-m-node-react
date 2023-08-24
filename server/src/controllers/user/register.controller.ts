import { Request, Response } from 'express'
import { checkIfExists } from '../../utils/auth/userExists'
import { createUserService } from '../../services/user/createUser.service'

export const registerController = async (req: Request, res: Response): Promise<Response | JSON> => {
  try {
    if (await checkIfExists(req.body.email)) return res.status(400).json({ message: 'El email se encuentra registrado' })

    const newUser = await createUserService(req.body)
    return res.json({ message: 'Usuario creado', user: newUser })
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
