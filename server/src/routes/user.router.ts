/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { getAllUsersController } from '../controllers/user/getAllUsers.controller'
import { getUserByIdController } from '../controllers/user/getUserById.controller'
import { registerController } from '../controllers/user/register.controller'
import { loginController } from '../controllers/user/login.controller'
import { signValidator } from '../middleware/signValidator.middleware'
import { updateUserController } from '../controllers/user/updateUser.controller'
import { loginValidator } from '../middleware/loginValidator.middleware'
const userRouter = express.Router()

// GET ALL USERS
userRouter.get('/', getAllUsersController)

// GET USER BY ID
userRouter.get('/:id', getUserByIdController)

// CREATE NEW USER
userRouter.post('/register', signValidator, registerController)

// UPDATE EXISTING USER
// LOGIN USER
userRouter.post('/login', loginValidator, loginController)

userRouter.put('/:id', signValidator, updateUserController)

export default userRouter
