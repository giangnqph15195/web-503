const express = require("express")
const app = express()
const productsRouter = require('./router/products')
const categoryRouter = require('./router/category')
const UserRouter = require('./router/user')
const CardRouter = require('./router/card')
const SizeRouter = require('./router/size')
const OrderRouter = require('./router/order')
const cors  = require('cors')
import mongoose from 'mongoose'


app.use(express.json())
app.use(cors())

app.use("/", productsRouter)
app.use("/", categoryRouter)
app.use("/", UserRouter)
app.use("/", CardRouter )
app.use("/", SizeRouter )
app.use("/", OrderRouter)



mongoose.connect("mongodb://localhost:27017/nodejs")

const port = 3001;

app.listen(port,()=>{
    console.log(port)
})