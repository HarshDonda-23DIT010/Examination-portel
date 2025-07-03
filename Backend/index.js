import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { connectionDb } from './db/db.js'
dotenv.config()

const app = express()


// Middlewares
app.use(cors({
    origin : '*',
    methods : ['GET','POST','PUT','DELETE','PATCH'] ,
    credentials:true,
}))

app.use(express.json())
app.use(express.urlencoded({extended :true}))
app.use(cookieParser())

// routes


// server
const port  = process.env.PORT
app.listen(port , ()=>{
        connectionDb();
        console.log(`Server running at port :${port}`);
})

app.get('/' , (req,res) => {
        res.send("<h1>HELLO WORLD</h1>")
})





