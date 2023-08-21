import http from 'http'
import app from './app'

const PORT = 8000
const server = http.createServer(app)

const startServer = (): void => {
  server.listen(PORT, () => {
    console.log(`Listening on port:${PORT}`)
  })
}

startServer()
