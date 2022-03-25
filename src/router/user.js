const {Router} = require ('express')
const { Signup, Signin } = require('../controler/user')


const router = Router()

router.post("/api/signin", Signin)
router.post("/api/signup", Signup)


module.exports = router