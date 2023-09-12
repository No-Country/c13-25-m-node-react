import { Request, Response } from 'express'

export const logoutController = (_req: Request, res: Response): Response => {
  return res.status(200).clearCookie('Authorization').json(
    {
      message: 'Logged out'
    }
  )
}
