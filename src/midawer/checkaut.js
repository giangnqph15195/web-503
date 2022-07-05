import expressJWT from 'express-jwt'

export const requireSignin = expressJWT({
    secret: "123456",
    algorithms:["HS256"],
    requestProperty: "auth" //req.auth
});
export const Auth = (req,res,next) =>{
    console.log(req.auth)
    console.log(req.profile)
    const status = req.profile._id == req.auth._id;
    if(!status){
        return res.status(400).json({
            message: "Bạn không được phép truy cập"
        })
    }
    next();
    // console.log(req.pro)
}

export  const Admin = (req, res , next) => {
    if(req.profile.role === 1){
        res.status(401).json({
            message: "Bạn không phải là admin"
        })
    }
    next();
}