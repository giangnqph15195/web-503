import res from "express/lib/response";
import Category from "../models/category";
import slugify from "slugify";
import Products from "../models/produts"

export const list = async (req, res) => {
    const ListCate = await Category.find().exec()
    res.json(ListCate)
}

export const add = async (req, res) => {
    req.body.slug = slugify(req.body.name)
   try {
    const AddCate = await new Category(req.body).save()
    res.json(AddCate)
   } catch (error) {
       
   }
}


export const read = async (req, res) => {
    try {
        const category = await Category.findOne({slug: req.params.slug}).exec()
        const products = await Products.find({category: category}).populate('category').select('-category').exec()
        res.json({
            category,products
        })
    } catch (error) {
        
    }
}