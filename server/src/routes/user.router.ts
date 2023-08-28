import express from 'express'
import { registerController } from '../controllers/user/register.controller'
import { signValidator } from '../middleware/signValidator.middleware'
const userRouter = express.Router()

// CREATE NEW USER
userRouter.post('/register', signValidator, registerController)
// UPDATE EXISTING USER

export default userRouter
