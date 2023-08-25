import { Request, Response } from 'express'
import { checkIfExists } from '../../utils/auth/userExists'

export const loginController = async (req: Request, res: Response): Promise<Response | string> => {
  const { email, password } = req.body
  try {
    if (!await checkIfExists(email)) return res.status(400).json({ message: 'No hay cuenta registrada con ese email' })
    const user = await getUser({})
    return res.status(200).json({})
  } catch (error) {
    let errorMessage
    if (error instanceof Error) errorMessage = error.message
    return res.status(500).json({ error: errorMessage })
  }
}
