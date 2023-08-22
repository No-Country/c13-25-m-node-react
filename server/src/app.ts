import 'dotenv/config'
import express from 'express'
import api from './routes/api'
const app = express()

app.use(express.json())
app.use('/v1', api)

app.get('/', (_req, res) => res.json({ message: 'Welcome to out API' }))
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Not Found' })
})

export default app
