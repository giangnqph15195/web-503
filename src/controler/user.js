import User from "../models/user";
import jwt from 'jsonwebtoken'

export const signin = async (req,res) =>{
    try {
        const {email , password} = req.body
        const user = await User.findOne({email}).exec()
        if(!user){
            res.status(401).json({
                message: "Tai khoan khong ton tai"
            })
        }
        if(!user.authenticate(password)){
            res.status(401).json({
                message: "Mat khau khong dung"
            })
        }
        const token = jwt.sign({_id: user._id}, '123456', {expiresIn: 60 * 60})
        res.json({
            token,
            user: {
                _id: user._id,
                name:user.name,
                email:user.email, 
                role:user.role
            }
        })
        
    } catch (error) {
        
    }
}

export const signup = async (req, res) =>{
    const {name, email , password} = req.body;
    try {
        const Check = await User.findOne({email}).exec()
        if(Check){
            res.json({
                message: "Email da ton tai"
            })
        }else{
            const user = await new User({name, email, password}).save()
            res.json({
                user: {
                    _id: user._id,
                    name:user.name,
                    email:user.email,
                    password:user.hash_pass
                }
            })
        }
    } catch (error) {
        
    }
}
export const adduser = async (req, res) =>{
    const {name, email , password, role} = req.body;
    try {
        const Check = await User.findOne({email}).exec()
        if(Check){
            res.json({
                message: "Email da ton tai"
            })
        }else{
            const user = await new User({name, email, password, role}).save()
            res.json({
                user: {
                    _id: user._id,
                    name:user.name,
                    email:user.email,
                    role:user.role
                }
            })
        }
    } catch (error) {
        
    }
}

export const list = async (req, res) =>{
    const user = await User.find().exec()
    res.json(user)
}
export const editer = async (req, res) =>{
    try {
        const user = await User.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}).exec()
        res.json(user)
    } catch (error) {
        
    }
}
export const removeuser = async (req,res) => {
    try {
        const remove = await User.findOneAndDelete({_id:req.params.id}).exec()
        res.json(remove)
    } catch (error) {
        
    }
}
export const findone = async (req,res) => {
    try {
        const getone = await User.findOne({_id:req.params.id}).exec()
        res.json(getone)
    } catch (error) {
        
    }
}