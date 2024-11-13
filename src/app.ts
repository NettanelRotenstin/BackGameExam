import express from "express";
import 'dotenv/config'
import cors from 'cors'
import http from "http"
import { ceed } from "./Services/ceedService";


const PORT = process.env.PORT || 3333
const app = express()
 
app.use(express.json())
app.use(cors())

app.use(`/ceed`,ceed)
app.use(`/users`,userController)

app.listen(PORT, () => { console.log(`server started on port ${PORT}`) })