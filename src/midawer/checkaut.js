import expressJWT from 'express-jwt'
export const requiredSingin = expressJWT({
    secret: "123456",
    algorithms:["HS256"],
    requestProperty: "abc                                   "
})
export const Auth = (req,res,next) =>{
    console.log(req.abc)
}