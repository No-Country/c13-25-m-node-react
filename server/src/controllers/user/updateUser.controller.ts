import { Request, Response } from 'express'
import { Types } from 'mongoose'
import { updateUserService } from '../../services/user/updateUser.service'
export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response | JSON> => {
  const { id } = req.params

  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Id de usuario invalido' })
  }

  try {
    const user = await updateUserService(new Types.ObjectId(id), req.body)
    if (user === null) {
      return res.status(404).json({ message: 'El usuario no existe' })
    }
    return res
      .status(200)
      .json({ message: 'El usuario se ha actualizado', user })
  } catch (error) {
    return res.status(500).json({ message: 'Error en el servidor', error })
  }
}
