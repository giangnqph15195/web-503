import User from '../models/user'

export const UserById = async (req, res , next , id)=>{
    try {
        const user = await User.findById(id).exec();
        if(!user){
            return res.status(400).json({
                message: "Không tìm thấy User"
            })
        }
        req.profile = user,
        // req.profile.password = undefined;
        next()
    } catch (error) {
        res.status(400).json({
            message: "user không tồn tại"
        })
    }
}