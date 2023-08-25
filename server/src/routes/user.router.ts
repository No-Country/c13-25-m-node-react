import express from 'express'
import usersData from '../database/users.json'
import { User } from '../../types'
import { registerController } from '../controllers/user/register.controller'
import { registerValidator } from '../utils/user/registerValidator'
import { loginValidator } from '../utils/user/loginValidator'
const userRouter = express.Router()
const users: User[] = usersData as User[]

// GET ALL USERS
userRouter.get('/', (_req, res) => {
  res.status(200).json(users)
})

// GET USER BY ID
userRouter.get('/:id', (req, res) => {
  const id = Number(req.params.id)

  const foundUser = users.find((user) => user.id === id)
  if (foundUser != null) {
    return res.status(200).json(foundUser)
  }
  return res.status(404).json({ message: 'user not found' })
})
// CREATE NEW USER
userRouter.post('/register', registerValidator, registerController)
// UPDATE EXISTING USER
userRouter.put('/updateProfile/:id', (req, res) => {
  const userId = Number(req.params.id)
  const newUserData: User = req.body
  const foundUserIndex = users.findIndex((user) => user.id === userId)
  if (foundUserIndex !== -1) {
    users[foundUserIndex] = newUserData
    return res
      .status(200)
      .json({ ...newUserData, success: true, message: 'user data was updated' })
  }
  return res.status(404).json({ message: 'user not found' })
})
// userRouter.post('/login') // LOGIN
userRouter.post('login', loginValidator, loginController)

export default userRouter
