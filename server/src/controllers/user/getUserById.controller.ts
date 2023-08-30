import { Request, Response } from 'express'
import { Types } from 'mongoose'
import { getUserByIdService } from '../../services/user/getUserById.service'

export const getUserByIdController = async (
  req: Request,
  res: Response
): Promise<Response | JSON> => {
  const { id } = req.params

  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Id de usuario invalido' })
  }

  try {
    const foundUser = await getUserByIdService(new Types.ObjectId(id))

    if (foundUser == null) {
      return res.status(404).json({ message: 'User not Found' })
    }

    return res.status(200).json(foundUser)
  } catch (error) {
    return res.status(500).send('Error de servidor')
  }
}
