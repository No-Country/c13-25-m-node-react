/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { getAllUsersController } from '../controllers/user/getAllUsers.controller'
import { registerController } from '../controllers/user/register.controller'
import { signValidator } from '../middleware/signValidator.middleware'
const userRouter = express.Router()

// GET ALL USERS
userRouter.get('/', getAllUsersController)
// CREATE NEW USER
userRouter.post('/register', signValidator, registerController)
// UPDATE EXISTING USER

export default userRouter
