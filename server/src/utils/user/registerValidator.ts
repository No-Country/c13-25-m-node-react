import { Request, Response, NextFunction } from 'express'
import { validationResult, body } from 'express-validator'

export const registerValidator = [
  body('username')
    .notEmpty()
    .withMessage('Username no puede ser un campo vacio')
    .isString()
    .withMessage('Username debe ser un string'),
  body('email')
    .notEmpty()
    .withMessage('Email no puede ser un campo vacio')
    .isString()
    .withMessage('Email debe ser un string'),
  body('password')
    .notEmpty()
    .withMessage('Password no puede ser un campo vacio')
    .isString()
    .withMessage('Password debe ser un string')
    .isStrongPassword()
    .withMessage('Password debe contener al menos 8 caracteres, una mayuscula, un numero y un caracter especial'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)

    if (errors.isEmpty()) return next()

    const formattedErrors: Record<string, string> = {}
    for (const key in errors.mapped()) {
      formattedErrors[key] = errors.mapped()[key].msg
    }

    return res.status(403).json({ errors: formattedErrors })
  }
]
