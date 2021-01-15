import express from 'express'
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from 'body-parser'
import todoRoutes from './routes'
import { Console, error } from 'console';

const app=express();
const PORT = 5000
app.use(cors())
app.use(bodyParser.json()) 
app.use(todoRoutes)

//const url="mongodb+srv://Amal:Password@123@todocluster.fmbuo.mongodb.net/TodoDb?retryWrites=true&w=majority"
const options={
    useNewUrlParser: true, 
    useUnifiedTopology: true
}

mongoose.connect('mongodb+srv://amaljoseph:amaljoseph@123@todocluster.fmbuo.mongodb.net/TodoDb?retryWrites=true&w=majority',options).then(
    ()=>app.listen(PORT,()=>
    console.log(`server running on http://localhost:${PORT}`)
    )
 ).catch(error =>{
     throw error
 })

