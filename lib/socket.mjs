import { createContext } from 'react'
import { io } from 'socket.io-client'
const socket = io('https://3000-jayke770-teamdaomarketp-z3p5700y2f7.ws-us54.gitpod.io')
const socketContext = createContext(socket)
export default socketContext