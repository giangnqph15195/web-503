import Order from '../models/order'
import Cart from '../models/card'

export const listorder = async (req, res) => {
    const Listorder = await Order.find().exec()
    res.json(Listorder)
 }

 export const addorder = async (req, res) => {
     const Add = await new Order(req.body).save()
     res.json(Add)
 }
 export const infodetail = async (req, res) => {
    const order = await Order.findOne({_id:req.params.id})
    res.json(order)
 }
 export const listdeltail = async (req, res) => {
    const order = await Order.findOne({_id:req.params.id})
     const cart = await Cart.find({order: order}).populate('order').select('order').exec()
     res.json(
        //  order,
         cart
     )
    // const Add = await new Order(req.body).save()
    // const updatenew = await Cart.updateMany({user: req.params.user}, req.body, {new:true}).exec()
    // res.json(Add, updatenew)
}

export const updatenew = async (req, res) => {
    const Updatenew = await Cart.updateOne({user: req.params.user}, Add._id, {new:true}).exec()
    res.json(Updatenew)
}