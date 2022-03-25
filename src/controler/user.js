import User from "../models/user";

export const Signin = async (req,res) =>{
    try {
        const {name, email , hash_pass} = req.body
        const user = await User.findOne().exec()
        res.json(user)
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