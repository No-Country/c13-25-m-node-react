import express from 'express'
import userRouter from './user.router'
const api = express.Router()

api.use('/user', userRouter)

export default api
