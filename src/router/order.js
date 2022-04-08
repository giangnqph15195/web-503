const {Router} = require('express')
const { listorder, addorder, updatecart, updatenew, listdeltail, infodetail } = require('../controler/order')

const router = Router()

router.get("/api/orders", listorder)
router.post("/api/order", addorder)
router.put("/api/order/:user", updatenew)
router.get("/api/orders/:id", listdeltail)
router.get("/api/orderss/:id", infodetail)





module.exports = router