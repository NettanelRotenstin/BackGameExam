import express from "express";
import 'dotenv/config'
import cors from 'cors'
import http from "http"


const PORT = process.env.PORT || 3333
const app = express()
 
app.use(express.json())
app.use(cors())

//app.use(`/api/users`,userController)
 

app.listen(PORT, () => { console.log(`server started on port ${PORT}`) })