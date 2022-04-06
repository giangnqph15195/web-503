const {Router} = require('express')
const { listorder, addorder, updatecart, updatenew } = require('../controler/order')

const router = Router()

// router.get("/api/orders", listorder)
// router.post("/api/order", addorder)
router.put("/api/order/:user", updatenew)



module.exports = router