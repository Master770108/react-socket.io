import express from 'express'
import next from 'next'
import { createServer } from 'http'
import { Server } from 'socket.io'
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
app.prepare().then(() => {
    const server = express()
    const httpServer = createServer(server)
    const ws = new Server(httpServer, {})
    //websocket
    ws.on('connection', async (socket) => {
        console.log("New User Connected", socket.id)
    })

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    httpServer.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`)
    })
})