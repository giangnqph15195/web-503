import Card from "../models/card"
// import User from "../models/user"
import Products from '../models/produts'

export const listcard = async (req, res) => {
    try {
        const ListCard = await Card.find().exec()
        res.json(ListCard)
    } catch (error) {
        
    }
}

export const addcard = async (req,res) => {
    try {
        const Addcard = await new Card(req.body).save()
        res.json(Addcard)

    } catch (error) {
        
    }
}

export const listcards = async (req, res) => {
    try {
        const user = await Card.find({user : req.params.user}).exec()
        // const products = await Products.find({_id: user}).populate('product').select().exec()
        res.json(user)
    } catch (error) {
        
    }
}

export const removeCr = async (req, res) =>{
    try {
        const remove = await Card.findOneAndDelete({_id:req.params.id}).exec()
        res.json(remove)
    } catch (error) {
        
    }
}