import express from 'express'
import usersData from '../database/users.json'
import { User } from '../../types'
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
// userRouter.post('/register') // CREATE NEW USER
// userRouter.post('/login') // LOGIN
// userRouter.put('/updateProfile') // UPDATE EXISTING USER

export default userRouter
