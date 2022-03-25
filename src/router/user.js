const {Router} = require ('express')
const { Signup, Signin } = require('../controler/user')


const router = Router()

router.get("/api/users", Signin)
router.post("/api/user", Signup)


module.exports = router