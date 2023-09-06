import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import api from './routes/api'
import passport from 'passport'
import helmet from 'helmet'
import { passportMiddleware } from './middleware/passportJwt.middleware'
const app = express()

app.use(helmet())

app.use(
  cors({
    origin: '*',
    credentials: true
  })
)
app.use(cookieParser())
app.use(express.json())
app.use(passport.initialize())
passport.use(passportMiddleware)
app.use('/v1', api)

app.get('/', (_req, res) => res.json({ message: 'Welcome to our API' }))
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Not Found' })
})

export default app
