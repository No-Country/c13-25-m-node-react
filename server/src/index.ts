import http from 'http'
import app from './app'
// import { connectDB } from './database/database'

const PORT = 8000
const server = http.createServer(app)

const startServer = async (): Promise<void> => {
  // descomentar junto al import cuando se inicie a usar
  // await connectDB()
  server.listen(PORT, () => {
    console.log(`Listening on port:${PORT}`)
  })
}

void startServer()
