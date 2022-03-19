import User from "../models/user";

export const List = async (req,res) =>{
    try {
        const user = await User.find().exec()
        res.json(user)
    } catch (error) {
        
    }
}

export const Add = async (req, res) =>{
    try {
        const user = await new User(req.body).save()
        res.json(user)
    } catch (error) {
        
    }
}