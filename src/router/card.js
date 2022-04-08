const {Router} = require('express')
const { listcard, addcard, listcards, removeCr, updateArray } = require('../controler/card')
const { updatecart } = require('../controler/order')

const router = Router()


router.get("/api/card" , listcard)
router.post("/api/cards" , addcard)
router.get('/api/cards/:user', listcards)
router.delete('/api/card/:id', removeCr)
router.put('/api/cards/update/:user', updateArray)


module.exports = router