import express from "express";
import 'dotenv/config'
import cors from 'cors'
import http from "http"
import { ceed } from "./Services/ceedService";
import userController from "./Controllers/userController";
import { Server } from "socket.io";
import { handelSocketConnection } from "./socket/io";
import { ceedRouter } from "./Routes/ceedRouter";
import { connectToMonge } from "./DB/config";


const PORT = process.env.PORT || 3333
const app = express()
const httpServer = http.createServer(app)
export const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: "*",
  },
});
connectToMonge()
io.on("connection", handelSocketConnection)

app.use(express.json())
app.use(cors())

app.use(`/ceed`, ceedRouter)
app.use(`/users`, userController)

httpServer.listen(PORT, () => { console.log(`server started on port ${PORT}`) })