const {Router} = require ('express')
const { signup, signin, list } = require('../controler/user')


const router = Router()

router.post("/api/signin", signin)
router.post("/api/signup", signup)
router.get("/api/users", list)



module.exports = router