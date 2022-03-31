const {Router} = require ('express')
const { signup, signin, list, adduser, editer, removeuser, findone,  } = require('../controler/user')


const router = Router()

router.post("/api/signin", signin)
router.post("/api/signup", signup)
router.get("/api/users", list)
router.post('/api/user',adduser)
router.put('/api/user/:id/edit', editer)
router.delete('/api/user/:id/delete', removeuser)
router.get('/api/user/:id', findone)




module.exports = router