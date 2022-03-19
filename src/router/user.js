const {Router} = require ('express')
const { List, Add } = require('../controler/user')


const router = Router()

router.get("/api/users", List)
router.post("/api/user", Add)


module.exports = router