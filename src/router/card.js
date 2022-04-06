const {Router} = require('express')
const { listcard, addcard, listcards, removeCr } = require('../controler/card')
const { updatecart } = require('../controler/order')

const router = Router()


router.get("/api/card" , listcard)
router.post("/api/cards" , addcard)
router.get('/api/cards/:user', listcards)
router.delete('/api/card/:id', removeCr)
// router.delete('/api/card/update', updatecart)


module.exports = router