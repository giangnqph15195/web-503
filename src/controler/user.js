import User from "../models/user";
import jwt from 'jsonwebtoken'

export const Signin = async (req,res) =>{
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
        const token = jwt.sign({email}, '123456', {expiresIn: 60 * 60})
        res.json({
            token,
            user: {
                _id: user._id,
                name:user.name,
                email:user.email,
                password:user.hash_pass
            }
        })
        
    } catch (error) {
        
    }
}

export const Signup = async (req, res) =>{
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