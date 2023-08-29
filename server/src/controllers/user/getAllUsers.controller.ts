import { Request, Response } from 'express'
import { getAllUsersService } from '../../services/user/getAllUsers.service'

export const getAllUsersController = async (
  _: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await getAllUsersService()
    if (users.length === 0) {
      res.status(404).json({ message: 'No hay usuarios registrados' })
    } else {
      res.status(200).json(users)
    }
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error })
  }
}
