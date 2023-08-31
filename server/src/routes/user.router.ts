import express from 'express'
import { registerController } from '../controllers/user/register.controller'
import { loginController } from '../controllers/user/login.controller'
import { signValidator } from '../middleware/signValidator.middleware'
import { loginValidator } from '../middleware/loginValidator.middleware'
const userRouter = express.Router()

// CREATE NEW USER
userRouter.post('/register', signValidator, registerController)
// UPDATE EXISTING USER
// LOGIN USER
userRouter.post('/login', loginValidator, loginController)

export default userRouter
