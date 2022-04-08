const {Router} = require('express')
const { listorder, addorder, updatecart, updatenew, listdeltail, infodetail, updatestatus, listorderweb } = require('../controler/order')

const router = Router()

router.get("/api/orders", listorder)
router.get("/api/ordersweb/:user", listorderweb)
router.post("/api/order", addorder)
router.put("/api/order/:user", updatenew)
router.put("/api/order/:id/update", updatestatus)
router.get("/api/orders/:id", listdeltail)
router.get("/api/orderss/:id", infodetail)





module.exports = router