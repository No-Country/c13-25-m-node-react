/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { getAllUsersController } from '../controllers/user/getAllUsers.controller'
import { getUserByIdController } from '../controllers/user/getUserById.controller'
import { registerController } from '../controllers/user/register.controller'
import { loginController } from '../controllers/user/login.controller'
import { signValidator } from '../middleware/signValidator.middleware'
import { updateUserController } from '../controllers/user/updateUser.controller'
import { loginValidator } from '../middleware/loginValidator.middleware'
import passport from 'passport'
import { logoutController } from '../controllers/user/logout.controller'
const userRouter = express.Router()

// GET ALL USERS
userRouter.get('/', passport.authenticate('jwt', { session: false }), getAllUsersController)

// GET USER BY ID
userRouter.get('/:id', passport.authenticate('jwt', { session: false }), getUserByIdController)

// CREATE NEW USER
userRouter.post('/register', signValidator, registerController)

// LOGIN USER
userRouter.post('/login', loginValidator, loginController)

// LOGOUT USER
userRouter.post('/logout', passport.authenticate('jwt', { session: false }), logoutController)

// UPDATE EXISTING USER
userRouter.put('/:id', passport.authenticate('jwt', { session: false }), signValidator, updateUserController)

export default userRouter
