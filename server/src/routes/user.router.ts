/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { getAllUsersController } from '../controllers/user/getAllUsers.controller'
import { getUserByIdController } from '../controllers/user/getUserById.controller'
import { registerController } from '../controllers/user/register.controller'
import { signValidator } from '../middleware/signValidator.middleware'
const userRouter = express.Router()

// GET ALL USERS
userRouter.get('/', getAllUsersController)

// GET USER BY ID
userRouter.get('/:id', getUserByIdController)

// CREATE NEW USER
userRouter.post('/register', signValidator, registerController)
// UPDATE EXISTING USER

export default userRouter
