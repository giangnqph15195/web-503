const {Router} = require('express')
const { listcard, addcard } = require('../controler/card')

const router = Router()


router.get("/api/card" , listcard)
router.post("/api/cards" , addcard)

module.exports = router