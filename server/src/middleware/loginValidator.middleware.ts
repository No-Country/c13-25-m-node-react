import { Request, Response, NextFunction } from 'express'
import { validationResult, body } from 'express-validator'

export const loginValidator = [
  body('email')
    .notEmpty()
    .withMessage('Email no debe estar vacio')
    .isEmail()
    .withMessage('Email formato incorrecto'),
  body('password')
    .notEmpty()
    .withMessage('Password no debe estar vacio'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)

    if (errors.isEmpty()) return next()

    const formattedErrors: Record<string, string> = {}
    for (const key in errors.mapped()) {
      formattedErrors[key] = errors.mapped()[key].msg
    }

    return res.status(400).json({ errors: formattedErrors })
  }
]
