const {Router} = require ('express')
const { signup, signin } = require('../controler/user')


const router = Router()

router.post("/api/signin", signin)
router.post("/api/signup", signup)


module.exports = router