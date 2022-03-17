import Products from "../models/produts"
import slugify from "slugify"

export const getAll = async (req, res)=> {
    try {
        const products = await Products.find().exec()
        res.json(products)
    } catch (error) {
        
    }

    // const products= [{id:1, name:"Product A"},{id:2, name:"Product B"},]
    // res.json(products)
}
export const get = async (req, res)=> {
    try {
        const result = await Products.findOne({_id: req.params.id }).exec();
        res.json(result)
    } catch (error) {
        
    }
}

export const create = async (req,res)=>{
    req.body.slug = slugify(req.body.name)
   try {
        const product = await new Products(req.body).save()
        res.json(product)
   } catch (error) {
       
   }
    
}

export const remove = async (req,res)=>{
   try {
        const deletePd = await Products.findOneAndDelete({_id: req.params.id}).exec()
        res.json(deletePd)
   } catch (error) {
       
   }
}

export const update = async (req,res)=>{
    try {
        const newPd = await Products.findByIdAndUpdate({_id:req.params.id}, req.body,{new:true}).exec()
        res.json(newPd)
    } catch (error) {
        
    }
}