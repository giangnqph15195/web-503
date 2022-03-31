import res from "express/lib/response";
import Category from "../models/category";
import slugify from "slugify";
import Products from "../models/produts"

export const getall = async (req, res) => {
    const ListCate = await Category.find().exec()
    res.json(ListCate)
}
export const get = async (req, res) => {
    const Cate = await Category.findOne({_id: req.params.id}).exec()
    res.json(Cate)
}

export const add = async (req, res) => {
    req.body.slug = slugify(req.body.name)
   try {
    const AddCate = await new Category(req.body).save()
    res.json(AddCate)
   } catch (error) {
       
   }
}
export const edit = async (req, res) => {
    req.body.slug = slugify(req.body.name)
   try {
    const newCT = await Category.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true})
    res.json(newCT)
   } catch (error) {
       
   }
}


export const read = async (req, res) => {
    try {
        const category = await Category.findOne({slug: req.params.slug}).exec()
        // console.log(category)
        const products = await Products.find({category: category}).populate('category').select('-category').exec() 
        res.json({
            // category,
            products
        })
    } catch (error) {
        
    }
}

export const removect = async (req, res) => {
    const RemoveCT = await Category.findOneAndDelete({_id:req.params.id}).exec()
    res.json(RemoveCT)
}