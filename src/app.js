const express = require("express")
const app = express()
const productsRouter = require('./router/products')
const categoryRouter = require('./router/category')
const cors  = require('cors')
import mongoose from 'mongoose'


app.use(express.json())
app.use(cors())

app.use("/", productsRouter,categoryRouter)


mongoose.connect("mongodb://localhost:27017/nodejs")

const port = 3001;

app.listen(port,()=>{
    console.log(port)
})