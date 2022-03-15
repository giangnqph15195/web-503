const express = require("express")
const app = express()
const productsRouter = require('./router/products')
import mongoose from 'mongoose'



app.use(express.json())

app.use("/", productsRouter)

mongoose.connect("mongodb://localhost:27017/nodejs")

const port = 3001;

app.listen(port,()=>{
    console.log(port)
})